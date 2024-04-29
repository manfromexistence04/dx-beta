"use client"

import type { NextPage } from "next"

// import FrameComponent1 from "@/components/forgot-password/frame-component1";
import FrameComponent from "@/components/forgot-password/frame-component"

// import Footer from "../components/footer";

const ForgotPasswordStart: NextPage = () => {
  return (
    <div className="relative box-border flex h-[1109px] w-full flex-col items-start justify-start gap-[2px] overflow-hidden bg-black px-0 pb-[235px] pt-0 leading-[normal] tracking-[normal] mq1225:h-auto">
      {/* <FrameComponent1 /> */}
      <main className="flex max-w-full shrink-0 flex-row items-end justify-start self-stretch text-center font-headings-desktop-poppins-16px-regular text-13xl text-shade-white [row-gap:20px] mq1225:flex-wrap">
        <div className="z-[1] box-border flex min-w-[215px] max-w-full flex-1 flex-row items-start justify-start bg-gray-400 px-[294px] py-[87px] [backdrop-filter:blur(33px)] mq1050:box-border mq1050:px-[147px] mq450:box-border mq450:px-5">
          <h1 className="font-inherit relative m-0 text-inherit font-semibold mq750:text-7xl mq450:text-lgi">
            uStudy for all
          </h1>
        </div>
        <FrameComponent />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default ForgotPasswordStart
