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
              "sticky top-0 z-[1000000] min-w-56 bg-background text-center backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:min-w-72"
            )}
          >
            {label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  )
}
