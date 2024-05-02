// 'use client'

// import dynamic from "next/dynamic";

// const ExcalidrawWithClientOnly = dynamic(
//   async () => (await import("@/components/hello-mode")).default,
//   {
//     ssr: false,
//   },
// );

// export default function Page() {
//   return (
//     <>
//       <ExcalidrawWithClientOnly />
//     </>
//   );
// }
import dynamic from "next/dynamic";

// Since client components get prerenderd on server as well hence importing 
// the excalidraw stuff dynamically with ssr false

const ExcalidrawWrapper = dynamic(
  async () => (await import("./excalidrawWrapper")).default,
  {
    ssr: false,
  },
);

export default function Page() {
  return (
    <ExcalidrawWrapper />
  );
}