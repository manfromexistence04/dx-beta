"use client"

/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/no-contradicting-classname */
import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { Input as NextuiInput } from "@nextui-org/react"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"
import FrameComponent from "@/components/signup/frame-component"
import { AspectRatio } from "@/registry/default/ui/aspect-ratio"
import { buttonVariants } from "@/registry/default/ui/button"
import { Checkbox } from "@/registry/default/ui/checkbox"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import { UserAuthForm } from "../examples/authentication/components/user-auth-form"
import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuth } from "@clerk/nextjs";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
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
import { initializeApp } from "firebase/app"
import { useToast } from "@/registry/default/ui/use-toast"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { set } from 'date-fns';
import { useRouter } from 'next/navigation'
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
const auth = getAuth(app);

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
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]
// const firebaseConfig = {
//   apiKey: "AIzaSyAj8jpnqU9Xo1YXVFJh-wCdulweO5z--H8",
//   authDomain: "ustudy-96678.firebaseapp.com",
//   projectId: "ustudy-96678",
//   storageBucket: "ustudy-96678.appspot.com",
//   messagingSenderId: "581632635532",
//   appId: "1:581632635532:web:51ccda7d7adce6689a81a9",
// }
// // Initialize Firebase
// const app = initializeApp(firebaseConfig)
// // Database
// const db: any = getFirestore(app)

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



const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "blur fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="size-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}


// /* eslint-disable react/no-unescaped-entities */
// "use client"

// /* eslint-disable tailwindcss/migration-from-tailwind-2 */
// /* eslint-disable tailwindcss/no-contradicting-classname */
// import React from "react"
// import type { NextPage } from "next"
// import Image from "next/image"
// import Link from "next/link"
// import { Input as NextuiInput } from "@nextui-org/react"
// import { Eye, EyeOff } from "lucide-react"

// import { cn } from "@/lib/utils"
// import FrameComponent from "@/components/signup/frame-component"
// import { AspectRatio } from "@/registry/default/ui/aspect-ratio"
// import { Button, buttonVariants } from "@/registry/default/ui/button"
// import { Checkbox } from "@/registry/default/ui/checkbox"
// import { Input } from "@/registry/default/ui/input"
// import { Label } from "@/registry/default/ui/label"

// import { UserAuthForm } from "../examples/authentication/components/user-auth-form"

const ForgotPassword: NextPage = () => {
  // const [isVisiblePassword, setIsVisiblePassword] = React.useState(true)
  // const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
  //   React.useState(true)
  // const togglePasswordVisibility = () =>
  //   setIsVisiblePassword(!isVisiblePassword)
  // const toggleConfirmPasswordVisibility = () =>
  //   setIsVisibleConfirmPassword(!isVisibleConfirmPassword)
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState<any>(0)
  const [count, setCount] = React.useState<any>(0)
  const { toast } = useToast()
  const router = useRouter()
  const [userDetailsDialog, setUserDetailsDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserid] = useState<any>("");
  const [surname, setSurname] = useState("");
  const [untScore, setUntScore] = useState<any>(0);
  const [region, setRegion] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


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

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollTo = React.useCallback(() => {
    api?.scrollTo(0, true)
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const EnhancedErrors = (input: any): string | null => {
    switch (input) {
      case "auth/email-already-in-use": return "Email in use.";
      case "auth/invalid-email": return "Invalid email.";
      case "auth/operation-not-allowed": return "Operation not allowed.";
      case "auth/weak-password": return "Weak password.";
      case "auth/user-disabled": return "User disabled.";
      case "auth/user-not-found": return "User not found.";
      case "auth/wrong-password": return "Wrong password.";
      case "auth/too-many-requests": return "Too many requests.";
      case "auth/network-request-failed": return "Network error.";
      default: return "Signup error.";
    }
  };

  const SuggestSolutions = (input: any): string | null => {
    switch (input) {
      case "auth/email-already-in-use": return "Try logging in or use a different email.";
      case "auth/invalid-email": return "Check format.";
      case "auth/operation-not-allowed": return "Contact support.";
      case "auth/weak-password": return "Choose a stronger one.";
      case "auth/user-disabled": return "Contact support.";
      case "auth/user-not-found": return "Check email or create new account.";
      case "auth/wrong-password": return "Try again.";
      case "auth/too-many-requests": return "Wait and try again.";
      case "auth/network-request-failed": return "Check internet connection.";
      default: return "Try again later or contact support.";
    }
  };
  const handleSignUp = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    confirmPassword === password ?
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          setUserid(user)
          console.log("Signup");
          setUserDetailsDialog(true)

        })
        .catch((error) => {
          setUserDetailsDialog(false)

          setUserid("Error");
          console.log("Error");

          toast({
            title: "Uh oh! Something went wrong with your SignUp.",
            description: (<div className='flex items-start justify-start bg-primary-foreground rounded-md text-xs flex-col space-y-1.5 p-3 mt-1'>
              <span className="text-muted-foreground">{`Error: ${EnhancedErrors(error.code)}`}</span>
              <span className="text-muted-foreground">{`Possible Solution: ${SuggestSolutions(error.code)}`}</span>
            </div>),
          })
        }) : toast({
          title: "Password and Confirm Password donot match!",
          description: `Please match them Password${password} & Confirm Passwrod:${confirmPassword}`,
        })

  };
  const userDetails = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const Create = await addDoc(collection(db, "users"), {
      accountType: "Client",
      email: email,
      name: name,
      userName: userName,
      region: region,
      surname: surname,
      untScore: untScore,
      userId: userId.uid
    });

    console.log("Document written with ID: ", Create.id);

    toast({
      title: "User signed up successfully!",
      description: `Continue Using Ustudy ${userId.uid}`,
    })
    setUserDetailsDialog(false);
    router.push('/login')

  };



  const handleSignIn = async (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        toast({
          title: "User signed in successfully!",
          description: `Continue Using Ustudy ${user.uid}`,
        })
      })
      .catch((error) => {
        toast({
          title: "Uh oh! Something went wrong with your SignIn.",
          description: (<div className='flex items-start justify-start bg-primary-foreground rounded-md text-xs flex-col space-y-1.5 p-3 mt-1'>
            <span className="text-muted-foreground">{`Error: ${EnhancedErrors(error.code)}`}</span>
            <span className="text-muted-foreground">{`Possible Solution: ${SuggestSolutions(error.code)}`}</span>
          </div>),
        })
      });
    router.push('/calculator')

  };
  const handleForgotPassword = async (e: any) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        toast({
          title: "We have sent you a Email!",
          description: `Continue Using Ustudy ${email}`,
        })
      })
      .catch((error) => {
        toast({
          title: "Uh oh! Something went wrong with your SignIn.",
          description: (<div className='flex items-start justify-start bg-primary-foreground rounded-md text-xs flex-col space-y-1.5 p-3 mt-1'>
            <span className="text-muted-foreground">{`Error: ${EnhancedErrors(error.code)}`}</span>
            <span className="text-muted-foreground">{`Possible Solution: ${SuggestSolutions(error.code)}`}</span>
          </div>),
        })
        // ..
      });

    // router.push('/forgot-password-step-one')

  };
  const [isVisiblePassword, setIsVisiblePassword] = React.useState(true)
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] =
    React.useState(true)
  const togglePasswordVisibility = () =>
    setIsVisiblePassword(!isVisiblePassword)
  const toggleConfirmPasswordVisibility = () =>
    setIsVisibleConfirmPassword(!isVisibleConfirmPassword)


  return (
    <div className="flex h-auto w-full flex-col-reverse items-start justify-start space-y-10 lg:mb-0 lg:h-[69vh] lg:flex-row lg:items-start lg:items-center lg:justify-start lg:justify-center">
      <div className="relative mt-10 flex size-full h-auto items-center justify-center lg:m-0 lg:w-3/5 lg:rounded-sm">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/rectangle-12911.png"
            alt="Image"
            fill={true}
            className="object-cover"
          />
        </AspectRatio>
        <div className="absolute bottom-0 left-0 flex h-[30%] max-h-[150px] w-full items-center justify-center bg-purple-800 bg-opacity-0 bg-clip-padding text-3xl font-bold backdrop-blur-3xl">
          Ustudy For All
        </div>
      </div>

      <Carousel className="z-50 flex h-auto w-full items-center justify-center lg:m-0 lg:h-full lg:flex-1" setApi={setApi}>
        <CarouselContent>
          {/* ENT */}
          {/* <CarouselItem>
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
                </CarouselItem> */}
          {/* Subject Combination */}
          {/* <CarouselItem>
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
                </CarouselItem> */}

          {/* Specialtiy */}
          {/* <CarouselItem>
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
                </CarouselItem> */}
          {/* Quota */}
          {/* <CarouselItem>
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
                </CarouselItem> */}

          <CarouselItem>
            <div className="mx-auto grid w-4/5  min-w-[300px] max-w-[550px] ">
              <div className="grid min-w-full gap-2 text-left">
                <h1 className="text-26xl font-bold">Forgot Your Password?</h1>
                <h1 className="text-26xl font-bold">No problem.</h1>
                <p className="text-balance text-muted-foreground">
                  Please enter your details
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid w-full gap-2">
                  <Label className="text-[#804DFE]" htmlFor="email">
                    Email
                  </Label>
                  <Input value={email} id="email" type="email" placeholder="ajju40959@gmail.com" required onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md !border text-muted-foreground" />

                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#804DFE] text-white hover:bg-secondary"
                  onClick={scrollNext}
                >
                  Confirm1
                </Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="mx-auto grid w-4/5 lg:min-w-full max-w-full gap-5">
              <div className="grid min-w-full gap-2 text-left">
                <h1 className="text-26xl font-bold">Forgot Your Password?</h1>
                <h1 className="text-26xl font-bold">No problem.</h1>
                <p className="text-balance text-muted-foreground">
                  Please enter your details
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid w-full gap-2">
                  <Label className="text-[#804DFE]" htmlFor="email">
                    Email
                  </Label>
                  <Input value={email} id="email" type="email" placeholder="ajju40959@gmail.com" required onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md !border text-muted-foreground" />

                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#804DFE] text-white hover:bg-secondary"
                  onClick={scrollNext}
                >
                  Confirm2
                </Button>
              </div>
            </div>
          </CarouselItem>

          {/* specialtyDoc ? specialtyDoc.name || specialtyDoc.specialtyName */}
        </CarouselContent>

        {/* <CarouselPrevious />
        <CarouselNext /> */}

        {current == 5 ? (
          <Button
            variant="outline"
            className={cn(
              "relative",
              "bottom-0 left-10 -translate-y-1/2"
            )}
          // onClick={handleClick}
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

      {/* <div className="flex h-auto w-full items-center justify-center lg:m-0 lg:h-full lg:flex-1">
        <div className="mx-auto grid w-4/5 min-w-[300px] max-w-[550px] gap-5">
          <div className="grid min-w-full gap-2 text-left">
            <h1 className="text-26xl font-bold">Forgot Your Password?</h1>
            <h1 className="text-26xl font-bold">No problem.</h1>
            <p className="text-balance text-muted-foreground">
              Please enter your details
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid w-full gap-2">
              <Label className="text-[#804DFE]" htmlFor="email">
                Email
              </Label>
              <Input value={email} id="email" type="email" placeholder="ajju40959@gmail.com" required onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md !border text-muted-foreground" />

            </div>
            <Button
              type="submit"
              className="w-full bg-[#804DFE] text-white hover:bg-secondary"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default ForgotPassword