import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/registry/new-york/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { NavDropdown } from "@/components/shared/nav-dropdown";
import NavLinks from "@/components/shared/nav-links";
import VVLogo from "@/components/shared/vv-logo";
import { motion } from "framer-motion";

export function SiteHeader() {
  return (
    <header className="navbar h-[4.5rem] flex items-center justify-center z-10 sticky top-0 w-full bg-background/80 backdrop-blur-2xl border-b">
      <div className="w-full flex h-14 items-center justify-center lg:px-[0.5%] px-10">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full max-h-[25px] max-w-[25px] border ring-offset-background ring-2 ring-ring ring-offset-2">
                  <Image
                    alt="User"
                    className="aspect-square rounded-full object-cover"
                    height="23"
                    src="/Nurzhol Tabigat.jpg"
                    width="23"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[250px] !z-[10000000000000000000000000000000000000000000000000000000000000000000]">
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
          </nav>
        </div>
      </div>
    </header>
  )
}
