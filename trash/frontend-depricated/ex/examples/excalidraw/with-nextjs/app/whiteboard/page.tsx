
// import dynamic from "next/dynamic";

// const ExcalidrawWrapper = dynamic(
//   async () => (await import("./excalidrawWrapper")).default,
//   {
//     ssr: false,
//   },
// );

// export default function Page() {
//   return (
//     <ExcalidrawWrapper />
//   );
// }
import dynamic from "next/dynamic";
import "../common.scss";

const ExcalidrawWithClientOnly = dynamic(
  async () => (await import("./hello-tool")).default,
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
