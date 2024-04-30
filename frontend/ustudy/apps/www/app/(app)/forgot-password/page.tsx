/* eslint-disable react/no-unescaped-entities */
"use client"
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/no-contradicting-classname */
import React from "react";
import type { NextPage } from "next"
import FrameComponent from "@/components/signup/frame-component"
import Link from "next/link"
import { Button, buttonVariants } from "@/registry/default/ui/button"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"
import Image from "next/image"
import { AspectRatio } from "@/registry/default/ui/aspect-ratio"
import { UserAuthForm } from "../examples/authentication/components/user-auth-form"
import { cn } from "@/lib/utils"
import { Input as NextuiInput } from "@nextui-org/react";
import { Eye, EyeOff } from "lucide-react"
import { Checkbox } from "@/registry/default/ui/checkbox";

const ForgotPassword: NextPage = () => {
  const [isVisiblePassword, setIsVisiblePassword] = React.useState(true);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = React.useState(true);
  const togglePasswordVisibility = () => setIsVisiblePassword(!isVisiblePassword);
  const toggleConfirmPasswordVisibility = () => setIsVisibleConfirmPassword(!isVisibleConfirmPassword);

  return (
    <div className="flex h-auto w-full flex-col-reverse items-start justify-start space-y-10 lg:mb-0 lg:h-[69vh] lg:flex-row lg:items-start lg:items-center lg:justify-start lg:justify-center">
      <div className="relative mt-10 flex size-full h-auto items-center justify-center lg:m-0 lg:w-3/5 lg:rounded-sm">
        <AspectRatio ratio={16 / 9}>
          <Image src="/rectangle-12911.png" alt="Image" fill={true} className="object-cover" />
        </AspectRatio>
        <div className="absolute bottom-0 left-0 flex h-[30%] max-h-[150px] w-full items-center justify-center bg-purple-800 bg-opacity-0 bg-clip-padding text-3xl font-bold backdrop-blur-3xl">
          Ustudy For All
        </div>
      </div>
      <div className="flex h-auto w-full items-center justify-center lg:m-0 lg:h-full lg:flex-1">
        <div className="mx-auto grid w-4/5 min-w-[300px] max-w-[550px] gap-5">
          <div className="grid min-w-full gap-2 text-left">
            <h1 className="text-[45px] font-bold">Forgot Your Password?</h1>
            <h1 className="text-[45px] font-bold">No problem.</h1>
            <p className="text-muted-foreground text-balance">
              Please enter your details
            </p>
          </div>
          <div className="grid gap-4">
            {/* <div className="grid w-full gap-2">
              <Label className="text-[#804DFE]" htmlFor="email">Username</Label>
              <NextuiInput
                type="text"
                variant="bordered"
                defaultValue="manfromexitence"
                errorMessage="Please enter a valid name"
                className="text-muted-foreground w-full rounded-md !border"
              />
            </div> */}
            <div className="grid w-full gap-2">
              <Label className="text-[#804DFE]" htmlFor="email">Email</Label>
              <NextuiInput
                type="email"
                variant="bordered"
                defaultValue="ajju40959@gmail.com"
                isInvalid={true}
                errorMessage="Please enter a valid email"
                className="text-muted-foreground w-full rounded-md !border"
              />
            </div>
            {/* <div className="grid gap-2">
              <div className="flex items-center">
                <Label className="text-[#804DFE]" htmlFor="password">Password</Label>

              </div>
              <NextuiInput
                variant="bordered"
                placeholder="Enter your password"
                defaultValue="Enter your password"

                endContent={
                  <button className="focus:outline-none" type="button" onClick={togglePasswordVisibility}>
                    {isVisiblePassword ? (
                      <Eye className="text-default-400 pointer-events-none text-2xl" />
                    ) : (
                      <EyeOff className="text-default-400 pointer-events-none text-2xl" />
                    )}
                  </button>
                }
                type={isVisiblePassword ? "text" : "password"}
                className="text-muted-foreground w-full rounded-md !border"

              />
            </div> */}
            {/* <Link
                  href="/forgot-password"
                  className="flex w-full items-end justify-end text-sm underline"
                >
                  Forgot your password?
                </Link> */}
            {/* <div className="grid gap-2">
              <div className="flex items-center">
                <Label className="text-[#804DFE]" htmlFor="password">Confirm Password</Label>
              </div>
              <NextuiInput
                defaultValue="Enter your confirm password"
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                  <button className="focus:outline-none" type="button" onClick={toggleConfirmPasswordVisibility}>
                    {isVisibleConfirmPassword ? (
                      <Eye className="text-default-400 pointer-events-none text-2xl" />
                    ) : (
                      <EyeOff className="text-default-400 pointer-events-none text-2xl" />
                    )}
                  </button>
                }
                type={isVisibleConfirmPassword ? "text" : "password"}
                className="text-muted-foreground w-full rounded-md !border"

              />
            </div> */}
            {/* <div className="flex w-full items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the term of services and privacy statement
              </label>
            </div> */}
            <Link
              href="/forgot-password-step-one">
              <Button type="submit" className="hover:bg-secondary w-full bg-[#804DFE] text-white">
                Confirm
              </Button>
            </Link>

          </div>
          {/* <div className="mt-4 min-w-full space-x-1 text-center text-sm">
            <span>
              Don't have an account?
            </span>
            <Link href="login" className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text font-bold text-transparent">
              Signup
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;

// "use client"

// /* eslint-disable tailwindcss/no-contradicting-classname */
// import type { NextPage } from "next"

// // import Header from "../components/header";
// import FrameComponent from "@/components/login/frame-component"

// // import Footer from "../components/footer";

// const LogInWelcome: NextPage = () => {
//   return (
//     <div className="relative box-border flex h-[1109px] w-full flex-col items-start justify-start overflow-hidden bg-black px-0 pb-[235px] pt-0 leading-[normal] tracking-[normal] mq1225:h-auto">
//       {/* <Header /> */}
//       <main className="flex max-w-full shrink-0 flex-row items-end justify-start self-stretch text-center font-headings-desktop-poppins-16px-regular text-13xl text-shade-white [debug_commit:1de1738] [row-gap:20px] mq1225:flex-wrap">
//         <div className="flex min-h-[785px] min-w-[532px] max-w-full flex-1 flex-row items-end justify-start bg-[url('/frame-2@3x.png')] bg-cover bg-top bg-no-repeat mq1225:min-h-[auto] mq750:min-w-full">
//           <img
//             className="relative hidden max-h-full w-[818px] max-w-full object-cover"
//             alt=""
//             src="/rectangle-12911.png"
//           />
//           <div className="z-[1] box-border flex max-w-full flex-1 flex-row items-start justify-start bg-gray-500 px-[294px] py-[87px] [backdrop-filter:blur(33px)] mq1050:box-border mq1050:px-[147px] mq450:box-border mq450:px-5">
//             <h1 className="font-inherit relative m-0 text-inherit font-semibold mq750:text-7xl mq450:text-lgi">
//               uStudy for all
//             </h1>
//           </div>
//         </div>
//         <FrameComponent />
//       </main>
//       {/* <Footer /> */}
//     </div>
//   )
// }

// export default LogInWelcome

// "use client"

// import type { NextPage } from "next"

// // import FrameComponent1 from "@/components/forgot-password/frame-component1";
// import FrameComponent from "@/components/forgot-password/frame-component"

// // import Footer from "../components/footer";

// const ForgotPasswordStart: NextPage = () => {
//   return (
//     <div className="relative box-border flex h-[1109px] w-full flex-col items-start justify-start gap-[2px] overflow-hidden bg-black px-0 pb-[235px] pt-0 leading-[normal] tracking-[normal] mq1225:h-auto">
//       {/* <FrameComponent1 /> */}
//       <main className="flex max-w-full shrink-0 flex-row items-end justify-start self-stretch text-center font-headings-desktop-poppins-16px-regular text-13xl text-shade-white [row-gap:20px] mq1225:flex-wrap">
//         <div className="z-[1] box-border flex min-w-[215px] max-w-full flex-1 flex-row items-start justify-start bg-gray-400 px-[294px] py-[87px] [backdrop-filter:blur(33px)] mq1050:box-border mq1050:px-[147px] mq450:box-border mq450:px-5">
//           <h1 className="font-inherit relative m-0 text-inherit font-semibold mq750:text-7xl mq450:text-lgi">
//             uStudy for all
//           </h1>
//         </div>
//         <FrameComponent />
//       </main>
//       {/* <Footer /> */}
//     </div>
//   )
// }

// export default ForgotPasswordStart
