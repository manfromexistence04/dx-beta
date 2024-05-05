"use client"

import { initializeApp } from "firebase/app";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, getFirestore, doc, getDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDaTltvsBtb0PUUNqjNPKpUTzHyLuhefiY",
  authDomain: "ustudy-70041.firebaseapp.com",
  projectId: "ustudy-70041",
  storageBucket: "ustudy-70041.appspot.com",
  messagingSenderId: "209553469910",
  appId: "1:209553469910:web:5787a019905baf47c73477",
  measurementId: "G-NNPVVRK9VK"
};

// Initialize Firebase
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


function CarouselPlugin1() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

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

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div>
                <Card>
                  <CardContent className="flex items-center justify-center h-full w-full text-center !p-0">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <Image
                        src="/portfolio-showcase-one.png"
                        alt="Photo by Drew Beamer"
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
          ))}
        </CarouselContent>
        <div className="glass absolute bottom-3 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground w-[95%] h-16 px-5 flex justify-between items-center rounded-2xl mx-auto border">
          <CarouselPrevious className="!relative !top-0 !left-0 -translate-y-0 !bg-transparent border text-white hover:text-white border-white" />
          <span className="flex-1 text-center text-white">Slide {current} of {count}</span>
          <CarouselNext className="!relative !top-0 !right-0 -translate-y-0 !bg-transparent border text-white border-white hover:text-white" />
        </div>
      </Carousel>
    </div>

  )
}
function CarouselPlugin2() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

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

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div>
                <Card>
                  <CardContent className="flex items-center justify-center h-full w-full text-center !p-0">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <Image
                        src="/portfolio-showcase-two.png"
                        alt="Photo by Drew Beamer"
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
          ))}
        </CarouselContent>
        <div className="glass absolute bottom-3 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground w-[95%] h-16 px-5 flex justify-between items-center rounded-2xl mx-auto border">
          <CarouselPrevious className="!relative !top-0 !left-0 -translate-y-0 !bg-transparent border text-white hover:text-white border-white" />
          <span className="flex-1 text-center text-white">Slide {current} of {count}</span>
          <CarouselNext className="!relative !top-0 !right-0 -translate-y-0 !bg-transparent border text-white border-white hover:text-white" />
        </div>
      </Carousel>
    </div>

  )
}
function CarouselPlugin3() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

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

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div>
                <Card>
                  <CardContent className="flex items-center justify-center h-full w-full text-center !p-0">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <Image
                        src="/portfolio-showcase-three.jpg"
                        alt="Photo by Drew Beamer"
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
          ))}
        </CarouselContent>
        <div className="glass absolute bottom-3 left-1/2 transform -translate-x-1/2 text-sm text-muted-foreground w-[95%] h-16 px-5 flex justify-between items-center rounded-2xl mx-auto border">
          <CarouselPrevious className="!relative !top-0 !left-0 -translate-y-0 !bg-transparent border text-white hover:text-white border-white" />
          <span className="flex-1 text-center text-white">Slide {current} of {count}</span>
          <CarouselNext className="!relative !top-0 !right-0 -translate-y-0 !bg-transparent border text-white border-white hover:text-white" />
        </div>
      </Carousel>
    </div>

  )
}
function RotateText() {
  const words = ["Portflio", "Management"];
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

function Card1() {
  return (
    <Card className="hover-glow-border w-full relative hover:bg-primary-foreground">
      <CarouselPlugin1 />
      <div className="absolute bottom-4 left-4">
        <img
          alt="Portflio Logo"
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
          <h2 className="text-2xl font-bold">Portflio of Vercel</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-3">
            <LocateIcon className="h-4 w-4" />
            <span>New York, USA</span>
            <Separator className="h-4" orientation="vertical" />
            <GlobeIcon className="h-4 w-4" />
            <span>International</span>
          </div>
        </div>
        <p className="text-overflow-clamp text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          The Portflio of Vercel is a leading institution of higher education, known for its innovative curriculum,
          world-class faculty, and vibrant campus life. With campuses in New York and San Francisco, the Portflio
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

function Card2() {
  return (
    <Card className="hover-glow-border w-full relative hover:bg-primary-foreground">
      <CarouselPlugin2 />
      <div className="absolute bottom-4 left-4">
        <img
          alt="Portflio Logo"
          className="w-12 h-12 rounded-full"
          height={50}
          src="/naruto.png"
          style={{
            aspectRatio: "50/50",
            objectFit: "cover",
          }}
          width={50}
        />
      </div>
      <CardContent className="p-6 space-y-4">
        <div>
          <h2 className="text-2xl font-bold">Portflio of Microsoft</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-3">
            <LocateIcon className="h-4 w-4" />
            <span>California, USA</span>
            <Separator className="h-4" orientation="vertical" />
            <GlobeIcon className="h-4 w-4" />
            <span>International</span>
          </div>
        </div>
        <p className="text-overflow-clamp text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          The Portflio of Microsoft is a leading institution of higher education, known for its innovative curriculum,
          world-class faculty, and vibrant campus life. With campuses in New York and San Francisco, the Portflio
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

function Card3() {
  return (
    <Card className="hover-glow-border w-full relative hover:bg-primary-foreground">
      <CarouselPlugin3 />
      <div className="absolute bottom-4 left-4">
        <img
          alt="Portflio Logo"
          className="w-12 h-12 rounded-full"
          height={50}
          src="/✶┆Obito Uchiha.png"
          style={{
            aspectRatio: "50/50",
            objectFit: "cover",
          }}
          width={50}
        />
      </div>
      <CardContent className="p-6 space-y-4">
        <div>
          <h2 className="text-2xl font-bold">Portflio of Google</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-3">
            <LocateIcon className="h-4 w-4" />
            <span>Las vegas, USA</span>
            <Separator className="h-4" orientation="vertical" />
            <GlobeIcon className="h-4 w-4" />
            <span>International</span>
          </div>
        </div>
        <p className="text-overflow-clamp text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          The Google of Microsoft is a leading institution of higher education, known for its innovative curriculum,
          world-class faculty, and vibrant campus life. With campuses in New York and San Francisco, the Portflio
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
export default function Component() {

  const [universities, setUniversities] = useState([]);
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  const handleConfetti = async () => {
    const Read = await getDocs(collection(db, "universities"));
    Read.forEach((doc) => {
      let newArray: any = doc.data();
      setUniversities(newArray);
      console.log(`${doc.id} => ${doc.data().address}`);
      alert(newArray);
    });
  };
  // const plugin = React.useRef(
  //   Autoplay({ delay: 2000, stopOnInteraction: true })
  // )
  // const [api, setApi] = React.useState<CarouselApi>()
  // const [current, setCurrent] = React.useState(0)
  // const [count, setCount] = React.useState(0)

  // React.useEffect(() => {
  //   if (!api) {
  //     return
  //   }

  //   setCount(api.scrollSnapList().length)
  //   setCurrent(api.selectedScrollSnap() + 1)

  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap() + 1)
  //   })
  // }, [api]);
  // React.useEffect(() => {

  //   const handleConfetti = async () => {
  //     const Read = await getDocs(collection(db, "universities"));
  //     Read.forEach((doc) => {
  //       let newArray: any = doc.data();
  //       setUniversities(newArray);
  //       console.log(`${doc.id} => ${doc.data().address}`);
  //       // alert(newArray);
  //     });
  //   };
  //   handleConfetti();
  // }, []);
  React.useEffect(() => {
    // const fetchData = async () => {
    //   setIsLoading(true);
    //   try {
    //     // const doc = await firebase.firestore().collection('yourCollection').doc('yourDoc').get();
    //     // const data = doc.data() as any;
    //     const Read = await getDocs(collection(db, "universities"));
    //     Read.forEach((doc) => {
    //       let newArray: any = doc.data();
    //       setUniversities(newArray);
    //     setData(newArray);
    //     });
    //   } catch (error) {
    //     console.error('Failed to fetch data:', error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    // fetchData();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "universities"));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as any));
        setData(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <main className="w-full py-5 px-[5%] h-auto">
      <div className="flex items-center justify-between mb-6">

        {/* <RotateText /> */}
        <span className="text-center font-display text-lg font-bold tracking-[-0.02em] drop-shadow-sm md:text-3xl md:leading-[5rem]">Portflios</span>
        {/* <Link href="/create-university">
          <Button size="sm">Add New Portflio</Button>
        </Link> */}
        <Button onClick={handleConfetti} size="sm">Add New Portflio</Button>

      </div>
      <div className="admin-panel-lists ">
        {/* {universities} */}



        {/* <div className="flex flex-col space-y-3 rounded-xl border min-h-max p-5 w-auto">
          <Skeleton className="h-[225px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-7 w-full" />
            <Skeleton className="h-7 w-full" />
          </div>
        </div>
        <div className="flex flex-col space-y-3 rounded-xl border min-h-max p-5 w-auto">
          <Skeleton className="h-[225px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-7 w-full" />
            <Skeleton className="h-7 w-full" />
          </div>
        </div> */}




      </div>
      <div className="bg-primary-foreground h-max w-full mx-auto p-5 border rounded-md overflow-x-hidden">
        {/* {data.map((item: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
        <div key={item.id}>
          {item.name}
        </div>
      ))} */}
        {JSON.stringify(data)}
        {/* {data.map((item: {
            [x: string]: ReactNode; id: React.Key | null | undefined;
          }) => (
            <div key={item.id}>
              {item.title}
            </div>
          ))} */}

      </div>
    </main>
  )
}

// export default function Portflio() {
//   return (
//     <>
//       <Component />
//     </>
//   )
// }
