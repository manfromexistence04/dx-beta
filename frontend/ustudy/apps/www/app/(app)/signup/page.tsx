"use client"

/* eslint-disable tailwindcss/no-contradicting-classname */
import type { NextPage } from "next"
import FrameComponent from "@/components/signup/frame-component"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/registry/default/ui/button"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

// export function Dashboard() {
//   return (
//     <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
//       <div className="flex items-center justify-center py-12">
//         <div className="mx-auto grid w-[350px] gap-6">
//           <div className="grid gap-2 text-center">
//             <h1 className="text-3xl font-bold">Login</h1>
//             <p className="text-muted-foreground text-balance">
//               Enter your email below to login to your account
//             </p>
//           </div>
//           <div className="grid gap-4">
//             <div className="grid gap-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="m@example.com"
//                 required
//               />
//             </div>
//             <div className="grid gap-2">
//               <div className="flex items-center">
//                 <Label htmlFor="password">Password</Label>
//                 <Link
//                   href="/forgot-password"
//                   className="ml-auto inline-block text-sm underline"
//                 >
//                   Forgot your password?
//                 </Link>
//               </div>
//               <Input id="password" type="password" required />
//             </div>
//             <Button type="submit" className="w-full">
//               Login
//             </Button>
//             <Button variant="outline" className="w-full">
//               Login with Google
//             </Button>
//           </div>
//           <div className="mt-4 text-center text-sm">
//             Don&apos;t have an account?{" "}
//             <Link href="#" className="underline">
//               Sign up
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="bg-muted hidden lg:block">
//         <Image
//           src="/placeholder.svg"
//           alt="Image"
//           width="1920"
//           height="1080"
//           className="size-full object-cover dark:brightness-[0.2] dark:grayscale"
//         />
//       </div>
//     </div>
//   )
// }

const SignUpStart: NextPage = () => {
  return (
    // <div className="h-max w-full lg:grid lg:grid-cols-2">
    //   <div className="bg-muted hidden lg:block">
    //     <Image
    //       src="/rectangle-12911.png"
    //       alt="Image"
    //       width="1920"
    //       height="500"
    //     />
    //   </div>
    //   <div className="flex items-center justify-center py-12">
    //     <div className="mx-auto grid w-[350px] place-content-center gap-6">
    //       <div className="grid gap-2 text-center">
    //         <h1 className="text-3xl font-bold">Login</h1>
    //         <p className="text-muted-foreground text-balance">
    //           Enter your email below to login to your account
    //         </p>
    //       </div>
    //       <div className="grid gap-4">
    //         <div className="grid gap-2">
    //           <Label htmlFor="email">Email</Label>
    //           <Input
    //             id="email"
    //             type="email"
    //             placeholder="m@example.com"
    //             required
    //           />
    //         </div>
    //         <div className="grid gap-2">
    //           <div className="flex items-center">
    //             <Label htmlFor="password">Password</Label>
    //             <Link
    //               href="/forgot-password"
    //               className="ml-auto inline-block text-sm underline"
    //             >
    //               Forgot your password?
    //             </Link>
    //           </div>
    //           <Input id="password" type="password" required />
    //         </div>
    //         <Button type="submit" className="w-full">
    //           Login
    //         </Button>
    //         <Button variant="outline" className="w-full">
    //           Login with Google
    //         </Button>
    //       </div>
    //       <div className="mt-4 text-center text-sm">
    //         Don&apos;t have an account?{" "}
    //         <Link href="#" className="underline">
    //           Sign up
    //         </Link>
    //       </div>
    //     </div>
    //   </div>

    // </div>
    <div className="text-blueviolet font-headings-desktop-poppins-16px-bold mq1225:h-auto relative box-border flex h-[1109px] w-full flex-col items-start justify-start overflow-hidden bg-black px-0 pb-[235px] pt-0 text-left text-xs leading-[normal] tracking-[normal]">
      <main className="font-headings-desktop-poppins-16px-regular text-13xl text-shade-white mq1225:flex-wrap flex max-w-full shrink-0 flex-row items-end justify-start self-stretch text-center [debug_commit:1de1738] [row-gap:20px]">
        <div className="mq1225:min-h-[auto] mq750:min-w-full flex min-h-[785px] min-w-[532px] max-w-full flex-1 flex-row items-end justify-start bg-[url('/frame-2@3x.png')] bg-cover bg-top bg-no-repeat">
          <img
            className="relative max-h-full w-full object-cover"
            alt=""
            src="/rectangle-12911.png"
          />
          <div className="mq1050:box-border mq1050:px-[147px] mq450:box-border mq450:px-5 z-[1] box-border flex max-w-full flex-1 flex-row items-start justify-start bg-gray-500 px-[294px] py-[87px] [backdrop-filter:blur(33px)]">
            <h1 className="font-inherit mq750:text-7xl mq450:text-lgi relative m-0 font-semibold text-inherit">
              uStudy for all
            </h1>
          </div>
        </div>
        <FrameComponent />
      </main>
      <div className="hidden w-[418px] max-w-full flex-col items-start justify-start gap-[4px]">
        <div className="relative inline-block h-4">
          Referral code (optional)
        </div>
        <div className="flex flex-row items-center justify-start self-stretch text-base text-gray-200">
          <div className="relative inline-block h-[21px]">
            e.g., https://ustaking.io//signup?code...
          </div>
        </div>
        <div className="relative h-px self-stretch bg-gray-300" />
      </div>
    </div>
  )
}

export default SignUpStart
