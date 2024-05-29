"use client"

/* eslint-disable tailwindcss/no-contradicting-classname */
import { useCallback, useEffect, useState } from "react"
import * as React from "react"
import type { NextPage } from "next"
import Image from "next/image"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
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
import { ArrowLeft, ArrowRight, Check, ChevronsUpDown } from "lucide-react"
import { z } from "zod"
import { useToast } from "@/registry/default/ui/use-toast"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion"
import { Button } from "@/registry/default/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { taskSchema } from "./data/schema"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]
const firebaseConfig = {
  apiKey: "AIzaSyAj8jpnqU9Xo1YXVFJh-wCdulweO5z--H8",
  authDomain: "ustudy-96678.firebaseapp.com",
  projectId: "ustudy-96678",
  storageBucket: "ustudy-96678.appspot.com",
  messagingSenderId: "581632635532",
  appId: "1:581632635532:web:51ccda7d7adce6689a81a9",
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Database
const db: any = getFirestore(app)

function uuid() {
  return crypto.getRandomValues(new Uint32Array(1))[0].toString()
}

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<any | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollTo = React.useCallback(() => {
      api?.scrollTo(0, true)
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          scrollTo,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel()

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext, scrollPrev, canScrollPrev } =
    useCarousel()

  return (
    <Button
      variant="outline"
      className={cn(
        "relative",
        orientation === "horizontal"
          ? "bottom-0 left-1 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
        !canScrollPrev ? "hidden" : !canScrollNext ? "hidden" : "inline-flex"
      )}
      onClick={scrollPrev}
      {...props}
    >
      Back
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const {
    orientation,
    scrollNext,
    canScrollNext,
    scrollPrev,
    canScrollPrev,
    scrollTo,
  } = useCarousel()

  return (
    <Button
      variant={variant}
      className={cn(
        "relative",
        orientation === "horizontal"
          ? "bottom-0 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className,
        !canScrollPrev ? "left-0" : "left-5"
      )}
      onClick={!canScrollNext ? scrollTo : scrollNext}
      {...props}
    >
      {/* <ArrowRight className="size-4" />
      <span className="sr-only">Next slide</span> */}
      {/* {!canScrollNext ? "Click Back To Calculate Again" : "Next"} */}
      {!canScrollPrev ? "Start" : !canScrollNext ? "Calculate Again" : "Next"}

      {/* Next */}
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

const fetchDocument = async (docId: any) => {
  const docRef = doc(db, "specialties", docId)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
}

const CalculatorPage: NextPage = () => {

  let startScore, e1: number, e2: number, e3: number, possibleScore: any, admissionChance: any;
  const [ENTSCRORE, setENTSCRORE] = useState(0);
  const { toast } = useToast()
  const [userScore, setUserScore] = useState<number>(101); // Initial userScore
  const [UserPoint, setUserPoint] = useState<number>(0);
  const [PossibleScore, setPossibleScore] = useState<number>(0);
  const [Result, setResult] = useState<string>('');


  // const calculateAdmissionChance = () => {

  //   let possibleScore = calculatePossibleScore(e1, e2, e3);
  //   let admissionChance = calculateChance(userScore, possibleScore);
  //   return Math.min(Math.floor(admissionChance), 100);
  //   alert(`possibleScore${possibleScore} & admissionChance${admissionChance}`)

  //   // setENTPOINT(possibleScore);
  //   // setCalculation(admissionChance);
  // };

  // const calculatePossibleScore = (e1: number, e2: number, e3: number) => {
  //   return Math.min(e1 + e2 - e1 + e3 - e2 * 2 * 3, 140);
  // };

  // const calculateChance: any = (userScore: number, possibleScore: number) => {
  //   let chance;
  //   if (userScore < 50) {
  //     chance = 50 + ((userScore - 50) + (140 - 50)) / 3;
  //   } else {
  //     chance = 50 + ((userScore - possibleScore) + (140 - possibleScore))
  //   }
  // }

  // const calculateAdmissionChance = (startScore: number, e1: number, e2: number, e3: number, userScore: number): number => {
  //   let possibleScore = calculatePossibleScore(e1, e2, e3);
  //   let admissionChance = calculateChance(userScore, possibleScore);
  //   return Math.min(Math.floor(admissionChance), 100);
  //   setENTSCRORE(possibleScore);
  // }

  // const calculatePossibleScore = (e1: number, e2: number, e3: number): number => {
  //   let possibleScore = e1 + e2 - e1 + e3 - e2 * 2 * 3;
  //   return possibleScore <= 140 ? possibleScore : 140;
  // }

  // const calculateChance = (userScore: number, possibleScore: number): number => {
  //   let chance;
  //   if (userScore < 50) {
  //     chance = 50 + ((userScore - 50) + (140 - 50)) / 3;
  //   } else {

  //     chance = 50 + ((userScore - possibleScore) + (140 - possibleScore)) / 3;
  //   }
  //   return chance;
  // }

  // const calculateAdmissionChance = (startScore: number, e1: number, e2: number, e3: number, userScore: number): number => {
  //   if (startScore >= userScore) {
  //     return 0;
  //   } else {
  //     let possibleScore = calculatePossibleScore(e1, e2, e3);
  //     let admissionChance = calculateChance(userScore, possibleScore);
  //     return Math.min(Math.floor(admissionChance), 100);
  //   }
  // }

  // const calculatePossibleScore = (e1: number, e2: number, e3: number): number => {
  //   let possibleScore = e1 + e2 - e1 + e3 - e2 * 2 * 3;
  //   return possibleScore <= 140 ? possibleScore : 140;
  // }

  // const calculateChance = (userScore: number, possibleScore: number): number => {
  //   let chance = 50 + (userScore - possibleScore) / ((140 - possibleScore) * 3) * 100;
  //   return chance;
  // }

  // const calculateChance = (userScore: number, possibleScore: number): number => {
  //   if (140 - possibleScore === 0) {
  //     return 100; // or whatever value makes sense in this case
  //   }
  //   let chance = 50 + (userScore - possibleScore) / ((140 - possibleScore) * 3) * 100;
  //   return chance;
  // }


  // const { orientation, scrollNext, canScrollNext, scrollPrev, canScrollPrev, scrollTo } = useCarousel()
  // const tasks = [];
  const [tasks, setTasks] = useState<any[]>([])
  const [ENTPOINT, setENTPOINT] = React.useState(100)
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [specialtyCount, setSpecialtyCount] = useState(0)
  const [universityCount, setUniversityCount] = useState(0)
  const [specialtyTheshold, setSpecialtyTheshold] = useState("")
  const [universityTheshold, setUniversityTheshold] = useState("")
  const [specialtiesUnderThreshold, setSpecialtiesUnderThreshold] = useState<
    string[]
  >([])
  const [universitiesUnderThreshold, setUniversitiesUnderThreshold] = useState<
    string[]
  >([])
  const [quota, setQuota] = React.useState("...")
  const [selectedSpecialty, setSelectedSpecialty] = React.useState("")
  const [selectedSpecialtyQuota, setSelectedSpecialtyQuota] = React.useState("")
  const [selectedSubject, setSelectedSubject] = React.useState("")
  const [specialties, setSpecialties] = useState<any[]>([])
  const [universities, setUniversities] = useState<any[]>([])
  const [subjects, setSubjects] = useState<any[]>([])
  const [subjectsTag, setSubjectsTag] = React.useState<any[]>([])
  const [universitiesTag, setUniversitiesTag] = React.useState<any[]>([])
  const [minScroresTag, setMinScroresTag] = React.useState<any[]>([])
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [specialityIdentifier, setSpecialityIdentifier] = React.useState(specialties[0] ? specialties[0].id : "5ttgK6fPoGe90dIei3Oy")
  const [resultSubjects, setResultSubjects] = React.useState([])
  const [lastUniversityCode, setLastUniversityCode] = React.useState("")
  const [calculation, setCalculation] = React.useState("")
  const [showAllSpecialty, setShowAllSpecialty] = React.useState(false);
  const [stillShowAllSpecialty, setStillShowAllSpecialty] = React.useState(false);
  const [specialtyDoc, setSpecialtyDoc] = useState<any>([])

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

  // function calculateAdmissionChance(
  //   startScore: number,
  //   e1: number,
  //   e2: number,
  //   e3: number,
  //   userScore: number
  // ): number {
  //   if (startScore >= userScore) {
  //     return 0
  //   } else {
  //     let possibleScore = calculatePossibleScore(e1, e2, e3)
  //     let admissionChance = calculateChance(userScore, possibleScore)
  //     return Math.min(Math.floor(admissionChance), 100)
  //   }
  // }
  // function calculatePossibleScore(e1: number, e2: number, e3: number): number {
  //   let possibleScore = e1 + e2 - e1 + e3 - e2 * 2 * 3
  //   return possibleScore <= 140 ? possibleScore : 140
  // }
  // function calculateChance(userScore: number, possibleScore: number): number {
  //   let chance =
  //     50 + ((userScore - possibleScore) / ((140 - possibleScore) * 3)) * 100
  //   return chance
  // }
  // let startScore = 100; // University Theshold
  // let e1 = 95;          // 2021
  // let e2 = 93;          // 2022
  // let e3 = 97;          // 2023
  // let userScore = 394;  // Ent Scrore
  // let admissionChance = calculateAdmissionChance(startScore, e1, e2, e3, userScore);
  // console.log(`The chance of admission is ${admissionChance}%`);


  useEffect(() => {
    const fetchSpecilaties = async () => {
      const querySnapshot = await getDocs(collection(db, "specialties"))
      const newDocs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setSpecialties(newDocs)
    }
    const fetchUniversities = async () => {
      const querySnapshot = await getDocs(collection(db, "universities"))
      const newDocs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setUniversities(newDocs)
    }
    const fetchSubjects = async () => {
      const querySnapshot = await getDocs(collection(db, "subjects"))
      const newDocs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setSubjects(newDocs)
    }
    const fetchDocs = async () => {
      const data: any = await fetchDocument(specialityIdentifier)
      setSpecialtyDoc(data)
    }

    fetchDocs()
    fetchSpecilaties()
    fetchUniversities()
    fetchSubjects()
  }, [])

  useEffect(() => {
    // const fetchSpecilaties = async () => {
    //   const querySnapshot = await getDocs(collection(db, "specialties"))
    //   const newDocs = querySnapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }))
    //   setSpecialties(newDocs)
    // }
    // const fetchUniversities = async () => {
    //   const querySnapshot = await getDocs(collection(db, "universities"))
    //   const newDocs = querySnapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }))
    //   setUniversities(newDocs)
    // }
    // const fetchSubjects = async () => {
    //   const querySnapshot = await getDocs(collection(db, "subjects"))
    //   const newDocs = querySnapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    //   }))
    //   setSubjects(newDocs)
    // }
    const fetchDocs = async () => {
      const data: any = await fetchDocument(specialityIdentifier)
      setSpecialtyDoc(data)
    }

    fetchDocs()
    // fetchSpecilaties()
    // fetchUniversities()
    // fetchSubjects()
  }, [value])

  // useEffect(() => {
  //   switch (quota) {
  //     case "GeneralCompetition":
  //       startScore = specialtyDoc?.possibleScoreGeneralCompetition || 0;
  //       e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
  //       e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
  //       e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
  //       break;
  //     case "RuralQuota":
  //       startScore = specialtyDoc?.possibleScoreRuralQuota || 0;
  //       e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
  //       e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
  //       e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
  //       break;
  //     case "DisabilityQuota":
  //       startScore = specialtyDoc?.possibleScoreDisabilityQuota || 0;
  //       e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
  //       e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
  //       e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
  //       break;
  //     case "LargeFamilyQuota":
  //       startScore = specialtyDoc?.possibleScoreLargeFamilyQuota || 0;
  //       e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
  //       e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
  //       e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
  //       break;
  //     case "OrphanQuota":
  //       startScore = specialtyDoc?.possibleScoreOrphanQuota || 0;
  //       e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
  //       e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
  //       e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
  //       break;
  //     default:
  //       console.error("Invalid quota selected:", quota);
  //       break;
  //   }
  //   // Calculate admission chance and possible score
  //   const calculateAdmissionChance = () => {

  //     let possibleScore = calculatePossibleScore(e1, e2, e3);
  //      let admissionChance = calculateChance(userScore, possibleScore);
  //     return Math.min(Math.floor(admissionChance), 100);

  //     // setENTPOINT(possibleScore);
  //     // setCalculation(admissionChance);
  //   };

  //   const calculatePossibleScore = (e1: number, e2: number, e3: number) => {
  //     return Math.min(e1 + e2 - e1 + e3 - e2 * 2 * 3, 140);
  //   };

  //   const calculateChance:any = (userScore: number, possibleScore: number) => {
  //     let chance;
  //     if (userScore < 50) {
  //       chance = 50 + ((userScore - 50) + (140 - 50)) / 3;
  //     } else {
  //       chance = 50 + ((userScore - possibleScore) + (140 - possibleScore))
  //     }
  //   }

  //   calculateAdmissionChance();
  //   alert(`possibleScore${calculateAdmissionChance()} & admissionChance${admissionChance}`)

  //   // possibleScore = calculatePossibleScore(e1=0, e2=0, e3=0);
  //   // admissionChance = calculateChance(userScore, possibleScore);
  //   setENTPOINT(calculatePossibleScore(e1, e2, e3));
  //   setCalculation(calculateChance(userScore, possibleScore));

  //   // switch (quota) {
  //   //   case "GeneralCompetition":
  //   //     startScore = specialtyDoc?.possibleScoreGeneralCompetition || 0;
  //   //     e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
  //   //     e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
  //   //     e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
  //   //     break;
  //   //   case "RuralQuota":
  //   //     startScore = specialtyDoc?.possibleScoreRuralQuota || 0;
  //   //     e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
  //   //     e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
  //   //     e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
  //   //     break;
  //   //   case "DisabilityQuota":
  //   //     startScore = specialtyDoc?.possibleScoreDisabilityQuota || 0;
  //   //     e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
  //   //     e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
  //   //     e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
  //   //     break;
  //   //   case "LargeFamilyQuota":
  //   //     startScore = specialtyDoc?.possibleScoreLargeFamilyQuota || 0;
  //   //     e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
  //   //     e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
  //   //     e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
  //   //     break;
  //   //   case "OrphanQuota":
  //   //     startScore = specialtyDoc?.possibleScoreOrphanQuota || 0;
  //   //     e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
  //   //     e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
  //   //     e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
  //   //     break;
  //   //   default:
  //   //     console.error("Invalid quota selected:", quota);
  //   //     break;
  //   // }
  //   // // Calculate admission chance and possible score
  //   // const calculateAdmissionChance = () => {
  //   //   const possibleScore = calculatePossibleScore(e1, e2, e3);
  //   //   const admissionChance: any = calculateChance(userScore, possibleScore);
  //   //   return Math.min(Math.floor(admissionChance), 100);
  //   //   setENTPOINT(possibleScore);
  //   //   setCalculation(admissionChance);

  //   // };

  //   // const calculatePossibleScore = (e1: number, e2: number, e3: number) => {
  //   //   return Math.min(e1 + e2 - e1 + e3 - e2 * 2 * 3, 140);
  //   // };

  //   // const calculateChance = (userScore: number, possibleScore: number) => {
  //   //   let chance;
  //   //   if (userScore < 50) {
  //   //     chance = 50 + ((userScore - 50) + (140 - 50)) / 3;
  //   //   } else {
  //   //     chance = 50 + ((userScore - possibleScore) + (140 - possibleScore))
  //   //   }
  //   // }

  //   // // calculateAdmissionChance();

  //   // possibleScore = calculatePossibleScore(e1, e2, e3);
  //   // admissionChance = calculateChance(userScore, possibleScore);
  //   // // return Math.min(Math.floor(admissionChance), 100);
  //   // setENTPOINT(possibleScore);
  //   // setCalculation(admissionChance);


  // }, [value])


  function handleENTChange(e: { target: { value: any } }) {
    setENTPOINT(e.target.value)
    setUserScore(e.target.value)
  }
  // function handleQuotaChange(e: any) {
  //   setQuota(e)
  //   if (e === "GeneralCompetition") {
  //     let tempSpecialtyCount = 0
  //     let tempUniversityCount = 0

  //     universities.forEach((university) => {
  //       if (specialtyDoc.possibleScoreGeneralCompetition
  //         < ENTPOINT) {
  //         tempUniversityCount++
  //       } else {
  //       }
  //     })

  //     specialties.forEach((university) => {
  //       if (specialtyDoc.possibleScoreGeneralCompetition
  //         < ENTPOINT) {
  //         tempSpecialtyCount++
  //       } else {
  //       }
  //     })

  //     setUniversityCount(tempUniversityCount)
  //     setSpecialtyCount(tempSpecialtyCount)

  //     let startScore: any = specialtyDoc
  //       ? specialtyDoc.possibleScoreGeneralCompetition
  //       : 100 // University Theshold
  //     let e1 = specialtyDoc
  //       ? specialtyDoc.minscrore &&
  //       specialtyDoc.minscrore.map((item: any) => item[0])
  //       : 100 // 2021
  //     let e2 = specialtyDoc
  //       ? specialtyDoc.minscrore &&
  //       specialtyDoc.minscrore.map((item: any) => item[1])
  //       : 100 // 2022
  //     let e3 = specialtyDoc
  //       ? specialtyDoc.minscrore &&
  //       specialtyDoc.minscrore.map((item: any) => item[2])
  //       : 100 // 2023
  //     const calculateAdmissionChance = (startScore: number, e1: number, e2: number, e3: number, userScore: number): number => {
  //       let possibleScore = calculatePossibleScore(e1, e2, e3);
  //       let admissionChance = calculateChance(userScore, possibleScore);
  //       return Math.min(Math.floor(admissionChance), 100);
  //       setENTSCRORE(possibleScore);
  //     }

  //     const calculatePossibleScore = (e1: number, e2: number, e3: number): number => {
  //       let possibleScore = e1 + e2 - e1 + e3 - e2 * 2 * 3;
  //       return possibleScore <= 140 ? possibleScore : 140;
  //     }

  //     const calculateChance = (userScore: number, possibleScore: number): number => {
  //       let chance;
  //       if (userScore < 50) {
  //         chance = 50 + ((userScore - 50) + (140 - 50)) / 3;
  //       } else {

  //         chance = 50 + ((userScore - possibleScore) + (140 - possibleScore)) / 3;
  //       }
  //       return chance;
  //     }

  //     let admissionChance: any = calculateAdmissionChance(startScore, e1, e2, e3, userScore);
  //     setCalculation(admissionChance);
  //     setENTSCRORE(calculatePossibleScore(e1, e2, e3))
  //     // console.log(`possibleScoreGeneralCompetition is selected and admission chance is ${admissionChance}`)

  //   } else if (e === "RuralQuota") {

  //     let tempSpecialtyCount = 0
  //     let tempUniversityCount = 0

  //     universities.forEach((university) => {
  //       if (specialtyDoc.possibleScoreRuralQuota
  //         < ENTPOINT) {
  //         tempUniversityCount++
  //       } else {
  //       }
  //     })

  //     specialties.forEach((university) => {
  //       if (specialtyDoc.possibleScoreRuralQuota
  //         < ENTPOINT) {
  //         tempSpecialtyCount++
  //       } else {
  //       }
  //     })

  //     setUniversityCount(tempUniversityCount)
  //     setSpecialtyCount(tempSpecialtyCount)


  //     let startScore: any = specialtyDoc
  //       ? specialtyDoc.possibleScoreRuralQuota
  //       : 100 // University Theshold
  //     let e1 = specialtyDoc
  //       ? specialtyDoc.minscrore &&
  //       specialtyDoc.minscrore.map((item: any) => item[0])
  //       : 100 // 2021
  //     let e2 = specialtyDoc
  //       ? specialtyDoc.minscrore &&
  //       specialtyDoc.minscrore.map((item: any) => item[1])
  //       : 100 // 2022
  //     let e3 = specialtyDoc
  //       ? specialtyDoc.minscrore &&
  //       specialtyDoc.minscrore.map((item: any) => item[2])
  //       : 100 // 2023

  //     const calculateAdmissionChance = (startScore: number, e1: number, e2: number, e3: number, userScore: number): number => {
  //       let possibleScore = calculatePossibleScore(e1, e2, e3);
  //       let admissionChance = calculateChance(userScore, possibleScore);
  //       return Math.min(Math.floor(admissionChance), 100);
  //       setENTSCRORE(possibleScore);
  //     }

  //     const calculatePossibleScore = (e1: number, e2: number, e3: number): number => {
  //       let possibleScore = e1 + e2 - e1 + e3 - e2 * 2 * 3;
  //       return possibleScore <= 140 ? possibleScore : 140;
  //     }

  //     const calculateChance = (userScore: number, possibleScore: number): number => {
  //       let chance;
  //       if (userScore < 50) {
  //         chance = 50 + ((userScore - 50) + (140 - 50)) / 3;
  //       } else {

  //         chance = 50 + ((userScore - possibleScore) + (140 - possibleScore)) / 3;
  //       }
  //       return chance;
  //     }

  //     let admissionChance: any = calculateAdmissionChance(startScore, e1, e2, e3, userScore);

  //     setCalculation(admissionChance);
  //     setENTSCRORE(calculatePossibleScore(e1, e2, e3))
  //     // console.log("possibleScoreRuralQuota is selected")
  //   } else if (e === "DisabilityQuota") {

  //     let tempSpecialtyCount = 0
  //     let tempUniversityCount = 0

  //     universities.forEach((university) => {
  //       if (specialtyDoc.possibleScoreDisabilityQuota
  //         < ENTPOINT) {
  //         tempUniversityCount++
  //       } else {
  //       }
  //     })

  //     specialties.forEach((university) => {
  //       if (specialtyDoc.possibleScoreDisabilityQuota
  //         < ENTPOINT) {
  //         tempSpecialtyCount++
  //       } else {
  //       }
  //     })

  //     setUniversityCount(tempUniversityCount)
  //     setSpecialtyCount(tempSpecialtyCount)

  //     let startScore: any = specialtyDoc
  //       ? specialtyDoc.possibleScoreDisabilityQuota
  //       : 100 // University Theshold
  //     let e1 = specialtyDoc
  //       ? specialtyDoc.minscrore &&
  //       specialtyDoc.minscrore.map((item: any) => item[0])
  //       : 100 // 2021
  //     let e2 = specialtyDoc
  //       ? specialtyDoc.minscrore &&
  //       specialtyDoc.minscrore.map((item: any) => item[1])
  //       : 100 // 2022
  //     let e3 = specialtyDoc
  //       ? specialtyDoc.minscrore &&
  //       specialtyDoc.minscrore.map((item: any) => item[2])
  //       : 100 // 2023


  //     const calculateAdmissionChance = (startScore: number, e1: number, e2: number, e3: number, userScore: number): number => {
  //       let possibleScore = calculatePossibleScore(e1, e2, e3);
  //       let admissionChance = calculateChance(userScore, possibleScore);
  //       return Math.min(Math.floor(admissionChance), 100);
  //       setENTSCRORE(possibleScore);
  //     }

  //     const calculatePossibleScore = (e1: number, e2: number, e3: number): number => {
  //       let possibleScore = e1 + e2 - e1 + e3 - e2 * 2 * 3;
  //       return possibleScore <= 140 ? possibleScore : 140;
  //     }

  //     const calculateChance = (userScore: number, possibleScore: number): number => {
  //       let chance;
  //       if (userScore < 50) {
  //         chance = 50 + ((userScore - 50) + (140 - 50)) / 3;
  //       } else {

  //         chance = 50 + ((userScore - possibleScore) + (140 - possibleScore)) / 3;
  //       }
  //       return chance;
  //     }
  //     let admissionChance: any = calculateAdmissionChance(startScore, e1, e2, e3, userScore);

  //     setCalculation(admissionChance);
  //     setENTSCRORE(calculatePossibleScore(e1, e2, e3))
  //     // console.log("possibleScoreDisabilityQuota is selected")
  //   } else if (e === "LargeFamilyQuota") {

  //     let tempSpecialtyCount = 0
  //     let tempUniversityCount = 0

  //     universities.forEach((university) => {
  //       if (specialtyDoc.possibleScoreLargeFamilyQuota
  //         < ENTPOINT) {
  //         tempUniversityCount++
  //       } else {
  //       }
  //     })

  //     specialties.forEach((university) => {
  //       if (specialtyDoc
  //         ? specialtyDoc.possibleScoreLargeFamilyQuota
  //         : 100 < ENTPOINT) {
  //         tempSpecialtyCount++
  //       } else {
  //       }
  //     })

  //     setUniversityCount(tempUniversityCount)
  //     setSpecialtyCount(tempSpecialtyCount)

  //     let startScore: any = specialtyDoc
  //       ? specialtyDoc.possibleScoreLargeFamilyQuota
  //       : 100 // University Theshold
  //     let e1 = specialtyDoc
  //       ? specialtyDoc.minscrore &&
  //       specialtyDoc.minscrore.map((item: any) => item[0])
  //       : 100 // 2021
  //     let e2 = specialtyDoc
  //       ? specialtyDoc.minscrore &&
  //       specialtyDoc.minscrore.map((item: any) => item[1])
  //       : 100 // 2022
  //     let e3 = specialtyDoc
  //       ? specialtyDoc.minscrore &&
  //       specialtyDoc.minscrore.map((item: any) => item[2])
  //       : 100 // 2023


  //     const calculateAdmissionChance = (startScore: number, e1: number, e2: number, e3: number, userScore: number): number => {
  //       let possibleScore = calculatePossibleScore(e1, e2, e3);
  //       let admissionChance = calculateChance(userScore, possibleScore);
  //       return Math.min(Math.floor(admissionChance), 100);
  //       setENTSCRORE(possibleScore);
  //     }

  //     const calculatePossibleScore = (e1: number, e2: number, e3: number): number => {
  //       let possibleScore = e1 + e2 - e1 + e3 - e2 * 2 * 3;
  //       return possibleScore <= 140 ? possibleScore : 140;
  //     }

  //     const calculateChance = (userScore: number, possibleScore: number): number => {
  //       let chance;
  //       if (userScore < 50) {
  //         chance = 50 + ((userScore - 50) + (140 - 50)) / 3;
  //       } else {

  //         chance = 50 + ((userScore - possibleScore) + (140 - possibleScore)) / 3;
  //       }
  //       return chance;
  //     }
  //     let admissionChance: any = calculateAdmissionChance(startScore, e1, e2, e3, userScore);

  //     setCalculation(admissionChance);
  //     setENTSCRORE(calculatePossibleScore(e1, e2, e3))
  //     // console.log("possibleScoreLargeFamilyQuota is selected")
  //   } else if (e === "OrphanQuota") {

  //     let tempSpecialtyCount = 0
  //     let tempUniversityCount = 0

  //     universities.forEach((university) => {
  //       if (specialtyDoc.possibleScoreOrphanQuota
  //         < ENTPOINT) {
  //         tempUniversityCount++
  //       } else {
  //       }
  //     })

  //     specialties.forEach((university) => {
  //       if (specialtyDoc
  //         ? specialtyDoc.possibleScoreOrphanQuota
  //         : 100 < ENTPOINT) {
  //         tempSpecialtyCount++
  //       } else {
  //       }
  //     })

  //     setUniversityCount(tempUniversityCount)
  //     setSpecialtyCount(tempSpecialtyCount)

  //     let startScore: any = specialtyDoc
  //       ? specialtyDoc.possibleScoreOrphanQuota
  //       : 100 // University Theshold
  //     let e1 = specialtyDoc
  //       ? specialtyDoc.minscrore &&
  //       specialtyDoc.minscrore.map((item: any) => item[0])
  //       : 100 // 2021
  //     let e2 = specialtyDoc
  //       ? specialtyDoc.minscrore &&
  //       specialtyDoc.minscrore.map((item: any) => item[1])
  //       : 100 // 2022
  //     let e3 = specialtyDoc
  //       ? specialtyDoc.minscrore &&
  //       specialtyDoc.minscrore.map((item: any) => item[2])
  //       : 100 // 2023
  //     let userScore = ENTPOINT // Ent Scrore


  //     const calculateAdmissionChance = (startScore: number, e1: number, e2: number, e3: number, userScore: number): number => {
  //       let possibleScore = calculatePossibleScore(e1, e2, e3);
  //       let admissionChance = calculateChance(userScore, possibleScore);
  //       return Math.min(Math.floor(admissionChance), 100);
  //       setENTSCRORE(possibleScore);
  //     }

  //     const calculatePossibleScore = (e1: number, e2: number, e3: number): number => {
  //       let possibleScore = e1 + e2 - e1 + e3 - e2 * 2 * 3;
  //       return possibleScore <= 140 ? possibleScore : 140;
  //     }

  //     const calculateChance = (userScore: number, possibleScore: number): number => {
  //       let chance;
  //       if (userScore < 50) {
  //         chance = 50 + ((userScore - 50) + (140 - 50)) / 3;
  //       } else {

  //         chance = 50 + ((userScore - possibleScore) + (140 - possibleScore)) / 3;
  //       }
  //       return chance;
  //     }
  //     let admissionChance: any = calculateAdmissionChance(
  //       startScore,
  //       e1,
  //       e2,
  //       e3,
  //       userScore
  //     )
  //     setCalculation(admissionChance);
  //     setENTSCRORE(calculatePossibleScore(e1, e2, e3))
  //     // console.log("possibleScoreOrphanQuota is selected")
  //   }
  // }

  function handleQuotaChange(quota: any) {
    setQuota(quota);
    switch (quota) {
      case "GeneralCompetition":
        setPossibleScore(specialtyDoc?.possibleScoreGeneralCompetition || 0)
        break;
      case "RuralQuota":
        setPossibleScore(specialtyDoc && specialtyDoc.possibleScoreRuralQuota && specialtyDoc.possibleScoreRuralQuota || 0)
        break;
      case "DisabilityQuota":
        setPossibleScore(specialtyDoc && specialtyDoc.possibleScoreDisabilityQuota && specialtyDoc.possibleScoreDisabilityQuota || 0)
        break;
      case "LargeFamilyQuota":
        setPossibleScore(specialtyDoc && specialtyDoc.possibleScoreLargeFamilyQuota && specialtyDoc.possibleScoreLargeFamilyQuota || 0)
        break;
      case "OrphanQuota":
        setPossibleScore(specialtyDoc && specialtyDoc.possibleScoreOrphanQuota && specialtyDoc.possibleScoreOrphanQuota || 0)
        break;
      default:
        console.error("Invalid quota selected:", quota);
        setPossibleScore(specialtyDoc && specialtyDoc.possibleGeneralQuota && specialtyDoc.possibleGeneralQuota || 0)
        break;
    }


    // switch (quota) {
    //   case "GeneralCompetition":

    //     // startScore = specialtyDoc?.possibleScoreGeneralCompetition || 0;
    //     setPossibleScore(specialtyDoc?.possibleScoreGeneralCompetition || 0)

    //     // e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
    //     // e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
    //     // e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
    //     break;
    //   case "RuralQuota":
    //     // startScore = specialtyDoc?.possibleScoreRuralQuota || 0;
    //     setPossibleScore(specialtyDoc && specialtyDoc.possibleScoreRuralQuota && specialtyDoc.possibleScoreRuralQuota || 0)

    //     // e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
    //     // e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
    //     // e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
    //     break;
    //   case "DisabilityQuota":
    //     // startScore = specialtyDoc?.possibleScoreDisabilityQuota || 0;
    //     setPossibleScore(specialtyDoc && specialtyDoc.possibleScoreDisabilityQuota && specialtyDoc.possibleScoreDisabilityQuota || 0)

    //     // e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
    //     // e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
    //     // e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
    //     break;
    //   case "LargeFamilyQuota":
    //     // startScore = specialtyDoc?.possibleScoreLargeFamilyQuota || 0;
    //     setPossibleScore(specialtyDoc && specialtyDoc.possibleScoreLargeFamilyQuota && specialtyDoc.possibleScoreLargeFamilyQuota || 0)

    //     // e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
    //     // e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
    //     // e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
    //     break;
    //   case "OrphanQuota":
    //     startScore = specialtyDoc?.possibleScoreOrphanQuota || 0;
    //     setPossibleScore(specialtyDoc && specialtyDoc.possibleScoreOrphanQuota && specialtyDoc.possibleScoreOrphanQuota || 0)

    //     // e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
    //     // e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
    //     // e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
    //     break;
    //   default:
    //     console.error("Invalid quota selected:", quota);
    //     setPossibleScore(specialtyDoc && specialtyDoc.possibleGeneralQuota && specialtyDoc.possibleGeneralQuota || 0)
    //     break;
    // }
    // const calculateAdmissionChance = () => {
    //   let possibleScore = calculatePossibleScore(e1, e2, e3);
    //   let admissionChance = calculateChance(userScore, possibleScore);
    //   admissionChance = Math.min(Math.floor(admissionChance), 100);

    //   // Update the state here
    //   setENTPOINT(possibleScore);
    //   setCalculation(admissionChance);

    //   // alert(`possibleScore${possibleScore} & admissionChance${admissionChance}`)
    // };

    // const calculatePossibleScore = (e1: number, e2: number, e3: number) => {
    //   return Math.min(e1 + e2 - e1 + e3 - e2 * 2 * 3, 140);
    // };

    // const calculateChance: any = (userScore: number, possibleScore: number) => {
    //   let chance;
    //   if (userScore < 50) {
    //     chance = 50 + ((userScore - 50) + (140 - 50)) / 3;
    //   } else {
    //     chance = 50 + ((userScore - possibleScore) + (140 - possibleScore))
    //   }
    //   return chance;
    // }

    // possibleScore = calculatePossibleScore(e1=0, e2=0, e3=0);
    // admissionChance = calculateChance(userScore, possibleScore);
    // admissionChance = Math.min(Math.floor(admissionChance), 100);

    // // Update the state here
    // // setENTPOINT(possibleScore);
    // setCalculation(admissionChance);

    // alert(`possibleScore${possibleScore} & admissionChance${admissionChance}`)

    // calculateAdmissionChance();

    // // Calculate admission chance and possible score
    // const calculateAdmissionChance = () => {

    //   let possibleScore = calculatePossibleScore(e1, e2, e3);
    //    let admissionChance = calculateChance(userScore, possibleScore);
    //   return Math.min(Math.floor(admissionChance), 100);
    //   alert(`possibleScore${possibleScore} & admissionChance${admissionChance}`)

    //   // setENTPOINT(possibleScore);
    //   // setCalculation(admissionChance);
    // };

    // const calculatePossibleScore = (e1: number, e2: number, e3: number) => {
    //   return Math.min(e1 + e2 - e1 + e3 - e2 * 2 * 3, 140);
    // };

    // const calculateChance:any = (userScore: number, possibleScore: number) => {
    //   let chance;
    //   if (userScore < 50) {
    //     chance = 50 + ((userScore - 50) + (140 - 50)) / 3;
    //   } else {
    //     chance = 50 + ((userScore - possibleScore) + (140 - possibleScore))
    //   }
    // }

    // // calculateAdmissionChance();

    // setENTPOINT(calculatePossibleScore(e1, e2, e3));
    // setCalculation(calculateChance(userScore, possibleScore));

    // // possibleScore = calculatePossibleScore(e1=0, e2=0, e3=0);
    // // admissionChance = calculateChance(userScore, possibleScore);

    // // Calculate based on selected quota
    // let tempSpecialtyCount = 0;
    // let tempUniversityCount = 0;
    // let startScore;
    // let e1, e2, e3;

    // switch (quota) {
    //   case "GeneralCompetition":
    //     startScore = specialtyDoc?.possibleScoreGeneralCompetition || 0;
    //     e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
    //     e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
    //     e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
    //     break;
    //   case "RuralQuota":
    //     startScore = specialtyDoc?.possibleScoreRuralQuota || 0;
    //     e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
    //     e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
    //     e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
    //     break;
    //   case "DisabilityQuota":
    //     startScore = specialtyDoc?.possibleScoreDisabilityQuota || 0;
    //     e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
    //     e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
    //     e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
    //     break;
    //   case "LargeFamilyQuota":
    //     startScore = specialtyDoc?.possibleScoreLargeFamilyQuota || 0;
    //     e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
    //     e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
    //     e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
    //     break;
    //   case "OrphanQuota":
    //     startScore = specialtyDoc?.possibleScoreOrphanQuota || 0;
    //     e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
    //     e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
    //     e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
    //     break;
    //   default:
    //     console.error("Invalid quota selected:", quota);
    //     break;
    // }

    // // Calculate admission chance and possible score
    // const calculateAdmissionChance = (startScore: any, e1: any, e2: any, e3: any, userScore: any) => {
    //   const possibleScore = calculatePossibleScore(e1, e2, e3);
    //   const admissionChance = calculateChance(userScore, possibleScore);
    //   return Math.min(Math.floor(admissionChance), 100);
    // };

    // const calculatePossibleScore = (e1: number, e2: number, e3: number) => {
    //   return Math.min(e1 + e2 - e1 + e3 - e2 * 2 * 3, 140);
    // };

    // const calculateChance = (userScore: number, possibleScore: number) => {
    //   let chance;
    //   if (userScore < 50) {
    //     chance = 50 + ((userScore - 50) + (140 - 50)) / 3;
    //   } else {
    //     chance = 50 + ((userScore - possibleScore) + (140 - possibleScore))
    //   }
    // }
    // setENTPOINT(calculatePossibleScore(e1=0, e2=0, e3=0));
    // setCalculation(calculateChance(userScore, possibleScore));
  }

  // const calculateScore = () => {
  //   let result: number;
  //   if (ENTPOINT >= 50) {
  //     result = 50 + ((ENTPOINT - PossibleScore) + (140 - PossibleScore)) / 3;
  //   } else {
  //     result = 50 + ((ENTPOINT - 50) + (140 - 50)) / 3;
  //   }
  //   setResult(result.toFixed(2));

  // }

  // calculateScore();

  // let startScore = 100; // University Theshold
  // let e1 = 100;          // 2021
  // let e2 = 100;          // 2022
  // let e3 = 100;          // 2023
  // let admissionChance: any = calculateAdmissionChance(startScore, e1, e2, e3, userScore);


  // console.log(JSON.stringify(specialtyDoc, null, 2))

  // switch (quota) {
  //   case "GeneralCompetition":
  //     startScore = specialtyDoc?.possibleScoreGeneralCompetition || 0;
  //     e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
  //     e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
  //     e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
  //     break;
  //   case "RuralQuota":
  //     startScore = specialtyDoc?.possibleScoreRuralQuota || 0;
  //     e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
  //     e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
  //     e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
  //     break;
  //   case "DisabilityQuota":
  //     startScore = specialtyDoc?.possibleScoreDisabilityQuota || 0;
  //     e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
  //     e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
  //     e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
  //     break;
  //   case "LargeFamilyQuota":
  //     startScore = specialtyDoc?.possibleScoreLargeFamilyQuota || 0;
  //     e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
  //     e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
  //     e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
  //     break;
  //   case "OrphanQuota":
  //     startScore = specialtyDoc?.possibleScoreOrphanQuota || 0;
  //     e1 = specialtyDoc?.minscrore?.map((item: any[]) => item[0]) || 0;
  //     e2 = specialtyDoc?.minscrore?.map((item: any[]) => item[1]) || 0;
  //     e3 = specialtyDoc?.minscrore?.map((item: any[]) => item[2]) || 0;
  //     break;
  //   default:
  //     console.error("Invalid quota selected:", quota);
  //     break;
  // }
  // // Calculate admission chance and possible score
  // const calculateAdmissionChance = () => {
  //   possibleScore = calculatePossibleScore(e1, e2, e3);
  //    admissionChance = calculateChance(userScore, possibleScore);
  //   return Math.min(Math.floor(admissionChance), 100);
  //   // setENTPOINT(possibleScore);
  //   // setCalculation(admissionChance);
  // };

  // const calculatePossibleScore = (e1: number, e2: number, e3: number) => {
  //   return Math.min(e1 + e2 - e1 + e3 - e2 * 2 * 3, 140);
  // };

  // const calculateChance = (userScore: number, possibleScore: number) => {
  //   let chance;
  //   if (userScore < 50) {
  //     chance = 50 + ((userScore - 50) + (140 - 50)) / 3;
  //   } else {
  //     chance = 50 + ((userScore - possibleScore) + (140 - possibleScore))
  //   }
  // }

  // // calculateAdmissionChance();

  // // possibleScore = calculatePossibleScore(e1=0, e2=0, e3=0);
  // // admissionChance = calculateChance(userScore, possibleScore);
  // setENTPOINT(possibleScore);
  // setCalculation(admissionChance);




  // calculateAdmissionChance();

  // possibleScore = calculatePossibleScore(e1=0, e2=0, e3=0);
  // admissionChance = calculateChance(userScore, possibleScore);
  // setENTPOINT(calculatePossibleScore(e1=0, e2=0, e3=0));
  // setCalculation(calculateChance(userScore, possibleScore));

  const handleClick = () => {
    let result: any, calculatedValue: any;
    if (ENTPOINT >= 50) {
      result = 50 + ((ENTPOINT - PossibleScore || specialtyDoc && specialtyDoc.possibleScoreGeneralCompetition && specialtyDoc.possibleScoreGeneralCompetition) + (140 - PossibleScore || specialtyDoc && specialtyDoc.possibleScoreGeneralCompetition && specialtyDoc.possibleScoreGeneralCompetition)) / 3;
    } else {
      result = 50 + ((ENTPOINT - 50) + (140 - 50)) / 3;
    }
    setResult(result.toFixed(2));
    calculatedValue = result.toFixed(2);

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: specialtyDoc.specialtyCode ? specialtyDoc.specialtyCode : "BD76",
        title: "universities are hoping to see you there!",
        status: `${subjectsTag.map(
          (obj) => `${obj.text || "Information & Communication Technology"}`
        ) || "Creative Exam"
          }`,
        label: specialtyDoc.universities && specialtyDoc.universities.length,
        priority: `${calculatedValue}%`,
        universities: specialtyDoc.universities ? specialtyDoc.universities : "No universities are provided.",
      },
    ])
    toast({
      title: "Calculation is done successfully!",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-primary-foreground p-4">
          <span>Please check the table below to see the calculation results.</span>
        </div>
      ),
    })

    // setSpecialtyCount(tempSpecialtyCount)
    // setUniversityCount(tempUniversityCount)
    // setUniversityTheshold(tempUniversityTheshold)
    // setSpecialtyTheshold(tempSpecialtyTheshold)
    // setLastUniversityCode(tempLastUniversityCode)
  }


  return (
    <div className="calculator">
      {/* <FrameComponent /> */}
      <section className="min-h-min">
        <div className="relative !m-0 box-border flex h-[244px] !w-full max-w-full flex-1 flex-row items-center justify-center gap-[20px] overflow-hidden bg-gray-200 !p-0 pb-[85px] pl-[470px] pr-0 pt-[50px] mq750:box-border mq750:pb-[55px] mq750:pl-[235px] mq750:pt-8 mq450:box-border mq450:pl-5">
          <div className="relative z-0 hidden h-[248px] w-[1440px] max-w-full [background:linear-gradient(180deg,_)]" />
          <div className="flex w-full flex-col items-center justify-center">
            <h1 className="title !m-0 bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              Calculate Your Future
            </h1>
            <span className="text-sm text-primary">
              Make your dream come by calcuting your victory.
            </span>
          </div>
          <img
            className="absolute left-0 top-0 z-[1] lg:min-h-[300px] lg:min-w-[500px]"
            alt=""
            src="/left-shadow.png"
          />
          <img
            className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 lg:min-h-[300px] lg:min-w-[500px]"
            alt=""
            src="/center-shadow.png"
          />
          <img
            className="absolute right-0 top-0 z-[1] lg:min-h-[300px] lg:min-w-[500px]"
            alt=""
            src="/right-shadow.png"
          />
          <img
            className="absolute left-1/3 top-0 z-[1] mx-auto size-[90%] -translate-x-1/2 object-contain lg:min-h-[300px] lg:min-w-[500px]"
            alt=""
            src="/looper-bg.png"
          />
        </div>
        <div className="faq-content mt-10 flex flex-col space-y-5">
          {/* <Calculator /> */}
          <div className="relative z-[1] mx-auto box-border flex w-[1200px] max-w-[90%] flex-col items-start justify-start gap-[48px] rounded-md bg-[#804DFE] px-12 pt-8 text-left font-headings-desktop-poppins-16px-regular text-21xl text-shade-white mq1050:box-border mq1050:px-6 mq750:gap-[24px] mq450:box-border mq450:pb-[23px] mq450:pt-[21px]">
            <div className="absolute inset-0 !m-0 size-full">
              <div className="absolute inset-0 size-full rounded [background:linear-gradient(-84.28deg,_)]" />
              <img
                className="absolute inset-0 z-[1] size-full max-h-full max-w-full overflow-hidden"
                alt=""
                src="/mask-group-2.png"
              />
              <img
                className="absolute inset-0 z-[2] size-full max-h-full max-w-full overflow-hidden"
                alt=""
                src="/mask-group-3.png"
              />
            </div>

            <h1 className="font-inherit z-[3] relative m-0 inline-block w-[577px] max-w-full text-inherit font-bold leading-[32px] mq750:text-13xl mq750:leading-[26px] mq450:text-5xl mq450:leading-[19px]">
              uSTUDY Calculator
              {/* {JSON.stringify(specialtyDoc)} */}
              {/* {specialtyDoc && specialtyDoc.possibleScoreGeneralCompetition && specialtyDoc.possibleScoreGeneralCompetition} */}
              {/* {calculateAdmissionChance()} */}
              {/* {specialties && specialties.map((specialties) =>
                <p key={specialties.id}>
                  {specialties.subjects.map((subjects: any) => <p key={subjects}>{subjects}</p>)}
                </p>
              )}


              {subjectsTag.map((subjects) =>
                <p key={subjects.id}>
                  {subjects.text.map((text: any) => <p key={text}>{text}</p>)}
                </p>
              )} */}
              {/* {universityCount} */}
              {/* <input
                type="number"
                value={userScore}
                onChange={(e: any) => setUserScore(e.target.value)}
                placeholder="Enter your score"
                className="z-[100000000000000000000]"
              />
              <p className="z-[1000000000000000000]">The chance of admission is {admissionChance}%</p> */}
              {/* {specialtyDoc ? <p>{specialtyDoc.specialtyCode}</p> : <p>No SpcialtyDoc Found</p>} */}
              {/* {specialties[0] && <p>{specialties[0].id}</p>} */}
            </h1>

            {/* <p>{`Names of specialties with threshold less than ${ENTPOINT}: ${specialtiesUnderThreshold.join(', ')}`}</p>
<p>{`Names of universities with threshold less than ${ENTPOINT}: ${universitiesUnderThreshold.join(', ')}`}</p> */}
            {/* <p>{`Number of specialties with threshold less than ${ENTPOINT}: ${specialtyCount}`}</p> */}
            {/* <p>{`Number of universities with threshold less than ${ENTPOINT}: ${universityCount || specialtyCount}`}</p>
            <p>{`Theherhold ${ENTPOINT}: ${universityTheshold || specialtyTheshold}`}</p>
            <p>{`Last university code: ${lastUniversityCode}`}</p>
            <p>{`Calculation: ${calculation}%`}</p>




            {specialtyDoc ? <p>{specialtyDoc.id}</p> : <p>No SpcialtyDoc Found</p>} */}

            <div className="z-[2] hidden h-12 w-8 rounded" />
            <div className="z-[3] hidden h-12 w-[82px] rounded" />
            <Carousel className="z-50 w-full" setApi={setApi}>
              <CarouselContent>
                {/* ENT */}
                <CarouselItem>
                  <div className="flex w-[870px] max-w-full flex-row items-start justify-start gap-[69px] font-dm-sans text-base mq1050:flex-wrap mq1050:gap-[34px] mq450:gap-[17px]">
                    <div className="box-border flex min-w-[239px] max-w-full flex-[0.7745] flex-col items-start justify-start gap-[18.7px] py-0 pl-0 pr-[83px] mq1050:flex-1 mq450:box-border mq450:pr-5">
                      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch px-0 pb-[5.3px] pt-0">
                        <div className="relative z-[3] inline-block w-[246.5px] leading-[21px] ">
                          Enter amount of score
                        </div>
                        <div className="z-[3] flex flex-row items-start justify-start self-stretch rounded-md border-DEFAULT border-solid border-shade-white bg-shade-white px-[13px] pb-2 pt-3 shadow-[2px_2px_2px_rgba(0,_0,_0,_0.25)_inset]">
                          <div className="flex flex-1 flex-row items-start justify-between gap-[20px]">
                            <input
                              className="box-border flex h-5 w-full flex-col items-start justify-start bg-transparent px-0 pb-0 pt-1 font-dm-sans text-base font-bold text-black [border:none] [outline:none] placeholder:text-muted"
                              placeholder="100"
                              type="number"
                              onChange={handleENTChange}
                            />
                            <img
                              className="relative size-6"
                              alt=""
                              src="/coin-colorfull.png"
                            />
                          </div>
                        </div>
                      </div>
                      <span className="text-muted-foreground">
                        Please Provide Your ENT POINT
                      </span>
                    </div>
                    <div className="box-border flex h-[196px] flex-col items-start justify-start px-0 pb-0 pt-3">
                      <div className="relative z-[3] w-0.5 flex-1 bg-plum" />
                    </div>
                    <div className="box-border flex min-w-[235px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-1 text-lg mq1050:flex-1">
                      <div className="flex flex-col items-start justify-start gap-[68px] self-stretch mq450:gap-[34px]">
                        <div className="flex w-[158px] flex-col items-start justify-start gap-[12px]">
                          <div className="z-[4] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[48px] leading-[130%]">
                              B057:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[36px] leading-[16px]">
                                  70%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>
                          <div className="z-[3] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[49px] leading-[130%]">
                              B058:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[7px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[37px] leading-[16px]">
                                  65%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>
                          <div className="z-[3] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[49px] leading-[130%]">
                              B059:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[36px] leading-[16px]">
                                  62%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>

                          <div className="z-[3] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[49px] leading-[130%]">
                              B017:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[36px] leading-[16px]">
                                  73%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                {/* Subject Combination */}
                <CarouselItem>
                  <div className="mb-10 mt-3 flex w-full max-w-[800px] flex-row items-start justify-start gap-10">
                    <div className="flex h-[196px] w-full flex-col items-start justify-start space-y-3 overflow-y-auto overflow-x-hidden rounded-md !bg-transparent">
                      <h1 className="w-full text-left text-xl font-bold">
                        Subjects Combination(Max 2)
                      </h1>
                      <TagInput
                        placeholder="Enter Your Subjects"
                        tags={subjectsTag}
                        restrictTagsToAutocompleteOptions
                        enableAutocomplete
                        maxTags={2}
                        autocompleteOptions={subjects.map((items) => ({
                          id: items.id,
                          text: items.subjects.filter((item: string) => item !== ""),
                        }))}
                        draggable
                        className="!max-h-10 !bg-transparent sm:min-w-[450px]"
                        setTags={(newTags) => {
                          setSubjectsTag(newTags)
                        }}
                      />
                    </div>

                    <div className="box-border flex h-[196px] flex-col items-start justify-start px-0 pb-0 pt-3">
                      <div className="relative z-[3] w-0.5 flex-1 bg-plum" />
                    </div>
                    <div className="box-border flex min-w-[235px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-1 text-lg mq1050:flex-1">
                      <div className="flex flex-col items-start justify-start gap-[68px] self-stretch mq450:gap-[34px]">
                        <div className="flex w-[158px] flex-col items-start justify-start gap-[12px]">
                          <div className="z-[4] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[48px] leading-[130%]">
                              B057:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[36px] leading-[16px]">
                                  70%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>
                          <div className="z-[3] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[49px] leading-[130%]">
                              B058:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[7px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[37px] leading-[16px]">
                                  65%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>
                          <div className="z-[3] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[49px] leading-[130%]">
                              B059:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[36px] leading-[16px]">
                                  62%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>

                          <div className="z-[3] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[49px] leading-[130%]">
                              B017:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[36px] leading-[16px]">
                                  73%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Specialtiy */}
                <CarouselItem>
                  <div className="mb-10 mt-3 flex w-full max-w-[800px] flex-row items-start justify-start gap-10">
                    <div className="flex h-[196px] w-full flex-col items-start justify-start space-y-3 overflow-y-auto overflow-x-hidden rounded-md !bg-transparent">
                      <h1 className="w-full text-left text-xl font-bold">
                        Specialtiy
                      </h1>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[350px]  justify-between"
                          >
                            <span className="w-[200px] truncate text-start">
                              {value
                                ? value
                                : "Select specialty..."}
                            </span>

                            <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="max-h-[300px] w-[350px] overflow-y-auto overflow-x-hidden p-0">
                          <Command>
                            <CommandInput placeholder="Search Specialties..." />
                            <CommandGroup>
                              {specialties.map((framework) => {
                                const isSubjectMatch = subjectsTag.some((tag) =>
                                  tag.text.some((text: string) => framework.subjects.includes(text))
                                );
                                return isSubjectMatch ? (
                                  <CommandItem
                                    key={framework.id}
                                    value={framework.name || framework.id}
                                    onSelect={(currentValue) => {
                                      setSpecialityIdentifier(framework.id);
                                      setValue(currentValue === value ? "" : currentValue);
                                      setOpen(false);
                                    }}
                                  >
                                    <Check
                                      className={cn(
                                        "mr-2 size-4",
                                        value === framework.name
                                          ? "opacity-100"
                                          : value === framework.id ? "opacity-100" : "opacity-0"
                                      )}
                                    />
                                    {framework.name || framework.id}
                                  </CommandItem>
                                ) : null;
                              })}
                              {specialties.map((framework) => {
                                return showAllSpecialty && subjectsTag.length > 0 && (<CommandItem
                                  key={framework.id}
                                  value={framework.name || framework.id}
                                  onSelect={(currentValue) => {
                                    setSpecialityIdentifier(framework.id)
                                    setValue(
                                      currentValue === value ? "" : currentValue
                                    )
                                    setOpen(false)
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 size-4",
                                      value === framework.name
                                        ? "opacity-100"
                                        : value === framework.id ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                  {framework.name ||
                                    framework.id}
                                </CommandItem>);
                              })}
                              {specialties.map((framework) => {
                                return stillShowAllSpecialty && (<CommandItem
                                  key={framework.id}
                                  value={framework.name || framework.id}
                                  onSelect={(currentValue) => {
                                    setSpecialityIdentifier(framework.id)
                                    setValue(
                                      currentValue === value ? "" : currentValue
                                    )
                                    setOpen(false)
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 size-4",
                                      value === framework.name
                                        ? "opacity-100"
                                        : value === framework.id ? "opacity-100" : "opacity-0"
                                    )}
                                  />
                                  {framework.name ||
                                    framework.id}
                                </CommandItem>);
                              })}

                              {!specialties.some((framework) =>
                                subjectsTag.some((tag) =>
                                  tag.text.some((text: string) => framework.subjects.includes(text))
                                )
                              ) && !showAllSpecialty && subjectsTag.length > 0 && (
                                  <div className="w-full flex items-center justify-center flex-col">
                                    <span className="text-sm w-full text-center">No Specialty found by subjects combination you provided.</span>
                                    <Button className="my-3 mx-auto" onClick={() => setShowAllSpecialty(!showAllSpecialty)}>
                                      Choose from all specialties
                                    </Button>
                                  </div>

                                )}

                              {subjectsTag.length === 0 && (
                                <div className={cn("w-full flex items-center justify-center flex-col p-5 space-y-2",
                                  stillShowAllSpecialty && "border-t mt-3"
                                )}>
                                  <span className="text-sm w-full text-center">You did't choose any subjects!</span>
                                  <Button className="mx-auto" onClick={() => setStillShowAllSpecialty(!stillShowAllSpecialty)}>
                                    {stillShowAllSpecialty ? "Close" : "Still view"} all specialties
                                  </Button>
                                </div>

                              )}


                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="box-border flex h-[196px] flex-col items-start justify-start px-0 pb-0 pt-3">
                      <div className="relative z-[3] w-0.5 flex-1 bg-plum" />
                    </div>
                    <div className="box-border flex min-w-[235px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-1 text-lg mq1050:flex-1">
                      <div className="flex flex-col items-start justify-start gap-[68px] self-stretch mq450:gap-[34px]">
                        <div className="flex w-[158px] flex-col items-start justify-start gap-[12px]">
                          <div className="z-[4] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[48px] leading-[130%]">
                              B057:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[36px] leading-[16px]">
                                  70%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>
                          <div className="z-[3] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[49px] leading-[130%]">
                              B058:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[7px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[37px] leading-[16px]">
                                  65%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>
                          <div className="z-[3] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[49px] leading-[130%]">
                              B059:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[36px] leading-[16px]">
                                  62%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>

                          <div className="z-[3] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[49px] leading-[130%]">
                              B017:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[36px] leading-[16px]">
                                  73%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                {/* Quota */}
                <CarouselItem>
                  <div className="mb-10 mt-3 flex w-full max-w-[800px] flex-row items-start justify-start gap-10">
                    <div className="flex h-[196px] w-full flex-col items-start justify-start space-y-3 overflow-y-auto overflow-x-hidden rounded-md !bg-transparent">
                      <h1 className="w-full text-left text-xl font-bold">
                        Quota
                      </h1>
                      <Select onValueChange={handleQuotaChange}>
                        <SelectTrigger className="w-[300px]">
                          <SelectValue placeholder="Select a Quota" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {/* switch (quota) {
      case "GeneralCompetition":
        setPossibleScore(specialtyDoc?.possibleScoreGeneralCompetition || 0)
        break;
      case "RuralQuota":
        setPossibleScore(specialtyDoc && specialtyDoc.possibleScoreRuralQuota && specialtyDoc.possibleScoreRuralQuota || 0)
        break;
      case "DisabilityQuota":
        setPossibleScore(specialtyDoc && specialtyDoc.possibleScoreDisabilityQuota && specialtyDoc.possibleScoreDisabilityQuota || 0)
        break;
      case "LargeFamilyQuota":
        setPossibleScore(specialtyDoc && specialtyDoc.possibleScoreLargeFamilyQuota && specialtyDoc.possibleScoreLargeFamilyQuota || 0)
        break;
      case "OrphanQuota":
        setPossibleScore(specialtyDoc && specialtyDoc.possibleScoreOrphanQuota && specialtyDoc.possibleScoreOrphanQuota || 0)
        break;
      default:
        console.error("Invalid quota selected:", quota);
        setPossibleScore(specialtyDoc && specialtyDoc.possibleGeneralQuota && specialtyDoc.possibleGeneralQuota || 0)
        break;
    } */}
                            <SelectLabel className="border-b">Quota's</SelectLabel>
                            <SelectItem value="GeneralCompetition">GeneralCompetetion</SelectItem>
                            <SelectItem value="RuralQuota">Rural</SelectItem>
                            <SelectItem value="OrphanQuota">Orphan</SelectItem>
                            <SelectItem value="DisabilityQuota">Disability</SelectItem>
                            <SelectItem value="LargeFamilyQuota">LargeFamily</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="box-border flex h-[196px] flex-col items-start justify-start px-0 pb-0 pt-3">
                      <div className="relative z-[3] w-0.5 flex-1 bg-plum" />
                    </div>
                    <div className="box-border flex min-w-[235px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-1 text-lg mq1050:flex-1">
                      <div className="flex flex-col items-start justify-start gap-[68px] self-stretch mq450:gap-[34px]">
                        <div className="flex w-[158px] flex-col items-start justify-start gap-[12px]">
                          <div className="z-[4] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[48px] leading-[130%]">
                              B057:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[36px] leading-[16px]">
                                  70%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>
                          <div className="z-[3] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[49px] leading-[130%]">
                              B058:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[7px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[37px] leading-[16px]">
                                  65%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>
                          <div className="z-[3] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[49px] leading-[130%]">
                              B059:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[36px] leading-[16px]">
                                  62%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>

                          <div className="z-[3] flex flex-row items-center justify-between gap-[20px] self-stretch">
                            <div className="relative inline-block min-w-[49px] leading-[130%]">
                              B017:
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                              <div className="flex flex-row items-center justify-start">
                                <div className="relative inline-block min-w-[36px] leading-[16px]">
                                  73%
                                </div>
                              </div>
                              <img
                                className="relative size-5"
                                alt=""
                                src="/coin-transparent.png"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="mt-12 flex !min-w-full items-start justify-evenly space-x-10 p-1 !text-sm !text-white lg:flex-row">
                    <div className="">
                      <span className="text-sm">ENT Scrore</span>
                      <div className="rounded-md border border-white p-3 text-center">
                        {ENTPOINT || "99"}
                      </div>
                    </div>
                    <div className="">
                      <span className="text-sm">Specialty</span>
                      <div className="rounded-md border border-white p-3 text-center w-[250px] truncate">
                        {value || "Design"}
                      </div>
                    </div>
                    <div className="">
                      <span className="text-sm">Subject Combination</span>
                      <div className="rounded-md border border-white p-3 text-center w-[250px] truncate">
                        {subjectsTag.map(
                          (obj) =>
                            `  ${obj.text}  `
                        ) || "Creative Exam"}
                      </div>
                    </div>
                    <div className="">
                      <span className="text-sm">Quota</span>
                      <div className="rounded-md border border-white p-3 text-center">
                        {quota || "..."}
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* specialtyDoc ? specialtyDoc.name || specialtyDoc.specialtyName */}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />

              {current == 5 ? (
                <Button
                  variant="outline"
                  className={cn(
                    "relative",
                    "bottom-0 left-10 -translate-y-1/2"
                  )}
                  onClick={handleClick}
                >
                  Calculate
                </Button>
              ) : (
                ""
              )}

              {/* <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
              </div> */}
            </Carousel>
            <div className="absolute bottom-[-158.8px] right-[-285px] z-[5] !m-0 size-[300px] rounded-[50%] bg-blueviolet-200 [filter:blur(400px)]" />
          </div>
          {/* <div className="mx-auto !mb-32 rounded-md border p-5 lg:w-[1200px]">
          <TableDemo />
        </div> */}
        </div>
      </section>

      <div className="mx-auto max-w-[1250px]">
        {/* <TaskPage /> */}
        <div>
          <div className="md:hidden">
            <Image
              src="/examples/tasks-light.png"
              width={1280}
              height={998}
              alt="Playground"
              className="block dark:hidden"
            />
            <Image
              src="/examples/tasks-dark.png"
              width={1280}
              height={998}
              alt="Playground"
              className="hidden dark:block"
            />
          </div>
          <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Your Chances!
                </h2>
                <p className="text-muted-foreground">
                  Here is your calculations history!
                </p>
              </div>
              {/* <div className="flex items-center space-x-2">
            <UserNav />
          </div> */}
            </div>
            <DataTable data={tasks} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalculatorPage
