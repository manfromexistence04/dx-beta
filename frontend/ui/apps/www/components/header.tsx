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

  return (
    <section className="!sticky !top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <header className="box-border flex h-[88px] max-w-full flex-1 flex-col items-start gap-[20px] px-0 py-5 text-left font-headings-desktop-poppins-16px-regular text-8xl text-blueviolet-200 lg:justify-start">
        <div className="hidden h-12 w-[158px]" />
        <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-20 py-0 mq750:box-border mq750:px-10">
          <div className="flex max-w-full flex-1 flex-row items-start justify-start gap-[24px]">
            <div className="box-border flex w-[143px] flex-col items-start justify-start pb-0 pl-0 pr-4 pt-[14.5px]">
              <h2 className="font-inherit relative m-0 self-stretch whitespace-nowrap text-inherit font-bold leading-[19px]">
                <span>u</span>
                <span className="text-shade-white">STUDY</span>
              </h2>
            </div>
            <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1 mq1225:flex-1">
              <div className="relative h-10 w-px bg-neutrals-3" />
            </div>
            <nav className="m-0 box-border flex max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-[13.5px] mq1225:hidden">
              <nav className="m-0 flex w-[468.9px] max-w-full flex-row items-start justify-between gap-[20px] text-left font-dm-sans text-base text-lightsteelblue-200">
                <Link
                  href="/about"
                  className={cn(
                    "relative inline-block min-w-[46.9px] shrink-0 transition-colors hover:text-foreground/80",
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
                    "relative inline-block min-w-[76px] shrink-0 transition-colors hover:text-foreground/80",
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
                    "relative inline-block min-w-[76px] shrink-0 transition-colors hover:text-foreground/80",
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
                    "rrelative inline-block min-w-[63px] shrink-0 transition-colors hover:text-foreground/80",
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
                    "relative inline-block min-w-[124px] shrink-0 whitespace-nowrap transition-colors hover:text-foreground/80",
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
                    "relative inline-block min-w-[31px] shrink-0 transition-colors hover:text-foreground/80",
                    pathname === "/faq"
                      ? "text-[#804DFE]"
                      : "text-foreground/60"
                  )}
                >
                  FAQ
                </Link>
              </nav>
            </nav>
            <div className="flex flex-row items-center justify-start gap-[24px] text-center font-dm-sans text-base text-shade-white">
              <Select>
                <SelectTrigger className="w-[80px] rounded-md !py-6">
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

              <img
                className="hidden size-[50px] mq1225:inline-block"
                alt=""
                src="/burger-menu.png"
              />

              <div
                className="flex cursor-pointer flex-row items-start justify-start mq1225:hidden"
                onClick={onButtonsContainerClick}
              >
                <div className="flex flex-row items-center justify-center whitespace-nowrap rounded bg-blueviolet-200 px-[23px] py-4">
                  <Link
                    href="/signup"
                    className={cn(
                      "relative inline-block min-w-[112px] leading-[16px]"
                    )}
                  >
                    Sign Up/Log In
                  </Link>
                  {/* <b className="relative inline-block min-w-[112px] leading-[16px]">
                    Sign Up/Log In
                  </b> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-px shrink-0 self-stretch overflow-hidden bg-neutrals-2" />
      </header>
    </section>
  )
}

export default Header
