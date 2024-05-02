"use client";
import * as excalidrawLib from "./whiteboard/hello-mode/excalidraw";
import { Excalidraw } from "./whiteboard/hello-mode/excalidraw";
import App from "./whiteboard/App";

import "@excalidraw/excalidraw/index.css";

const HelloTool: React.FC = () => {
  return (
    <>
      <App
        appTitle={"Excalidraw with Nextjs Example"}
        useCustom={(api: any, args?: any[]) => {}}
        excalidrawLib={excalidrawLib}
      >
        <Excalidraw />
      </App>
    </>
  );
};

export default HelloTool;

