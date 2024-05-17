"use client"

import React from "react"
import { DEFINITIONS_VARIANTS } from "@/variants/definitions"
import { CheckIcon, ClipboardIcon } from "@radix-ui/react-icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useToast } from "@/components/ui/use-toast"

export default function AllVariants() {
  const { toast } = useToast()

  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Variant Definitions</AccordionTrigger>
        <AccordionContent>
          <ScrollArea className="bg-primary-foreground h-96 rounded-md p-4">
            {/* button that is absolute in the top right corner of the scrollarea */}
            <Button
              size="icon"
              variant="outline"
              className="group/button text-2xs absolute right-4 top-1.5 overflow-hidden font-medium backdrop-blur transition"
              onClick={() => {
                setCopied(true)
                window.navigator.clipboard.writeText(DEFINITIONS_VARIANTS)
                toast({
                  title: "Copied variant definitions to clipboard",
                  description: "Just paste it in your code!",
                })
              }}
            >
              {/* <ClipboardIcon className="w-4 h-4" /> */}
              {copied ? (
                <CheckIcon className="size-4" />
              ) : (
                <ClipboardIcon className="size-4" />
              )}
            </Button>
            <pre>
              <code className="grid gap-1 text-sm text-black dark:text-white [&_span]:h-4">
                {DEFINITIONS_VARIANTS}
              </code>
            </pre>
          </ScrollArea>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
