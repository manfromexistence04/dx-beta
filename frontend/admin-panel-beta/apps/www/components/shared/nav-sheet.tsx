import React from "react"
import Link from "next/link"
import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  HomeIcon,
  SunIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "../ui/button"
import ModeToggle from "./mode-toggle"

const projects = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Usage",
    href: "/usage",
  },
  {
    name: "Text Variants",
    href: "/text-variants",
  },
]
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}
export default function NavSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Variant Vault</SheetTitle>
          <SheetDescription>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link
                  href="https://www.twitter.com/abdo_eth"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    className="flex items-center"
                    variant="ghost"
                    size="icon"
                  >
                    <TwitterLogoIcon className="size-4" />
                  </Button>
                </Link>
                <Link
                  href="https://www.github.com/chrisabdo/motionvariants"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    className="flex items-center"
                    variant="ghost"
                    size="icon"
                  >
                    <GitHubLogoIcon className="size-4" />
                  </Button>
                </Link>
              </div>
              <div>
                <ModeToggle />
              </div>
            </div>
            <div>
              <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                {projects.map((project) => (
                  <Link
                    key={project.name}
                    href={project.href}
                    className="hover:bg-primary-foreground col-span-1 flex rounded-md shadow-sm transition-all duration-200"
                  >
                    <div className="flex flex-1 items-center justify-between truncate rounded-md border">
                      <div className="flex-1 truncate px-4 py-2 text-sm">
                        <h1 className="font-medium ">{project.name}</h1>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
