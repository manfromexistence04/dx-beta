"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tab";

export default function WebsiteTab() {
  const tabs = [
    {
      title: "One",
      value: "home",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
          <p>One</p>
          <Image
            src="/01.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Two",
      value: "faq",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
          <p>Two</p>
          <Image
            src="/02.jpg"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Three",
      value: "career-guidence",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
          <p>Three</p>
          <Image
            src="/03.jpg"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Four",
      value: "specialies",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
          <p>Four</p>
          <Image
            src="/04.jpg"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Five",
      value: "collages",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
          <p>Five</p>
          <Image
            src="/05.jpg"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Six",
      value: "calculator",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
          <p>Six</p>
          <Image
            src="/06.jpg"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Seven",
      value: "signup",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
          <p>Seven</p>
          <Image
            src="/07.jpg"
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



// export default function WebsiteTab() {
//   const tabs = [
//     {
//       title: "Home",
//       value: "home",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
//           <p>One</p>
//           <Image
//             src="/01.png"
//             alt="dummy image"
//             width="1000"
//             height="1000"
//             className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "FAQ",
//       value: "faq",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
//           <p>Two</p>
//           <Image
//             src="/02.jpg"
//             alt="dummy image"
//             width="1000"
//             height="1000"
//             className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Career Guidence",
//       value: "career-guidence",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
//           <p>Three</p>
//           <Image
//             src="/03.jpg"
//             alt="dummy image"
//             width="1000"
//             height="1000"
//             className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Specialies",
//       value: "specialies",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
//           <p>Four</p>
//           <Image
//             src="/04.jpg"
//             alt="dummy image"
//             width="1000"
//             height="1000"
//             className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Collages",
//       value: "collages",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
//           <p>Five</p>
//           <Image
//             src="/05.jpg"
//             alt="dummy image"
//             width="1000"
//             height="1000"
//             className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Calculator",
//       value: "calculator",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
//           <p>Six</p>
//           <Image
//             src="/06.jpg"
//             alt="dummy image"
//             width="1000"
//             height="1000"
//             className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Signup",
//       value: "signup",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-lg p-10 text-xl md:text-4xl font-bold text-white border bg-primary-foreground">
//           <p>Seven</p>
//           <Image
//             src="/07.jpg"
//             alt="dummy image"
//             width="1000"
//             height="1000"
//             className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//           />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
//       <Tabs tabs={tabs} />
//     </div>
//   );
// }

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
