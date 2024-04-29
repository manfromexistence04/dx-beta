/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"


const GroupComponent: NextPage = () => {
  return (
    <div className="font-headings-desktop-poppins-16px-bold mq1250:flex-wrap mq1250:pl-[29px] mq1250:box-border text-blueviolet-100 box-border flex min-h-[148px] max-w-full flex-row items-start justify-center gap-[18px] self-stretch py-[38px] pl-[59px] pr-5 text-left text-5xl">
      <div className="relative hidden h-[148px] w-[1440px] max-w-full bg-black" />
      <div className="box-border flex w-[226px] flex-col items-start justify-start px-0 pb-0 pt-1.5">
        <h3 className="font-inherit mq450:text-lgi relative z-[1] m-0 inline-block h-[47px] shrink-0 self-stretch font-bold text-inherit">
          Specialty
        </h3>
      </div>
      <div className="hidden h-12 w-[220px]" />
      <div className="mq1100:flex-wrap mq1100:gap-[32px] text-shade-white mq750:gap-[16px] flex max-w-full flex-row items-end justify-start gap-[64px] text-center text-base">
        <div className="mq750:flex-wrap flex max-w-full flex-row items-start justify-start gap-[14.5px]">
          <button className="hover:bg-mediumslateblue-200 hover:border-mediumslateblue-100 hover:border-DEFAULT border-blueviolet-100 bg-blueviolet-200 z-[3] flex cursor-pointer flex-row items-start justify-start rounded border-DEFAULT border-solid py-3 pl-[53px] pr-[52px] hover:box-border hover:border-solid">
            <b className="font-headings-desktop-poppins-16px-bold text-shade-white relative inline-block min-w-[82px] text-center text-base">
              Bachelor's
            </b>
          </button>
          <button className="hover:bg-mediumslateblue-300 hover:border-mediumslateblue-100 hover:border-DEFAULT border-blueviolet-100 z-[3] flex cursor-pointer flex-row items-start justify-start rounded border-DEFAULT border-solid bg-transparent px-[60px] py-3 hover:box-border hover:border-solid">
            <b className="font-headings-desktop-poppins-16px-bold text-shade-white relative inline-block min-w-[67px] text-center text-base">
              Master's
            </b>
          </button>
          <button className="hover:bg-mediumslateblue-300 hover:border-mediumslateblue-100 hover:border-DEFAULT border-blueviolet-100 z-[3] flex cursor-pointer flex-row items-start justify-start rounded border-DEFAULT border-solid bg-transparent px-[78px] py-3 hover:box-border hover:border-solid">
            <div className="font-headings-desktop-poppins-16px-bold text-shade-white relative inline-block min-w-[30px] text-center text-base">
              PhD
            </div>
          </button>
        </div>
        {/* <div className="rounded-6xl bg-darkgray border-gray1-300 z-[1] box-border flex w-[331px] max-w-full flex-row items-start justify-between gap-[20px] border-2 border-solid pb-[5px] pl-[11px] pr-[29px] pt-3">
          <div className="rounded-6xl bg-darkgray border-gray1-300 relative box-border hidden h-[50px] w-[331px] max-w-full border-2 border-solid" />
          <div className="relative z-[2] inline-block h-[27px] w-[190px] shrink-0">
            Subject combinations
          </div>
          <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[13px]">
            <img
              className="relative z-[2] h-[8.8px] w-[15.8px]"
              alt=""
              src="/group-1.svg"
            />
          </div>

        </div> */}
        <Select>
          <SelectTrigger className="w-auto rounded-lg">
            <SelectValue placeholder="Subject combinations" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

      </div>
    </div>
  )
}
export default GroupComponent
