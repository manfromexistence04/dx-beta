import type { NextPage } from "next"

import FrameComponent from "@/components/faq/frame-component"
import Component from "@/components/specialty-page/component"

const FAQPage: NextPage = () => {
  return (
    <div className="pb-32 relative box-border flex w-full flex-col items-start justify-start overflow-hidden bg-black px-0 pt-0 leading-[normal] tracking-[normal]">
      <FrameComponent />
    </div>
  )
}

export default FAQPage