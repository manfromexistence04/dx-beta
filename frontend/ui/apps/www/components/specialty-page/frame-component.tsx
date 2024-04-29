/* eslint-disable tailwindcss/no-contradicting-classname */
import type { NextPage } from "next"

const FrameComponent: NextPage = () => {
  return (
    <section className="box-border flex max-w-full flex-row items-start justify-start self-stretch px-0 pb-[35px] pt-0 text-left font-headings-desktop-poppins-16px-regular text-21xl">
      <div className="relative box-border flex h-[244px] max-w-full flex-1 flex-row items-start justify-between gap-[20px] overflow-hidden bg-gray-200 pb-[85px] pl-[470px] pr-0 pt-[50px] mq750:box-border mq750:pb-[55px] mq750:pl-[235px] mq750:pt-8 mq450:box-border mq450:pl-5">
        <div className="relative z-0 hidden h-[248px] w-[1440px] max-w-full [background:linear-gradient(180deg,_)]" />
        <div className="flex w-[500px] max-w-[calc(100%_-_152px)] flex-col items-start justify-start gap-[9px] mq750:max-w-full">
          <div className="flex flex-row items-start justify-center self-stretch px-5 py-0">
            <h1 className="font-inherit relative z-[2] m-0 !bg-clip-text text-inherit font-bold text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [background:linear-gradient(92.23deg,_)] mq750:text-13xl mq450:text-5xl">
              College Search
            </h1>
          </div>
          <div className="border-dimgray z-[2] box-border flex max-w-full flex-row items-start justify-start gap-[13px] self-stretch rounded-21xl border-DEFAULT border-solid bg-black px-[13px] pb-1.5 pt-[5px]">
            <div className="border-dimgray relative box-border hidden h-10 w-[500px] max-w-full rounded-21xl border-DEFAULT border-solid bg-black" />
            <img
              className="relative z-[3] size-[25px] shrink-0 overflow-hidden"
              alt=""
              src="/search.png"
            />
            <input
              className="font-headings-desktop-poppins-16px-bold text-dimgray box-border flex h-[21px] w-[49px] flex-col items-start justify-start bg-transparent px-0 pb-0 pt-[5px] text-xs font-medium [border:none] [outline:none]"
              placeholder="Search"
              type="text"
            />
          </div>
        </div>
        <img
          className="relative z-[2] hidden h-[151.2px] w-[139.7px] object-contain"
          alt=""
          src="/coin-left.png"
        />
        <div className="absolute bottom-[-383.6px] left-0 !m-0 h-[716.6px] w-[1197.1px]">
          <div className="bg-blueviolet-300 absolute left-[620px] top-[108px] size-[200px] rounded-[50%] [filter:blur(300px)]" />
          <div className="bg-mediumslateblue absolute left-[-7px] top-[166px] size-[150px] rounded-[50%] [filter:blur(200px)]" />
          <img
            className="absolute left-[-228px] top-[-474px] z-[1] h-[1190.6px] w-[1425.1px] object-contain"
            alt=""
            src="/looper-bg.png"
          />
        </div>
        <div className="mt-[-78px] box-border flex h-[399px] w-[132px] flex-col items-start justify-start gap-[99px] p-0 mq750:hidden">
          <div className="flex flex-1 flex-row items-start justify-start self-stretch py-0 pl-2.5 pr-0">
            <div className="bg-mediumslateblue relative w-[150px] shrink-0 self-stretch rounded-[50%] [filter:blur(150px)]" />
          </div>
          <div className="relative w-[150px] flex-1 rounded-[50%] bg-gray-400 [filter:blur(200px)]" />
        </div>
      </div>
    </section>
  )
}

export default FrameComponent
