"use client"

/* eslint-disable tailwindcss/no-contradicting-classname */
import type { NextPage } from "next"

// import Header from "../components/header";
import FrameComponent from "@/components/login/frame-component"

// import Footer from "../components/footer";

const LogInWelcome: NextPage = () => {
  return (
    <div className="relative box-border flex h-[1109px] w-full flex-col items-start justify-start overflow-hidden bg-black px-0 pb-[235px] pt-0 leading-[normal] tracking-[normal] mq1225:h-auto">
      {/* <Header /> */}
      <main className="flex max-w-full shrink-0 flex-row items-end justify-start self-stretch text-center font-headings-desktop-poppins-16px-regular text-13xl text-shade-white [debug_commit:1de1738] [row-gap:20px] mq1225:flex-wrap">
        <div className="flex min-h-[785px] min-w-[532px] max-w-full flex-1 flex-row items-end justify-start bg-[url('/frame-2@3x.png')] bg-cover bg-top bg-no-repeat mq1225:min-h-[auto] mq750:min-w-full">
          <img
            className="relative hidden max-h-full w-[818px] max-w-full object-cover"
            alt=""
            src="/rectangle-12911.png"
          />
          <div className="z-[1] box-border flex max-w-full flex-1 flex-row items-start justify-start bg-gray-500 px-[294px] py-[87px] [backdrop-filter:blur(33px)] mq1050:box-border mq1050:px-[147px] mq450:box-border mq450:px-5">
            <h1 className="font-inherit relative m-0 text-inherit font-semibold mq750:text-7xl mq450:text-lgi">
              uStudy for all
            </h1>
          </div>
        </div>
        <FrameComponent />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default LogInWelcome
