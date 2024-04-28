"use client"


import type { NextPage } from "next";

const FrameComponent: NextPage = () => {
  return (
    <footer className="self-stretch flex flex-row items-center justify-center py-0 pr-px pl-0 box-border max-w-full text-left text-sm text-lightsteelblue-200 font-dm-sans ">
      <div className="px-[10%] flex-1 bg-black box-border flex flex-col items-end justify-start pt-0 pb-6 relative gap-[25px] max-w-full z-[1] border-t-[1px] border-solid border-neutrals-2 mq750:pl-[39px] mq750:pr-[145px] mq750:box-border mq450:pr-5 mq450:box-border">
        <div className="w-[63px] hidden flex-col items-start justify-start gap-[8px] z-[0]">
          <b className="self-stretch h-[30px] relative text-xl inline-block font-headings-desktop-poppins-16px-regular text-shade-white mq450:text-base">
            About
          </b>
          <div className="w-[49px] relative hidden">Mission</div>
          <div className="w-[38px] relative hidden">Team</div>
        </div>
        <div className="w-full h-px absolute !m-[0] right-[0px] bottom-[64.2px] left-[0px] bg-neutrals-3 z-[2]" />
        <div className="self-stretch flex flex-row items-center justify-center gap-[20px] text-xl text-shade-white font-headings-desktop-poppins-16px-regular mq1225:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start px-0 pb-0 box-border min-w-[129px] text-8xl text-blueviolet-200 mq1225:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
              <h2 className="m-0 w-[127px] relative text-inherit leading-[16px] font-bold font-inherit inline-block z-[3] mq450:text-3xl mq450:leading-[13px]">
                <span>u</span>
                <span className="text-shade-white">STUDY</span>
              </h2>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 text-sm text-lightsteelblue-200 font-dm-sans">
                <div className="flex-1 relative font-medium">
                Find your perfect college fit with our quiz
                </div>
              </div>
            </div>
          </div>
          <div className="h-[170px] flex flex-col items-center justify-center py-0 pr-5 pl-0 box-border">
            <div className="w-px flex-1 relative bg-neutrals-3" />
          </div>
          <div className="w-[134px] flex flex-col items-start justify-start  pb-0 pr-5 pl-0 box-border">
            <b className="relative inline-block min-w-[110px] mq450:text-base">
              Calculator
            </b>
          </div>
          <div className="flex-[0.8985] flex flex-col items-start justify-start  pb-0 pr-5 pl-0 box-border min-w-[128px] mq1225:flex-1">
            <b className="relative mq450:text-base">Career guidance</b>
          </div>
          <div className="w-[114px] flex flex-col items-start justify-start  pb-0 pr-5 pl-0 box-border">
            <b className="relative inline-block min-w-[90px] mq450:text-base">
              Colleges
            </b>
          </div>
          <div className="flex flex-col items-start justify-start  pb-0 pr-5 pl-0">
            <b className="relative inline-block min-w-[42px] mq450:text-base">
              FAQ
            </b>
          </div>
          <div className="h-[170px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
            <div className="w-px flex-1 relative bg-neutrals-3" />
          </div>
          <div className="flex flex-col items-start justify-start py-8 px-0 relative gap-[14px] text-base">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="relative leading-[100%] inline-block min-w-[118px]">
                  Contact email:
                </div>
              </div>
              <b className="relative inline-block font-dm-sans text-mediumpurple min-w-[117px] whitespace-nowrap">
                info@ustudy.io
              </b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <div className="relative leading-[100%]">Our Social Media:</div>
              <div className="flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="h-6 w-6 relative object-cover min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/instragam.png"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/linkdin.png"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/facebook.png"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/telegram.png"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/raddit.png"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  alt=""
                  src="/twitter.png"
                />
              </div>
            </div>
            <div className="w-10 h-10 absolute !m-[0] right-[64px] bottom-[-11px] z-[1] flex items-center justify-center">
              <img
                className="w-full h-full z-[1] object-contain absolute left-[-24px] top-[-23px] [transform:scale(2.225)]"
                alt=""
                src="/mask-contract.png"
              />
            </div>
          </div>
        </div>
        <div className="w-auto mx-auto flex flex-row items-center justify-center max-w-full text-right text-base text-gray-100">
          <div className="flex flex-row items-start justify-start gap-[31px] mq450:gap-[15px]">
            <div className="relative leading-[16px] inline-block min-w-[96px]">
              Terms of Use
            </div>
            <div className="relative leading-[16px]">Privacy and Policy</div>
          </div>
        </div>
      </div>
    </footer>)};
    export default FrameComponent;