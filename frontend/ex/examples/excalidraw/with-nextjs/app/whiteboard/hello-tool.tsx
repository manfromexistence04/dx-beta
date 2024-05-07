"use client";
import * as excalidrawLib from "@excalidraw/excalidraw";
import { Excalidraw, WelcomeScreen } from "@excalidraw/excalidraw";
import App from "../../components/App";
// import ExcalidrawApp from "../../excalidraw-app/App";

import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
  return (
    <>
      <App
        appTitle={"Excalidraw with Nextjs Example"}
        useCustom={(api: any, args?: any[]) => { }}
        excalidrawLib={excalidrawLib}
      >
        <Excalidraw>
          <WelcomeScreen />
        </Excalidraw>
      </App>
    </>
  );
};

export default ExcalidrawWrapper;
