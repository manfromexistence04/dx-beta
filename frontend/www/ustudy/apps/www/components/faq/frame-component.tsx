/* eslint-disable tailwindcss/no-contradicting-classname */

import type { NextPage } from "next"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion"
import { Button } from "@/registry/default/ui/button"

const FrameComponent: NextPage = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="relative !m-0 box-border flex h-[244px] !w-full max-w-full flex-1 flex-row items-center justify-center gap-[20px] overflow-hidden bg-gray-200 !p-0 pb-[85px] pl-[470px] pr-0 pt-[50px] mq750:box-border mq750:pb-[55px] mq750:pl-[235px] mq750:pt-8 mq450:box-border mq450:pl-5">
        <div className="relative z-0 hidden h-[248px] w-[1440px] max-w-full [background:linear-gradient(180deg,_)]" />
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="title !m-0 bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <span className="text-sm text-primary">
            Everything you need to know about our product
          </span>
        </div>
        <img
          className="absolute left-0 top-0 z-[1] lg:min-h-[300px] lg:min-w-[500px]"
          alt=""
          src="/left-shadow.png"
        />
        <img
          className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 lg:min-h-[300px] lg:min-w-[500px]"
          alt=""
          src="/center-shadow.png"
        />
        <img
          className="absolute right-0 top-0 z-[1] lg:min-h-[300px] lg:min-w-[500px]"
          alt=""
          src="/right-shadow.png"
        />
        <img
          className="absolute left-1/3 top-0 z-[1] mx-auto size-[90%] -translate-x-1/2 object-contain lg:min-h-[300px] lg:min-w-[500px]"
          alt=""
          src="/looper-bg.png"
        />
      </div>
      <div className="faq-content mt-10 flex flex-col space-y-5">
        <div className="faq-content-buttons flex items-center justify-center space-x-7">
          <Button className="!rounded-[2.5px] !p-6" variant="outline">
            General
          </Button>
          <Button className="!rounded-[2.5px] !p-6" variant="outline">
            Calculator
          </Button>
          <Button className="!rounded-[2.5px] !p-6" variant="outline">
            Career Test
          </Button>

          {/* <div className="p-10 border rounded-[5px]">General</div> */}
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-[90%] space-y-5 lg:w-[700px]"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is uSTAKING Referral Program?
            </AccordionTrigger>
            <AccordionContent>
              uSTAKING has a smart referral system to reward the activity of
              system participants. A referral reward program is integrated into
              the uSTAKING Ecosystem. It allows receiving rewards from ten
              levels deep after the referral partner has staked the amount of
              tokens.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How can I participate in the Referral Program?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Where can I check my bonus balance?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              How much can I get through uSTAKING Referral Program?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              In what type of currency can I be rewarded?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>How can I withdraw my reward?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Which reward I can get on every level?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* 
                <div class="Frame985592 w-[800px] h-[656px] py-6 border-2 flex-col justify-start items-start gap-6 inline-flex">
  <div class="Frame985593 self-stretch justify-between items-center inline-flex">
    <div class="WhatIsUstakingReferralProgram text-center text-white text-xl font-normal font-['Poppins']">What is uSTAKING Referral Program?</div>
    <div class="ChevronUp w-8 h-8 px-2 justify-center items-center flex"></div>
  </div>
  <div class="UstakingHasASmartReferralSystemToRewardTheActivityOfSystemParticipantsAReferralRewardProgramIsIntegratedIntoTheUstakingEcosystemItAllowsReceivingRewardsFromTenLevelsDeepAfterTheReferralPartnerHasStakedTheAmountOfTokens text-slate-400 text-base font-normal font-['Poppins']">uSTAKING has a smart referral system to reward the activity of system participants. A referral<br/> reward program is integrated into the uSTAKING Ecosystem. It allows receiving rewards from <br/>ten levels deep after the referral partner has staked the amount of tokens.</div>
  <div class="Line56 self-stretch h-[0px] border border-zinc-800"></div>
  <div class="Frame985594 self-stretch justify-between items-center inline-flex">
    <div class="HowCanIParticipateInTheReferralProgram text-center text-white text-xl font-normal font-['Poppins']">How can I participate in the Referral Program?</div>
    <div class="ChevronDown w-8 h-8 px-2 justify-center items-center flex"></div>
  </div>
  <div class="Line57 self-stretch h-[0px] border border-zinc-800"></div>
  <div class="Frame985595 self-stretch justify-between items-center inline-flex">
    <div class="WhereCanICheckMyBonusBalance text-center text-white text-xl font-normal font-['Poppins']">Where can I check my bonus balance?</div>
    <div class="ChevronDown w-8 h-8 px-2 justify-center items-center flex"></div>
  </div>
  <div class="Line58 self-stretch h-[0px] border border-zinc-800"></div>
  <div class="Frame985596 self-stretch justify-between items-start inline-flex">
    <div class="HowMuchCanIGetThroughUstakingReferralProgram text-center text-white text-xl font-normal font-['Poppins']">How much can I get through uSTAKING Referral Program?</div>
    <div class="ChevronDown w-8 h-8 px-2 justify-center items-center flex"></div>
  </div>
  <div class="Line59 self-stretch h-[0px] border border-zinc-800"></div>
  <div class="Frame985597 self-stretch justify-between items-start inline-flex">
    <div class="InWhatTypeOfCurrencyCanIBeRewarded text-center text-white text-xl font-normal font-['Poppins']">In what type of currency can I be rewarded?</div>
    <div class="ChevronDown w-8 h-8 px-2 justify-center items-center flex"></div>
  </div>
  <div class="Line60 self-stretch h-[0px] border border-zinc-800"></div>
  <div class="Frame985598 self-stretch justify-between items-start inline-flex">
    <div class="HowCanIWithdrawMyReward text-center text-white text-xl font-normal font-['Poppins']">How can I withdraw my reward?</div>
    <div class="ChevronDown w-8 h-8 px-2 justify-center items-center flex"></div>
  </div>
  <div class="Line61 self-stretch h-[0px] border border-zinc-800"></div>
  <div class="Frame985599 self-stretch justify-between items-start inline-flex">
    <div class="WhichRewardICanGetOnEveryLevel text-center text-white text-xl font-normal font-['Poppins']">Which reward I can get on every level?</div>
    <div class="ChevronDown w-8 h-8 px-2 justify-center items-center flex"></div>
  </div>
</div>
                */}
      </div>
    </section>
  )
}

export default FrameComponent
