"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <div className="text-md flex items-center space-x-6">
      <Link
        href="/home"
        className={cn(
          "hover:text-foreground/80 transition-colors",
          pathname === "/universities"
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Home
      </Link>
      <Link
        href="/portfolio"
        className={cn(
          "hover:text-foreground/80 transition-colors",
          pathname === "/specialties" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Portfolio
      </Link>
      <Link
        href="/contract"
        className={cn(
          "hover:text-foreground/80 transition-colors",
          pathname === "/questions" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Contract
      </Link>
      <Link
        href="/whiteboard"
        className={cn(
          "hover:text-foreground/80 transition-colors",
          pathname === "/whiteboard" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Whiteboard
      </Link>
      <Link
        href="/planner"
        className={cn(
          "hover:text-foreground/80 transition-colors",
          pathname === "/planner" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Planner
      </Link>
      {/* <h1
        className={cn(
          "cursor-not-allowed",
          pathname === "/page-variants"
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Questions
      </h1> */}
    </div>
  )
}
