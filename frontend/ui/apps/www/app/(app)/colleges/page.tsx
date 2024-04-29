import type { NextPage } from "next"

import Component from "@/components/specialty-page/component"
import FrameComponent from "@/components/specialty-page/frame-component"

// import Footer from "../components/footer";

const SpecialtyPage: NextPage = () => {
  return (
    <div className="relative box-border flex w-full flex-col items-start justify-start overflow-hidden bg-black px-0 pb-3.5 pt-0 leading-[normal] tracking-[normal]">
      {/* <Header /> */}
      <FrameComponent />
      <section className="text-blueviolet-200 font-headings-desktop-poppins-16px-bold mq750:pb-[26px] mq750:box-border mq1050:pb-10 mq1050:box-border box-border flex w-[1398px] max-w-full flex-row items-start justify-center px-5 pb-[62px] pt-0 text-center text-xl">
        <div className="mq750:gap-[20px] mq1050:gap-[40px] flex w-[1042px] max-w-full flex-col items-end justify-start gap-[81px]">
          <div className="box-border flex max-w-full flex-row items-start justify-end self-stretch py-0 pl-0 pr-0.5">
            <div className="mq750:gap-[19px] mq1050:gap-[38px] flex max-w-full flex-1 flex-row flex-wrap items-end justify-start gap-[77px]">
              <div className="mq750:gap-[20px] flex min-w-[314px] max-w-full flex-1 flex-col items-start justify-start gap-[41px]">
                <button className="rounded-21xl border-dimgray box-border flex w-[122px] cursor-pointer flex-row items-start justify-start gap-[9px] border-[1px] border-solid bg-black px-[18px] py-1.5">
                  <div className="rounded-21xl border-dimgray relative box-border hidden h-[35px] w-[122px] border-[1px] border-solid bg-black" />
                  <img
                    className="relative z-[1] h-[19px] min-h-[19px] w-[15px] shrink-0 overflow-hidden"
                    alt=""
                    src="/srfilter.svg"
                  />
                  <div className="flex flex-col items-start justify-start px-0 pb-0 pt-px">
                    <div className="font-headings-desktop-poppins-16px-bold text-dimgray relative z-[1] inline-block min-w-[39px] text-left text-xs font-medium">
                      Filters
                    </div>
                  </div>
                </button>
                <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch py-0 pl-[3px] pr-0">
                  <Component
                    rectangle14230="/rectangle-14230@2x.png"
                    rectangle14231="/rectangle-14231@2x.png"
                    srHearth="/srhearth.svg"
                  />
                </div>
              </div>
              <Component
                rectangle14230="/rectangle-14230-1@2x.png"
                rectangle14231="/rectangle-14231-1@2x.png"
                srHearth="/srhearth-1.svg"
                propMinWidth="312px"
              />
            </div>
          </div>
          <div className="mq750:gap-[26px] flex max-w-full flex-col items-end justify-start gap-[53px] self-stretch">
            <div className="mq750:gap-[19px] mq1050:gap-[38px] flex max-w-full flex-row flex-wrap items-start justify-start gap-[77px] self-stretch">
              <Component
                rectangle14230="/rectangle-14230-2@2x.png"
                rectangle14231="/rectangle-14231-2@2x.png"
                srHearth="/srhearth-2.svg"
                propMinWidth="312px"
              />
              <Component
                rectangle14230="/rectangle-14230-3@2x.png"
                rectangle14231="/rectangle-14231-3@2x.png"
                srHearth="/srhearth-3.svg"
                propMinWidth="312px"
              />
            </div>
            <div className="flex flex-row items-start justify-center self-stretch py-0 pl-[29px] pr-5">
              <div className="flex w-[210px] flex-row items-start justify-start gap-[15px]">
                <div className="mq450:text-base mq450:leading-[13px] relative flex-1 font-medium leading-[16px]">
                  See all universities
                </div>
                <img
                  className="relative h-5 w-5 shrink-0 overflow-hidden"
                  alt=""
                  src="/sr-chevron-down.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  )
}

export default SpecialtyPage
