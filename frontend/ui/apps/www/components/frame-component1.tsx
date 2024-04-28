"use client"


import type { NextPage } from "next";
import TarifPlan from "./tarif-plan";

const FrameComponent1: NextPage = () => {
    return (
        <div className=" overflow-x-auto flex flex-row items-start justify-start relative gap-[78.5px] max-w-full mb-[-3px] pb-[3px] z-[1] text-left text-13xl text-blueviolet-200 font-headings-desktop-poppins-16px-regular mq750:gap-[20px] mq1050:gap-[39px] min-w-full">
            <div className="w-[305px] shrink-0 flex flex-col items-start justify-start gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                        <div className="relative leading-[150%] font-semibold inline-block min-w-[33px] mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
                            01
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
                            <div className="w-10 h-0.5 relative bg-darkblue" />
                        </div>
                    </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-row items-end justify-start">
                    <div className="h-[345px] flex-1 relative rounded bg-black">
                        <img
                            className="absolute top-[1px] left-[0px] rounded w-full h-full hidden"
                            alt=""
                            src="/rectangle-12899.svg"
                        />
                        <div className="absolute top-[27.7px] left-[24px] bg-black w-[269px] flex flex-col items-start justify-start gap-[32px] z-[1] border">
                            <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit mq750:text-7xl mq750:leading-[26px] mq450:text-lgi mq450:leading-[19px]">
                                <p className="m-0">{`The generic `}</p>
                                <p className="m-0">way</p>
                            </h1>
                            <div className="w-[257px] relative text-xl leading-[40px] font-dm-sans text-gainsboro-200 inline-block mq450:text-base mq450:leading-[32px]">
                                Admissions isn't one-size-fits all, and there is so much
                                information out there that applicants get lost.
                            </div>
                        </div>
                        <div className="absolute top-[0px] left-[12.5px] [filter:blur(140px)] rounded-[50%] bg-blueviolet-200 w-[70px] h-[70px] z-[2]" />
                    </div>
                </div>
            </div>
            <TarifPlan
                prop="02"
                rectangle12899="/rectangle-12899.svg"
                theExpensive="The expensive "
                qualityAdmissionsAdviceSh="Quality admissions advice shouldn't be reserved for the financially-able."
            />
            <TarifPlan
                prop="03"
                rectangle12899="/rectangle-12899.svg"
                theExpensive="The uStudy "
                qualityAdmissionsAdviceSh="We believe admissions advice should be personal and accessible to any applicant."
            />
            <div className="h-[286px] w-[296px] absolute !m-[0] bottom-[-2.8px] left-[-257px] [filter:blur(400px)] rounded-[50%] bg-blueviolet-200 shrink-0 z-[2]" />
        </div>)
};
export default FrameComponent1;