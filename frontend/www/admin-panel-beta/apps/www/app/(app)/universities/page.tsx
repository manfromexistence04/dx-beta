"use client"

import React, { ReactNode, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { redirect, useRouter } from "next/navigation"
import type { UploadedFile } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { wrap } from "@motionone/utils"
import { Button as NextuiButton } from "@nextui-org/react"
import { HeartFilledIcon, ImageIcon } from "@radix-ui/react-icons"
import { CommentsProvider } from "@udecode/plate-comments"
import { Plate } from "@udecode/plate-common"
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph"
import { cva, type VariantProps } from "class-variance-authority"
import Autoplay from "embla-carousel-autoplay"
import { Tag, TagInput } from "emblor"
import { initializeApp } from "firebase/app"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  query,
  startAfter,
  updateDoc,
} from "firebase/firestore"
import {
  AnimatePresence,
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronsUpDown,
  CloudUpload,
  File,
  GlobeIcon,
  Home,
  LineChart,
  ListFilter,
  Loader2,
  LocateIcon,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  Plus,
  PlusCircle,
  Projector,
  Search,
  Settings,
  ShoppingCart,
  Users2,
  X,
} from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { commentsUsers, myUserId } from "@/lib/plate/comments"
import { MENTIONABLES } from "@/lib/plate/mentionables"
import { plugins } from "@/lib/plate/plate-plugins"
import { useDropdownStore } from "@/lib/store/dropdown"
import { useUniversityImages } from "@/lib/store/university-images"
import { cn } from "@/lib/utils"
import { useUploadFile as useUploadImages } from "@/hooks/use-upload-file"
import { useUploadFile as useUploadLogo } from "@/hooks/use-upload-logo"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button as AnimatedButton } from "@/components/button"
import { Code } from "@/components/code"
import CountryDropdown from "@/components/dropdown/countries"
import StateDropdown from "@/components/dropdown/states"
import { EmptyCard } from "@/components/empty-card"
import { FileUploader } from "@/components/file-uploader"
import { getPhoneData, PhoneInput } from "@/components/phone-input"
import { CommentsPopover } from "@/components/plate-ui/comments-popover"
import { CursorOverlay } from "@/components/plate-ui/cursor-overlay"
import { Editor } from "@/components/plate-ui/editor"
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar"
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons"
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar"
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons"
import { MentionCombobox } from "@/components/plate-ui/mention-combobox"
import { ToastAction } from "@/registry/default//ui/toast"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/default/ui/form"
import { useToast } from "@/registry/default/ui/use-toast"

// Firebase Configurations
const firebaseConfig = {
  apiKey: "AIzaSyAj8jpnqU9Xo1YXVFJh-wCdulweO5z--H8",
  authDomain: "ustudy-96678.firebaseapp.com",
  projectId: "ustudy-96678",
  storageBucket: "ustudy-96678.appspot.com",
  messagingSenderId: "581632635532",
  appId: "1:581632635532:web:51ccda7d7adce6689a81a9",
}
const app = initializeApp(firebaseConfig)
const db: any = getFirestore(app)

const University = () => {
  const [docs, setDocs] = useState<any[]>([])
  const [lastDoc, setLastDoc] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const {
    uploadImages,
    imagesUploadingProgress,
    uploadedImages,
    isImagesUploading,
  } = useUploadImages("imageUploader", { defaultUploadedFiles: [] })
  const { uploadLogo, logoUploadprogresses, isLogoUploading, uploadedLogo } =
    useUploadLogo("imageUploader", { defaultUploadedFiles: [] })
  const { toast } = useToast()
  const router = useRouter()
  const {
    countryValue,
    stateValue,
    openStateDropdown,
    setOpenStateDropdown,
    setStateValue,
  } = useDropdownStore()
  const { images } = useUniversityImages()
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const handleConfetti = async () => {
    const { clientWidth, clientHeight } = document.documentElement
    const boundingBox = buttonRef.current?.getBoundingClientRect?.()
    const targetY = boundingBox?.y ?? 0
    const targetX = boundingBox?.x ?? 0
    const targetWidth = boundingBox?.width ?? 0
    const targetCenterX = targetX + targetWidth / 2
    const confetti = (await import("canvas-confetti")).default
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 70,
      origin: {
        y: targetY / clientHeight,
        x: targetCenterX / clientWidth,
      },
    })
    setSheetToggle(!sheetToggle)
  }
  const [inputedValues, setInputedValues] = React.useState(false)
  const [sheetToggle, setSheetToggle] = React.useState(false)
  const [createButtonDisabled, setCreateButtonDisabled] = React.useState(true)
  const [isOpen, setIsOpen] = React.useState(false)
  const [phoneNumberDetails, setPhoneNumberDetails] = React.useState(false)
  const containerRef = useRef(null)
  const initialValue = [
    {
      id: "1",
      type: ELEMENT_PARAGRAPH,
      children: [{ text: "Hello, World!" }],
    },
  ]
  const [phone, setPhone] = React.useState("+1 (408) 996–1010")
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }
  const phoneData = getPhoneData(phone)
  function showPhoneNumberDetails() {
    setPhoneNumberDetails(!phoneNumberDetails)
  }
  const [inputedName, setInputedName] = React.useState("")
  const [inputedEmail, setInputedEmail] = React.useState("")
  const [inputedStatus, setInputedStatus] = React.useState("")
  const [inputedFacebook, setInputedFacebook] = React.useState("")
  const [inputedInstragam, setInputedInstragam] = React.useState("")
  const [inputedCost, setInputedCost] = React.useState("")
  const [inputedWebsite, setInputedWebsite] = React.useState("")
  const [inputedCode, setInputedCode] = React.useState("")
  const [inputedHostel, setInputedHostel] = React.useState("")
  const [inputedMilitary, setInputedMilitary] = React.useState("")
  const [inputedPhoneNumber, setInputedPhoneNumber] = React.useState(phone)
  const [inputedLogo, setInputedLogo] = React.useState("")
  const [inputedAddress, setInputedAddress] = React.useState(stateValue)
  const [inputedRegion, setInputedRegion] = React.useState(countryValue)
  const [inputedDescription, setInputedDescription] = React.useState("")
  const [inputedImages, setInputedImages] = React.useState([])
  const [inputedImage, setInputedImage] = React.useState("")
  const handleNameChange = (event: any) => {
    setInputedName(event.target.value)
  }
  const handleEmailChange = (event: any) => {
    setInputedEmail(event.target.value)
  }
  const handleStatusChange = (event: any) => {
    setInputedStatus(event)
  }
  const handleFacebookChange = (event: any) => {
    setInputedFacebook(event.target.value)
  }

  const handleImageChange = (event: any) => {
    setInputedImage(event.target.value)
  }
  const handleLogoChange = (event: any) => {
    setInputedLogo(event.target.value)
  }

  const handleInstagramChange = (event: any) => {
    setInputedInstragam(event.target.value)
  }
  const handleCostChange = (event: any) => {
    setInputedCost(event.target.value)
  }
  const handleWebsiteChange = (event: any) => {
    setInputedWebsite(event.target.value)
  }
  const handleCodeChange = (event: any) => {
    setInputedCode(event.target.value)
  }
  const handleHostelChange = (event: any) => {
    setInputedHostel(event)
  }
  const handleMilitaryChange = (event: any) => {
    setInputedMilitary(event)
  }
  const handleDescriptionChange = (event: any) => {
    setInputedDescription(event.target.value)
  }
  const syncImagesAndLogo = () => {
    const newArray2: any = uploadedImages.map((file) => file.url)
    setInputedImages(newArray2)
    uploadedLogo.map((file: any) => {
      setInputedLogo(file.url)
      return null
    })
    setCreateButtonDisabled(!createButtonDisabled)
  }
  const handleInputedValues = () => {
    setInputedValues(!inputedValues)
  }
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  // This page
  React.useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  useEffect(() => {
    const fetchDocs = async () => {
      setLoading(true)
      const q = query(collection(db, "universities"), limit(8))
      const querySnapshot = await getDocs(q)
      const newDocs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setDocs(newDocs)
      // Configuring Data for Update:
      docs.map((item: any) => {
        setInputedAddress(item.address)
        setInputedCost(item.educationCost)
        setInputedEmail(item.email)
        setInputedFacebook(item.facebook)
        setInputedHostel(item.hostel)
        setInputedImages(item.images)
        setInputedImage(item.image)
        setInputedInstragam(item.instagram)
        setInputedMilitary(item.military)
        setInputedPhoneNumber(item.phoneNumber)
        setInputedRegion(item.region)
        setInputedStatus(item.status)
        setInputedCode(item.universityCode)
        setInputedDescription(item.universityDescription)
        setInputedName(item.universityName)
        setInputedWebsite(item.website)
        setInputedLogo(item.logo)
      })
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1])
      setLoading(false)
    }
    fetchDocs()
  }, [])

  const loadMore = async () => {
    setLoading(true)
    const q = query(
      collection(db, "universities"),
      startAfter(lastDoc),
      limit(8)
    )
    const querySnapshot = await getDocs(q)
    if (querySnapshot.docs.length === 0) {
      toast({
        title: "There is no more data in the database.",
        description: (
          <div className="mt-2 w-[340px] rounded-md bg-primary-foreground p-4">
            <span>Please add more data to load more!</span>
          </div>
        ),
      })
      setLoading(false)
      return
    }
    const newDocs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    setDocs([...docs, ...newDocs])
    setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1])
    setLoading(false)
  }

  if (loading) {
    return (
      <main className="h-auto w-full px-[5%] py-5">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-display text-center text-lg font-bold tracking-[-0.02em] drop-shadow-sm md:text-3xl md:leading-[5rem]">
            Universities
          </span>
        </div>
        <div className="admin-panel-lists-loading place-content-center">
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
        </div>
      </main>
    )
  }

  const descriptionResult = (theObject: any) => {
    theObject.forEach((itemParent: any) => {
      itemParent.children.forEach((child: any) => {
        console.log(child.text)
      })
    })
  }

  return (
    <main className="mb-10 h-auto w-full px-[5%] py-5">
      <div className="mb-6 flex items-center justify-between">
        <span className="font-display text-center text-lg font-bold tracking-[-0.02em] drop-shadow-sm md:text-3xl md:leading-[5rem]">
          Universities
        </span>
        <Link href="/create-university">
          <Button size="sm">Add New University</Button>
        </Link>
      </div>
      <div className="admin-panel-lists place-content-center">
        {docs.map((items) => (
          <div key={items.id}>
            <Card className="hover-glow-border relative flex size-full flex-col hover:bg-primary-foreground">
              <div className="min-h-auto relative flex w-full flex-col items-center justify-center">
                <Carousel
                  plugins={[plugin.current]}
                  setApi={setApi}
                  className="!min-h-min w-full"
                  onMouseEnter={plugin.current.stop}
                  onMouseLeave={plugin.current.reset}
                >
                  <CarouselContent>
                    {items.images && items.images.length > 0
                      ? items.images.map((index: any) => (
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <Card>
                                <CardContent className="flex size-full items-center justify-center !p-0 text-center ">
                                  <AspectRatio ratio={16 / 9} className="">
                                    <Image
                                      src={index || "/placeholder.svg"}
                                      alt="Images"
                                      fill
                                      sizes="(min-width: 250px) 300px, 100vw"
                                      loading="lazy"
                                      className="rounded-md object-cover"
                                    />
                                  </AspectRatio>
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                        ))
                      : items.image
                        ? Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                              <div className="p-1">
                                <Card>
                                  <CardContent className="flex size-full items-center justify-center !p-0 text-center ">
                                    <AspectRatio ratio={16 / 9} className="">
                                      <Image
                                        src={items.image || "/placeholder.svg"}
                                        alt="Image"
                                        fill
                                        sizes="(min-width: 250px) 300px, 100vw"
                                        loading="lazy"
                                        className="rounded-md object-cover"
                                      />
                                    </AspectRatio>
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))
                        : ""}
                  </CarouselContent>
                </Carousel>
              </div>
              {items.images && items.images.length > 0 ? (
                ""
              ) : items.image ? (
                ""
              ) : (
                <div className="center flex-1 rounded-md border">
                  No image is provided.
                </div>
              )}

              <div className="absolute bottom-4 left-4">
                <Avatar>
                  <AvatarImage src={items.logo} alt="@Ustudy" />
                  <AvatarFallback>UY</AvatarFallback>
                </Avatar>
              </div>
              <CardContent className="space-y-4 p-6">
                <div>
                  <h2 className="text-2xl font-bold">
                    {items.universityName ||
                      "No Name Provided for this university."}
                  </h2>
                  <div className="mt-3 flex items-center space-x-2 text-sm text-primary">
                    <LocateIcon className="size-4" />
                    <span>{items.address || "Nothing."}</span>
                    <Separator className="h-4" orientation="vertical" />
                    <GlobeIcon className="size-4" />
                    <span>{items.region || "Nothing."}</span>
                  </div>
                </div>
                {typeof items.universityDescription === "object" ? (
                  JSON.parse(items.universityDescription).map((item: any) => (
                    <div key={item.id}>
                      {item.children.map((child: any) => (
                        <p
                          className="text-overflow-clamp text-sm leading-relaxed text-muted-foreground"
                          key={child.text}
                        >
                          {child.text}
                        </p>
                      ))}
                    </div>
                  ))
                ) : (
                  <p className="text-overflow-clamp text-sm leading-relaxed text-muted-foreground">
                    {items.universityDescription ||
                      "No Description Provided for this university."}
                  </p>
                )}
              </CardContent>
              <CardFooter className="flex justify-end space-x-2 p-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">View</Button>
                  </DialogTrigger>
                  <DialogContent className="w-[55%] min-w-[300px] max-w-[750px]">
                    <ScrollArea className="!max-h-[80vh] w-full rounded-md border !p-0">
                      <div className="flex w-full flex-col gap-2 overflow-hidden rounded-lg p-3 text-sm">
                        <div className="mb-20 h-auto min-h-[350px] w-full rounded-md">
                          <Card className="hover-glow-border relative flex size-full flex-col hover:bg-primary-foreground">
                            <div className="min-h-auto relative flex w-full flex-col items-center justify-center">
                              <Carousel
                                plugins={[plugin.current]}
                                setApi={setApi}
                                className="!min-h-min w-full"
                                onMouseEnter={plugin.current.stop}
                                onMouseLeave={plugin.current.reset}
                              >
                                <CarouselContent>
                                  {items.images && items.images.length > 0
                                    ? items.images.map((index: any) => (
                                        <CarouselItem key={index}>
                                          <div className="p-1">
                                            <Card>
                                              <CardContent className="flex size-full items-center justify-center !p-0 text-center ">
                                                <AspectRatio
                                                  ratio={16 / 9}
                                                  className=""
                                                >
                                                  <Image
                                                    src={
                                                      index ||
                                                      "/placeholder.svg"
                                                    }
                                                    alt="Images"
                                                    fill
                                                    sizes="(min-width: 250px) 300px, 100vw"
                                                    loading="lazy"
                                                    className="rounded-md object-cover"
                                                  />
                                                </AspectRatio>
                                              </CardContent>
                                            </Card>
                                          </div>
                                        </CarouselItem>
                                      ))
                                    : items.image
                                      ? Array.from({ length: 5 }).map(
                                          (_, index) => (
                                            <CarouselItem key={index}>
                                              <div className="p-1">
                                                <Card>
                                                  <CardContent className="flex size-full items-center justify-center !p-0 text-center ">
                                                    <AspectRatio
                                                      ratio={16 / 9}
                                                      className=""
                                                    >
                                                      <Image
                                                        src={
                                                          items.image ||
                                                          "/placeholder.svg"
                                                        }
                                                        alt="Image"
                                                        fill
                                                        sizes="(min-width: 250px) 300px, 100vw"
                                                        loading="lazy"
                                                        className="rounded-md object-cover"
                                                      />
                                                    </AspectRatio>
                                                  </CardContent>
                                                </Card>
                                              </div>
                                            </CarouselItem>
                                          )
                                        )
                                      : ""}
                                </CarouselContent>
                                <div className="absolute bottom-[-75px] left-1/2 mx-auto flex h-16 w-full -translate-x-1/2 items-center justify-between rounded-2xl border px-5 text-sm text-muted-foreground">
                                  <CarouselPrevious className="!relative !left-0 !top-0 -translate-y-0 border border-accent-foreground !bg-transparent text-white hover:border-white hover:text-white" />
                                  <span className="flex-1 text-center text-white hover:accent-foreground">
                                    Slide {current} of {count}
                                  </span>
                                  <CarouselNext className="!relative !right-0 !top-0 -translate-y-0 border border-accent-foreground !bg-transparent  text-white hover:border-white hover:text-white" />
                                </div>
                              </Carousel>
                            </div>
                            {items.images && items.images.length > 0 ? (
                              ""
                            ) : items.image ? (
                              ""
                            ) : (
                              <div className="center flex-1 rounded-md border">
                                No image is provided.
                              </div>
                            )}

                            <div className="absolute bottom-4 left-4">
                              <Avatar>
                                <AvatarImage src={items.logo} alt="@Ustudy" />
                                <AvatarFallback>UY</AvatarFallback>
                              </Avatar>
                            </div>
                          </Card>
                        </div>
                        <Separator />

                        <div className="flex gap-2">
                          <p>Name: </p>
                          <span className="font-semibold">
                            {items.universityName || "No Name is Provided."}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <p>Email: </p>
                          <span className="font-semibold">
                            {items.email || "No Email is Provided."}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <p>Facebook: </p>
                          <span className="font-semibold">
                            {items.facebook || "No Facebook Link is Provided."}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <p>Instagram: </p>
                          <span className="font-semibold">
                            {items.instragam ||
                              "No Instagram Link is Provided."}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <p>Education Cost: </p>
                          <span className="font-semibold">
                            {items.educationCost ||
                              "No Education Cost is Provided."}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <p>Website: </p>
                          <span className="font-semibold">
                            {items.website || "No Website Link is Provided."}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <p>University Code: </p>
                          <span className="font-semibold">
                            {items.universityCode ||
                              "No University Code is Provided."}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <p>Phone Number: </p>
                          <span className="font-semibold">
                            {items.phoneNumbe || "No Phone Number is Provided."}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <p>Logo: </p>
                          <span className="font-semibold">
                            {items.logo || "No Logo is Provided."}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <p>Address: </p>
                          <span className="font-semibold">
                            {items.address || "No Address is Provided."}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <p>Region: </p>
                          <span className="font-semibold">
                            {items.region || "No Region is Provided."}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <p>Description: </p>
                          <span className="font-semibold">
                            {items.universityDescription ||
                              "No Description is Provided."}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <p>Images: </p>
                          <span className="font-semibold">
                            {JSON.stringify(items.images, null, 2) ||
                              "No Images are Provided."}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <p>Image: </p>
                          <span className="font-semibold">
                            {items.image || "No Image is Provided."}
                          </span>
                        </div>
                        <Separator />

                        <div className="flex gap-2">
                          <p>Hostel: </p>
                          <Badge
                            className={cn(
                              "w-fit text-center",
                              items.hostel
                                ? "bg-green-500 text-green-50"
                                : "bg-destructive text-destructive-foreground"
                            )}
                          >
                            {items.hostel || "No Hostel Information Provided."}
                          </Badge>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <p>Military: </p>
                          <Badge
                            className={cn(
                              "w-fit",
                              items.military
                                ? "bg-green-500 text-green-50"
                                : "bg-destructive text-destructive-foreground"
                            )}
                          >
                            {items.military || "No Military Status Provided."}
                          </Badge>
                        </div>
                        <Separator />
                        <div className="flex gap-2">
                          <p>Status: </p>
                          <Badge
                            className={cn(
                              "w-fit",
                              items.status
                                ? "bg-green-500 text-green-50"
                                : "bg-destructive text-destructive-foreground"
                            )}
                          >
                            {items.status || "No Status Provided."}
                          </Badge>
                        </div>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button onClick={handleConfetti} variant="default">
                      Update
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side={"bottom"}
                    className="mx-auto h-[90vh] !max-w-[1600px] rounded-xl"
                  >
                    <ScrollArea className="size-full rounded-md border">
                      <div className="create-university min-h-screen !min-w-full space-y-3 p-10 pt-3 lg:flex lg:!min-w-[1500px] lg:flex-col">
                        <div className="action my-3 hidden w-full items-center justify-between lg:flex ">
                          <div className="flex size-full items-start justify-start space-x-3">
                            <Link href="/universities" className="z-50">
                              <AnimatedButton
                                variant="expandIcon"
                                Icon={ArrowLeftIcon}
                                iconPlacement="left"
                                className="border border-input bg-background text-accent-foreground hover:bg-accent"
                              >
                                Back
                              </AnimatedButton>
                            </Link>
                            <AnimatedButton
                              onClick={handleInputedValues}
                              variant="expandIcon"
                              Icon={Projector}
                              iconPlacement="left"
                              className="border border-input bg-background text-accent-foreground hover:bg-accent"
                            >
                              {inputedValues ? "Hide" : "Show"} Inputed Values
                            </AnimatedButton>
                          </div>

                          <div className="flex size-full items-end justify-end space-x-3">
                            <AnimatedButton
                              onClick={syncImagesAndLogo}
                              variant="expandIcon"
                              Icon={CloudUpload}
                              iconPlacement="left"
                              className="border border-input bg-background text-accent-foreground hover:bg-accent"
                            >
                              Sync Uploaded Files
                            </AnimatedButton>
                            <Button
                              className="!py-0"
                              disabled={createButtonDisabled}
                              onClick={async () => {
                                const { clientWidth, clientHeight } =
                                  document.documentElement
                                const boundingBox =
                                  buttonRef.current?.getBoundingClientRect?.()
                                const targetY = boundingBox?.y ?? 0
                                const targetX = boundingBox?.x ?? 0
                                const targetWidth = boundingBox?.width ?? 0
                                const targetCenterX = targetX + targetWidth / 2
                                const confetti = (
                                  await import("canvas-confetti")
                                ).default
                                confetti({
                                  zIndex: 999,
                                  particleCount: 100,
                                  spread: 70,
                                  origin: {
                                    y: targetY / clientHeight,
                                    x: targetCenterX / clientWidth,
                                  },
                                })

                                const updateRef = doc(
                                  db,
                                  "universities",
                                  items.id
                                )
                                items.logo
                                  ? await updateDoc(updateRef, {
                                      address: stateValue || items.address,
                                      educationCost:
                                        inputedCost || items.educationCost,
                                      email: inputedEmail || items.email,
                                      facebook:
                                        inputedFacebook || items.facebook,
                                      hostel: inputedHostel || items.hostel,
                                      image: inputedImage || items.image,
                                      images: inputedImages || items.images,
                                      instagram:
                                        inputedInstragam || items.instagram,
                                      military:
                                        inputedMilitary || items.military,
                                      phoneNumber:
                                        inputedPhoneNumber || items.phoneNumber,
                                      region: countryValue || items.region,
                                      status: inputedStatus || items.status,
                                      universityCode:
                                        inputedCode || items.universityCode,
                                      universityDescription:
                                        inputedDescription ||
                                        items.universityDescription,
                                      universityName:
                                        inputedName || items.universityName,
                                      website: inputedWebsite || items.website,
                                      logo: inputedLogo || items.logo,
                                    })
                                  : await updateDoc(updateRef, {
                                      address: stateValue || items.address,
                                      educationCost:
                                        inputedCost || items.educationCost,
                                      email: inputedEmail || items.email,
                                      facebook:
                                        inputedFacebook || items.facebook,
                                      hostel: inputedHostel || items.hostel,
                                      image: inputedImage || items.image,
                                      images: inputedImages || items.images,
                                      instagram:
                                        inputedInstragam || items.instagram,
                                      military:
                                        inputedMilitary || items.military,
                                      phoneNumber:
                                        inputedPhoneNumber || items.phoneNumber,
                                      region: countryValue || items.region,
                                      status: inputedStatus || items.status,
                                      universityCode:
                                        inputedCode || items.universityCode,
                                      universityDescription:
                                        inputedDescription ||
                                        items.universityDescription,
                                      universityName:
                                        inputedName || items.universityName,
                                      website: inputedWebsite || items.website,
                                    })

                                toast({
                                  title:
                                    "University has been Updated Successfully.",
                                  description: (
                                    <div className="mt-2 w-[340px] rounded-md bg-primary-foreground p-4">
                                      <span>
                                        You Can now view and delete this
                                        university!
                                      </span>
                                      <pre className="max-h-[500px] overflow-auto bg-background"></pre>
                                    </div>
                                  ),
                                })
                                // Refresh The Page
                              }}
                            >
                              {createButtonDisabled && (
                                <Loader2 className="mr-2 size-4 animate-spin" />
                              )}
                              Update
                            </Button>
                          </div>
                        </div>
                        {inputedValues && (
                          <div className="div">
                            <div className="flex gap-2">
                              <p>Name: </p>
                              <span className="font-semibold">
                                {inputedName || "No Name is Provided."}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>Email: </p>
                              <span className="font-semibold">
                                {inputedEmail || "No Email is Provided."}
                              </span>
                            </div>

                            <Separator />
                            <div className="flex gap-2">
                              <p>Facebook: </p>
                              <span className="font-semibold">
                                {inputedFacebook ||
                                  "No Facebook Link is Provided."}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>Instagram: </p>
                              <span className="font-semibold">
                                {inputedInstragam ||
                                  "No Instagram Link is Provided."}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>Education Cost: </p>
                              <span className="font-semibold">
                                {inputedCost ||
                                  "No Education Cost is Provided."}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>Website: </p>
                              <span className="font-semibold">
                                {inputedWebsite ||
                                  "No Website Link is Provided."}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>University Code: </p>
                              <span className="font-semibold">
                                {inputedCode ||
                                  "No University Code is Provided."}
                              </span>
                            </div>
                            <Separator />

                            <div className="flex gap-2">
                              <p>Phone Number: </p>
                              <span className="font-semibold">
                                {phone || "No Phone Number is Provided."}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>Logo: </p>
                              <span className="font-semibold">
                                {inputedLogo || "No Logo is Provided."}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>Address: </p>
                              <span className="font-semibold">
                                {stateValue || "No Address is Provided."}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>Region: </p>
                              <span className="font-semibold">
                                {countryValue || "No Region is Provided."}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>Description: </p>
                              <span className="font-semibold">
                                {inputedDescription ||
                                  "No Description is Provided."}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>Images: </p>
                              <span className="font-semibold">
                                {JSON.stringify(inputedImages, null, 2) ||
                                  "No Images are Provided."}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>Image: </p>
                              <span className="font-semibold">
                                {inputedImage || "No Image is Provided."}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>Hostel: </p>
                              {
                                <Badge
                                  className={cn(
                                    "w-fit text-center",
                                    inputedHostel
                                      ? "bg-green-500 text-green-50"
                                      : "bg-destructive text-destructive-foreground"
                                  )}
                                >
                                  {inputedHostel ||
                                    "No Hostel Information Provided."}
                                </Badge>
                              }
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>Military: </p>
                              {
                                <Badge
                                  className={cn(
                                    "w-fit",
                                    inputedMilitary
                                      ? "bg-green-500 text-green-50"
                                      : "bg-destructive text-destructive-foreground"
                                  )}
                                >
                                  {inputedMilitary ||
                                    "No Military Status Provided."}
                                </Badge>
                              }
                            </div>

                            <Separator />
                            <div className="flex gap-2">
                              <p>Status: </p>
                              {
                                <Badge
                                  className={cn(
                                    "w-fit",
                                    inputedStatus
                                      ? "bg-green-500 text-green-50"
                                      : "bg-destructive text-destructive-foreground"
                                  )}
                                >
                                  {inputedStatus || "No Status Provided."}
                                </Badge>
                              }
                            </div>
                          </div>
                        )}
                        <div className="name-logo-description-university grid w-full gap-3 ">
                          <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
                            <h1 className="w-full text-left text-4xl font-bold">
                              Name
                            </h1>
                            <Input
                              onChange={handleNameChange}
                              type="text"
                              placeholder="Enter University Name"
                            />
                          </div>
                          <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
                            <h1 className="w-full text-left text-4xl font-bold">
                              Email
                            </h1>
                            <Input
                              onChange={handleEmailChange}
                              type="email"
                              placeholder="Enter University Name"
                            />
                          </div>
                          <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
                            <h1 className="w-full text-left text-4xl font-bold">
                              Status
                            </h1>
                            <Select onValueChange={handleStatusChange}>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>
                                    What is the operating method of this
                                    university?
                                  </SelectLabel>
                                  <Separator className="mb-1" />
                                  <SelectItem value="Non Profit">
                                    Non Profit
                                  </SelectItem>
                                  <SelectItem value="Public">Public</SelectItem>
                                  <SelectItem value="Liberal">
                                    Liberal
                                  </SelectItem>
                                  <SelectItem value="Community">
                                    Community
                                  </SelectItem>
                                  <SelectItem value="Community">
                                    Corporatized
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="tag-location-university grid h-auto w-full gap-3">
                          <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
                            <h1 className="w-full text-left text-4xl font-bold">
                              Phone Number
                            </h1>
                            <PhoneInput
                              className="!m-0 w-full !p-0"
                              value={phone}
                              onChange={handleOnChange}
                            />
                            <Button
                              onClick={showPhoneNumberDetails}
                              className="w-full"
                            >
                              {phoneNumberDetails ? "Hide" : "Show"} Phone
                              Number Details
                            </Button>
                          </div>
                          <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-start rounded-md border p-10 lg:flex-row">
                            <div className="leftLogo flex h-auto w-1/2 flex-col items-start justify-center space-y-3 lg:h-full">
                              <h1 className="w-auto text-left text-4xl font-bold">
                                Logo
                              </h1>
                              <div className="flex w-auto items-start justify-start">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="outline">
                                      Upload Logo
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="sm:mx-auto sm:max-w-[95%] lg:min-w-[750px] lg:max-w-[35%]">
                                    <FileUploader
                                      maxFiles={1}
                                      maxSize={4 * 1024 * 1024}
                                      progresses={logoUploadprogresses}
                                      onUpload={uploadLogo}
                                      disabled={isLogoUploading}
                                    />
                                    <Card className="hover-glow-border">
                                      <CardHeader>
                                        <CardTitle>Uploaded Logo</CardTitle>
                                        <CardDescription>
                                          View the uploaded logo here
                                        </CardDescription>
                                      </CardHeader>
                                      <CardContent>
                                        {uploadedLogo.length > 0 ? (
                                          <ScrollArea className="pb-4">
                                            <div className="flex w-max space-x-2.5">
                                              {uploadedLogo.map((file: any) => {
                                                return (
                                                  <div
                                                    key={file.key}
                                                    className="relative aspect-video w-64"
                                                  >
                                                    <Image
                                                      src={file.url}
                                                      alt={file.name}
                                                      fill
                                                      sizes="(min-width: 640px) 640px, 100vw"
                                                      loading="lazy"
                                                      className="rounded-md object-cover"
                                                    />
                                                    <span>{file.name}</span>
                                                  </div>
                                                )
                                              })}
                                            </div>
                                            <ScrollBar orientation="horizontal" />
                                          </ScrollArea>
                                        ) : (
                                          <EmptyCard
                                            title="No Logo uploaded"
                                            description="Upload logo to see it here"
                                            className="w-full"
                                          />
                                        )}
                                      </CardContent>
                                    </Card>
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </div>

                            <div className="RightLogoSide flex h-auto w-1/2 items-center justify-end lg:h-full">
                              {uploadedLogo.length > 0 ? (
                                <div className="flex size-full">
                                  {uploadedLogo.map((file: any) => {
                                    return (
                                      <div
                                        key={file.key}
                                        className="relative aspect-video size-full overflow-hidden"
                                      >
                                        <Image
                                          src={file.url}
                                          alt={file.name}
                                          fill
                                          sizes="(min-width: 100%) 100%, 50vw"
                                          loading="lazy"
                                          className="rounded-md object-cover"
                                        />
                                        {/* <span>{file.name}</span> */}
                                      </div>
                                    )
                                  })}
                                </div>
                              ) : (
                                <Card
                                  className={cn(
                                    "flex w-full flex-col items-center justify-center space-y-3 bg-transparent p-3"
                                  )}
                                >
                                  <div className="shrink-0 rounded-full border border-dashed p-4">
                                    <ImageIcon
                                      className="size-8 text-muted-foreground"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <div className="flex flex-col items-center text-center">
                                    <CardDescription>
                                      Uplaod Logo to see them here
                                    </CardDescription>
                                  </div>
                                </Card>
                              )}
                            </div>
                          </div>
                          <div className="hover-glow-border flex size-full flex-col items-start justify-center gap-3 rounded-md border p-10">
                            <h1 className="w-full text-left text-4xl font-bold">
                              Address & Region
                            </h1>
                            <div className="flex w-full flex-col items-start justify-start gap-3 lg:flex-col">
                              <CountryDropdown />
                              <StateDropdown />
                            </div>
                          </div>
                        </div>
                        {phoneNumberDetails && (
                          <div className="mx-auto flex w-max min-w-[99%] flex-col gap-2 rounded-lg border p-3 text-sm">
                            <div className="flex gap-2">
                              <p>Phone number: </p>
                              <span className="font-semibold">
                                {phoneData.phoneNumber || "-"}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>Country code: </p>
                              <span className="font-semibold">
                                {phoneData.countryCode || "-"}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>Country calling code: </p>
                              <span className="font-semibold">
                                {phoneData.countryCallingCode || "-"}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>National number: </p>
                              <span className="font-semibold">
                                {phoneData.nationalNumber || "-"}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>International number: </p>
                              <span className="font-semibold">
                                {phoneData.internationalNumber || "-"}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p>URI: </p>
                              <span className="font-semibold">
                                {phoneData.uri || "-"}
                              </span>
                            </div>
                            <Separator />
                            <div className="flex gap-2">
                              <p className="shrink-0">Possible countries: </p>
                              <span className="font-semibold">
                                {phoneData.possibleCountries || "-"}
                              </span>
                            </div>
                            <Separator />
                            <Badge
                              className={cn(
                                "w-fit",
                                phoneData.isValid
                                  ? "bg-green-500 text-green-50"
                                  : "bg-destructive text-destructive-foreground"
                              )}
                            >
                              VALID NUMBER
                            </Badge>
                            <Separator />
                            <Badge
                              className={cn(
                                "w-fit",
                                phoneData.isPossible
                                  ? "bg-green-500 text-green-50"
                                  : "bg-destructive text-destructive-foreground"
                              )}
                            >
                              POSSIBLE NUMBER
                            </Badge>
                          </div>
                        )}
                        <div className="hover-glow-border mx-auto flex h-auto w-full flex-col space-y-3 rounded-md border pt-3">
                          <h1 className="w-full pl-4 text-left text-4xl font-bold">
                            Description
                          </h1>
                          {/* <div className="w-full h-full border-t">
                            <DndProvider backend={HTML5Backend}>
                              <CommentsProvider users={commentsUsers} myUserId={myUserId}>
                                <Plate plugins={plugins} initialValue={initialValue} onChange={handleDescriptionChange}>
                                  <div
                                    ref={containerRef}
                                    className={cn(
                                      'relative',
                                      '[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4'
                                    )}
                                  >
                                    <FixedToolbar>
                                      <FixedToolbarButtons />
                                    </FixedToolbar>

                                    <Editor
                                      className="p-3 px-7 !min-h-[500px]"
                                      autoFocus
                                      focusRing={false}
                                      variant="ghost"
                                      size="md"

                                    />

                                    <MentionCombobox items={MENTIONABLES} />

                                    <CommentsPopover />

                                    <CursorOverlay containerRef={containerRef} />
                                  </div>
                                </Plate>
                              </CommentsProvider>
                            </DndProvider>
                          </div> */}
                          <Textarea
                            onChange={handleDescriptionChange}
                            className="min-h-[350px] w-full"
                            placeholder="Type your description here."
                          />
                        </div>
                        <div className="mx-auto h-auto min-h-[300px] w-full rounded-md border">
                          <div className="flex size-full flex-col space-y-4">
                            <h1 className="w-full pl-4 text-left text-4xl font-bold">
                              Images
                            </h1>
                            <div className="space-y-6">
                              <FileUploader
                                maxFiles={10}
                                maxSize={4 * 1024 * 1024}
                                progresses={imagesUploadingProgress}
                                onUpload={uploadImages}
                                disabled={isImagesUploading}
                              />
                              <Card className="hover-glow-border">
                                <CardHeader>
                                  <CardTitle>Uploaded images</CardTitle>
                                  <CardDescription>
                                    View the uploaded images here
                                  </CardDescription>
                                </CardHeader>
                                <CardContent>
                                  {uploadedImages.length > 0 ? (
                                    <ScrollArea className="pb-4">
                                      <div className="flex w-max space-x-2.5">
                                        {uploadedImages.map((file: any) => {
                                          // setInputedImages(file.url)
                                          return (
                                            <div
                                              key={file.key}
                                              className="relative aspect-video w-64"
                                            >
                                              <Image
                                                src={file.url}
                                                alt={file.name}
                                                fill
                                                sizes="(min-width: 640px) 640px, 100vw"
                                                loading="lazy"
                                                className="rounded-md object-cover"
                                              />
                                              <span>{file.name}</span>
                                            </div>
                                          )
                                        })}
                                      </div>
                                      <ScrollBar orientation="horizontal" />
                                    </ScrollArea>
                                  ) : (
                                    <ScrollArea className="pb-4">
                                      <div className="flex w-max space-x-2.5">
                                        <EmptyCard
                                          title="No images uploaded"
                                          description="Upload some images to see them here"
                                          className="w-full"
                                        />
                                      </div>
                                      <ScrollBar orientation="horizontal" />
                                    </ScrollArea>
                                  )}
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </div>
                        <div className="name-logo-description-university grid w-full gap-3 ">
                          <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
                            <h1 className="w-full text-left text-4xl font-bold">
                              Code
                            </h1>
                            <Input
                              onChange={handleCodeChange}
                              type="number"
                              placeholder="Enter University Code"
                            />
                          </div>
                          <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
                            <h1 className="w-full text-left text-4xl font-bold">
                              Hostel
                            </h1>
                            <Select onValueChange={handleHostelChange}>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a Hostel Availability" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>
                                    Is there is a hostel in this university?
                                  </SelectLabel>
                                  <Separator className="mb-1" />
                                  <SelectItem value="yes">Yes</SelectItem>
                                  <SelectItem value="no">No</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
                            <h1 className="w-full text-left text-4xl font-bold">
                              Military
                            </h1>
                            <Select onValueChange={handleMilitaryChange}>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a Military Campain" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>
                                    Are there is a military campain in this
                                    university?
                                  </SelectLabel>
                                  <Separator className="mb-1" />

                                  <SelectItem value="yes">Yes</SelectItem>
                                  <SelectItem value="no">No</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="name-logo-description-university grid w-full gap-3 ">
                          <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
                            <h1 className="w-full text-left text-4xl font-bold">
                              Facebook
                            </h1>
                            <Input
                              onChange={handleFacebookChange}
                              type="text"
                              placeholder="Enter University Facebook Link"
                            />
                          </div>
                          <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
                            <h1 className="w-full text-left text-4xl font-bold">
                              Instragam
                            </h1>
                            <Input
                              onChange={handleInstagramChange}
                              type="text"
                              placeholder="Enter University Instragam Link"
                            />
                          </div>
                          <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
                            <h1 className="w-full text-left text-4xl font-bold">
                              Website
                            </h1>
                            <Input
                              onChange={handleWebsiteChange}
                              type="text"
                              placeholder="Enter University Website Link"
                            />
                          </div>
                          <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
                            <h1 className="w-full text-left text-4xl font-bold">
                              Cost
                            </h1>
                            <Input
                              onChange={handleCostChange}
                              type="text"
                              placeholder="Enter University Website Link"
                            />
                          </div>
                        </div>
                        <Collapsible
                          open={isOpen}
                          onOpenChange={setIsOpen}
                          className="w-full space-y-2"
                        >
                          <div className="flex items-center justify-between space-x-4 px-4">
                            <h4 className="text-sm font-semibold">
                              Add Files Link
                            </h4>
                            <CollapsibleTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-9 p-0"
                              >
                                <ChevronsUpDown className="size-4" />
                                <span className="sr-only">Toggle</span>
                              </Button>
                            </CollapsibleTrigger>
                          </div>
                          <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
                            <h1 className="w-full text-left text-4xl font-bold">
                              Logo
                            </h1>
                            <Input
                              onChange={handleLogoChange}
                              type="text"
                              placeholder="Enter Logo Link"
                            />
                          </div>

                          <CollapsibleContent className="space-y-2">
                            <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
                              <h1 className="w-full text-left text-4xl font-bold">
                                Images
                              </h1>
                              <Input
                                onChange={handleImageChange}
                                type="text"
                                placeholder="Enter Images Link"
                              />
                            </div>
                          </CollapsibleContent>
                        </Collapsible>

                        <div className="action my-3 flex w-full flex-col items-start justify-start space-y-3 lg:hidden lg:space-y-0">
                          <Link href="/universities" className="z-50 w-full">
                            <AnimatedButton
                              variant="expandIcon"
                              Icon={ArrowLeftIcon}
                              iconPlacement="left"
                              className="!min-w-full border border-input bg-secondary text-accent-foreground hover:bg-accent lg:w-auto"
                            >
                              Back
                            </AnimatedButton>
                          </Link>
                          <AnimatedButton
                            onClick={handleInputedValues}
                            variant="expandIcon"
                            Icon={Projector}
                            iconPlacement="left"
                            className="w-full border border-input bg-background text-accent-foreground hover:bg-accent"
                          >
                            {inputedValues ? "Hide" : "Show"} Inputed Values
                          </AnimatedButton>
                          <AnimatedButton
                            onClick={syncImagesAndLogo}
                            variant="expandIcon"
                            Icon={CloudUpload}
                            iconPlacement="left"
                            className="w-full border border-input bg-background text-accent-foreground hover:bg-accent"
                          >
                            Sync Uploaded Files
                          </AnimatedButton>
                          <AnimatedButton
                            className="w-full !py-0"
                            disabled={createButtonDisabled}
                            onClick={async () => {
                              const { clientWidth, clientHeight } =
                                document.documentElement
                              const boundingBox =
                                buttonRef.current?.getBoundingClientRect?.()
                              const targetY = boundingBox?.y ?? 0
                              const targetX = boundingBox?.x ?? 0
                              const targetWidth = boundingBox?.width ?? 0
                              const targetCenterX = targetX + targetWidth / 2
                              const confetti = (await import("canvas-confetti"))
                                .default
                              confetti({
                                zIndex: 999,
                                particleCount: 100,
                                spread: 70,
                                origin: {
                                  y: targetY / clientHeight,
                                  x: targetCenterX / clientWidth,
                                },
                              })

                              const updateRef = doc(
                                db,
                                "universities",
                                items.id
                              )

                              items.logo
                                ? await updateDoc(updateRef, {
                                    address: stateValue || items.address,
                                    educationCost:
                                      inputedCost || items.educationCost,
                                    email: inputedEmail || items.email,
                                    facebook: inputedFacebook || items.facebook,
                                    hostel: inputedHostel || items.hostel,
                                    image: inputedImage || items.image,
                                    images: inputedImages || items.images,
                                    instagram:
                                      inputedInstragam || items.instagram,
                                    military: inputedMilitary || items.military,
                                    phoneNumber:
                                      inputedPhoneNumber || items.phoneNumber,
                                    region: countryValue || items.region,
                                    status: inputedStatus || items.status,
                                    universityCode:
                                      inputedCode || items.universityCode,
                                    universityDescription:
                                      inputedDescription ||
                                      items.universityDescription,
                                    universityName:
                                      inputedName || items.universityName,
                                    website: inputedWebsite || items.website,
                                    logo: inputedLogo || items.logo,
                                  })
                                : await updateDoc(updateRef, {
                                    address: stateValue || items.address,
                                    educationCost:
                                      inputedCost || items.educationCost,
                                    email: inputedEmail || items.email,
                                    facebook: inputedFacebook || items.facebook,
                                    hostel: inputedHostel || items.hostel,
                                    image: inputedImage || items.image,
                                    images: inputedImages || items.images,
                                    instagram:
                                      inputedInstragam || items.instagram,
                                    military: inputedMilitary || items.military,
                                    phoneNumber:
                                      inputedPhoneNumber || items.phoneNumber,
                                    region: countryValue || items.region,
                                    status: inputedStatus || items.status,
                                    universityCode:
                                      inputedCode || items.universityCode,
                                    universityDescription:
                                      inputedDescription ||
                                      items.universityDescription,
                                    universityName:
                                      inputedName || items.universityName,
                                    website: inputedWebsite || items.website,
                                  })

                              toast({
                                title:
                                  "University has been Updated Successfully.",
                                description: (
                                  <div className="mt-2 w-[340px] rounded-md bg-primary-foreground p-4">
                                    <span>
                                      You Can now view and delete this
                                      university!
                                    </span>
                                    <pre className="max-h-[500px] overflow-auto bg-background"></pre>
                                  </div>
                                ),
                              })

                              // Refresh The Page
                            }}
                          >
                            {createButtonDisabled && (
                              <Loader2 className="mr-2 size-4 animate-spin" />
                            )}
                            Update
                          </AnimatedButton>
                        </div>
                      </div>
                    </ScrollArea>
                  </SheetContent>
                </Sheet>

                <Button
                  onClick={async () => {
                    await deleteDoc(doc(db, "universities", items.id))
                    const newDocs = docs.filter((item) => item.id !== items.id)
                    setDocs(newDocs)
                  }}
                  className="bg-red-500 text-white hover:bg-red-600"
                  variant="destructive"
                >
                  Delete
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <Button
        variant={"outline"}
        className="mt-5 w-full"
        onClick={loadMore}
        disabled={loading}
      >
        Load More
      </Button>
    </main>
  )
}

export default University
