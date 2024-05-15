"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ModeToggle from "@/components/shared/mode-toggle"
import { NavDropdown } from "@/components/shared/nav-dropdown"
import NavLinks from "@/components/shared/nav-links"
import VVLogo from "@/components/shared/vv-logo"

import NavSheet from "./nav-sheet"

export default function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Call handleScroll on initial render
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.header
      className={`navbar sticky top-0 z-[100000000000000] flex h-20 !w-full items-center justify-start px-12 transition-all duration-200 lg:px-[2%] ${
        isScrolled ? "bg-background/80 border-b backdrop-blur-2xl" : "border-b"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", bounce: 0.25 }}
    >
      <nav
        className="flex flex-1 items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="z-50 flex items-center gap-x-12">
          <VVLogo />
          <div className="hidden lg:flex lg:gap-x-12">
            <NavLinks />
          </div>
        </div>
        <div className="z-50 flex lg:hidden">
          <NavDropdown />
          <NavSheet />
        </div>
        <div className="z-50 hidden space-x-1 lg:flex">
          <Link
            href="https://www.twitter.com/abdo_eth"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="flex items-center" variant="ghost" size="icon">
              <TwitterLogoIcon className="size-4" />
            </Button>
          </Link>
          {/* <Link
            href="https://www.github.com/chrisabdo/motionvariants"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="flex items-center" variant="ghost" size="icon">
              <GitHubLogoIcon className="h-4 w-4" />
            </Button>
          </Link> */}
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="ring-offset-background ring-ring mt-2 max-h-[25px] max-w-[25px] rounded-full border  ring-2 ring-offset-2"
              >
                <Image
                  alt="User"
                  className="aspect-square rounded-full object-cover"
                  height="23"
                  src="/Nurzhol Tabigat.jpg"
                  width="23"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="!z-[10000000000000000000000000000000000000000000000000000000000000000000] w-[250px]"
            >
              <DropdownMenuLabel>Nurzhol Tabigat</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Switch Account</DropdownMenuItem>
              <DropdownMenuItem>View Database</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </motion.header>
  )
}
