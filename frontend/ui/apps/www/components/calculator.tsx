"use client"

import type { NextPage } from "next";
import { useCallback } from "react";

const Calculator: NextPage = () => {
    const onParallelProcessorClick = useCallback(() => {
        // Please sync "Landing new design" to the project
    }, []);

    return (
        <div className="w-[1200px] max-w-[90%] mx-auto rounded-sm mb-64 flex flex-col items-start justify-start pt-8 px-12 pb-[35px] box-border relative gap-[48px] z-[1] text-left text-21xl text-shade-white font-headings-desktop-poppins-16px-regular mq750:gap-[24px] mq450:pt-[21px] mq450:pb-[23px] mq450:box-border mq1050:pl-6 mq1050:pr-6 mq1050:box-border bg-[#804DFE]">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded [background:linear-gradient(-84.28deg,_)]" />
                <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/mask-group-2.png"
                />
                <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
                    alt=""
                    src="/mask-group-3.png"
                />
            </div>
            <h1 className="m-0 w-[577px] relative text-inherit leading-[32px] font-bold font-inherit inline-block max-w-full z-[3] mq750:text-13xl mq750:leading-[26px] mq450:text-5xl mq450:leading-[19px]">
                uSTUDY Calculator
            </h1>
            <div className="w-8 h-12 rounded hidden z-[2]" />
            <div className="w-[82px] h-12 rounded hidden z-[3]" />
            <div className="w-[870px] flex flex-row items-start justify-start gap-[69px] max-w-full text-base font-dm-sans mq450:gap-[17px] mq1050:flex-wrap mq1050:gap-[34px]">
                <div className="flex-[0.7745] flex flex-col items-start justify-start py-0 pr-[83px] pl-0 box-border gap-[18.7px] min-w-[239px] max-w-full mq450:pr-5 mq450:box-border mq1050:flex-1">
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5.3px] gap-[8px]">
                        <div className="w-[246.5px] relative leading-[21px] inline-block z-[3]">
                            Enter amount of score
                        </div>
                        <div className="self-stretch shadow-[2px_2px_2px_rgba(0,_0,_0,_0.25)_inset] bg-shade-white flex flex-row items-start justify-start pt-3 px-[13px] pb-2 z-[3] border-[1px] border-solid border-shade-white">
                            <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                                <input
                                    className="w-[29px] [border:none] [outline:none] bg-[transparent] h-5 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border font-dm-sans font-bold text-base text-black"
                                    placeholder="100"
                                    type="text"
                                />
                                <img className="h-6 w-6 relative" alt="" src="/coin-colorfull.png" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[236px] flex flex-row items-start justify-start pt-0 px-0 pb-[5.6px] box-border text-xs">
                        <div className="flex-1 rounded-21xl bg-gray-400 flex flex-row items-start justify-start pt-[3px] px-[15px] pb-1 gap-[13px] z-[3] border-[1px] border-solid border-shade-white">
                            <div className="h-[26px] w-[236px] relative rounded-21xl bg-gray-400 box-border hidden border-[1px] border-solid border-shade-white" />
                            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                                <img
                                    className="w-2.5 h-2.5 relative overflow-hidden shrink-0 z-[4]"
                                    alt=""
                                    src="/search.png"
                                />
                            </div>
                            <div className="w-[158px] relative font-medium inline-block shrink-0 z-[4]">
                                Choose the University
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-px text-center">
                        <div className="flex flex-col items-start justify-start z-[3]">
                            <div className="flex flex-row items-start justify-start gap-[12px]">
                                <button className="cursor-pointer p-3.5 bg-gray-500 rounded flex flex-row items-center justify-center border-[1px] border-solid border-shade-white">
                                    <div className="flex flex-col items-center justify-center">
                                        <b className="relative text-base leading-[16px] inline-block font-dm-sans text-shade-white text-center min-w-[73px]">
                                            Astana IT
                                        </b>
                                    </div>
                                </button>
                                <div className="w-[46px] rounded box-border flex flex-row items-center justify-center p-3.5 border-[1px] border-solid border-shade-white">
                                    <b className="relative leading-[16px] inline-block min-w-[15px]">
                                        IS
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start z-[3]"
                        onClick={onParallelProcessorClick}
                    >
                        <div className="rounded bg-shade-white flex flex-row items-start justify-start py-4 px-[31px] whitespace-nowrap">
                            <b className="relative text-base leading-[16px] inline-block font-dm-sans text-blueviolet-100 text-center min-w-[122px]">
                                Calculate again
                            </b>
                        </div>
                    </button>
                </div>
                <div className="h-[196px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border">
                    <div className="w-0.5 flex-1 relative bg-plum z-[3]" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[235px] max-w-full text-lg mq1050:flex-1">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[68px] mq450:gap-[34px]">
                        <div className="w-[158px] flex flex-col items-start justify-start gap-[12px]">
                            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] z-[4]">
                                <div className="relative leading-[130%] inline-block min-w-[48px]">
                                    B057:
                                </div>
                                <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="relative leading-[16px] inline-block min-w-[36px]">
                                            70%
                                        </div>
                                    </div>
                                    <img className="h-5 w-5 relative" alt="" src="/coin-transparent.png" />
                                </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] z-[3]">
                                <div className="relative leading-[130%] inline-block min-w-[49px]">
                                    B058:
                                </div>
                                <div className="flex flex-row items-center justify-start gap-[7px] text-center">
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="relative leading-[16px] inline-block min-w-[37px]">
                                            65%
                                        </div>
                                    </div>
                                    <img className="h-5 w-5 relative" alt="" src="/coin-transparent.png" />
                                </div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] z-[3]">
                                <div className="relative leading-[130%] inline-block min-w-[49px]">
                                    B059:
                                </div>
                                <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="relative leading-[16px] inline-block min-w-[36px]">
                                            62%
                                        </div>
                                    </div>
                                    <img className="h-5 w-5 relative" alt="" src="/coin-transparent.png"/>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] z-[3] text-3xl mq450:flex-wrap">
                            <h3 className="m-0 w-[19px] relative text-inherit leading-[29px] font-medium font-inherit whitespace-pre-wrap inline-block mq450:text-lg mq450:leading-[23px]">{`IS  `}</h3>
                            <div className="h-4 w-[39px]" />
                            <div className="flex flex-row items-center justify-start gap-[8px] text-center">
                                <div className="flex flex-row items-center justify-start">
                                    <div className="relative leading-[16px] font-medium inline-block min-w-[43px] mq450:text-lg mq450:leading-[13px]">
                                        75%
                                    </div>
                                </div>
                                <img className="h-5 w-5 relative" alt="" src="/coin-transparent.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[300px] h-[300px] absolute !m-[0] right-[-285px] bottom-[-158.8px] [filter:blur(400px)] rounded-[50%] bg-blueviolet-200 z-[5]" />
        </div>)
};

export default Calculator;