"use client"

import { initializeApp } from "firebase/app";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, getFirestore, doc, getDoc, startAfter } from "firebase/firestore";
import { useEffect, useRef } from "react";
import { limit, query, onSnapshot } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAj8jpnqU9Xo1YXVFJh-wCdulweO5z--H8",
    authDomain: "ustudy-96678.firebaseapp.com",
    projectId: "ustudy-96678",
    storageBucket: "ustudy-96678.appspot.com",
    messagingSenderId: "581632635532",
    appId: "1:581632635532:web:51ccda7d7adce6689a81a9"
};
// Iniialize Firebase
const app = initializeApp(firebaseConfig);
// Database
const db: any = getFirestore(app);
import Image from "next/image"
import Link from "next/link"
import {
    File,
    GlobeIcon,
    Home,
    LineChart,
    ListFilter,
    LocateIcon,
    MoreHorizontal,
    Package,
    Package2,
    PanelLeft,
    PlusCircle,
    Search,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
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
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import React, { ReactNode, useState } from "react";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { wrap } from "@motionone/utils";
import {
    motion,
    AnimatePresence,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { Separator } from "@/components/ui/separator"
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils";
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
import { ImageIcon } from "@radix-ui/react-icons"
import { Button as AnimatedButton } from "@/components/button"
import { Textarea } from "@/components/ui/textarea"
import { DialogUploaderDemo } from "../_components/dialog-uploader-demo"
import CountryDropdown from "@/components/dropdown/countries";
import StateDropdown from "@/components/dropdown/states";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastAction } from "@/registry/default//ui/toast"
import { useToast } from "@/registry/default/ui/use-toast"
import { Tag, TagInput } from 'emblor';
import { CommentsProvider } from '@udecode/plate-comments';
import { Plate } from '@udecode/plate-common';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { commentsUsers, myUserId } from '@/lib/plate/comments';
import { MENTIONABLES } from '@/lib/plate/mentionables';
import { plugins } from '@/lib/plate/plate-plugins';
import { CommentsPopover } from '@/components/plate-ui/comments-popover';
import { CursorOverlay } from '@/components/plate-ui/cursor-overlay';
import { Editor } from '@/components/plate-ui/editor';
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import { MentionCombobox } from '@/components/plate-ui/mention-combobox';
import { ArrowRightIcon, ArrowLeftIcon, ChevronsUpDown, Plus, X, Projector, CloudUpload, Loader2 } from "lucide-react"
import { Code } from "@/components/code";
import { PhoneInput, getPhoneData } from "@/components/phone-input";
import { Badge } from "@/components/ui/badge";
import { useDropdownStore } from "@/lib/store/dropdown";
import { useUploadFile as useUploadImages } from "@/hooks/use-upload-file"
import { useUploadFile as useUploadLogo } from "@/hooks/use-upload-logo"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/registry/default/ui/form';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button as NextuiButton } from "@nextui-org/react";
import { cva, type VariantProps } from "class-variance-authority"
import { FileUploader } from "@/components/file-uploader"
import type { UploadedFile } from "@/types"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { EmptyCard } from "@/components/empty-card"
import { useUniversityImages } from "@/lib/store/university-images"
import { Label } from "@/components/ui/label"
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'



const Specialty = () => {
    const [docs, setDocs] = useState<any[]>([]);
    const [lastDoc, setLastDoc] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    const { uploadImages, imagesUploadingProgress, uploadedImages, isImagesUploading } = useUploadImages(
        "imageUploader",
        { defaultUploadedFiles: [] }
    )
    const { uploadLogo, logoUploadprogresses, isLogoUploading, uploadedLogo } = useUploadLogo(
        "imageUploader",
        { defaultUploadedFiles: [] }
    )
    const { toast } = useToast();
    const router = useRouter()
    const { countryValue, stateValue, openStateDropdown, setOpenStateDropdown, setStateValue } = useDropdownStore();
    const { images } = useUniversityImages();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const handleConfetti = async () => {
        const { clientWidth, clientHeight } = document.documentElement;
        const boundingBox = buttonRef.current?.getBoundingClientRect?.();
        const targetY = boundingBox?.y ?? 0;
        const targetX = boundingBox?.x ?? 0;
        const targetWidth = boundingBox?.width ?? 0;
        const targetCenterX = targetX + targetWidth / 2;
        const confetti = (await import("canvas-confetti")).default;
        confetti({
            zIndex: 999,
            particleCount: 100,
            spread: 70,
            origin: {
                y: targetY / clientHeight,
                x: targetCenterX / clientWidth,
            },
        });
        // setSheetToggle(!sheetToggle)
    };
    const [inputedValues, setInputedValues] = React.useState(false);
    const [sheetToggle, setSheetToggle] = React.useState(false);
    const [createButtonDisabled, setCreateButtonDisabled] = React.useState(true);
    const [isOpen, setIsOpen] = React.useState(false)
    const [phoneNumberDetails, setPhoneNumberDetails] = React.useState(false)
    const containerRef = useRef(null);
    const initialValue = [
        {
            id: '1',
            type: ELEMENT_PARAGRAPH,
            children: [{ text: 'Hello, World!' }],
        },
    ];
    const [phone, setPhone] = React.useState("+1 (408) 996–1010");
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };
    const phoneData = getPhoneData(phone);
    function showPhoneNumberDetails() {
        setPhoneNumberDetails(!phoneNumberDetails);
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
    const handleNameChange = (event: any) => {
        setInputedName(event.target.value);
    }
    const handleEmailChange = (event: any) => {
        setInputedEmail(event.target.value);
    }
    const handleStatusChange = (event: any) => {
        setInputedStatus(event);
    }
    const handleFacebookChange = (event: any) => {
        setInputedFacebook(event.target.value);
    }
    const handleInstagramChange = (event: any) => {
        setInputedInstragam(event.target.value);
    }
    const handleCostChange = (event: any) => {
        setInputedCost(event.target.value);
    }
    const handleWebsiteChange = (event: any) => {
        setInputedWebsite(event.target.value);
    }
    const handleCodeChange = (event: any) => {
        setInputedCode(event.target.value);
    }
    const handleHostelChange = (event: any) => {
        setInputedHostel(event);
    }
    const handleMilitaryChange = (event: any) => {
        setInputedMilitary(event);
    }
    const handleDescriptionChange = (event: any) => {
        setInputedDescription(JSON.stringify(event));
    }
    const syncImagesAndLogo = () => {
        const newArray2: any = uploadedImages.map((file) => file.url);
        setInputedImages(newArray2);
        uploadedLogo.map((file: any) => {
            setInputedLogo(file.url);
            return null;
        })
        setCreateButtonDisabled(!createButtonDisabled);
    }
    const handleInputedValues = () => {
        setInputedValues(!inputedValues);
    }

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
            setLoading(true);
            const q = query(collection(db, "specialties"), limit(8));
            const querySnapshot = await getDocs(q);
            const newDocs = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setDocs(newDocs);
            // Configuring Data for Update:
            docs.map((item: any) => {
                setInputedAddress(item.address);
                setInputedCost(item.educationCost);
                setInputedEmail(item.email);
                setInputedFacebook(item.facebook);
                setInputedHostel(item.hostel);
                setInputedImages(item.images);
                setInputedInstragam(item.instagram);
                setInputedMilitary(item.military);
                setInputedPhoneNumber(item.phoneNumber);
                setInputedRegion(item.region);
                setInputedStatus(item.status);
                setInputedCode(item.universityCode);
                setInputedDescription(item.universityDescription);
                setInputedName(item.universityName);
                setInputedWebsite(item.website);
                setInputedLogo(item.logo);
            })
            setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
            setLoading(false);
        };
        fetchDocs();
    }, []);

    const loadMore = async () => {
        setLoading(true);
        const q = query(
            collection(db, "specialties"),
            startAfter(lastDoc),
            limit(8)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.docs.length === 0) {
            toast({
                title: 'There is no more data in the database.',
                description: (
                    <div className="mt-2 w-[340px] rounded-md bg-primary-foreground p-4">
                        <span>Please add more data to load more!</span>
                    </div>
                ),
            });
            setLoading(false);
            return;
        }
        const newDocs = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setDocs([...docs, ...newDocs]);
        setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
        setLoading(false);
    };


    if (loading) {
        return <main className="w-full py-5 px-[5%] h-auto">
            <div className="flex items-center justify-between mb-6">
                <span className="text-center font-display text-lg font-bold tracking-[-0.02em] drop-shadow-sm md:text-3xl md:leading-[5rem]">Universities</span>
            </div>
            <div className="admin-panel-lists-loading place-content-center">
                <div className="flex flex-col space-y-3 rounded-xl border min-h-max p-5 w-full max-w-[90%]">
                    <Skeleton className="h-[225px] w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-7 w-full" />
                        <Skeleton className="h-7 w-full" />
                    </div>
                </div>
                <div className="flex flex-col space-y-3 rounded-xl border min-h-max p-5 w-full max-w-[90%]">
                    <Skeleton className="h-[225px] w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-7 w-full" />
                        <Skeleton className="h-7 w-full" />
                    </div>
                </div>
                <div className="flex flex-col space-y-3 rounded-xl border min-h-max p-5 w-full max-w-[90%]">
                    <Skeleton className="h-[225px] w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-7 w-full" />
                        <Skeleton className="h-7 w-full" />
                    </div>
                </div>
                <div className="flex flex-col space-y-3 rounded-xl border min-h-max p-5 w-full max-w-[90%]">
                    <Skeleton className="h-[225px] w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-7 w-full" />
                        <Skeleton className="h-7 w-full" />
                    </div>
                </div>
                <div className="flex flex-col space-y-3 rounded-xl border min-h-max p-5 w-full max-w-[90%]">
                    <Skeleton className="h-[225px] w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-7 w-full" />
                        <Skeleton className="h-7 w-full" />
                    </div>
                </div>
                <div className="flex flex-col space-y-3 rounded-xl border min-h-max p-5 w-full max-w-[90%]">
                    <Skeleton className="h-[225px] w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-7 w-full" />
                        <Skeleton className="h-7 w-full" />
                    </div>
                </div>
                <div className="flex flex-col space-y-3 rounded-xl border min-h-max p-5 w-full max-w-[90%]">
                    <Skeleton className="h-[225px] w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-7 w-full" />
                        <Skeleton className="h-7 w-full" />
                    </div>
                </div>
                <div className="flex flex-col space-y-3 rounded-xl border min-h-max p-5 w-full max-w-[90%]">
                    <Skeleton className="h-[225px] w-full rounded-xl" />
                    <div className="space-y-2">
                        <Skeleton className="h-7 w-full" />
                        <Skeleton className="h-7 w-full" />
                    </div>
                </div>



            </div>
        </main>;
    }
    const descriptionResult = (theObject: any) => {
        theObject.forEach((itemParent: any) => {
            itemParent.children.forEach((child: any) => {
                console.log(child.text);
            });
        });
    }

    return (
        <main className="w-full py-5 px-[5%] h-auto mb-10">
            <div className="flex items-center justify-between mb-6">
                <span className="text-center font-display text-lg font-bold tracking-[-0.02em] drop-shadow-sm md:text-3xl md:leading-[5rem]">Specialties</span>
                <Link href="/create-speciality">
                    <Button size="sm">Add New Specialty</Button>
                </Link>
            </div>
            <div className="admin-panel-lists place-content-center">
                {docs.map((items) => (
                    <div key={items.id}>

                        {/* <Card className="hover-glow-border w-full relative hover:bg-primary-foreground">
                            <CardHeader>
                                <CardTitle>Computer Science</CardTitle>
                                <CardDescription>Bachelor's Degree</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">Demand:</span>
                                    <span className="font-medium">High</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">Average Salary:</span>
                                    <span className="font-medium">$85,000</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">Specialty Code:</span>
                                    <span className="font-medium">CS101</span>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">


                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button size="sm" variant="outline">
                                            View
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="w-[55%] min-w-[300px] max-w-[750px]">
                                        <div className="w-full flex flex-col gap-2 border rounded-lg p-3 text-sm !mb-3 overflow-hidden">
                                            <div className="flex gap-2">
                                                <p>Name: </p>
                                                <span className="font-semibold">{items.universityName || "No Name is Provided."}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex gap-2">
                                                <p>Email: </p>
                                                <span className="font-semibold">{items.email || "No Email is Provided."}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex gap-2">
                                                <p>Facebook: </p>
                                                <span className="font-semibold">{items.facebook || "No Facebook Link is Provided."}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex gap-2">
                                                <p>Instagram: </p>
                                                <span className="font-semibold">{items.instragam || "No Instagram Link is Provided."}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex gap-2">
                                                <p>Education Cost: </p>
                                                <span className="font-semibold">{items.educationCost || "No Education Cost is Provided."}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex gap-2">
                                                <p>Website: </p>
                                                <span className="font-semibold">{items.website || "No Website Link is Provided."}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex gap-2">
                                                <p>University Code: </p>
                                                <span className="font-semibold">{items.universityCode || "No University Code is Provided."}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex gap-2">
                                                <p>Phone Number: </p>
                                                <span className="font-semibold">{items.phoneNumbe || "No Phone Number is Provided."}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex gap-2">
                                                <p>Logo: </p>
                                                <span className="font-semibold">{items.logo || "No Logo is Provided."}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex gap-2">
                                                <p>Address: </p>
                                                <span className="font-semibold">{items.address || "No Address is Provided."}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex gap-2">
                                                <p>Region: </p>
                                                <span className="font-semibold">{items.region || "No Region is Provided."}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex gap-2">
                                                <p>Description: </p>
                                                <span className="font-semibold">{items.universityDescription || "No Description is Provided."}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex gap-2">
                                                <p>Images: </p>
                                                <span className="font-semibold">{`[
                              "${items.images}"
                              ]` || "No Images are Provided."}</span>
                                            </div>
                                            <Separator />
                                            <div className="flex gap-2">
                                                <p>Hostel: </p>
                                                <Badge
                                                    className={cn(
                                                        "w-fit text-center",
                                                        items.hostel ? "bg-green-500 text-green-50" : "bg-destructive text-destructive-foreground"
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
                                                        items.military ? "bg-green-500 text-green-50" : "bg-destructive text-destructive-foreground"
                                                    )}
                                                >
                                                    {items.military || 'No Military Status Provided.'}
                                                </Badge>
                                            </div>
                                            <Separator />
                                            <div className="flex gap-2">
                                                <p>Status: </p>
                                                <Badge
                                                    className={cn(
                                                        "w-fit",
                                                        items.status ? "bg-green-500 text-green-50" : "bg-destructive text-destructive-foreground"
                                                    )}
                                                >
                                                    {items.status || "No Status Provided."}
                                                </Badge>
                                            </div>
                                        </div>

                                    </DialogContent>
                                </Dialog>


                                <div className="flex gap-2">
                                    <Button size="sm" variant="secondary">
                                        Update
                                    </Button>
                                    <Button onClick={async () => {
                                        await deleteDoc(doc(db, "specialtities", items.id));
                                        const newDocs = docs.filter((item) => item.id !== items.id);
                                        setDocs(newDocs);
                                    }} className="bg-red-500 text-white hover:bg-red-600" size="sm" variant="destructive">
                                        Delete
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card> */}


                        <div className="flex flex-col border rounded-lg text-sm !mb-3 overflow-hidden min-w-[300px] max-w-[100%] mx-auto items-center justify-start">
                            {Object.keys(items).map((key) => (
                                <div key={key} className="flex gap-2 border-b w-full p-3">
                                    <p>{key}:</p>
                                    <span className="font-semibold">{items[key] || "No value is Provided."}</span>
                                </div>
                            ))}
                            {/* <Separator /> */}
                        </div>

                    </div>
                ))}




            </div>
            <Button variant={'outline'} className="w-full mt-5" onClick={loadMore} disabled={loading}>
                Load More
            </Button>
        </main>
    );
};
export default Specialty;













