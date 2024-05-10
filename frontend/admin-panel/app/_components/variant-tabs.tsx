import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { BasicUploaderDemo } from "./basic-uploader-demo"
import { DialogUploaderDemo } from "./dialog-uploader-demo"
import { ReactHookFormDemo } from "./react-hook-form-demo"

export function VariantTabs() {
  return (
    <div className="w-full h-full flex flex-col space-y-4">
      <h1 className="text-4xl font-bold w-full text-left pl-4">Images</h1>
      <BasicUploaderDemo />
    </div>
  )
}
