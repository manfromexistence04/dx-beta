"use client"

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
import { Checkbox } from "@/registry/default/ui/checkbox"

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

  const [isVisiblePassword, setIsVisiblePassword] = React.useState(false);
  const [isVisibleConfirmPassword, setIsVisibleConfirmPassword] = React.useState(false);

  const togglePasswordVisibility = () => setIsVisiblePassword(!isVisiblePassword);
  const toggleConfirmPasswordVisibility = () => setIsVisibleConfirmPassword(!isVisibleConfirmPassword);


  return (
    <div className="mb-32 flex h-auto w-full flex-col items-start justify-start space-y-10 lg:mb-0 lg:h-[69vh] lg:flex-row lg:items-start lg:items-center lg:justify-start lg:justify-center">
      <div className="relative flex size-full h-auto items-center justify-center lg:w-3/5 lg:rounded-sm">
        <AspectRatio ratio={16 / 9}>
          <Image src="/rectangle-12911.png" alt="Image" fill={true} className="object-cover" />
        </AspectRatio>
        <div className="absolute bottom-0 left-0 flex h-[30%] max-h-[150px] w-full items-center justify-center bg-purple-800 bg-opacity-0 bg-clip-padding text-3xl font-bold backdrop-blur-3xl">
          Ustudy For All
        </div>
      </div>
      <div className="flex h-auto w-full items-center justify-center lg:h-full lg:flex-1">
        <div className="mx-auto grid w-4/5 min-w-[300px] max-w-[550px] gap-5">
          <div className="grid min-w-full gap-2 text-left">
            <h1 className="text-37xl font-bold">Signup</h1>
            <p className="text-muted-foreground text-balance">
              Please enter your details
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid w-full gap-2">
              <Label className="text-[#804DFE]" htmlFor="email">Username</Label>
              <NextuiInput
                type="text"
                variant="bordered"
                defaultValue="manfromexitence"
                errorMessage="Please enter a valid name"
                className="w-full rounded-md !border"
              />
            </div>
            <div className="grid w-full gap-2">
              <Label className="text-[#804DFE]" htmlFor="email">Email</Label>
              <NextuiInput
                type="email"
                variant="bordered"
                defaultValue="junior2nextui.org"
                isInvalid={true}
                errorMessage="Please enter a valid email"
                className="w-full rounded-md !border"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label className="text-[#804DFE]" htmlFor="password">Password</Label>
                {/* <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link> */}
              </div>
              {/* <Input id="password" type="password" required /> */}
              <NextuiInput
                variant="bordered"
                placeholder="Enter your password"
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
                className="w-full rounded-md !border"

              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label className="text-[#804DFE]" htmlFor="password">Confirm Password</Label>
                {/* <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link> */}
              </div>
              {/* <Input id="password" type="password" required /> */}
              <NextuiInput
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
                className="w-full rounded-md !border"

              />
            </div>
            <div className="flex w-full items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the term of services and privacy statement
              </label>
            </div>
            <Button type="submit" className="hover:bg-secondary w-full bg-[#804DFE] text-white">
              Signup
            </Button>
            {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}


          </div>
          <div className="mt-4 min-w-full space-x-1 text-center text-sm">
            <span>
              Already have an account?
            </span>
            <Link href="login" className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text font-bold text-transparent">
              Sign up
            </Link>
          </div>
        </div>
      </div>


      {/* <div className="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 size-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-muted-foreground text-sm">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="text-muted-foreground px-8 text-center text-sm">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="hover:text-primary underline underline-offset-4"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="hover:text-primary underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div> */}

      {/* <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-5 lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="bg-muted relative hidden h-full flex-col p-10 text-white lg:col-span-3 lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 size-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:col-span-2 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-muted-foreground text-sm">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="text-muted-foreground px-8 text-center text-sm">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="hover:text-primary underline underline-offset-4"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="hover:text-primary underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

      </div> */}


    </div>
  )

}

export default SignUpStart;
