import dynamic from "next/dynamic";
import "../common.scss";

const ExcalidrawWithClientOnly = dynamic(
  async () => (await import("../excalidrawWrapper")).default,
  {
    ssr: false,
  },
);

export default function Page() {
  return (
    <>
      <a href="/excalidraw-in-pages">Switch to Pages router</a>
      <h1 className="page-title">App Router</h1>

      <ExcalidrawWithClientOnly />
    </>
  );
}
