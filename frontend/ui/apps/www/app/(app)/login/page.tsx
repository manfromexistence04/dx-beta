"use client"

/* eslint-disable tailwindcss/no-contradicting-classname */
import type { NextPage } from "next";
// import Header from "../components/header";
import FrameComponent from "@/components/login/frame-component";
// import Footer from "../components/footer";

const LogInWelcome: NextPage = () => {
  return (
    <div className="mq1225:h-auto relative box-border flex h-[1109px] w-full flex-col items-start justify-start overflow-hidden bg-black px-0 pb-[235px] pt-0 leading-[normal] tracking-[normal]">
      {/* <Header /> */}
      <main className="text-13xl text-shade-white font-headings-desktop-poppins-16px-regular mq1225:flex-wrap flex max-w-full shrink-0 flex-row items-end justify-start self-stretch text-center [debug_commit:1de1738] [row-gap:20px]">
        <div className="mq750:min-w-full mq1225:min-h-[auto] flex min-h-[785px] min-w-[532px] max-w-full flex-1 flex-row items-end justify-start bg-[url('/frame-2@3x.png')] bg-cover bg-[top] bg-no-repeat">
          <img
            className="relative hidden max-h-full w-[818px] max-w-full object-cover"
            alt=""
            src="/rectangle-12911.png"
          />
          <div className="mq450:px-5 mq450:box-border mq1050:px-[147px] mq1050:box-border z-[1] box-border flex max-w-full flex-1 flex-row items-start justify-start bg-gray-500 px-[294px] py-[87px] [backdrop-filter:blur(33px)]">
            <h1 className="font-inherit mq750:text-7xl mq450:text-lgi relative m-0 font-semibold text-inherit">
              uStudy for all
            </h1>
          </div>
        </div>
        <FrameComponent />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default LogInWelcome;