import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import { Icons } from "@/components/icons"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/registry/new-york/ui/button"
import MailPage from "@/app/(app)/examples/mail/page"

// Index.tsx
import type { NextPage } from "next";
import Header from "@/components/header";
import FrameComponent4 from "@/components/frame-component4";
import FrameComponent3 from "@/components/frame-component3";
import FrameComponent2 from "@/components/frame-component2";
import FrameComponent1 from "@/components/frame-component1";
import Calculator from "@/components/calculator";
import FrameComponent from "@/components/frame-component";

const LandingNewDesign: NextPage = () => {
  return (
    <>
      <div className="w-full relative bg-black overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal] text-left text-xl text-shade-white font-dm-sans-desktop-24px-medium">
        <div className="self-stretch h-[3912px] relative bg-black hidden" />
        <FrameComponent4 />
        <div className="w-[633px] rounded bg-blueviolet-200 hidden flex-row items-start justify-start p-4 box-border min-h-[162px] max-w-full">
          <b className="h-[100px] flex-1 relative leading-[100%] inline-block max-w-full mq450:text-base mq450:leading-[16px]">
            The investor`s stake guarantees the Validator’s goodwill and personal
            intent to build the new ecosystem to enforce the ecosystem
            development. The Ustaking smart contract algorithm of the consensus
            mechanism then selects block validators from all those who have staked
            tokens as collateral.
          </b>
        </div>
        <FrameComponent3 />
        <div className="w-[995.9px] h-[496.2px] relative hidden max-w-full font-dm-sans">
          <div className="absolute top-[0.2px] left-[0px] rounded [background:linear-gradient(-72.34deg,_)] w-full h-full" />
          <img
            className="absolute top-[0px] left-[0.9px] w-full h-full"
            alt=""
            src="/mask-group.svg"
          />
          <div className="absolute top-[32px] left-[296.9px] w-[451px] h-[434.2px] max-w-full">
            <div className="absolute top-[64.3px] left-[0px] w-full flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="w-[607px] flex flex-col items-start justify-start gap-[12px] max-w-[135%] shrink-0">
                <div className="self-stretch h-[26px] relative leading-[130%] font-medium inline-block mq450:text-base mq450:leading-[21px]">
                  Enter amount of token you want stake
                </div>
                <div className="w-[302px] shadow-[2px_2px_2px_rgba(0,_0,_0,_0.25)_inset] bg-shade-white box-border flex flex-row items-center justify-center py-3.5 px-[15px] relative gap-[12px] text-base text-black border-[1px] border-solid border-shade-white">
                  <b className="h-4 flex-1 relative leading-[16px] inline-block z-[0]">
                    1000
                  </b>
                  <img
                    className="h-6 w-6 absolute !m-[0] top-[12px] left-[267px] z-[1]"
                    alt=""
                    src="/coin-1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full shrink-0">
                <div className="self-stretch h-[26px] relative leading-[130%] font-medium inline-block mq450:text-base mq450:leading-[21px]">
                  Choose the Tarif plan that seems to you enough
                </div>
                <div className="w-[417px] h-[90px] relative max-w-full text-center text-base">
                  <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[12px]">
                    <div className="w-[137px] rounded bg-gray-500 box-border flex flex-row items-center justify-center py-3.5 px-[30px] whitespace-nowrap text-lg border-[1px] border-solid border-shade-white">
                      <b className="h-4 relative leading-[16px] inline-block">
                        6 month
                      </b>
                    </div>
                    <div className="w-[118px] rounded box-border flex flex-row items-center justify-center py-3.5 px-[31px] whitespace-nowrap border-[1px] border-solid border-shade-white">
                      <b className="h-4 relative leading-[16px] inline-block">
                        1 year
                      </b>
                    </div>
                    <div className="w-[118px] rounded box-border flex flex-row items-center justify-center py-3.5 px-[29px] whitespace-nowrap border-[1px] border-solid border-shade-white">
                      <b className="h-4 relative leading-[16px] inline-block">
                        3 years
                      </b>
                    </div>
                  </div>
                  <div className="absolute top-[64px] left-[0px] text-xl leading-[130%] font-medium text-left mq450:text-base mq450:leading-[21px]">
                    5% per year
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-silver" />
              <div className="w-[202px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[4px] shrink-0">
                <div className="self-stretch flex flex-row items-center justify-start gap-[12px]">
                  <b className="h-[26px] flex-1 relative leading-[130%] inline-block mq450:text-base mq450:leading-[21px]">
                    Reward:
                  </b>
                  <div className="h-10 flex flex-row items-center justify-start py-0 px-2 box-border gap-[8px] text-center font-headings-desktop-poppins-16px-regular">
                    <div className="self-stretch rounded flex flex-row items-center justify-start py-3 px-0">
                      <div className="self-stretch relative leading-[16px] font-medium mq450:text-base mq450:leading-[13px]">
                        50
                      </div>
                    </div>
                    <img className="h-6 w-6 relative" alt="" src="/coin-2.svg" />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <b className="h-[26px] flex-1 relative leading-[130%] inline-block mq450:text-base mq450:leading-[21px]">
                    Cashback:
                  </b>
                  <div className="h-10 flex flex-row items-center justify-start py-0 px-2 box-border gap-[8px] text-center font-headings-desktop-poppins-16px-regular">
                    <div className="self-stretch rounded flex flex-row items-center justify-start py-3 px-0">
                      <div className="self-stretch relative leading-[16px] font-medium mq450:text-base mq450:leading-[13px]">
                        15
                      </div>
                    </div>
                    <img className="h-6 w-6 relative" alt="" src="/coin-3.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[0.1px] text-21xl leading-[100%] font-semibold font-headings-desktop-poppins-16px-regular text-transparent !bg-clip-text [background:linear-gradient(#fff,_#fff),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq750:text-13xl mq750:leading-[32px] mq450:text-5xl mq450:leading-[24px]">
              Calculator
            </div>
          </div>
        </div>
        <FrameComponent2 />
        <section className="w-full flex flex-row items-start justify-center lg:px-0 px-[10%] pb-32">
          <div className="w-full flex flex-col items-center justify-center space-y-5">
            <h1 className="!text-37xl text-bold w-full text-center !m-0 flex items-center justify-center">
              A new way to apply
            </h1>
            <FrameComponent1 />
            <Calculator />
          </div>
        </section>
        <FrameComponent />
      </div>
      {/* <div className="bg-red-500 h-64 w-64 rounded-md flex items-center justify-center sm:bg-yellow-500 md:bg-pink-500">Hello</div> */}

    </>

  );
};

export default LandingNewDesign;
// export default function IndexPage() {
//   return (
//     // <div className="container relative">
//     //   <PageHeader>
//     //     <Announcement />
//     //     <PageHeaderHeading>Build your component library</PageHeaderHeading>
//     //     <PageHeaderDescription>
//     //       Beautifully designed components that you can copy and paste into your
//     //       apps. Accessible. Customizable. Open Source.
//     //     </PageHeaderDescription>
//     //     <PageActions>
//     //       <Link href="/docs" className={cn(buttonVariants())}>
//     //         Get Started
//     //       </Link>
//     //       <Link
//     //         target="_blank"
//     //         rel="noreferrer"
//     //         href={siteConfig.links.github}
//     //         className={cn(buttonVariants({ variant: "outline" }))}
//     //       >
//     //         <Icons.gitHub className="mr-2 h-4 w-4" />
//     //         GitHub
//     //       </Link>
//     //     </PageActions>
//     //   </PageHeader>
//     //   <ExamplesNav className="[&>a:first-child]:text-primary" />
//     //   <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
//     //     <Image
//     //       src="/examples/mail-dark.png"
//     //       width={1280}
//     //       height={727}
//     //       alt="Mail"
//     //       className="hidden dark:block"
//     //     />
//     //     <Image
//     //       src="/examples/mail-light.png"
//     //       width={1280}
//     //       height={727}
//     //       alt="Mail"
//     //       className="block dark:hidden"
//     //     />
//     //   </section>
//     //   <section className="hidden md:block">
//     //     <div className="overflow-hidden rounded-lg border bg-background shadow">
//     //       <MailPage />
//     //     </div>
//     //   </section>
//     // </div>
//     <div>Hello World!</div>
//   )
// }

