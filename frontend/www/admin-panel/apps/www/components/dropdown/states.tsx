"use client"

/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import React from "react"
import states from "@/data/states.json"
import { Check, ChevronsUpDown } from "lucide-react"

import { useDropdownStore } from "@/lib/store/dropdown"
import { type StateProps } from "@/lib/types"
import { cn, lowerCase, sentenceCase } from "@/lib/utils"
/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const StateDropdown = () => {
  const {
    countryValue,
    stateValue,
    openStateDropdown,
    setOpenStateDropdown,
    setStateValue,
  } = useDropdownStore()

  const SD = states as StateProps[]
  const S = SD.filter(
    (state) => state.country_name === sentenceCase(countryValue)
  )

  return (
    <Popover open={openStateDropdown} onOpenChange={setOpenStateDropdown}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={openStateDropdown}
          className="w-[275px] cursor-pointer justify-between rounded-[6px] border"
          disabled={!countryValue || S.length === 0}
        >
          {stateValue ? (
            <div className="flex items-end gap-2">
              <span>
                {S.find((state) => lowerCase(state.name) === stateValue)?.name}
              </span>
            </div>
          ) : (
            <span>Select Address...</span>
          )}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[275px] rounded-[6px] border p-0">
        <Command>
          <CommandInput placeholder="Search state..." />
          <CommandEmpty>No state found.</CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-[300px] w-full">
              {S.map((state) => (
                <CommandItem
                  key={state.id}
                  value={state.name}
                  onSelect={(currentValue) => {
                    setStateValue(
                      currentValue === lowerCase(state.name) ? currentValue : ""
                    )
                    setOpenStateDropdown(false)
                  }}
                  className="flex cursor-pointer items-center justify-between text-xs"
                >
                  <div className="flex items-end gap-2">
                    <span className="">{state.name}</span>
                  </div>
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      stateValue === lowerCase(state.name)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default StateDropdown
