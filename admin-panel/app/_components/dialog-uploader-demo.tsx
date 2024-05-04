"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FileUploader } from "@/components/file-uploader"

export function DialogUploaderDemo() {
  const [files, setFiles] = React.useState<File[]>([])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Upload logo {files.length > 0 && `(${files.length})`}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Upload logo</DialogTitle>
          <DialogDescription>
            Drag and drop your files here or click to browse.
          </DialogDescription>
        </DialogHeader>
        <FileUploader
          maxFiles={1}
          maxSize={1 * 1024 * 1024}
          onValueChange={setFiles}
        />
      </DialogContent>
    </Dialog>
  )
}
