'use client'
 
// import React from 'react'
// // import dynamic from 'next/dynamic'
// // const App = dynamic(() => import('#/excaldraw/excalidraw-app/App'), { ssr: false })
// //  import ExcalidrawApp from "#/excaldraw/excalidraw-app/App";

// export default function Home() {
//   return(
//     <>
//     hello
//     </>
//   )
// }

import dynamic from "next/dynamic";
// import "../common.scss";

const ExcalidrawWithClientOnly = dynamic(
  async () => (await import("@/components/hello-mode")).default,
  {
    ssr: false,
  },
);

export default function Page() {
  return (
    <>
      <ExcalidrawWithClientOnly />
    </>
  );
}
