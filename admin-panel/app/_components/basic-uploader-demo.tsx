"use client"

import { useUploadFile } from "@/hooks/use-upload-file"
import { FileUploader } from "@/components/file-uploader"

import { UploadedFilesCard } from "./uploaded-files-card"

export function BasicUploaderDemo() {
  const { uploadImages, imagesUploadingProgress, uploadedImages, isImagesUploading } = useUploadFile(
    "imageUploader",
    { defaultUploadedFiles: [] }
  )

  return (
    <div className="space-y-6">
      <FileUploader
        maxFiles={10}
        maxSize={4 * 1024 * 1024}
        progresses={imagesUploadingProgress}
        onUpload={uploadImages}
        disabled={isImagesUploading}
      />
      <UploadedFilesCard uploadedFiles={uploadedImages} />
    </div>
  )
}
