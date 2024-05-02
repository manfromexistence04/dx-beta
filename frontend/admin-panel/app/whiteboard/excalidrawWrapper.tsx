"use client";
import { Excalidraw, convertToExcalidrawElements, WelcomeScreen } from "@excalidraw/excalidraw";

// import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
  console.info(convertToExcalidrawElements([{
    type: "rectangle",
    id: "rect-1",
    width: 186.47265625,
    height: 141.9765625,
  },]));
  return (
    <div className="h-screen w-screen !fixed top-0 left-0 z-0">
      <Excalidraw>
        <WelcomeScreen />
      </Excalidraw>
    </div>
  );
};
export default ExcalidrawWrapper;