"use client"

import type { NextPage } from "next"

const FrameComponent: NextPage = () => {
  return (
    <footer className="box-border  flex max-w-full flex-row items-center justify-center self-stretch py-0 pl-0 pr-px text-left font-dm-sans text-sm text-lightsteelblue-200 ">
      <div className="relative z-[1] box-border flex max-w-full flex-1 flex-col items-end justify-start gap-[25px] border-t-DEFAULT border-solid border-neutrals-2 bg-black px-[10%] pb-6 pt-10 mq750:box-border mq750:pl-[39px] mq750:pr-[145px] lg:pt-0 mq450:box-border mq450:pr-5">
        <div className="z-0 hidden w-[63px] flex-col items-start justify-start gap-[8px]">
          <b className="relative inline-block h-[30px] self-stretch font-headings-desktop-poppins-16px-regular text-xl text-shade-white mq450:text-base">
            About
          </b>
          <div className="relative hidden w-[49px]">Mission</div>
          <div className="relative hidden w-[38px]">Team</div>
        </div>
        <div className="absolute inset-x-0 bottom-[64.2px] z-[2] !m-0 h-px w-full bg-neutrals-3" />
        <div className="flex flex-row items-center justify-center gap-[20px] self-stretch font-headings-desktop-poppins-16px-regular text-xl text-shade-white mq1225:flex-wrap">
          <div className="box-border hidden min-w-[129px] flex-1 flex-col items-start justify-start px-0 pb-0 text-8xl text-blueviolet-200 mq1225:flex-1 lg:flex">
            <div className="flex flex-col items-start justify-start gap-[10px] self-stretch">
              <h2 className="font-inherit relative z-[3] m-0 inline-block w-[127px] text-inherit font-bold leading-[16px] mq450:text-3xl mq450:leading-[13px]">
                <span>u</span>
                <span className="text-shade-white">STUDY</span>
              </h2>
              <div className="flex flex-row items-start justify-start self-stretch py-0 pl-0.5 pr-0 font-dm-sans text-sm text-lightsteelblue-200">
                <div className="relative flex-1 font-medium">
                  Find your perfect college fit with our quiz
                </div>
              </div>
            </div>
          </div>
          <div className="box-border hidden h-[170px] flex-col items-center justify-center py-0 pl-0 pr-5 lg:flex">
            <div className="relative w-px flex-1 bg-neutrals-3" />
          </div>
          <div className="box-border flex w-[134px] flex-col items-start  justify-start pb-0 pl-0 pr-5">
            <b className="relative inline-block min-w-[110px] mq450:text-base">
              Calculator
            </b>
          </div>
          <div className="box-border flex min-w-[128px] flex-[0.8985] flex-col  items-start justify-start pb-0 pl-0 pr-5 mq1225:flex-1">
            <b className="relative mq450:text-base">Career guidance</b>
          </div>
          <div className="box-border flex w-[114px] flex-col items-start  justify-start pb-0 pl-0 pr-5">
            <b className="relative inline-block min-w-[90px] mq450:text-base">
              Colleges
            </b>
          </div>
          <div className="flex flex-col items-start justify-start  pb-0 pl-0 pr-5">
            <b className="relative inline-block min-w-[42px] mq450:text-base">
              FAQ
            </b>
          </div>
          <div className="box-border hidden h-[170px]  flex-col items-start justify-start py-0 pl-0 pr-5 lg:flex">
            <div className="relative w-px flex-1 bg-neutrals-3" />
          </div>
          <div className="relative flex flex-col items-start justify-start gap-[14px] px-0 py-8 text-base">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="relative inline-block min-w-[118px] leading-[100%]">
                  Contact email:
                </div>
              </div>
              <b className="relative inline-block min-w-[117px] whitespace-nowrap font-dm-sans text-mediumpurple">
                info@ustudy.io
              </b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Our Social Media:</div>
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="relative size-6 min-h-[24px] object-cover"
                  loading="lazy"
                  alt=""
                  src="/instragam.png"
                />
                <img
                  className="relative size-6 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/linkdin.png"
                />
                <img
                  className="relative size-6 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/facebook.png"
                />
                <img
                  className="relative size-6 min-h-[24px]"
                  alt=""
                  src="/telegram.png"
                />
                <img
                  className="relative size-6 min-h-[24px]"
                  alt=""
                  src="/raddit.png"
                />
                <img
                  className="relative size-6 min-h-[24px]"
                  alt=""
                  src="/twitter.png"
                />
              </div>
            </div>
            <div className="absolute bottom-[-11px] right-[64px] z-[1] !m-0 flex size-10 items-center justify-center">
              <img
                className="absolute left-[-24px] top-[-23px] z-[1] size-full object-contain [transform:scale(2.225)]"
                alt=""
                src="/mask-contract.png"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-auto max-w-full flex-row items-center justify-center text-right text-base text-gray-100">
          <div className="flex flex-row items-start justify-start gap-[31px] mq450:gap-[15px]">
            <div className="relative inline-block min-w-[96px] leading-[16px]">
              Terms of Use
            </div>
            <div className="relative leading-[16px]">Privacy and Policy</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default FrameComponent
