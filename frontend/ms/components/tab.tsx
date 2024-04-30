"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tab";

export default function WebsiteTab() {
  const tabs = [
    {
      title: "Home",
      value: "home",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
          <p>Home</p>
          <Image
            src="/website/1.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "FAQ",
      value: "faq",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
          <p>FAQ</p>
          <Image
            src="/website/2.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Career Guidence",
      value: "career-guidence",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
          <p>Career Guidence</p>
          <Image
            src="/website/3.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Specialies",
      value: "specialies",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
          <p>Specialies</p>
          <Image
            src="/website/4.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Collages",
      value: "collages",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
          <p>Collages</p>
          <Image
            src="/website/5.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Calculator",
      value: "calculator",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
          <p>Calculator</p>
          <Image
            src="/website/6.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Signup",
      value: "signup",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
          <p>Signup</p>
          <Image
            src="/website/7.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
