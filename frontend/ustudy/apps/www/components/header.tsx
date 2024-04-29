"use client"

import { useCallback } from "react"
import * as React from "react"
import type { NextPage } from "next"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"
import { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { ViewVerticalIcon } from "@radix-ui/react-icons"

import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"

import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york/ui/button"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/registry/new-york/ui/sheet"


export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const Header: NextPage = () => {
  const onButtonsContainerClick = useCallback(() => {
    // Please sync "Log In - Welcome" to the project
  }, [])
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <section className=" g-background/95 supports-[backdrop-filter]:bg-background/60 !sticky !top-0 z-50 w-full !border-b backdrop-blur">
      <header className="font-headings-desktop-poppins-16px-regular text-blueviolet-200 box-border flex h-[88px] max-w-full flex-1 flex-col items-start gap-[20px] px-0 py-5 text-left text-8xl lg:justify-start">
        <div className="hidden h-12 w-[158px]" />
        <div className="mq750:box-border mq750:px-10 box-border flex max-w-full flex-row items-start justify-start self-stretch px-20 py-0">
          <div className="flex max-w-full flex-1 flex-row items-start justify-start gap-[24px]">
            <div className="box-border flex w-[143px] flex-col items-start justify-start">
              <Link
                href="/">
                <h2 className="flex flex-row items-center justify-center">
                  <img
                    className="size-[20px]"
                    alt="logo"
                    src="/logo.png"
                  />
                  <span className="text-shade-white">STUDY</span>
                </h2>
              </Link>

            </div>
            <div className="mq1225:flex-1 flex flex-col items-start justify-start px-0 pb-0 pt-1">
              <div className="bg-neutrals-3 relative h-10 w-px" />
            </div>
            <nav className="mq1225:hidden m-0 box-border flex max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-[13.5px]">
              <nav className="font-dm-sans text-lightsteelblue-200 m-0 flex w-[468.9px] max-w-full flex-row items-start justify-between gap-[20px] text-left text-base">
                <Link
                  href="/about"
                  className={cn(
                    "hover:text-foreground/80 relative inline-block min-w-[46.9px] shrink-0 transition-colors",
                    pathname === "/about"
                      ? "text-[#804DFE]"
                      : "text-foreground/60"
                  )}
                >
                  About
                </Link>
                <Link
                  href="/calculator"
                  className={cn(
                    "hover:text-foreground/80 relative inline-block min-w-[76px] shrink-0 transition-colors",
                    pathname === "/calculator"
                      ? "text-[#804DFE]"
                      : "text-foreground/60"
                  )}
                >
                  Calculator
                </Link>
                <Link
                  href="/colleges"
                  className={cn(
                    "hover:text-foreground/80 relative inline-block min-w-[76px] shrink-0 transition-colors",
                    pathname === "/colleges"
                      ? "text-[#804DFE]"
                      : "text-foreground/60"
                  )}
                >
                  Colleges
                </Link>
                <Link
                  href="/specialty"
                  className={cn(
                    "rrelative hover:text-foreground/80 inline-block min-w-[63px] shrink-0 transition-colors",
                    pathname === "/specialty"
                      ? "text-[#804DFE]"
                      : "text-foreground/60"
                  )}
                >
                  Specialty
                </Link>
                <Link
                  href="/career-guidance"
                  className={cn(
                    "hover:text-foreground/80 relative inline-block min-w-[124px] shrink-0 whitespace-nowrap transition-colors",
                    pathname === "/career-guidance"
                      ? "text-[#804DFE]"
                      : "text-foreground/60"
                  )}
                >
                  Career guidance
                </Link>
                <Link
                  href="/faq"
                  className={cn(
                    "hover:text-foreground/80 relative inline-block min-w-[31px] shrink-0 transition-colors",
                    pathname === "/faq"
                      ? "text-[#804DFE]"
                      : "text-foreground/60"
                  )}
                >
                  FAQ
                </Link>
              </nav>
            </nav>
            <div className="font-dm-sans text-shade-white flex flex-row items-center justify-start gap-[24px] text-center text-base">
              <Select>
                <SelectTrigger className="w-[80px] rounded-[3px] !py-6">
                  <SelectValue placeholder="EN" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Languages</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>


              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                  >
                    <img
                      className="inline-block size-[50px] lg:hidden"
                      alt=""
                      src="/burger-menu.png"
                    />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="top" className="flex size-full flex-col items-center justify-center">

                  <Link
                    className="mb-3 w-full rounded-md border p-3"
                    href="/">
                    {/* <div className="flex flex-col items-start justify-start space-y-1 ">
                      <span className="text-primary text-md">About</span>
                      <span className="text-muted-foreground text-xs">Discover why we creted this platfrom.</span>
                    </div> */}
                    <div className="flex size-full items-center justify-center space-x-5 ">
                      <div className="flex flex-row items-center justify-center">
                        <img
                          className="size-[20px]"
                          alt="logo"
                          src="/logo.png"
                        />
                        <span className="text-shade-white">STUDY</span>
                      </div>
                      <div className="font-medium">
                        Find your perfect college fit with our quiz.
                      </div>
                    </div>
                  </Link>

                  <Link
                    className="w-full  border-b p-5"
                    href="/colleges">
                    <div className="flex flex-col items-start justify-start space-y-1 ">
                      <span className="text-primary text-md">About</span>
                      <span className="text-muted-foreground text-xs">Discover why we creted this platfrom.</span>
                    </div>
                  </Link>
                  <Link
                    className="w-full  border-b p-5"
                    href="/colleges">
                    <div className="flex flex-col items-start justify-start space-y-1 ">
                      <span className="text-primary text-md">Colleges</span>
                      <span className="text-muted-foreground text-xs">View Colleage that fits your need.</span>
                    </div>
                  </Link>
                  <Link
                    className="w-full  border-b p-5"
                    href="/colleges">
                    <div className="flex flex-col items-start justify-start space-y-1 ">
                      <span className="text-primary text-md">Calculator</span>
                      <span className="text-muted-foreground text-xs">Calculate your gols.</span>
                    </div>
                  </Link>
                  <Link
                    className="w-full  border-b p-5"
                    href="/colleges">
                    <div className="flex flex-col items-start justify-start space-y-1 ">
                      <span className="text-primary text-md">Career Guidence</span>
                      <span className="text-muted-foreground text-xs">Seach for cereers that you love.</span>
                    </div>
                  </Link>
                  <Link
                    className="w-full  border-b p-5"
                    href="/colleges">
                    <div className="flex flex-col items-start justify-start space-y-1 ">
                      <span className="text-primary text-md">Specialty</span>
                      <span className="text-muted-foreground text-xs">Get advice form specialiest.</span>
                    </div>
                  </Link>
                  <Link
                    className="w-full  border-b p-5"
                    href="/colleges">
                    <div className="flex flex-col items-start justify-start space-y-1 ">
                      <span className="text-primary text-md">FAQ</span>
                      <span className="text-muted-foreground text-xs">Ask question about this platfrom.</span>
                    </div>
                  </Link>



                  <div className="flex w-full flex-col items-center justify-center gap-[14px] py-3 text-base">
                    <div className="flex flex-col items-start justify-start">
                      <div className="flex flex-col items-start justify-start">
                        <div className="relative inline-block min-w-[118px] leading-[100%]">
                          Contact email:
                        </div>
                      </div>
                      <b className="font-dm-sans text-mediumpurple relative inline-block min-w-[117px] whitespace-nowrap">
                        info@ustudy.io
                      </b>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[4px]">
                      <div className="relative leading-[100%]">Our Social Media:</div>
                    </div>
                    <div className="mx-auto flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="relative size-6 min-h-[24px] object-cover"
                        loading="lazy"
                        alt=""
                        src="/instragam.png"
                      />
                      <img
                        className="relative size-6 min-h-[24px]"
                        loading="lazy"
                        alt=""
                        src="/linkdin.png"
                      />
                      <img
                        className="relative size-6 min-h-[24px]"
                        loading="lazy"
                        alt=""
                        src="/facebook.png"
                      />
                      <img
                        className="relative size-6 min-h-[24px]"
                        alt=""
                        src="/telegram.png"
                      />
                      <img
                        className="relative size-6 min-h-[24px]"
                        alt=""
                        src="/raddit.png"
                      />
                      <img
                        className="relative size-6 min-h-[24px]"
                        alt=""
                        src="/twitter.png"
                      />
                    </div>
                    <div className="absolute bottom-[-11px] right-[64px] z-[1] !m-0 flex size-10 items-center justify-center">
                      <img
                        className="absolute left-[-24px] top-[-23px] z-[1] size-full object-contain [transform:scale(2.225)]"
                        alt=""
                        src="/mask-contract.png"
                      />
                    </div>

                  </div>
                </SheetContent>
              </Sheet>

              <div
                className="mq1225:hidden flex cursor-pointer flex-row items-start justify-start"
                onClick={onButtonsContainerClick}
              >
                <div className="bg-blueviolet-200 flex flex-row items-center justify-center whitespace-nowrap rounded px-[23px] py-4">
                  <Link
                    href="/signup"
                    className={cn(
                      "relative inline-block min-w-[112px] leading-[16px]"
                    )}
                  >
                    Sign Up/Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Header
