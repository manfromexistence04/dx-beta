import type { NextPage } from "next";
// import Header from "../components/header";
import FrameComponent1 from "@/components/spcialty-products-page/frame-component1";
import FrameComponent from "@/components/spcialty-products-page/frame-component";

const SpecialtyPage: NextPage = () => {
  return (
    <div className="text-shade-white font-headings-desktop-poppins-16px-bold relative box-border flex w-full flex-col items-start justify-start overflow-hidden bg-black px-0 pb-[404px] pt-0 text-center text-[20px] leading-[normal] tracking-[normal]">
      {/* <Header /> */}
      <img
        className="absolute left-[312px] top-[655px] z-[1] !m-[0] h-[113.3px] w-[126.9px] rounded-[5px] object-cover"
        loading="lazy"
        alt=""
        src="/rectangle-14231@2x.png"
      />
      <div className="bg-blueviolet-100 z-[2] box-border hidden w-[274px] flex-row items-center justify-start whitespace-nowrap rounded-lg px-0 py-4">
        <b className="relative inline-block h-4 flex-1 leading-[16px]">
          Read uSTAKING white paper
        </b>
      </div>
      <main className="mq750:gap-[129px] mq450:gap-[65px] flex max-w-full flex-col items-start justify-start gap-[259px] self-stretch">
        <FrameComponent1 />
        <FrameComponent />
      </main>
      <div className="relative z-[4] hidden h-[512px] w-[41px] bg-black" />
    </div>
  );
};

export default SpecialtyPage;