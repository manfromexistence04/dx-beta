import * as React from "react"
import type { UploadedFile } from "@/types"
import { toast } from "sonner"
import type { UploadFilesOptions } from "uploadthing/types"

import { getErrorMessage } from "@/lib/handle-error"
import { uploadFiles as uploadImages } from "@/lib/uploadthing"

import { type OurFileRouter } from "@/app/api/uploadthing/core"

interface UseUploadFileProps
  extends Pick<
    UploadFilesOptions<OurFileRouter, keyof OurFileRouter>,
    "headers" | "onUploadBegin" | "onUploadProgress" | "skipPolling"
  > {
  defaultUploadedFiles?: UploadedFile[]
}

export function useUploadFile(
  endpoint: keyof OurFileRouter,
  { defaultUploadedFiles = [], ...props }: UseUploadFileProps = {}
) {
  const [uploadedImages, setUploadedImages] =
    React.useState<UploadedFile[]>(defaultUploadedFiles)
  const [imagesUploadingProgress, setImagesUploadingProgress] = React.useState<Record<string, number>>({})
  const [isImagesUploading, setIsImagesUploading] = React.useState(false)

  async function uploadThings(files: File[]) {
    setIsImagesUploading(true)
    try {
      const res = await uploadImages(endpoint, {
        ...props,
        files,
        onUploadProgress: ({ file, progress }) => {
          setImagesUploadingProgress((prev) => {
            return {
              ...prev,
              [file]: progress,
            }
          })
        },
      })

      setUploadedImages((prev) => (prev ? [...prev, ...res] : res))
    } catch (err) {
      toast.error(getErrorMessage(err))
    } finally {
      setImagesUploadingProgress({})
      setIsImagesUploading(false)
    }
  }

  return {
    uploadedImages,
    imagesUploadingProgress,
    uploadImages: uploadThings,
    isImagesUploading,
  }
}
