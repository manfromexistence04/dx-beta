"use client"

import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { redirect, useRouter } from "next/navigation"
import type { UploadedFile } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button as NextuiButton } from "@nextui-org/react"
import { ImageIcon } from "@radix-ui/react-icons"
import { cn } from "@udecode/cn"
import { CommentsProvider } from "@udecode/plate-comments"
import { Plate } from "@udecode/plate-common"
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph"
import { cva, type VariantProps } from "class-variance-authority"
import { Tag, TagInput } from "emblor"
import { initializeApp } from "firebase/app"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronsUpDown,
  CloudUpload,
  Loader2,
  Plus,
  Projector,
  X,
} from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

// // import { DndProvider } from 'react-dnd';
// // import { HTML5Backend } from 'react-dnd-html5-backend';
import { commentsUsers, myUserId } from "@/lib/plate/comments"
import { MENTIONABLES } from "@/lib/plate/mentionables"
import { plugins } from "@/lib/plate/plate-plugins"
import { useDropdownStore } from "@/lib/store/dropdown"
import { useUniversityImages } from "@/lib/store/university-images"
import { useUploadFile as useUploadImages } from "@/hooks/use-upload-file"
import { useUploadFile as useUploadLogo } from "@/hooks/use-upload-logo"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Button as AnimatedButton } from "@/components/button"
import { Code } from "@/components/code"
import CountryDropdown from "@/components/dropdown/countries"
import StateDropdown from "@/components/dropdown/states"
import { EmptyCard } from "@/components/empty-card"
import { FileUploader } from "@/components/file-uploader"
import { getPhoneData, PhoneInput } from "@/components/phone-input"
import { CommentsPopover } from "@/components/plate-ui/comments-popover"
import { CursorOverlay } from "@/components/plate-ui/cursor-overlay"
import { Editor } from "@/components/plate-ui/editor"
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar"
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons"
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar"
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons"
import { MentionCombobox } from "@/components/plate-ui/mention-combobox"
import { ToastAction } from "@/registry/default//ui/toast"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/default/ui/form"
import { useToast } from "@/registry/default/ui/use-toast"

const firebaseConfig = {
  apiKey: "AIzaSyAj8jpnqU9Xo1YXVFJh-wCdulweO5z--H8",
  authDomain: "ustudy-96678.firebaseapp.com",
  projectId: "ustudy-96678",
  storageBucket: "ustudy-96678.appspot.com",
  messagingSenderId: "581632635532",
  appId: "1:581632635532:web:51ccda7d7adce6689a81a9",
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Database
const db: any = getFirestore(app)

interface UploadedFilesCardProps {
  uploadedFiles: UploadedFile[]
}
interface UploadedFilesCardProps {
  uploadedFiles: UploadedFile[]
}

export default function CreateUniversity() {
  const [resultsTag, setResultslTag] = React.useState<Tag[]>([])
  const [answersTag, setAnswersTag] = React.useState<Tag[]>([])
  const {
    uploadImages,
    imagesUploadingProgress,
    uploadedImages,
    isImagesUploading,
  } = useUploadImages("imageUploader", { defaultUploadedFiles: [] })
  const { uploadLogo, logoUploadprogresses, isLogoUploading, uploadedLogo } =
    useUploadLogo("imageUploader", { defaultUploadedFiles: [] })
  const { toast } = useToast()
  const router = useRouter()
  const {
    countryValue,
    stateValue,
    openStateDropdown,
    setOpenStateDropdown,
    setStateValue,
  } = useDropdownStore()
  const { images } = useUniversityImages()
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const handleConfetti = async () => {
    const { clientWidth, clientHeight } = document.documentElement
    const boundingBox = buttonRef.current?.getBoundingClientRect?.()

    const targetY = boundingBox?.y ?? 0
    const targetX = boundingBox?.x ?? 0
    const targetWidth = boundingBox?.width ?? 0

    const targetCenterX = targetX + targetWidth / 2
    const confetti = (await import("canvas-confetti")).default

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 70,
      origin: {
        y: targetY / clientHeight,
        x: targetCenterX / clientWidth,
      },
    })
    const Create = await addDoc(collection(db, "questions"), {
      mainQuestion: inputedMainQuestion,
      answers: answersTag.map((obj) => obj.text),
      results: resultsTag.map((obj) => obj.text),
    })
    console.log("Document written with ID: ", Create.id)
    toast({
      title: "University has been created",
      description: (
        <div className="bg-primary-foreground mt-2 w-[340px] rounded-md p-4">
          <span>You Can now update,view and delete this question!</span>
          <pre className="bg-background max-h-[500px] overflow-auto">
            <code className="text-muted-foreground bg-secondary">
              {JSON.stringify(Create.id, null, 2)}
            </code>
          </pre>
        </div>
      ),
    })
    router.push("/questions")
  }
  const [inputedValues, setInputedValues] = React.useState(false)
  const [createButtonDisabled, setCreateButtonDisabled] = React.useState(true)
  const [isOpen, setIsOpen] = React.useState(false)
  const [phoneNumberDetails, setPhoneNumberDetails] = React.useState(false)
  const containerRef = useRef(null)
  const initialValue = [
    {
      id: "1",
      type: ELEMENT_PARAGRAPH,
      children: [{ text: "Hello, World!" }],
    },
  ]
  const [phone, setPhone] = React.useState("+1 (408) 996–1010")
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }
  const phoneData = getPhoneData(phone)
  function showPhoneNumberDetails() {
    setPhoneNumberDetails(!phoneNumberDetails)
  }
  let address: string = "Bangladesh, Jhenaidah"
  let educationCost: string = "1 335 000 ₸"
  let email: string = "rektorat@amu.kz"
  let facebook: string = "https://www.facebook.com/MeduniverAstana"
  let hostel: string = "есть"
  let image: any = [
    "https://firebasestorage.googleapis.com/v0/b/ustudy-96678.appspot.com/o/IMG_20240410_001743.jpg?alt=media&token=ef6b3928-40bd-460b-bbb8-f0445ff37319",
    "https://firebasestorage.googleapis.com/v0/b/ustudy-96678.appspot.com/o/IMG_20240410_001743.jpg?alt=media&token=ef6b3928-40bd-460b-bbb8-f0445ff37319",
  ]
  let instagram: string = "https://www.instagram.com/amu_mua_official"
  let military: string = "есть"
  let phoneNumber: string = "(+77172539424)"
  let region: string = "г. Астана"
  let status: string = "акционированный"
  let universityCode: string = "1"
  let universityDescription: string =
    "Медицинский университет Астана является одним из самых крупных и динамично развивающихся медицинских ВУЗов нашей страны, имеет высокую репутацию в сфере высшего медицинского образования, свои традиции, как в области предоставления образовательных услуг, так и в развитии медицинской науки и клинической деятельности."
  let universityName: string = "Медицинский университет Астана"
  let website: string = "https://amu.edu.kz/"
  let logo: string = "https://amu.edu.kz/"
  const [inputedMainQuestion, setInputedMainQuestion] = React.useState("")
  const [inputedName, setInputedName] = React.useState("")
  const [inputedEmail, setInputedEmail] = React.useState("")
  const [inputedStatus, setInputedStatus] = React.useState("")
  const [inputedFacebook, setInputedFacebook] = React.useState("")
  const [inputedInstragam, setInputedInstragam] = React.useState("")
  const [inputedCost, setInputedCost] = React.useState("")
  const [inputedWebsite, setInputedWebsite] = React.useState("")
  const [inputedCode, setInputedCode] = React.useState("")
  const [inputedHostel, setInputedHostel] = React.useState("")
  const [inputedMilitary, setInputedMilitary] = React.useState("")
  const [inputedPhoneNumber, setInputedPhoneNumber] = React.useState(phone)
  const [inputedLogo, setInputedLogo] = React.useState("")
  const [inputedAddress, setInputedAddress] = React.useState(stateValue)
  const [inputedRegion, setInputedRegion] = React.useState(countryValue)
  const [inputedDescription, setInputedDesciption] = React.useState("")
  const [inputedImages, setInputedImages] = React.useState([])

  const handleMainQuestion = (event: any) => {
    setInputedMainQuestion(event.target.value)
  }

  const handleEmailChange = (event: any) => {
    setInputedEmail(event.target.value)
  }

  const handleStatusChange = (event: any) => {
    setInputedStatus(event)
  }

  const handleFacebookChange = (event: any) => {
    setInputedFacebook(event.target.value)
  }

  const handleInstagramChange = (event: any) => {
    setInputedInstragam(event.target.value)
  }

  const handleCostChange = (event: any) => {
    setInputedCost(event.target.value)
  }

  const handleWebsiteChange = (event: any) => {
    setInputedWebsite(event.target.value)
  }

  const handleCodeChange = (event: any) => {
    setInputedCode(event.target.value)
  }

  const handleHostelChange = (event: any) => {
    setInputedHostel(event)
  }

  const handleMilitaryChange = (event: any) => {
    setInputedMilitary(event)
  }
  const handleDescriptionChange = (event: any) => {
    setInputedDesciption(event.target.value)
  }

  const imagesChange = () => {
    setInputedDesciption(JSON.stringify(event))
  }
  // const create = (event: any) => {
  //     // setInputedImages(event.target.value);
  // }
  const syncImagesAndLogo = () => {
    // uploadedImages.map((file: any) => {
    //     setInputedImages(file.url);
    //     return null;
    // })
    const newArray2: any = uploadedImages.map((file) => file.url)
    setInputedImages(newArray2)

    uploadedLogo.map((file: any) => {
      setInputedLogo(file.url)
      return null
    })
    setCreateButtonDisabled(!createButtonDisabled)
  }
  const handleInputedValues = () => {
    setInputedValues(!inputedValues)
  }
  return (
    <>
      <div className="create-university mx-auto min-h-screen w-full space-y-3 p-10 pt-3 lg:flex lg:max-w-[1500px] lg:flex-col">
        <div className="action my-3 hidden w-full items-center justify-between lg:flex ">
          <div className="flex size-full items-start justify-start space-x-3">
            <Link href="/questions" className="z-50">
              <AnimatedButton
                variant="expandIcon"
                Icon={ArrowLeftIcon}
                iconPlacement="left"
                className="border-input bg-background hover:bg-accent text-accent-foreground border"
              >
                Back
              </AnimatedButton>
            </Link>
            <AnimatedButton
              onClick={handleInputedValues}
              variant="expandIcon"
              Icon={Projector}
              iconPlacement="left"
              className="border-input bg-background hover:bg-accent text-accent-foreground border"
            >
              {inputedValues ? "Hide" : "Show"} Inputed Values
            </AnimatedButton>
          </div>
          <div className="flex size-full items-end justify-end space-x-3">
            {/* <AnimatedButton onClick={syncImagesAndLogo} variant="expandIcon" Icon={CloudUpload} iconPlacement="left" className="border border-input bg-background hover:bg-accent text-accent-foreground">
                            Sync Uploaded Files
                        </AnimatedButton> */}
            <Button
              className="!py-0"
              // disabled={createButtonDisabled}
              onClick={handleConfetti}
            >
              {/* {
                                createButtonDisabled && <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            } */}
              Create
            </Button>
          </div>
        </div>
        {inputedValues && (
          <div className="!mb-3 flex w-max min-w-full flex-col gap-2 rounded-lg border p-3 text-sm">
            <div className="flex gap-2 p-3">
              <p>MainQestion: </p>
              <span className="font-semibold">
                {inputedMainQuestion || "No MainQestion is Provided."}
              </span>
            </div>
            <Separator />
            <div className="flex gap-2 p-3">
              <p>Answers: </p>
              <span className="font-semibold">
                {JSON.stringify(answersTag, null, 2) ||
                  "No Answers is Provided."}
              </span>
            </div>
            <Separator />
            <div className="flex gap-2 p-3">
              <p>Results: </p>
              <span className="font-semibold">
                {JSON.stringify(resultsTag, null, 2) ||
                  "No Results is Provided."}
              </span>
            </div>
          </div>
        )}

        <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
          <h1 className="w-full text-left text-4xl font-bold">Answers</h1>
          <TagInput
            placeholder="Enter Your Results"
            tags={answersTag}
            className="sm:min-w-[450px]"
            setTags={(newTags) => {
              setAnswersTag(newTags)
            }}
          />
        </div>
        <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
          <h1 className="w-full text-left text-4xl font-bold">Results</h1>
          <TagInput
            placeholder="Enter Your Results"
            tags={resultsTag}
            className="sm:min-w-[450px]"
            setTags={(newTags) => {
              setResultslTag(newTags)
            }}
          />
        </div>
        <div className="hover-glow-border flex h-auto w-full flex-col items-center justify-center space-y-3 rounded-md border p-10">
          <h1 className="w-full text-left text-4xl font-bold">MainQuestion</h1>
          <Input
            onChange={handleMainQuestion}
            type="text"
            placeholder="Enter MainQuestion"
          />
        </div>

        <div className="action my-3 flex w-full flex-col items-start justify-start space-y-3 lg:hidden lg:space-y-0">
          <Link href="/questions" className="z-50 w-full">
            <AnimatedButton
              variant="expandIcon"
              Icon={ArrowLeftIcon}
              iconPlacement="left"
              className="border-input bg-secondary hover:bg-accent text-accent-foreground !min-w-full border lg:w-auto"
            >
              Back
            </AnimatedButton>
          </Link>
          <AnimatedButton
            onClick={handleInputedValues}
            variant="expandIcon"
            Icon={Projector}
            iconPlacement="left"
            className="border-input bg-background hover:bg-accent text-accent-foreground w-full border"
          >
            {inputedValues ? "Hide" : "Show"} Inputed Values
          </AnimatedButton>
          {/* <AnimatedButton onClick={syncImagesAndLogo} variant="expandIcon" Icon={CloudUpload} iconPlacement="left" className="border w-full border-input bg-background hover:bg-accent text-accent-foreground">
                        Sync Uploaded Files
                    </AnimatedButton> */}
          <AnimatedButton
            className="w-full !py-0"
            disabled={createButtonDisabled}
            // onClick={handleConfetti}
          >
            {/* {
                            createButtonDisabled && <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        } */}
            Create
          </AnimatedButton>
        </div>
      </div>
    </>
  )
}

{
  /* <div className="hover-glow-border flex flex-col items-start justify-center gap-3 w-full h-full rounded-md border p-10">
                        <div className="flex flex-col lg:flex-row items-center justify-start gap-3 w-full">
                            <section className="z-10 w-full flex flex-col items-start text-start gap-5">
                                <div id="try" className="w-full">
                                    <div className="w-full relative flex flex-col space-y-2">
                                        <div className="preview flex max-h-auto w-full justify-start items-start ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md">
                                            <Form {...form}>
                                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-start">
                                                    <FormField
                                                        control={form.control}
                                                        name="topics"
                                                        render={({ field }) => (
                                                            <FormItem className="flex flex-col items-start">
                                                                <h1 className="text-4xl font-bold w-full text-left">Tag</h1>

                                                                <FormControl className="w-full">
                                                                    <TagInput
                                                                        {...field}
                                                                        placeholder="Enter a topic"
                                                                        tags={tags}
                                                                        className="sm:min-w-[450px]"
                                                                        setTags={(newTags) => {
                                                                            setTags(newTags);
                                                                            setValue('topics', newTags as [Tag, ...Tag[]]);
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                                <FormDescription className="text-left">
                                                                    These are the topics that you&apos;re interested in.
                                                                </FormDescription>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <Button type="submit">Submit</Button>
                                                </form>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div> */
}

// const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
// });
// const [tags, setTags] = React.useState<Tag[]>([]);
// const { setValue } = form;
// function onSubmit(data: z.infer<typeof FormSchema>) {
//     toast({
//         title: 'You submitted the following values:',
//         description: (
//             <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//                 <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//             </pre>
//         ),
//     });
// }

// interface ShellProps
//     extends React.HTMLAttributes<HTMLDivElement>,
//     VariantProps<typeof shellVariants> {
//     as?: React.ElementType
// }

// Starting
// const shellVariants = cva("grid items-center gap-8 pb-8 pt-6 md:py-8", {
//     variants: {
//         variant: {
//             default: "container",
//             sidebar: "",
//             centered: "mx-auto mb-16 mt-20 max-w-md justify-center",
//             markdown: "container max-w-3xl gap-0 py-8 md:py-10 lg:py-10",
//         },
//     },
//     defaultVariants: {
//         variant: "default",
//     },
// })

// function Shell({
//     className,
//     as: Comp = "section",
//     variant,
//     ...props
// }: ShellProps) {
//     return (
//         <Comp className={cn(shellVariants({ variant }), className)} {...props} />
//     )
// }

// const CreateButton = () => {
//     const buttonRef = useRef<HTMLButtonElement | null>(null);

//     const handleConfetti = async () => {
//         const { clientWidth, clientHeight } = document.documentElement;
//         const boundingBox = buttonRef.current?.getBoundingClientRect?.();

//         const targetY = boundingBox?.y ?? 0;
//         const targetX = boundingBox?.x ?? 0;
//         const targetWidth = boundingBox?.width ?? 0;

//         const targetCenterX = targetX + targetWidth / 2;
//         const confetti = (await import("canvas-confetti")).default;

//         confetti({
//             zIndex: 999,
//             particleCount: 100,
//             spread: 70,
//             origin: {
//                 y: targetY / clientHeight,
//                 x: targetCenterX / clientWidth,
//             },
//         });
//     };

//     return (
//         <NextuiButton
//             ref={buttonRef}
//             disableRipple
//             className="center relative overflow-visible border !rounded-md hover:bg-primary-foreground bg-background hover:text-accent-foreground"
//             size="md"
//             onPress={handleConfetti}
//         >
//             Create
//         </NextuiButton>
//     );
// };
// const FormSchema = z.object({
//     topics: z.array(
//         z.object({
//             id: z.string(),
//             text: z.string(),
//         }),
//     ),
// });
// function PlateEditor() {
//     const containerRef = useRef(null);

//     const initialValue = [
//         {
//             id: '1',
//             type: ELEMENT_PARAGRAPH,
//             children: [{ text: 'Hello, World!' }],
//         },
//     ];

//     return (
//         <DndProvider backend={HTML5Backend}>
//             <CommentsProvider users={commentsUsers} myUserId={myUserId}>
//                 <Plate plugins={plugins} initialValue={initialValue}>
//                     <div
//                         ref={containerRef}
//                         className={cn(
//                             'relative',
//                             '[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4'
//                         )}
//                     >
//                         <FixedToolbar>
//                             <FixedToolbarButtons />
//                         </FixedToolbar>

//                         <Editor
//                             className="p-3 px-7 !min-h-[500px]"
//                             autoFocus
//                             focusRing={false}
//                             variant="ghost"
//                             size="md"
//                         />

//                         <MentionCombobox items={MENTIONABLES} />

//                         <CommentsPopover />

//                         <CursorOverlay containerRef={containerRef} />
//                     </div>
//                 </Plate>
//             </CommentsProvider>
//         </DndProvider>
//     );
// }
// function Tags() {
//     const form = useForm<z.infer<typeof FormSchema>>({
//         resolver: zodResolver(FormSchema),
//     });

//     const [tags, setTags] = React.useState<Tag[]>([]);

//     const { setValue } = form;
//     const { toast } = useToast();

//     function onSubmit(data: z.infer<typeof FormSchema>) {
//         toast({
//             title: 'You submitted the following values:',
//             description: (
//                 <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//                     <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//                 </pre>
//             ),
//         });
//     }

//     return (
//         <section className="z-10 w-full flex flex-col items-center text-center gap-5">
//             <div id="try" className="w-full py-8">
//                 <div className="w-full relative my-4 flex flex-col space-y-2">
//                     <div className="preview flex min-h-[350px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
//                         <Form {...form}>
//                             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-start">
//                                 <FormField
//                                     control={form.control}
//                                     name="topics"
//                                     render={({ field }) => (
//                                         <FormItem className="flex flex-col items-start">
//                                             <FormLabel className="text-left">Topics</FormLabel>
//                                             <FormControl className="w-full">
//                                                 <TagInput
//                                                     {...field}
//                                                     placeholder="Enter a topic"
//                                                     tags={tags}
//                                                     className="sm:min-w-[450px]"
//                                                     setTags={(newTags) => {
//                                                         setTags(newTags);
//                                                         setValue('topics', newTags as [Tag, ...Tag[]]);
//                                                     }}
//                                                 />
//                                             </FormControl>
//                                             <FormDescription className="text-left">
//                                                 These are the topics that you&apos;re interested in.
//                                             </FormDescription>
//                                             <FormMessage />
//                                         </FormItem>
//                                     )}
//                                 />
//                                 <Button type="submit">Submit</Button>
//                             </form>
//                         </Form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// function UploadedFilesCard({ uploadedFiles }: UploadedFilesCardProps) {
//     return (
//         <Card className="hover-glow-border">
//             <CardHeader>
//                 <CardTitle>Uploaded images</CardTitle>
//                 <CardDescription>View the uploaded images here</CardDescription>
//             </CardHeader>
//             <CardContent>
//                 {uploadedFiles.length > 0 ? (
//                     <ScrollArea className="pb-4">
//                         <div className="flex w-max space-x-2.5">
//                             {uploadedFiles.map((file) => (
//                                 <div key={file.key} className="relative aspect-video w-64">
//                                     <Image
//                                         src={file.url}
//                                         alt={file.name}
//                                         fill
//                                         sizes="(min-width: 640px) 640px, 100vw"
//                                         loading="lazy"
//                                         className="rounded-md object-cover"
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                         <ScrollBar orientation="horizontal" />
//                     </ScrollArea>
//                 ) : (
//                     <EmptyCard
//                         title="No images uploaded"
//                         description="Upload some images to see them here"
//                         className="w-full"
//                     />
//                 )}
//             </CardContent>
//         </Card>
//     )
// }
