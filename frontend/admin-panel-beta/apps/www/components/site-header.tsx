"use client"

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
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";
import { Bell, User } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CardsCookieSettings } from "@/registry/default/example/cards/cookie-settings"
import Notifications from "./notifications"
import { CardsReportIssue } from "@/registry/default/example/cards/report-issue"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const { sessionId } = useAuth();
  const pathname = usePathname()

  return (
    <header className="navbar h-[4.5rem] flex items-center justify-center z-10 sticky top-0 w-full bg-background/80 backdrop-blur-2xl border-b">
      <div className={cn(
        "w-full flex h-14 items-center justify-center px-10",
        pathname === "/home" ? "lg:px-[1%]" : "lg:px-[5%]"
      )}>
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">

          {!sessionId && <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>}

          <nav className="flex items-center">


            {

              !sessionId ? (
                <>
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
                      <Button variant="ghost" size="icon" className="w-9 px-0">
                        {/* <Image
                      alt="User"
                      className="aspect-square rounded-full object-cover"
                      height="23"
                      src="/Nurzhol Tabigat.jpg"
                      width="23"
                    /> */}
                        <User className="h-[1.2rem] w-[1.2rem]" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[250px] !z-[10000000000000000000000000000000000000000000000000000000000000000000]">
                      <DropdownMenuLabel>Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href="/sign-in">
                          SignIn
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/sign-up">
                          SignUp
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href="/sign-up">
                          Freelancer
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/sign-up">
                          Upwork
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/sign-up">
                          Fiverr
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/sign-up">
                          Youtube
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/sign-up">
                          Discord
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href="/whiteboard">
                          Whiteboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/planner">
                          Planner
                        </Link>
                      </DropdownMenuItem>


                      {/*
                  ring-offset-background ring-2 ring-ring ring-offset-2
                  <DropdownMenuItem>View Database</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuItem>Help</DropdownMenuItem> */}
                      {/* <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem> */}
                    </DropdownMenuContent>
                  </DropdownMenu>

                </>


              ) : (<div className="flex items-center gap-2">

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Feedback</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[425px] !p-0 border-none">
                    <CardsReportIssue />
                  </PopoverContent>
                </Popover>

                <Button variant="outline">
                  <OrganizationSwitcher
                    appearance={{
                      elements: {
                        organizationPreviewAvatarBox: "size-8",
                      },
                    }}
                  /></Button>



                <Popover>
                  <PopoverTrigger asChild>
                    {/* <Button variant="outline">Open popover</Button> */}
                    <div className="border rounded-full p-2">
                      <Bell className="h-4 w-4" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-[425px] !pt-0 pb-3 px-3">
                    {/* <CardsReportIssue />
                    <CardsCookieSettings /> */}
                    <Notifications />

                  </PopoverContent>
                </Popover>

                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "size-8",
                    },
                  }}
                />
              </div>)
            }


          </nav>
        </div>
      </div>
    </header>
  )
}
