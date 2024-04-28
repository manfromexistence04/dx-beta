"use client"


import type { NextPage } from "next";
import TarifPlan from "./tarif-plan";

const FrameComponent1: NextPage = () => {
    return (
        <div className="w-full overflow-hidden relative flex flex-col lg:flex-row items-center gap-[50px] justify-center mx-auto !p-0">

            <img
                className="absolute my-auto left-0 w-[250px] h-[700px] object-cover z-[3]"
                loading="lazy"
                alt=""
                src="/ellipse-1573.png"
            />
            <img
                className="absolute my-auto left-[90%] w-[300px] h-[700px] object-contain z-[4]"
                loading="lazy"
                alt=""
                src="/ellipse-1574.png"
            />
            <TarifPlan
                prop="01"
                rectangle12899="/rectangle-12899.svg"
                theExpensive="The generic"
                qualityAdmissionsAdviceSh="Admissions isn't one-size-fits all, and there is so much information out there that applicants get lost."
            />
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
            {/* <div className="h-[286px] w-[296px] absolute !m-[0] bottom-[-2.8px] left-[-257px] [filter:blur(400px)] rounded-[50%] bg-blueviolet-200 shrink-0 z-[2]" /> */}
        </div>)
};
export default FrameComponent1;