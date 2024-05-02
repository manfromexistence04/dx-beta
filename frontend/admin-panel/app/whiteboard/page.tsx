'use client'
 
import React from 'react'
// import dynamic from 'next/dynamic'
// const App = dynamic(() => import('#/excaldraw/excalidraw-app/App'), { ssr: false })
 import ExcalidrawApp from "#/excaldraw/excalidraw-app/App";

export default function Home() {
  return <ExcalidrawApp />
}