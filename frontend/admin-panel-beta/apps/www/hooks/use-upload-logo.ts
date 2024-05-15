import * as React from "react"
import type { UploadedFile } from "@/types"
import { toast } from "sonner"
import type { UploadFilesOptions } from "uploadthing/types"

import { getErrorMessage } from "@/lib/handle-error"
import { uploadFiles as uploadLogo } from "@/lib/uploadLogo"
import { type OurFileRouter } from "@/app/(app)/api/uploadthing/core"

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
  const [uploadedLogo, setUploadedLogo] =
    React.useState<UploadedFile[]>(defaultUploadedFiles)
  const [logoUploadprogresses, setLogoUploadProgresses] = React.useState<
    Record<string, number>
  >({})
  const [isLogoUploading, setIsLogoUploading] = React.useState(false)

  async function uploadThings(files: File[]) {
    setIsLogoUploading(true)
    try {
      const res = await uploadLogo(endpoint, {
        ...props,
        files,
        onUploadProgress: ({ file, progress }) => {
          setLogoUploadProgresses((prev) => {
            return {
              ...prev,
              [file]: progress,
            }
          })
        },
      })

      setUploadedLogo((prev) => (prev ? [...prev, ...res] : res))
    } catch (err) {
      toast.error(getErrorMessage(err))
    } finally {
      setLogoUploadProgresses({})
      setIsLogoUploading(false)
    }
  }

  return {
    uploadedLogo,
    logoUploadprogresses,
    uploadLogo: uploadThings,
    isLogoUploading,
  }
}
