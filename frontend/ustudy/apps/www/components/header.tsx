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
    <section className=" g-background/95 supports-[backdrop-filter]:bg-background/60 !sticky !top-0 z-50 w-full backdrop-blur">
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

              <img
                className="mq1225:inline-block hidden size-[50px]"
                alt=""
                src="/burger-menu.png"
              />

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
