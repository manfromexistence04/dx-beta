/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
"use client"

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import type { NextPage } from "next"
import Link from "next/link"
import { initializeApp } from "firebase/app"
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  onSnapshot,
  query,
  startAfter,
  updateDoc,
} from "firebase/firestore"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import FrameComponent from "@/components/spcialty-products-page/frame-component"
import { useToast } from "@/registry/default/ui/use-toast"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Chrome, CircleDollarSign, Code, Earth, Facebook, Flame, Hotel, Instagram, Mail, MapPinned, MessageCircleDashed, Phone, PocketKnife, University } from "lucide-react"

const firebaseConfig = {
  apiKey: "AIzaSyAj8jpnqU9Xo1YXVFJh-wCdulweO5z--H8",
  authDomain: "ustudy-96678.firebaseapp.com",
  projectId: "ustudy-96678",
  storageBucket: "ustudy-96678.appspot.com",
  messagingSenderId: "581632635532",
  appId: "1:581632635532:web:51ccda7d7adce6689a81a9",
}
const app = initializeApp(firebaseConfig)
const db: any = getFirestore(app)

const fetchDocument = async (docId: string) => {
  const docRef = doc(db, "universities", docId)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
}

const Collages: any = ({ params }: { params: { slug: string } }) => {
  const [docs, setDocs] = useState<any>([])
  const [lastDoc, setLastDoc] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const fetchDocs = async () => {
      setLoading(true)
      const data = await fetchDocument(params.slug)
      setDocs(data)
      setLoading(false)
    }
    fetchDocs()
  }, [])

  const loadMore = async () => {
    setLoading(true)
    const q = query(
      collection(db, "universities"),
      startAfter(lastDoc),
      limit(8)
    )
    const querySnapshot = await getDocs(q)
    if (querySnapshot.docs.length === 0) {
      toast({
        title: "There is no more data in the database.",
        description: (
          <div className="bg-primary-foreground mt-2 w-[340px] rounded-md p-4">
            <span>Please add more data to load more!</span>
          </div>
        ),
      })
      setLoading(false)
      return
    }
    const newDocs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    setDocs([...docs, ...newDocs])
    setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1])
    setLoading(false)
  }

  if (loading) {
    return (
      <main className="h-auto w-full px-[5%] py-5">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-display text-center text-lg font-bold tracking-[-0.02em] drop-shadow-sm md:text-3xl md:leading-[5rem]">
            Collages
          </span>
        </div>
        <div className="admin-panel-lists-loading place-content-center">
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
          <div className="flex min-h-max w-full max-w-[90%] flex-col space-y-3 rounded-xl border p-5">
            <Skeleton className="h-[225px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-7 w-full" />
              <Skeleton className="h-7 w-full" />
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <>
      {docs ? (
        <div className="font-headings-desktop-poppins-16px-bold text-shade-white relative box-border flex w-full flex-col items-start justify-start overflow-hidden bg-black px-0 pb-[404px] pt-0 text-center text-xl leading-[normal] tracking-[normal]">
          {docs.images && docs.images.length > 0 ? (
            docs.images.map((index: any) => (
              <div key={index} className="relative z-20 w-full">


                <div className="bg-primary-foreground absolute bottom-0 left-0 z-50 rounded-full border border-red-500 !p-10">
                  <Avatar className="z-40 !m-10 size-[200px] !border-none object-cover">
                    <AvatarImage src={docs.logo} alt="@Ustudy" />
                    <AvatarFallback>UY</AvatarFallback>
                  </Avatar>
                </div>

                <img
                  className="!m-0 h-[800px] !min-w-full rounded-[5px] object-cover"
                  alt="Images"
                  src={index}
                />
                {/* <span>{index}</span> */}
              </div>
            ))
          ) : docs.image ? (
            <div className="relative z-20 w-full">
              {/* <Avatar className="absolute -bottom-[100px] left-[10%] z-50 !m-0 size-[200px] rounded-full border object-cover">
                <AvatarImage src={docs.logo} alt="@Ustudy" />
                <AvatarFallback>UY</AvatarFallback>
              </Avatar> */}
              <div className="bg-background absolute -bottom-[125px] left-[10%] z-50 size-auto rounded-full border border-green-500">
                <Avatar className="z-40 !m-[50px] size-[150px] !border-none object-cover">
                  <AvatarImage src={docs.logo} alt="@Ustudy" />
                  <AvatarFallback>UY</AvatarFallback>
                </Avatar>
              </div>
              <img
                className="!m-0 h-[800px] w-full rounded-[5px] object-cover"
                alt="Image"
                src={docs.image}
              />
            </div>

          ) : (
            ""
          )}

          {docs.images && docs.images.length > 0 ? (
            ""
          ) : docs.image ? (
            ""
          ) : (
            <img
              className="!m-0 h-[800px] w-full rounded-[5px] object-cover"
              alt="No Image"
              src="/rectangle14230.png"
            />
          )}
          {/* {docs.logo ? (
            <Avatar className="absolute left-[312px] top-[655px] z-[1] !m-0 h-[113.3px] w-[126.9px] rounded-[5px] object-cover">
              <AvatarImage src={docs.logo} alt="@Ustudy" />
              <AvatarFallback>UY</AvatarFallback>
            </Avatar>
          ) : (
            <img
              className="absolute left-[312px] top-[655px] z-[1] !m-0 h-[113.3px] w-[126.9px] rounded-[5px] object-cover"
              loading="lazy"
              alt=""
              src={"/rectangle14231.png"}
            />
          )} */}

          {/* <img
                    className="!m-0 h-[800px] w-full rounded-[5px] object-cover"
                    loading="lazy"
                    alt="1"
                    src="/rectangle14230.png"
                />
                <img
                    className="absolute left-[312px] top-[655px] z-[1] !m-0 h-[113.3px] w-[126.9px] rounded-[5px] object-cover"
                    loading="lazy"
                    alt="2"
                    src="/rectangle14231.png"
                /> */}
          <div className="bg-blueviolet-100 z-[2] box-border hidden w-[274px] flex-row items-center justify-start whitespace-nowrap rounded-lg px-0 py-4">
            <b className="relative inline-block h-4 flex-1 leading-[16px]">
              Read uSTAKING white paper
            </b>
          </div>
          <main className="flex max-w-full flex-col items-start justify-start space-y-2 self-stretch lg:space-y-10">
            <span className="title text-37xl !mx-auto mt-32 w-[50%] truncate bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              {docs.universityName || "Astana IT University"}
            </span>
            {/* <section className="text-lightsteelblue font-headings-desktop-poppins-16px-bold !mx-auto box-border flex w-[1245px] max-w-full flex-row items-start justify-center px-5 py-0 text-left text-5xl">
              <div className="flex w-[1061px] max-w-full flex-row items-start justify-start gap-[16.6px]">
                <div className="flex flex-col items-start justify-start px-0 pb-0 pt-1.5">
                  <div className="flex flex-col items-start justify-start gap-[54px]">
                    <div className="relative flex flex-row items-start justify-start">
                      <img
                        className="relative size-5"
                        loading="lazy"
                        alt=""
                        src="/circle.png"
                      />
                      <div className="absolute bottom-[-457px] left-[-20px] z-[1] !m-0 h-[483px] w-[30px] rounded-sm bg-black" />
                    </div>
                    <img
                      className="relative size-5"
                      loading="lazy"
                      alt=""
                      src="/circle.png"
                    />
                    <img
                      className="relative size-5"
                      loading="lazy"
                      alt=""
                      src="/circle.png"
                    />
                    <img
                      className="relative size-5"
                      loading="lazy"
                      alt=""
                      src="/circle.png"
                    />
                    <img
                      className="relative size-5"
                      loading="lazy"
                      alt=""
                      src="/circle.png"
                    />
                    <img
                      className="relative size-5"
                      loading="lazy"
                      alt=""
                      src="/circle.png"
                    />
                    <img
                      className="relative size-5"
                      loading="lazy"
                      alt=""
                      src="/circle.png"
                    />
                  </div>
                </div>
                <div className="flex max-w-[calc(100%_-_37px)] flex-1 flex-row items-start justify-start gap-[22.4px]">
                  <div className="mq750:hidden flex flex-col items-start justify-start gap-[44.2px]">
                    <a
                      className="!m-0 bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent"
                      href="https://www.appily.com/colleges/ucla"
                      target="_blank"
                    >
                      Overview
                    </a>
                    <a
                      className="mq450:text-lgi mq450:leading-[24px] relative inline-block min-w-[90px] !bg-clip-text font-bold leading-[125%] tracking-wider text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(#9da5c3,_#9da5c3),_#fff] [text-decoration:none]"
                      href="https://www.appily.com/colleges/ucla/admissions"
                      target="_blank"
                    >{`Tuition `}</a>
                    <b className="mq450:text-lgi mq450:leading-[24px] relative inline-block min-w-[119px] !bg-clip-text leading-[125%] tracking-wider text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(#9da5c3,_#9da5c3),_#fff]">
                      Contacts
                    </b>
                    <b className="mq450:text-lgi mq450:leading-[24px] relative inline-block min-w-[87px] !bg-clip-text leading-[125%] tracking-wider text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(#9da5c3,_#9da5c3),_#fff]">
                      Majors
                    </b>
                    <b className="mq450:text-lgi mq450:leading-[24px] relative !bg-clip-text leading-[125%] tracking-wider text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(#9da5c3,_#9da5c3),_#fff]">{`Campus Life `}</b>
                    <b className="mq450:text-lgi mq450:leading-[24px] relative !bg-clip-text leading-[125%] tracking-wider text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(#9da5c3,_#9da5c3),_#fff]">
                      Academics
                    </b>
                    <b className="mq450:text-lgi mq450:leading-[24px] relative inline-block min-w-[104px] !bg-clip-text leading-[125%] tracking-wider text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(#9da5c3,_#9da5c3),_#fff]">
                      Reviews
                    </b>
                  </div>
                  <div className="font-dm-sans-desktop-24px-regular mq1050:gap-[31px] mq750:max-w-full mq450:gap-[15px] flex max-w-[calc(100%_-_182px)] flex-1 flex-col items-start justify-start gap-[62px]">
                    <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch py-0 pl-0.5 pr-1.5">
                      <div className="mq450:text-lgi relative inline-block max-w-full flex-1">
                        <p className="m-0">
                          {docs.universityName} University has an active student
                          self-government,
                        </p>
                        <p className="m-0">
                          which is an element of the general system of
                          management of educational process in the university
                          and implies maximum consideration of interests of
                          students.
                        </p>
                        <p className="m-0">{`
                                                process at the university and assumes maximum consideration of interests,`}</p>
                        <p className="m-0">
                          needs of students on the basis of studying their
                          public opinion.
                        </p>
                      </div>
                    </div>
                    <div className="text-whitesmoke font-poppins text-13xl flex flex-col items-start justify-start gap-[7px] self-stretch">
                      <b className="mq1050:text-7xl mq450:text-lgi relative self-stretch">
                        Entire Ecosystem
                      </b>
                      <div className="font-dm-sans-desktop-24px-regular text-lightsteelblue mq450:text-lgi relative self-stretch text-5xl">
                        <p className="m-0">
                          {docs.universityName} University has an active student
                          self-government,
                        </p>
                        <p className="m-0">
                          which is an element of the general system of
                          management of educational process in the university
                          and implies maximum consideration of interests of
                          students.
                        </p>
                        <p className="m-0">{`process at the university and assumes maximum consideration of interests,`}</p>
                        <p className="m-0">
                          needs of students on the basis of studying their
                          public opinion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            <div className="mx-auto flex w-full max-w-[90%] flex-col gap-2 rounded-lg border p-3 text-sm lg:w-[1500px]">
              <div className="flex items-center justify-start gap-2">
                <div className="bg-primary-foreground flex size-[45px] items-center justify-center rounded-full p-1 pb-2">
                  <University className="size-5 !p-0" />
                </div>
                <p className="flex flex-row text-center">University: </p>
                <span className="w-auto select-all text-start font-semibold">{docs.universityName || "No Name is Provided."}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-start gap-2">
                <div className="bg-primary-foreground flex size-[45px] items-center justify-center rounded-full p-1 pb-2">
                  <Mail className="size-5 !p-0" />
                </div>
                <p>Email: </p>
                <span className="w-auto select-all text-start font-semibold">{docs.email || "No Email is Provided."}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-start gap-2">
                <div className="bg-primary-foreground flex size-[45px] items-center justify-center rounded-full p-1 pb-2">
                  <Facebook className="size-5 !p-0" />
                </div>
                <p>Facebook: </p>
                <span className="w-auto select-all text-start font-semibold">{docs.facebook || "No Facebook Link is Provided."}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-start gap-2">
                <div className="bg-primary-foreground flex size-[45px] items-center justify-center rounded-full p-1 pb-2">
                  <Instagram className="size-5 !p-0" />
                </div>
                <p>Instagram: </p>
                <span className="w-auto select-all text-start font-semibold">{docs.instragam || "No Instagram Link is Provided."}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-start gap-2">
                <div className="bg-primary-foreground flex size-[45px] items-center justify-center rounded-full p-1 pb-2">
                  <CircleDollarSign className="size-5 !p-0" />
                </div>
                <p>Education Cost: </p>
                <span className="w-auto select-all text-start font-semibold">{docs.educationCost || "No Education Cost is Provided."}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-start gap-2">
                <div className="bg-primary-foreground flex size-[45px] items-center justify-center rounded-full p-1 pb-2">
                  <Chrome className="size-5 !p-0" />
                </div>
                <p>Website: </p>
                <span className="w-auto select-all text-start font-semibold">{docs.website || "No Website Link is Provided."}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-start gap-2">
                <div className="bg-primary-foreground flex size-[45px] items-center justify-center rounded-full p-1 pb-2">
                  <Code className="size-5 !p-0" />
                </div>
                <p>University Code: </p>
                <span className="w-auto select-all text-start font-semibold">{docs.universityCode || "No University Code is Provided."}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-start gap-2">
                <div className="bg-primary-foreground flex size-[45px] items-center justify-center rounded-full p-1 pb-2">
                  <Phone className="size-5 !p-0" />
                </div>
                <p>Phone Number: </p>
                <span className="w-auto select-all text-start font-semibold">{docs.phoneNumbe || "No Phone Number is Provided."}</span>
              </div>
              {/* <Separator />
                          <div className="flex items-center justify-start gap-2">
                            <div className="bg-primary-foreground flex size-[45px] items-center justify-center rounded-full p-1 pb-2">
                  <University className="size-5 !p-0" />
                </div>                <p>Logo: </p>
                            <span className="w-auto text-start font-semibold select-all">{docs.logo || "No Logo is Provided."}</span>
                          </div> */}
              <Separator />
              <div className="flex items-center justify-start gap-2">
                <div className="bg-primary-foreground flex size-[45px] items-center justify-center rounded-full p-1 pb-2">
                  <Earth className="size-5 !p-0" />
                </div>
                <p>Address: </p>
                <span className="w-auto select-all text-start font-semibold">{docs.address || "No Address is Provided."}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-start gap-2">
                <div className="bg-primary-foreground flex size-[45px] items-center justify-center rounded-full p-1 pb-2">
                  <MapPinned className="size-5 !p-0" />
                </div>
                <p>Region: </p>
                <span className="w-auto select-all text-start font-semibold">{docs.region || "No Region is Provided."}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-start gap-2 py-3">
                <div className="bg-primary-foreground flex size-[45px] items-center justify-center rounded-full p-1 pb-2">
                  <MessageCircleDashed className="size-5 !p-0" />
                </div>
                <span className="max-w-[90%] select-all text-start font-semibold">Description: {docs.universityDescription || "No Description is Provided."}</span>
              </div>
              <Separator />
              <div className="flex items-center justify-start gap-2">
                <div className="bg-primary-foreground flex size-[45px] items-center justify-center rounded-full p-1 pb-2">
                  <Hotel className="size-5 !p-0" />
                </div>
                <p>Hostel: </p>
                <Badge
                  className={cn(
                    "w-fit text-center",
                    docs.hostel ? "bg-green-500 text-green-50" : "bg-destructive text-destructive-foreground"
                  )}
                >
                  {docs.hostel || "No Hostel Information Provided."}
                </Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-start gap-2">
                <div className="bg-primary-foreground flex size-[45px] items-center justify-center rounded-full p-1 pb-2">
                  <PocketKnife className="size-5 !p-0" />
                </div>
                <p>Military: </p>
                <Badge
                  className={cn(
                    "w-fit",
                    docs.military ? "bg-green-500 text-green-50" : "bg-destructive text-destructive-foreground"
                  )}
                >
                  {docs.military || 'No Military Status Provided.'}
                </Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-start gap-2">
                <div className="bg-primary-foreground flex size-[45px] items-center justify-center rounded-full p-1 pb-2">
                  <Flame className="size-5 !p-0" />
                </div>
                <p>Status: </p>
                <Badge
                  className={cn(
                    "w-fit",
                    docs.status ? "bg-green-500 text-green-50" : "bg-destructive text-destructive-foreground"
                  )}
                >
                  {docs.status || "No Status Provided."}
                </Badge>
              </div>
            </div>

          </main>
          <div className="relative z-[4] hidden h-[512px] w-[41px] bg-black" />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}

export default Collages
