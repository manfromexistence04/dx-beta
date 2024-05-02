'use client'

import dynamic from "next/dynamic";

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
