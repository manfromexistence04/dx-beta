"use client"

/* eslint-disable tailwindcss/no-contradicting-classname */
import { useCallback } from "react"
import type { NextPage } from "next"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion"
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
import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

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

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

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
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      variant="outline"
      className={cn(
        "relative",
        orientation === "horizontal"
          ? "left-1 bottom-0 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      {/* <ArrowLeft className="size-4" /> */}
      Back
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      variant={variant}
      className={cn(
        "relative",
        orientation === "horizontal"
          ? "left-5 bottom-0 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      {/* <ArrowRight className="size-4" />
      <span className="sr-only">Next slide</span> */}
      Next
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

// export {
//   type CarouselApi,
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// }































































const Calculator: NextPage = () => {

  const [ENTPOINT, setENTPOINT] = React.useState("")


  function calculateAdmissionChance(startScore: number, e1: number, e2: number, e3: number, userScore: number): number {
    if (startScore >= userScore) {
      return 0;
    } else {
      let possibleScore = calculatePossibleScore(e1, e2, e3);
      let admissionChance = calculateChance(userScore, possibleScore);
      return Math.min(Math.floor(admissionChance), 100);
    }
  }
  function calculatePossibleScore(e1: number, e2: number, e3: number): number {
    let possibleScore = e1 + e2 - e1 + e3 - e2 * 2 * 3;
    return possibleScore <= 140 ? possibleScore : 140;
  }
  function calculateChance(userScore: number, possibleScore: number): number {
    let chance = 50 + (userScore - possibleScore) / ((140 - possibleScore) * 3) * 100;
    return chance;
  }
  let startScore = 100; // University Theshold
  let e1 = 95;          // 2021
  let e2 = 93;          // 2022
  let e3 = 97;          // 2023
  let userScore = 394;  // Ent Scrore
  let admissionChance = calculateAdmissionChance(startScore, e1, e2, e3, userScore);
  console.log(`The chance of admission is ${admissionChance}%`);

  return (
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

      <h1 className="font-inherit relative z-[ 3] m-0 inline-block w-[577px] max-w-full text-inherit font-bold leading-[32px] mq750:text-13xl mq750:leading-[26px] mq450:text-5xl mq450:leading-[19px]">
        uSTUDY Calculator
      </h1>
      <div className="z-[2] hidden h-12 w-8 rounded" />
      <div className="z-[3] hidden h-12 w-[82px] rounded" />
      <Carousel className="w-full z-50">
        <CarouselContent>
          <CarouselItem>
            <div className="flex w-[870px] max-w-full flex-row items-start justify-start gap-[69px] font-dm-sans text-base mq1050:flex-wrap mq1050:gap-[34px] mq450:gap-[17px]">
              <div className="box-border flex min-w-[239px] max-w-full flex-[0.7745] flex-col items-start justify-start gap-[18.7px] py-0 pl-0 pr-[83px] mq1050:flex-1 mq450:box-border mq450:pr-5">
                <div className="flex flex-col items-start justify-start gap-[8px] self-stretch px-0 pb-[5.3px] pt-0">
                  <div className="relative z-[3] inline-block w-[246.5px] leading-[21px] ">
                    Enter amount of score
                  </div>
                  <div className="z-[3] flex flex-row items-start justify-start self-stretch border-DEFAULT border-solid rounded-md border-shade-white bg-shade-white px-[13px] pb-2 pt-3 shadow-[2px_2px_2px_rgba(0,_0,_0,_0.25)_inset]">
                    <div className="flex flex-1 flex-row items-start justify-between gap-[20px]">
                      <input
                        className="placeholder:text-black text-black box-border flex h-5 w-full flex-col items-start justify-start bg-transparent px-0 pb-0 pt-1 font-dm-sans text-base font-bold [border:none] [outline:none]"
                        placeholder="100"
                        type="number"
                      />
                      <img
                        className="relative size-6"
                        alt=""
                        src="/coin-colorfull.png"
                      />
                    </div>
                  </div>
                </div>
                <span className="text-muted-foreground">Please Provide Your ENT POINT</span>
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
            <div className="p-1">
              <span>2</span>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="p-1">
              <span>3</span>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="p-1">
              <span>4</span>
            </div>
          </CarouselItem>



        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />

      </Carousel>
      <div className="absolute bottom-[-158.8px] right-[-285px] z-[5] !m-0 size-[300px] rounded-[50%] bg-blueviolet-200 [filter:blur(400px)]" />
    </div>
  )
}

const FrameComponent: NextPage = () => {
  return (
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
        <Calculator />
        {/* <div className="mx-auto !mb-32 rounded-md border p-5 lg:w-[1200px]">
          <TableDemo />
        </div> */}
      </div>
    </section>
  )
}
export default FrameComponent
