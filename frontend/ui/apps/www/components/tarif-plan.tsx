import type { NextPage } from "next";

export type TarifPlanType = {
  prop?: string;
  rectangle12899?: string;
  theExpensive?: string;
  qualityAdmissionsAdviceSh?: string;
};

const TarifPlan: NextPage<TarifPlanType> = ({
  prop,
  rectangle12899,
  theExpensive,
  qualityAdmissionsAdviceSh,
}) => {
  return (
    <div className="lg:w-[450px] w-[80%] h-[700px] shrink-0 flex flex-col items-start justify-start gap-[16px] text-left text-13xl text-blueviolet-200 font-headings-desktop-poppins-16px-regular p-3">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="relative leading-[150%] font-semibold inline-block min-w-[40px] mq750:text-7xl mq750:leading-[38px] mq450:text-lgi mq450:leading-[29px]">
            {prop}
          </div>
          <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
            <div className="w-10 h-0.5 relative bg-darkblue" />
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-end justify-start border rounded-md !lg:min-h-[450px] min-h-[600px]">
        <div className="flex-1 rounded bg-black flex flex-col items-start justify-start pt-[27.7px] pb-[101.3px] pr-5 pl-6 gap-[32px] border-[0px] border-solid border-darkslateblue mq450:gap-[16px]">
          <div className="flex flex-row items-start justify-start relative">
            <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-inherit z-[1] mq750:text-7xl mq750:leading-[26px] mq450:text-lgi mq450:leading-[19px]">
              <p className="m-0">{theExpensive}</p>
              <p className="m-0">way</p>
            </h1>
            <div className="h-[70px] w-[70px] absolute !m-[0] top-[-27.7px] left-[-11.5px] [filter:blur(140px)] rounded-[50%] z-[2]" />
          </div>
          <div className="self-stretch relative text-xl leading-[40px] font-dm-sans text-gainsboro-200 z-[1] mq450:text-base mq450:leading-[32px]">
            {qualityAdmissionsAdviceSh}
          </div>
        </div>
      </div>
    </div>)};
    export default TarifPlan;