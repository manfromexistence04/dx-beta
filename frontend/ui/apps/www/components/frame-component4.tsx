"use client"

import { useCallback } from "react"
import type { NextPage } from "next"

const FrameComponent4: NextPage = () => {
  const onContentClick = useCallback(() => {
    // Please sync "Sign up - Start" to the project
  }, [])

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-24 lg:px-0 px-[10%] box-border max-w-full text-center text-29xl text-shade-white font-headings-desktop-poppins-16px-regular mq750:pb-[31px] mq750:box-border h-auto">
      <div className="relative space-y-10 flex-1 overflow-x-auto flex flex-col lg:flex-row items-strt justify-start box-border max-w-full items-start min-h-[650px] overflow-hidden">
        <div className="h-[617px] w-[1440px] relative bg-black shrink-0 hidden z-[1]" />
        <div className="h-[849px] hidden mq1225:inline-block w-[3px] absolute !m-[0] top-[849px] left-[505px] bg-gray-200 shrink-0 [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5] z-[1]" />
        <div className="h-[849px] hidden mq1225:inline-block w-[3px] absolute !m-[0] top-[849px] left-[83px] bg-gray-200 shrink-0 [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5] z-[1]" />
        <div className="h-[849px] hidden mq1225:inline-block w-[3px] absolute !m-[0] top-[849px] right-[510px] bg-gray-200 shrink-0 [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5] z-[1]" />
        <div className="h-[849px] hidden mq1225:inline-block w-[3px] absolute !m-[0] top-[849px] right-[88px] bg-gray-200 shrink-0 [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5] z-[1]" />

        <div className="flex-col text-37xl flex items-start justify-start space-y-3 lg:mx-auto lg:mt-24 lg:items-center lg:justify-center">
          <div className="flex flex-col items-start justify-start gap-[32px] z-[3] lg:items-center lg:justify-center">
            <h1 className="flex flex-col m-0 relative text-inherit leading-[100%] font-bold font-inherit mq750:text-26xl mq750:leading-[45px] mq450:text-15xl mq450:leading-[34px] items-start justify-start  lg:items-center lg:justify-center">
              <p className="!m-0">{`Your Admissions `}</p>
              <p className="!m-0 bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                ‘Credit Score’
              </p>
            </h1>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start lg:items-center lg:justify-center"
              onClick={onContentClick}
            >
              <div className="rounded-lg bg-blueviolet-200 flex flex-row items-center justify-center py-4 px-[71px] whitespace-nowrap">
                <b className="relative text-base leading-[16px] inline-block font-dm-sans text-shade-white text-center min-w-[59px]">
                  Sign Up
                </b>
              </div>
            </button>
          </div>
        </div>

        <div className="lg:w-[60%] flex mq1225:flex-col flex-col items-start justify-between gap-[20px] z-[3] lg:absolute lg:bottom-16 lg:!ml-[20%] lg:flex-row lg:items-center lg:justify-between">
          <div className="hidden flex-col items-center justify-start max-w-full">
            <b className="h-12 relative leading-[100%] inline-block max-w-full mq750:text-19xl mq750:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
              2 000 000 000
            </b>
            <div className="h-[22px] relative text-base leading-[135%] font-dm-sans text-lightsteelblue-100 inline-block">
              Overall uSTAKING Token Emission
            </div>
          </div>
          <div className="w-[165px] flex flex-col items-start justify-start">
            <b className="self-stretch relative leading-[100%] mq750:text-19xl mq750:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
              24 000
            </b>
            <div className="flex flex-row items-start justify-start py-0 pr-[61px] pl-[61.5px] text-base text-lightsteelblue-100 font-dm-sans">
              <div className="relative leading-[22px] inline-block min-w-[42px]">
                Users
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <b className="relative leading-[100%] mq750:text-19xl mq750:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
              2000+
            </b>
            <div className="flex flex-row items-start justify-start py-0 px-[19px] text-base text-lightsteelblue-100 font-dm-sans">
              <div className="relative leading-[22px] inline-block min-w-[114px]">
                College profiles
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <b className="relative leading-[100%] mq750:text-19xl mq750:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
              44 000
            </b>
            <div className="flex flex-row items-start justify-start py-0 pr-3 pl-[11px] text-base text-lightsteelblue-100 font-dm-sans">
              <div className="relative leading-[135%]">
                In scholarship value
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start text-left">
            <b className="relative leading-[100%] mq750:text-19xl mq750:leading-[38px] mq450:text-10xl mq450:leading-[29px]">
              24 hour
            </b>
            <div className="flex flex-row items-start justify-start py-0 px-[37px] text-center text-base text-lightsteelblue-100 font-dm-sans">
              <div className="relative leading-[22px] inline-block min-w-[112px]">
                of time savings
              </div>
            </div>
          </div>
        </div>

        <div className="h-[533px] w-full absolute !m-[0] right-[0px] bottom-[28px] left-[0px]">
          <img
            className="absolute h-full bottom-[0px] max-h-full w-[1573px] overflow-hidden z-[2] mx-auto"
            alt=""
            src="/export-it.png"
          />
          <img
            className="absolute top-[42px] lg:top-0 lg:left-[3.5%] right-[3.5%] w-44 h-[172px] object-cover z-[3]"
            loading="lazy"
            alt=""
            src="/coin.png"
          />
          <img
            className="absolute lg:bottom-32 bottom-[5%] right-[4%] w-[198.5px] h-[212.6px] object-contain z-[4]"
            loading="lazy"
            alt=""
            src="/coin-right.png"
          />
        </div>
      </div>
    </section>
  )
}
export default FrameComponent4
