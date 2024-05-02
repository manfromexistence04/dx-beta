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

export function RotateText() {
  const words = ["University", "Management"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={words[index]}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-center font-display text-lg font-bold tracking-[-0.02em] drop-shadow-sm md:text-3xl md:leading-[5rem]"
      >
        {words[index]}
      </motion.h1>
    </AnimatePresence>
  );
}

export function Cards() {
  return (
    <Card className="w-full relative overflow-hidden">
      <img
        alt="University Image"
        className="w-full h-[250px] object-cover "
        height="300"
        src="/doraemon.png"
        style={{
          aspectRatio: "16/9",
          objectFit: "cover",
        }}
        width="250"
      />
      <div className="absolute bottom-4 left-4">
        <img
          alt="University Logo"
          className="w-12 h-12 rounded-full"
          height={50}
          src="/✶┆.jpg"
          style={{
            aspectRatio: "50/50",
            objectFit: "cover",
          }}
          width={50}
        />
      </div>
      <CardContent className="p-6 space-y-4">
        <div>
          <h2 className="text-2xl font-bold">University of Vercel</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-3">
            <LocateIcon className="h-4 w-4" />
            <span>New York, USA</span>
            <Separator className="h-4" orientation="vertical" />
            <GlobeIcon className="h-4 w-4" />
            <span>International</span>
          </div>
        </div>
        <p className="text-overflow-clamp text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          The University of Vercel is a leading institution of higher education, known for its innovative curriculum,
          world-class faculty, and vibrant campus life. With campuses in New York and San Francisco, the university
          offers a diverse range of undergraduate and graduate programs, preparing students to become leaders in their
          fields.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end p-4 space-x-2">
        <Button variant="outline">Update</Button>
        <Button variant="secondary">Delete</Button>
        {/* <Button>View</Button> */}
      </CardFooter>
    </Card>
  )
}
export function Component() {
  return (
    <main className="w-full py-5 px-[5%] h-auto">
      <div className="flex items-center justify-between mb-6">

        {/* <RotateText /> */}
        <span className="text-center font-display text-lg font-bold tracking-[-0.02em] drop-shadow-sm md:text-3xl md:leading-[5rem]">Universities</span>
        <Button size="sm">Add New University</Button>
      </div>
      <div className="admin-panel-lists ">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </main>
  )
}

export default function Universities() {
  return (
    <>
      <Component />
    </>
  )
}
