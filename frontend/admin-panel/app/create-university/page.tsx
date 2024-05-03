"use client"
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
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
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
import React from "react";
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


export default function CreateUniversity() {
    return (
        <>
            <div className="create-university min-h-[100vh] border w-[80%] lg:flex lg:flex-col lg:space-y-3 mx-auto p-10 mt-5">
                <div className="name-logo-description-university w-full grid gap-3">
                    <h1 className="center w-full h-[250px] border rounded-md">Name</h1>
                    <h1 className="center w-full h-[250px]">Logo</h1>
                    <h1 className="center w-full h-[250px]">Description</h1>
                    {/* <h1>Logo</h1>
                <h1>Description</h1> */}
                </div>
                <div className="tag-location-university flex w-full flex-row items-center justify-between">
                    <h1 className="center w-full h-[250px]">Tag</h1>
                    <h1 className="center w-full h-[250px]">Location</h1>
                </div>

                <h1>Images</h1>
                <h1>Overview</h1>
            </div>
        </>
    )
}
