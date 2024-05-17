"use client"

import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { withProps, withVariants } from "@udecode/cn"
import { cva } from "class-variance-authority"

const separatorVariants = cva("bg-border shrink-0", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

export const Separator = withVariants(
  withProps(SeparatorPrimitive.Root, {
    orientation: "horizontal",
    decorative: true,
  }),
  separatorVariants
)
