"use client"

import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cn, withVariants } from "@udecode/cn"
import { cva } from "class-variance-authority"

export const toggleVariants = cva(
  cn(
    "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    "[&_svg:not([data-icon])]:size-5"
  ),
  {
    variants: {
      variant: {
        default:
          "hover:bg-muted hover:text-muted-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground bg-transparent",
        outline:
          "border-input hover:bg-accent hover:text-accent-foreground border bg-transparent",
        floating: "bg-primary text-primary-foreground rounded-full",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2",
        lg: "h-11 px-5",
        circle: "p-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export const Toggle = withVariants(TogglePrimitive.Root, toggleVariants, [
  "size",
  "variant",
])
