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



    // For this page :)
    const [inputedRuralQuota1, setInputedRuralQuota1] = React.useState("123");
    const [inputedRuralQuota2, setInputedRuralQuota2] = React.useState("119");
    const [inputedRuralQuota3, setInputedRuralQuota3] = React.useState("119");
    const [inputedLevel, setInputedLevel] = React.useState("bachelor");
    const [inputedOrphanQuota2, setInputedOrphanQuota2] = React.useState("83");
    const [inputedDisabilitiesQuota2, setInputedDisabilitiesQuota2] = React.useState("75");
    const [inputedOrphanQuota3, setInputedOrphanQuota3] = React.useState("80");
    const [inputedGeneralCompetition1, setInputedGeneralCompetition1] = React.useState("123");
    const [inputedLargeFamiliesQuota2, setInputedLargeFamiliesQuota2] = React.useState("114");
    const [inputedGeneralCompetition2, setInputedGeneralCompetition2] = React.useState("122");
    const [inputedGeneralCompetition3, setInputedGeneralCompetition3] = React.useState("120");
    const [inputedSpecialtyCode, setInputedSpecialtyCode] = React.useState("B007");
    const [inputedDisabilitiesQuota1, setInputedDisabilitiesQuota1] = React.useState("95");
    const [inputedAverageSalary, setInputedAverageSalary] = React.useState("307574 ₸");
    const [inputedSubjects, setInputedSubjects] = React.useState("creative examMathematics");
    const [inputedLargeFamiliesQuota1, setInputedLargeFamiliesQuota1] = React.useState("114");
    const [inputedThreshold, setInputedThreshold] = React.useState("80");
    const [inputedSpecialtyName, setInputedSpecialtyName] = React.useState("Подготовка учителей физической культуры");
    const [inputedDisabilitiesQuota3, setInputedDisabilitiesQuota3] = React.useState("97");
    const [inputedOrphanQuota1, setInputedOrphanQuota1] = React.useState("84");
    const [inputedUniversities, setInputedUniversities] = React.useState("astana");
    const [inputedLargeFamiliesQuota3, setInputedLargeFamiliesQuota3] = React.useState("107");
    const [inputedAvailableGrantCount, setInputedAvailableGrantCount] = React.useState("547");
    const [inputedDemandForSpecialty, setInputedDemandForSpecialty] = React.useState("high");

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
                // setInputedAddress(item.address);
                // setInputedCost(item.educationCost);
                // setInputedEmail(item.email);
                // setInputedFacebook(item.facebook);
                // setInputedHostel(item.hostel);
                // setInputedImages(item.images);
                // setInputedInstragam(item.instagram);
                // setInputedMilitary(item.military);
                // setInputedPhoneNumber(item.phoneNumber);
                // setInputedRegion(item.region);
                // setInputedStatus(item.status);
                // setInputedCode(item.universityCode);
                // setInputedDescription(item.universityDescription);
                // setInputedName(item.universityName);
                // setInputedWebsite(item.website);
                // setInputedLogo(item.logo);
                // Assuming `item` is an object with the properties you mentioned
                setInputedRuralQuota1(item.ruralQuota1);
                setInputedRuralQuota2(item.ruralQuota2);
                setInputedRuralQuota3(item.ruralQuota3);
                setInputedLevel(item.level);
                setInputedOrphanQuota2(item.orphanQuota2);
                setInputedDisabilitiesQuota2(item.disabilitiesQuota2);
                setInputedOrphanQuota3(item.orphanQuota3);
                setInputedGeneralCompetition1(item.generalCompetition1);
                setInputedLargeFamiliesQuota2(item.largeFamiliesQuota2);
                setInputedGeneralCompetition2(item.generalCompetition2);
                setInputedGeneralCompetition3(item.generalCompetition3);
                setInputedSpecialtyCode(item.specialtyCode);
                setInputedDisabilitiesQuota1(item.disabilitiesQuota1);
                setInputedAverageSalary(item.averageSalary);
                setInputedSubjects(item.subjects);
                setInputedLargeFamiliesQuota1(item.largeFamiliesQuota1);
                setInputedThreshold(item.threshold);
                setInputedSpecialtyName(item.specialtyName);
                setInputedDisabilitiesQuota3(item.disabilitiesQuota3);
                setInputedOrphanQuota1(item.orphanQuota1);
                setInputedUniversities(item.universities);
                setInputedLargeFamiliesQuota3(item.largeFamiliesQuota3);
                setInputedAvailableGrantCount(item.availableGrantCount);
                setInputedDemandForSpecialty(item.demandForSpecialty);

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

                        <Card className="hover-glow-border w-full relative hover:bg-primary-foreground">
                            <CardHeader>
                                <CardTitle>{items.specialtyName || "No Specialty Name Provided."}</CardTitle>
                                <CardDescription>{items.level}</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">Demand:</span>
                                    <span className="font-medium">{items.demandForSpecialty || "No Demand Provided."}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">Average Salary:</span>
                                    <span className="font-medium">{items.averageSalary || "No Average Salary Provided."}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 dark:text-gray-400">Specialty Code:</span>
                                    <span className="font-medium">{items.specialtyCode || "No Specialty Code Provided."}</span>
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
                                        {/* <div className="w-full flex flex-col gap-2 border rounded-lg p-3 text-sm !mb-3 overflow-hidden">
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
                                        </div> */}
                                        <div className="w-full flex flex-col gap-2 border rounded-lg p-3 text-sm !mb-3 overflow-hidden">



                                            <div className="flex gap-2">
                                                <p>RuralQuota1: </p>
                                                <span className="font-semibold">{inputedRuralQuota1 || "No RuralQuota1 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>RuralQuota2: </p>
                                                <span className="font-semibold">{inputedRuralQuota2 || "No RuralQuota2 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>RuralQuota3: </p>
                                                <span className="font-semibold">{inputedRuralQuota3 || "No RuralQuota3 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>Level: </p>
                                                <span className="font-semibold">{inputedLevel || "No Level is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>OrphanQuota2: </p>
                                                <span className="font-semibold">{inputedOrphanQuota2 || "No OrphanQuota2 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>DisabilitiesQuota2: </p>
                                                <span className="font-semibold">{inputedDisabilitiesQuota2 || "No DisabilitiesQuota2 is Provided."}</span>
                                            </div>

                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>OrphanQuota3: </p>
                                                <span className="font-semibold">{inputedOrphanQuota3 || "No OrphanQuota3 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>GeneralCompetition1: </p>
                                                <span className="font-semibold">{inputedGeneralCompetition1 || "No GeneralCompetition1 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>LargeFamiliesQuota2: </p>
                                                <span className="font-semibold">{inputedLargeFamiliesQuota2 || "No LargeFamiliesQuota2 is Provided."}</span>
                                            </div>
                                            <Separator />



                                            <div className="flex gap-2">
                                                <p>GeneralCompetition2: </p>
                                                <span className="font-semibold">{inputedGeneralCompetition2 || "No GeneralCompetition2 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>GeneralCompetition3: </p>
                                                <span className="font-semibold">{inputedGeneralCompetition3 || "No GeneralCompetition3 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>SpecialtyCode: </p>
                                                <span className="font-semibold">{inputedSpecialtyCode || "No SpecialtyCode is Provided."}</span>
                                            </div>

                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>DisabilitiesQuota1: </p>
                                                <span className="font-semibold">{inputedDisabilitiesQuota1 || "No DisabilitiesQuota1 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>AverageSalary: </p>
                                                <span className="font-semibold">{inputedAverageSalary || "No AverageSalary is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>Subjects: </p>
                                                <span className="font-semibold">{inputedSubjects || "No Subjects is Provided."}</span>
                                            </div>


                                            <Separator />



                                            {/* const [inputedLargeFamiliesQuota1, setInputedLargeFamiliesQuota1] = React.useState("114");
const [inputedThreshold, setInputedThreshold] = React.useState("80");
const [inputedSpecialtyName, setInputedSpecialtyName] = React.useState("Подготовка учителей физической культуры");
const [inputedDisabilitiesQuota3, setInputedDisabilitiesQuota3] = React.useState("97");
const [inputedOrphanQuota1, setInputedOrphanQuota1] = React.useState("84");
const [inputedUniversities, setInputedUniversities] = React.useState("astana");
const [inputedLargeFamiliesQuota3, setInputedLargeFamiliesQuota3] = React.useState("107");
const [inputedAvailableGrantCount, setInputedAvailableGrantCount] = React.useState("547");
const [inputedDemandForSpecialty, setInputedDemandForSpecialty] = React.useState("high"); */}
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>LargeFamiliesQuota1: </p>
                                                <span className="font-semibold">{inputedLargeFamiliesQuota1 || "No LargeFamiliesQuota1 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>SpecialtyName: </p>
                                                <span className="font-semibold">{inputedSpecialtyName || "No SpecialtyName is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>DisabilitiesQuota3: </p>
                                                <span className="font-semibold">{inputedDisabilitiesQuota3 || "No DisabilitiesQuota3 is Provided."}</span>
                                            </div>

                                            <Separator />




                                            <div className="flex gap-2">
                                                <p>OrphanQuota1: </p>
                                                <span className="font-semibold">{inputedOrphanQuota1 || "No OrphanQuota1 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>Universities: </p>
                                                <span className="font-semibold">{inputedUniversities || "No Universities is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>LargeFamiliesQuota3: </p>
                                                <span className="font-semibold">{inputedLargeFamiliesQuota3 || "No LargeFamiliesQuota3 is Provided."}</span>
                                            </div>




                                            <Separator />




                                            <div className="flex gap-2">
                                                <p>AvailableGrantCount: </p>
                                                <span className="font-semibold">{inputedAvailableGrantCount || "No AvailableGrantCount is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>DemandForSpecialty: </p>
                                                <span className="font-semibold">{inputedDemandForSpecialty || "No DemandForSpecialty is Provided."}</span>
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
                        </Card>


                        {/* <div className="flex flex-col border rounded-lg text-sm !mb-3 overflow-hidden min-w-[300px] max-w-[100%] mx-auto items-center justify-start">
                            {Object.keys(items).map((key) => (
                                <div key={key} className="flex gap-2 border-b w-full p-3">
                                    <p>{key}:</p>
                                    <span className="font-semibold">{items[key] || "No value is Provided."}</span>
                                </div>
                            ))}
                        </div> */}

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













