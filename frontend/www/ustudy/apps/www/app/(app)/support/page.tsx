import { Metadata, type NextPage } from "next"
import Image from "next/image"
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
import { z } from "zod"
import GroupComponent from "@/components/specialty-page/group-component"
import TableCell from "@/components/specialty-page/table-cell"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"
import { taskSchema } from "./data/schema"

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
import FrameComponent from "@/components/support/frame-component"



async function getTasks() {
    // const data = await fs.readFile(
    //   path.join(process.cwd(), "app/(app)/calculator/data/tasks.json")
    // )
  
    const q = query(collection(db, "support"))
    const querySnapshot = await getDocs(q)
    const newDocs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      comment: doc.data().comment,
      // name: doc.data().specialtyName,
      // code: doc.data().specialtyCode,
      // generalQuota: doc.data().possibleScoreGeneralCompetition,
      // ruralQuota: doc.data().possibleScoreRuralQuota,
      ...doc.data(),
    }))
  
    const tasks = newDocs
  
    return tasks
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
        <div className="hidden h-full flex-1 flex-col space-y-8 p-8 pt-0 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="bg-gradient-to-r from-yellow-600 to-pink-600 bg-clip-text text-[3rem] font-bold tracking-tight text-transparent">
                History of supports we provided.
              </h2>
              {/* <p className="text-muted-foreground">
                Here&apos;s a list of super usefull specialties you can from Ustudy!
              </p> */}
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


const SupportPage: NextPage = () => {


  return (
    <div className="relative box-border flex w-full flex-col items-start justify-start overflow-hidden bg-black px-0 pb-32 pt-0 leading-[normal] tracking-[normal]">
      <FrameComponent />
      
      <div className="mx-auto w-auto lg:w-[1150px]">
        <TaskPage />
      </div>
    </div>
  )
}

export default SupportPage;