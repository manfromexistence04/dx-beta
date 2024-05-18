import { promises as fs } from "fs"
import path from "path"
import { Metadata, type NextPage } from "next"
import Image from "next/image"
import { z } from "zod"

// import FrameComponent from "@/components/specialty-page/frame-component"
import FrameComponent from "@/components/calculator/page"
import Component from "@/components/specialty-page/component"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"
import { taskSchema } from "./data/schema"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/(app)/calculator/data/tasks.json")
  )
  const tasks = JSON.parse(data.toString())
  return z.array(taskSchema).parse(tasks)
}

async function TaskPage() {
  const tasks = await getTasks()

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Your Chances!
            </h2>
            <p className="text-muted-foreground">
              Here is your calculations history!
            </p>
          </div>
          {/* <div className="flex items-center space-x-2">
            <UserNav />
          </div> */}
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}

const Calculator: NextPage = () => {
  return (
    <div className="calculator">
      <FrameComponent />
      <div className="mx-auto max-w-[1250px]">
        <TaskPage />
      </div>
    </div>
  )
}

export default Calculator
