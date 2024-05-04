"use client";
import { Excalidraw, convertToExcalidrawElements, WelcomeScreen } from "@excalidraw/excalidraw";

// import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {

  return (
    <div className="h-screen w-screen !fixed top-0 left-0 z-0">
      <Excalidraw>
        {/* <WelcomeScreen /> */}
      </Excalidraw>
    </div>
  );
};
export default ExcalidrawWrapper;