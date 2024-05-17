/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next"

import FrameComponent from "@/components/spcialty-products-page/frame-component"
// import Header from "../components/header";
import FrameComponent1 from "@/components/spcialty-products-page/frame-component1"

const SpecialtyPage: NextPage = () => {
  return (
    <div className="font-headings-desktop-poppins-16px-bold relative box-border flex w-full flex-col items-start justify-start overflow-hidden bg-black px-0 pb-[404px] pt-0 text-center text-xl leading-[normal] tracking-[normal] text-shade-white">
      <img
        className="!m-0 h-[800px] w-full rounded-[5px] object-cover"
        loading="lazy"
        alt=""
        src="/rectangle14230.png"
      />
      <img
        className="absolute left-[312px] top-[655px] z-[1] !m-0 h-[113.3px] w-[126.9px] rounded-[5px] object-cover"
        loading="lazy"
        alt=""
        src="/rectangle14231.png"
      />
      <div className="z-[2] box-border hidden w-[274px] flex-row items-center justify-start whitespace-nowrap rounded-lg bg-blueviolet-100 px-0 py-4">
        <b className="relative inline-block h-4 flex-1 leading-[16px]">
          Read uSTAKING white paper
        </b>
      </div>
      <main className="flex max-w-full flex-col items-start justify-start space-y-2 self-stretch lg:space-y-10">
        <span className="title !mx-auto mt-32 bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-37xl text-transparent">
          Astana IT University
        </span>
        <FrameComponent />
      </main>
      <div className="relative z-[4] hidden h-[512px] w-[41px] bg-black" />
    </div>
  )
}

export default SpecialtyPage
