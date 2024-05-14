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

function uuid() {
    return crypto.getRandomValues(new Uint32Array(1))[0].toString();
}

const Specialty = () => {


    const [universities, setUniversities] = useState<any[]>([]);
    const [subjects, setSubjects] = useState<any[]>([]);

    const [subjectsTag, setSubjectsTag] = React.useState<Tag[]>([]);
    const [universitiesTag, setUniversitiesTag] = React.useState<Tag[]>([]);

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
    const [inputedRuralQuota1, setInputedRuralQuota1] = React.useState("");
    const [inputedRuralQuota2, setInputedRuralQuota2] = React.useState("");
    const [inputedRuralQuota3, setInputedRuralQuota3] = React.useState("");
    const [inputedLevel, setInputedLevel] = React.useState("");
    const [inputedOrphanQuota2, setInputedOrphanQuota2] = React.useState("");
    const [inputedDisabilitiesQuota2, setInputedDisabilitiesQuota2] = React.useState("");
    const [inputedOrphanQuota3, setInputedOrphanQuota3] = React.useState("");
    const [inputedGeneralCompetition1, setInputedGeneralCompetition1] = React.useState("");
    const [inputedLargeFamiliesQuota2, setInputedLargeFamiliesQuota2] = React.useState("");
    const [inputedGeneralCompetition2, setInputedGeneralCompetition2] = React.useState("");
    const [inputedGeneralCompetition3, setInputedGeneralCompetition3] = React.useState("");
    const [inputedSpecialtyCode, setInputedSpecialtyCode] = React.useState("");
    const [inputedDisabilitiesQuota1, setInputedDisabilitiesQuota1] = React.useState("");
    const [inputedAverageSalary, setInputedAverageSalary] = React.useState("");
    const [inputedSubjects, setInputedSubjects] = React.useState("");
    const [inputedLargeFamiliesQuota1, setInputedLargeFamiliesQuota1] = React.useState("");
    const [inputedThreshold, setInputedThreshold] = React.useState("");
    const [inputedSpecialtyName, setInputedSpecialtyName] = React.useState("");
    const [inputedDisabilitiesQuota3, setInputedDisabilitiesQuota3] = React.useState("");
    const [inputedOrphanQuota1, setInputedOrphanQuota1] = React.useState("");
    const [inputedUniversities, setInputedUniversities] = React.useState("");
    const [inputedLargeFamiliesQuota3, setInputedLargeFamiliesQuota3] = React.useState("");
    const [inputedAvailableGrantCount, setInputedAvailableGrantCount] = React.useState("");
    const [inputedDemandForSpecialty, setInputedDemandForSpecialty] = React.useState("");


    const handleRuralQuota1Change = (event: any) => {
        setInputedRuralQuota1(event.target.value);
    }

    const handleRuralQuota2Change = (event: any) => {
        setInputedRuralQuota2(event.target.value);
    }

    const handleRuralQuota3Change = (event: any) => {
        setInputedRuralQuota3(event.target.value);
    }

    const handleLevelChange = (event: any) => {
        setInputedLevel(event.target.value);
    }

    const handleOrphanQuota2Change = (event: any) => {
        setInputedOrphanQuota2(event.target.value);
    }

    const handleDisabilitiesQuota2Change = (event: any) => {
        setInputedDisabilitiesQuota2(event.target.value);
    }

    const handleOrphanQuota3Change = (event: any) => {
        setInputedOrphanQuota3(event.target.value);
    }

    const handleGeneralCompetition1Change = (event: any) => {
        setInputedGeneralCompetition1(event.target.value);
    }

    const handleLargeFamiliesQuota2Change = (event: any) => {
        setInputedLargeFamiliesQuota2(event.target.value);
    }

    const handleGeneralCompetition2Change = (event: any) => {
        setInputedGeneralCompetition2(event.target.value);
    }

    const handleGeneralCompetition3Change = (event: any) => {
        setInputedGeneralCompetition3(event.target.value);
    }

    const handleSpecialtyCodeChange = (event: any) => {
        setInputedSpecialtyCode(event.target.value);
    }

    const handleDisabilitiesQuota1Change = (event: any) => {
        setInputedDisabilitiesQuota1(event.target.value);
    }

    const handleAverageSalaryChange = (event: any) => {
        setInputedAverageSalary(event.target.value);
    }

    const handleSubjectsChange = (event: any) => {
        setInputedSubjects(event.target.value);
    }

    const handleLargeFamiliesQuota1Change = (event: any) => {
        setInputedLargeFamiliesQuota1(event.target.value);
    }

    const handleThresholdChange = (event: any) => {
        setInputedThreshold(event.target.value);
    }

    const handleSpecialtyNameChange = (event: any) => {
        setInputedSpecialtyName(event.target.value);
    }

    const handleDisabilitiesQuota3Change = (event: any) => {
        setInputedDisabilitiesQuota3(event.target.value);
    }

    const handleOrphanQuota1Change = (event: any) => {
        setInputedOrphanQuota1(event.target.value);
    }

    const handleUniversitiesChange = (event: any) => {
        setInputedUniversities(event.target.value);
    }

    const handleLargeFamiliesQuota3Change = (event: any) => {
        setInputedLargeFamiliesQuota3(event.target.value);
    }

    const handleAvailableGrantCountChange = (event: any) => {
        setInputedAvailableGrantCount(event.target.value);
    }

    const handleDemandForSpecialtyChange = (event: any) => {
        setInputedDemandForSpecialty(event.target.value);
    }


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
    // const fetchDocs = async () => {
    //     setLoading(true);
    //     const q = query(collection(db, "specialties"), limit(8));
    //     const querySnapshot = await getDocs(q);
    //     const newDocs = querySnapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         ...doc.data(),
    //     }));
    //     setDocs(newDocs);
    //     // Configuring Data for Update:
    //     docs.map((item: any) => {
    //         setInputedRuralQuota1(item.ruralQuota1);
    //         setInputedRuralQuota2(item.ruralQuota2);
    //         setInputedRuralQuota3(item.ruralQuota3);
    //         setInputedLevel(item.level);
    //         setInputedOrphanQuota2(item.orphanQuota2);
    //         setInputedDisabilitiesQuota2(item.disabilitiesQuota2);
    //         setInputedOrphanQuota3(item.orphanQuota3);
    //         setInputedGeneralCompetition1(item.generalCompetition1);
    //         setInputedLargeFamiliesQuota2(item.largeFamiliesQuota2);
    //         setInputedGeneralCompetition2(item.generalCompetition2);
    //         setInputedGeneralCompetition3(item.generalCompetition3);
    //         setInputedSpecialtyCode(item.specialtyCode);
    //         setInputedDisabilitiesQuota1(item.disabilitiesQuota1);
    //         setInputedAverageSalary(item.averageSalary);
    //         setInputedSubjects(item.subjects);
    //         setInputedLargeFamiliesQuota1(item.largeFamiliesQuota1);
    //         setInputedThreshold(item.threshold);
    //         setInputedSpecialtyName(item.specialtyName);
    //         setInputedDisabilitiesQuota3(item.disabilitiesQuota3);
    //         setInputedOrphanQuota1(item.orphanQuota1);
    //         setInputedUniversities(item.universities);
    //         setInputedLargeFamiliesQuota3(item.largeFamiliesQuota3);
    //         setInputedAvailableGrantCount(item.availableGrantCount);
    //         setInputedDemandForSpecialty(item.demandForSpecialty);

    //     })
    //     setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
    //     setLoading(false);
    // };

    // const fetchData = async () => {
    //     // setLoading(true);
    //     const q = query(collection(db, "specialties"), limit(8));
    //     const querySnapshot = await getDocs(q);
    //     const newDocs = querySnapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         ...doc.data(),
    //     }));
    //     setDocs(newDocs);
    //     // Configuring Data for Update:
    //     docs.map((item: any) => {
    //         setInputedRuralQuota1(item.ruralQuota1);
    //         setInputedRuralQuota2(item.ruralQuota2);
    //         setInputedRuralQuota3(item.ruralQuota3);
    //         setInputedLevel(item.level);
    //         setInputedOrphanQuota2(item.orphanQuota2);
    //         setInputedDisabilitiesQuota2(item.disabilitiesQuota2);
    //         setInputedOrphanQuota3(item.orphanQuota3);
    //         setInputedGeneralCompetition1(item.generalCompetition1);
    //         setInputedLargeFamiliesQuota2(item.largeFamiliesQuota2);
    //         setInputedGeneralCompetition2(item.generalCompetition2);
    //         setInputedGeneralCompetition3(item.generalCompetition3);
    //         setInputedSpecialtyCode(item.specialtyCode);
    //         setInputedDisabilitiesQuota1(item.disabilitiesQuota1);
    //         setInputedAverageSalary(item.averageSalary);
    //         setInputedSubjects(item.subjects);
    //         setInputedLargeFamiliesQuota1(item.largeFamiliesQuota1);
    //         setInputedThreshold(item.threshold);
    //         setInputedSpecialtyName(item.specialtyName);
    //         setInputedDisabilitiesQuota3(item.disabilitiesQuota3);
    //         setInputedOrphanQuota1(item.orphanQuota1);
    //         setInputedUniversities(item.universities);
    //         setInputedLargeFamiliesQuota3(item.largeFamiliesQuota3);
    //         setInputedAvailableGrantCount(item.availableGrantCount);
    //         setInputedDemandForSpecialty(item.demandForSpecialty);

    //     })
    //     // setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
    //     // setLoading(false);
    // };

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
        const fetchUniversities = async () => {
            const querySnapshot = await getDocs(collection(db, "universities"));
            const newDocs = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUniversities(newDocs);
        };
        const fetchSubjects = async () => {
            const querySnapshot = await getDocs(collection(db, "subjects"));
            const newDocs = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setSubjects(newDocs);
        };
        fetchUniversities();
        fetchSubjects();
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
                <span className="text-center font-display text-lg font-bold tracking-[-0.02em] drop-shadow-sm md:text-3xl md:leading-[5rem]">Specialties</span>
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
    return (
        <main className="w-full py-5 px-[5%] h-auto mb-10">
            <div className="flex items-center justify-between mb-6">
                <span className="text-center font-display text-lg font-bold tracking-[-0.02em] drop-shadow-sm md:text-3xl md:leading-[5rem]">Specialties</span>
                <Link href="/create-specialty">
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

                                        <div className="w-full flex flex-col gap-2 border rounded-lg p-3 text-sm !mb-3 overflow-hidden">
                                            <div className="flex gap-2">
                                                <p>RuralQuota1: </p>
                                                <span className="font-semibold">{items.ruralQuota1 || "No RuralQuota1 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>RuralQuota2: </p>
                                                <span className="font-semibold">{items.ruralQuota2 || "No RuralQuota2 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>RuralQuota3: </p>
                                                <span className="font-semibold">{items.ruralQuota3 || "No RuralQuota3 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>Level: </p>
                                                <span className="font-semibold">{items.level || "No Level is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>OrphanQuota2: </p>
                                                <span className="font-semibold">{items.orphanQuota2 || "No OrphanQuota2 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>DisabilitiesQuota2: </p>
                                                <span className="font-semibold">{items.disabilitiesQuota2 || "No DisabilitiesQuota2 is Provided."}</span>
                                            </div>

                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>OrphanQuota3: </p>
                                                <span className="font-semibold">{items.orphanQuota3 || "No OrphanQuota3 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>GeneralCompetition1: </p>
                                                <span className="font-semibold">{items.generalCompetition1 || "No GeneralCompetition1 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>LargeFamiliesQuota2: </p>
                                                <span className="font-semibold">{items.largeFamiliesQuota2 || "No LargeFamiliesQuota2 is Provided."}</span>
                                            </div>
                                            <Separator />



                                            <div className="flex gap-2">
                                                <p>GeneralCompetition2: </p>
                                                <span className="font-semibold">{items.generalCompetition2 || "No GeneralCompetition2 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>GeneralCompetition3: </p>
                                                <span className="font-semibold">{items.generalCompetition3 || "No GeneralCompetition3 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>SpecialtyCode: </p>
                                                <span className="font-semibold">{items.specialtyCode || "No SpecialtyCode is Provided."}</span>
                                            </div>

                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>DisabilitiesQuota1: </p>
                                                <span className="font-semibold">{items.disabilitiesQuota1 || "No DisabilitiesQuota1 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>AverageSalary: </p>
                                                <span className="font-semibold">{items.averageSalary || "No AverageSalary is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>Subjects: </p>
                                                <span className="font-semibold">{JSON.stringify(items.subjects,null,2) || "No Subjects is Provided."}</span>
                                            </div>





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
                                                <span className="font-semibold">{items.largeFamiliesQuota1 || "No LargeFamiliesQuota1 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>SpecialtyName: </p>
                                                <span className="font-semibold">{items.specialtyName || "No SpecialtyName is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>DisabilitiesQuota3: </p>
                                                <span className="font-semibold">{items.disabilitiesQuota3 || "No DisabilitiesQuota3 is Provided."}</span>
                                            </div>

                                            <Separator />




                                            <div className="flex gap-2">
                                                <p>OrphanQuota1: </p>
                                                <span className="font-semibold">{items.orphanQuota1 || "No OrphanQuota1 is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>Universities: </p>
                                                <span className="font-semibold">{JSON.stringify(items.universities,null,2) || "No Universities is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>LargeFamiliesQuota3: </p>
                                                <span className="font-semibold">{items.largeFamiliesQuota3 || "No LargeFamiliesQuota3 is Provided."}</span>
                                            </div>




                                            <Separator />




                                            <div className="flex gap-2">
                                                <p>AvailableGrantCount: </p>
                                                <span className="font-semibold">{items.availableGrantCount || "No AvailableGrantCount is Provided."}</span>
                                            </div>
                                            <Separator />

                                            <div className="flex gap-2">
                                                <p>DemandForSpecialty: </p>
                                                <span className="font-semibold">{items.demandForSpecialty || "No DemandForSpecialty is Provided."}</span>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>


                                <div className="flex gap-2">
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <Button onClick={handleConfetti} variant="default">Update</Button>
                                        </SheetTrigger>
                                        <SheetContent side={"bottom"} className="h-[90vh] !max-w-[1600px] mx-auto rounded-xl">
                                            <ScrollArea className="h-full w-full rounded-md border">
                                                <div className="create-university min-h-[100vh] lg:flex lg:flex-col space-y-3 p-10 pt-3 !min-w-full lg:!min-w-[1500px]">
                                                    <div className="action w-full my-3 hidden lg:flex items-center justify-between ">
                                                        <div className="w-full h-full flex items-start justify-start space-x-3">
                                                            <Link href="/specialities" className="z-50">
                                                                <AnimatedButton variant="expandIcon" Icon={ArrowLeftIcon} iconPlacement="left" className="border border-input bg-background hover:bg-accent text-accent-foreground">
                                                                    Back
                                                                </AnimatedButton>
                                                            </Link>
                                                            <AnimatedButton onClick={handleInputedValues} variant="expandIcon" Icon={Projector} iconPlacement="left" className="border border-input bg-background hover:bg-accent text-accent-foreground">
                                                                {inputedValues ? "Hide" : "Show"} Inputed Values
                                                            </AnimatedButton>
                                                        </div>

                                                        <div className="w-full h-full flex items-end justify-end space-x-3">
                                                            {/* <AnimatedButton onClick={syncImagesAndLogo} variant="expandIcon" Icon={CloudUpload} iconPlacement="left" className="border border-input bg-background hover:bg-accent text-accent-foreground">
                                                                Sync Uploaded Files
                                                            </AnimatedButton> */}
                                                            <Button
                                                                className="!py-0"
                                                                // disabled={createButtonDisabled}
                                                                onClick={async () => {
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


                                                                    const updateRef = doc(db, "specialties", items.id);
                                                                    const Update: any = await updateDoc(updateRef, {
                                                                        ruralQuota1: inputedRuralQuota1 || items.ruralQuota1,
                                                                        ruralQuota3: inputedRuralQuota3 || items.ruralQuota3,
                                                                        level: inputedLevel || items.level,
                                                                        orphanQuota2: inputedOrphanQuota2 || items.orphanQuota2,
                                                                        disabilitiesQuota2: inputedDisabilitiesQuota2 || items.disabilitiesQuota2,
                                                                        orphanQuota3: inputedOrphanQuota3 || items.orphanQuota3,
                                                                        generalCompetition1: inputedGeneralCompetition1 || items.generalCompetition1,
                                                                        largeFamiliesQuota2: inputedLargeFamiliesQuota2 || items.largeFamiliesQuota2,
                                                                        generalCompetition2: inputedGeneralCompetition2 || items.generalCompetition2,
                                                                        generalCompetition3: inputedGeneralCompetition3 || items.generalCompetition3,
                                                                        specialtyCode: inputedSpecialtyCode || items.specialtyCode,
                                                                        disabilitiesQuota1: inputedDisabilitiesQuota1 || items.disabilitiesQuota1,
                                                                        averageSalary: inputedAverageSalary || items.averageSalary,
                                                                        subjects: subjectsTag.flatMap(item => item.text) || items.subjects,
                                                                        largeFamiliesQuota1: inputedLargeFamiliesQuota1 || items.largeFamiliesQuota1,
                                                                        threshold: inputedThreshold || items.threshold,
                                                                        specialtyName: inputedSpecialtyName || items.specialtyName,
                                                                        disabilitiesQuota3: inputedDisabilitiesQuota3 || items.disabilitiesQuota3,
                                                                        ruralQuota2: inputedRuralQuota2 || items.ruralQuota2,
                                                                        orphanQuota1: inputedOrphanQuota1 || items.orphanQuota1,
                                                                        universities: universitiesTag.flatMap(item => item.text) || items.universities,
                                                                        largeFamiliesQuota3: inputedLargeFamiliesQuota3 || items.largeFamiliesQuota3,
                                                                        availableGrantCount: inputedAvailableGrantCount || items.availableGrantCount,
                                                                        demandForSpecialty: inputedDemandForSpecialty || items.demandForSpecialty


                                                                    })





                                                                    toast({
                                                                        title: 'University has been Updated Successfully.',
                                                                        description: (
                                                                            <div className="mt-2 w-[340px] rounded-md bg-primary-foreground p-4">
                                                                                <span>You Can now view and delete this specialty!</span>
                                                                                <pre className="max-h-[500px] overflow-x-auto overflow-y-auto bg-background">
                                                                                    {/* <code className="text-muted-foreground bg-secondary">{JSON.stringify(Update.id, null, 2)}</code> */}
                                                                                </pre>
                                                                            </div>
                                                                        ),
                                                                    });

                                                                }}
                                                            >
                                                                Update
                                                            </Button>
                                                        </div>
                                                    </div>


                                                    {inputedValues && <div className="min-w-full w-max flex flex-col gap-2 border rounded-lg p-3 text-sm !mb-3">
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
                                                            <span className="font-semibold">{subjectsTag.flatMap(item => item.text) || "No Subjects is Provided."}</span>
                                                        </div>


                                                        <Separator />

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
                                                            <span className="font-semibold">{universitiesTag.flatMap(item => item.text) || "No Universities is Provided."}</span>
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
                                                    </div>}


                                                    {/* <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                        <h1 className="text-4xl font-bold w-full text-left">Subjects</h1>
                                                        <TagInput
                                                            placeholder="Enter Your Results"
                                                            tags={subjectsTag}
                                                            className="sm:min-w-[450px]"
                                                            setTags={(newTags) => {
                                                                setSubjectsTag(newTags);
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                        <h1 className="text-4xl font-bold w-full text-left">Universities</h1>
                                                        <TagInput
                                                            placeholder="Enter Your Results"
                                                            tags={universitiesTag}
                                                            className="sm:min-w-[450px]"
                                                            setTags={(newTags) => {
                                                                setUniversitiesTag(newTags);
                                                            }}
                                                        />
                                                    </div> */}
                                                    <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                        <h1 className="text-4xl font-bold w-full text-left">Subjects</h1>
                                                        <TagInput
                                                            placeholder="Enter Your Subjects"
                                                            tags={subjectsTag}
                                                            enableAutocomplete
                                                            restrictTagsToAutocompleteOptions
                                                            autocompleteOptions={subjects.map((items) => ({
                                                                id: items.id,
                                                                text: items.subjects.map((item: any) => item || `No Subjects Are Provided at id:${uuid()}`) || `No Subject Provided at id:${items.id}`,
                                                            }))}
                                                            draggable
                                                            className="sm:min-w-[450px]"
                                                            setTags={(newTags) => {
                                                                setSubjectsTag(newTags);
                                                            }}
                                                        />
                                                    </div>

                                                    <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                        <h1 className="text-4xl font-bold w-full text-left">Universities</h1>
                                                        <TagInput
                                                            placeholder="Enter Your Universities"
                                                            tags={universitiesTag}
                                                            enableAutocomplete
                                                            restrictTagsToAutocompleteOptions
                                                            autocompleteOptions={universities.map((items) => ({
                                                                id: items.id,
                                                                text: items.universityName || `Not Universities Are Provided at id:${items.id}`,
                                                            }))}
                                                            draggable
                                                            className="sm:min-w-[450px]"
                                                            setTags={(newTags) => {
                                                                setUniversitiesTag(newTags);
                                                            }}
                                                        />
                                                    </div>


                                                    <div className="name-logo-description-university w-full grid gap-3">
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">RuralQuota1</h1>
                                                            <Input onChange={handleRuralQuota1Change} type="text" placeholder="Enter Speciality RuralQuota1 Info" />
                                                        </div>
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">RuralQuota2</h1>
                                                            <Input onChange={handleRuralQuota2Change} type="text" placeholder="Enter Speciality RuralQuota2 Info" />
                                                        </div>
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">RuralQuota3</h1>
                                                            <Input onChange={handleRuralQuota3Change} type="text" placeholder="Enter Speciality RuralQuota3 Info" />
                                                        </div>
                                                    </div>
                                                    <div className="name-logo-description-university w-full grid gap-3">
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">Level</h1>
                                                            <Input onChange={handleLevelChange} type="text" placeholder="Enter Speciality Level Info" />
                                                        </div>
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">OrphanQuota2</h1>
                                                            <Input onChange={handleOrphanQuota2Change} type="text" placeholder="Enter Speciality OrphanQuota2 Info" />
                                                        </div>
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">DisabilitiesQuota2</h1>
                                                            <Input onChange={handleDisabilitiesQuota2Change} type="text" placeholder="Enter Speciality DisabilitiesQuota2 Info" />
                                                        </div>
                                                    </div>
                                                    <div className="name-logo-description-university w-full grid gap-3">
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">OrphanQuota3</h1>
                                                            <Input onChange={handleOrphanQuota3Change} type="text" placeholder="Enter Speciality OrphanQuota3 Info" />
                                                        </div>
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">GeneralCompetition1</h1>
                                                            <Input onChange={handleGeneralCompetition1Change} type="text" placeholder="Enter Speciality GeneralCompetition1 Info" />
                                                        </div>
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">LargeFamiliesQuota2</h1>
                                                            <Input onChange={handleLargeFamiliesQuota2Change} type="text" placeholder="Enter Speciality LargeFamiliesQuota2 Info" />
                                                        </div>
                                                    </div>
                                                    <div className="name-logo-description-university w-full grid gap-3">
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">GeneralCompetition2</h1>
                                                            <Input onChange={handleGeneralCompetition2Change} type="text" placeholder="Enter Speciality GeneralCompetition2 Info" />
                                                        </div>
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">GeneralCompetition3</h1>
                                                            <Input onChange={handleGeneralCompetition3Change} type="text" placeholder="Enter Speciality GeneralCompetition3 Info" />
                                                        </div>
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">SpecialtyCode</h1>
                                                            <Input onChange={handleSpecialtyCodeChange} type="text" placeholder="Enter Speciality SpecialtyCode Info" />
                                                        </div>
                                                    </div>
                                                    <div className="name-logo-description-university w-full grid gap-3">
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">DisabilitiesQuota1</h1>
                                                            <Input onChange={handleDisabilitiesQuota1Change} type="text" placeholder="Enter Speciality DisabilitiesQuota1 Info" />
                                                        </div>
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">AverageSalary</h1>
                                                            <Input onChange={handleAverageSalaryChange} type="text" placeholder="Enter Speciality AverageSalary Info" />
                                                        </div>
                                                        {/* <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">Subjects</h1>
                                                            <Input onChange={handleSubjectsChange} type="text" placeholder="Enter Speciality Subjects Info" />
                                                        </div> */}
                                                    </div>
                                                    <div className="name-logo-description-university w-full grid gap-3">
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">LargeFamiliesQuota1</h1>
                                                            <Input onChange={handleLargeFamiliesQuota1Change} type="text" placeholder="Enter Speciality LargeFamiliesQuota1 Info" />
                                                        </div>
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">Threshold</h1>
                                                            <Input onChange={handleThresholdChange} type="text" placeholder="Enter Speciality Threshold Info" />
                                                        </div>
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">SpecialtyName</h1>
                                                            <Input onChange={handleSpecialtyNameChange} type="text" placeholder="Enter Speciality SpecialtyName Info" />
                                                        </div>
                                                    </div>
                                                    <div className="name-logo-description-university w-full grid gap-3">
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">DisabilitiesQuota3</h1>
                                                            <Input onChange={handleDisabilitiesQuota3Change} type="text" placeholder="Enter Speciality DisabilitiesQuota3 Info" />
                                                        </div>
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">OrphanQuota1</h1>
                                                            <Input onChange={handleOrphanQuota1Change} type="text" placeholder="Enter Speciality OrphanQuota1 Info" />
                                                        </div>
                                                        {/* <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">Universities</h1>
                                                            <Input onChange={handleUniversitiesChange} type="text" placeholder="Enter Speciality Universities Info" />
                                                        </div> */}
                                                    </div>

                                                    <div className="name-logo-description-university w-full grid gap-3">
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">LargeFamiliesQuota3</h1>
                                                            <Input onChange={handleLargeFamiliesQuota3Change} type="text" placeholder="Enter Speciality LargeFamiliesQuota3 Info" />
                                                        </div>
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">AvailableGrantCount</h1>
                                                            <Input onChange={handleAvailableGrantCountChange} type="text" placeholder="Enter Speciality AvailableGrantCount Info" />
                                                        </div>
                                                        <div className="hover-glow-border w-full h-auto border rounded-md flex flex-col space-y-3 items-center justify-center p-10">
                                                            <h1 className="text-4xl font-bold w-full text-left">DemandForSpecialty</h1>
                                                            <Input onChange={handleDemandForSpecialtyChange} type="text" placeholder="Enter Speciality DemandForSpecialty Info" />
                                                        </div>
                                                    </div>






                                                    <div className="action w-full my-3 flex flex-col lg:hidden items-start justify-start space-y-3 lg:space-y-0">
                                                        <Link href="/specialities" className="z-50 w-full">
                                                            <AnimatedButton variant="expandIcon" Icon={ArrowLeftIcon} iconPlacement="left" className="border border-input bg-secondary hover:bg-accent text-accent-foreground !min-w-full lg:w-auto">
                                                                Back
                                                            </AnimatedButton>
                                                        </Link>
                                                        <AnimatedButton onClick={handleInputedValues} variant="expandIcon" Icon={Projector} iconPlacement="left" className="border w-full border-input bg-background hover:bg-accent text-accent-foreground">
                                                            {inputedValues ? "Hide" : "Show"} Inputed Values
                                                        </AnimatedButton>
                                                        {/* <AnimatedButton onClick={syncImagesAndLogo} variant="expandIcon" Icon={CloudUpload} iconPlacement="left" className="border w-full border-input bg-background hover:bg-accent text-accent-foreground">
                                                            Sync Uploaded Files
                                                        </AnimatedButton> */}
                                                        <AnimatedButton
                                                            className="!py-0 w-full"
                                                            // disabled={createButtonDisabled}
                                                            onClick={async () => {
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
                                                                const updateRef = doc(db, "specialties", items.id);
                                                                const Update: any = await updateDoc(updateRef, {
                                                                    ruralQuota1: inputedRuralQuota1 || items.ruralQuotai1,
                                                                    ruralQuota3: inputedRuralQuota3 || items.ruralQuota3,
                                                                    level: inputedLevel || items.level,
                                                                    orphanQuota2: inputedOrphanQuota2 || items.orphanQuota2,
                                                                    disabilitiesQuota2: inputedDisabilitiesQuota2 || items.disabilitiesQuota2,
                                                                    orphanQuota3: inputedOrphanQuota3 || items.orphanQuota3,
                                                                    generalCompetition1: inputedGeneralCompetition1 || items.generalCompetition1,
                                                                    largeFamiliesQuota2: inputedLargeFamiliesQuota2 || items.largeFamiliesQuota2,
                                                                    generalCompetition2: inputedGeneralCompetition2 || items.generalCompetition2,
                                                                    generalCompetition3: inputedGeneralCompetition3 || items.generalCompetition3,
                                                                    specialtyCode: inputedSpecialtyCode || items.specialtyCode,
                                                                    disabilitiesQuota1: inputedDisabilitiesQuota1 || items.disabilitiesQuota1,
                                                                    averageSalary: inputedAverageSalary || items.averageSalary,
                                                                    subjects: subjectsTag.flatMap(item => item.text) || items.subjects,
                                                                    largeFamiliesQuota1: inputedLargeFamiliesQuota1 || items.largeFamiliesQuota1,
                                                                    threshold: inputedThreshold || items.threshold,
                                                                    specialtyName: inputedSpecialtyName || items.specialtyName,
                                                                    disabilitiesQuota3: inputedDisabilitiesQuota3 || items.disabilitiesQuota3,
                                                                    ruralQuota2: inputedRuralQuota2 || items.ruralQuota2,
                                                                    orphanQuota1: inputedOrphanQuota1 || items.orphanQuota1,
                                                                    universities: universitiesTag.flatMap(item => item.text) || items.universities,
                                                                    largeFamiliesQuota3: inputedLargeFamiliesQuota3 || items.largeFamiliesQuota3,
                                                                    availableGrantCount: inputedAvailableGrantCount || items.availableGrantCount,
                                                                    demandForSpecialty: inputedDemandForSpecialty || items.demandForSpecialty


                                                                })


                                                                toast({
                                                                    title: 'University has been Updated Successfully.',
                                                                    description: (
                                                                        <div className="mt-2 w-[340px] rounded-md bg-primary-foreground p-4">
                                                                            <span>You Can now view and delete this university!</span>
                                                                            <pre className="max-h-[500px] overflow-x-auto overflow-y-auto bg-background">
                                                                                {/* <code className="text-muted-foreground bg-secondary">{JSON.stringify(Update.id, null, 2)}</code> */}
                                                                            </pre>
                                                                        </div>
                                                                    ),
                                                                });

                                                                // router.push('/specialities')
                                                                // setSheetToggle(true)

                                                                // setSheetToggle(!sheetToggle)
                                                                // router.push('/university')
                                                                // fetchDocs()
                                                            }}
                                                        >
                                                            {/* {
                                                                createButtonDisabled && <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                            } */}
                                                            Update
                                                        </AnimatedButton>

                                                    </div>
                                                </div>
                                            </ScrollArea>
                                        </SheetContent>
                                    </Sheet>
                                    <Button onClick={async () => {
                                        await deleteDoc(doc(db, "specialties", items.id));
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













