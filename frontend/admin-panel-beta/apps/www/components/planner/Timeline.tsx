import React from "react"
import { useCalendar } from "@/contexts/PlannerContext"

import { cn } from "@/lib/utils"

import { TableHead, TableHeader, TableRow } from "../ui/table"

export const Timeline: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const { timeLabels } = useCalendar()

  return (
    <TableHeader>
      <TableRow className="bg-background">
        <TableHead></TableHead>
        {timeLabels.map((label, index) => (
          <TableHead
            key={index}
            className={cn(
              "bg-background supports-[backdrop-filter]:bg-background/60 sticky top-0 z-[1000000] min-w-56 text-center backdrop-blur lg:min-w-72"
            )}
          >
            {label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  )
}
