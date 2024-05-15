"use client"

import {
  convertToExcalidrawElements,
  Excalidraw,
  MainMenu,
  WelcomeScreen,
} from "@excalidraw/excalidraw"
import { useTheme } from "next-themes"

import { Icons } from "@/components/icons"

// import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
  let themeStatus: any = localStorage.getItem("theme")
  const { theme }: any = useTheme()
  return (
    <div className="!fixed left-0 top-0 z-0 h-screen w-screen">
      <Excalidraw theme={theme}>
        <WelcomeScreen>
          <WelcomeScreen.Center>
            <WelcomeScreen.Center.Logo>
              <Icons.logo className="size-6" />
              <span>Admin Panle For Nurzhol Tabigat, minialgo.kz</span>
            </WelcomeScreen.Center.Logo>

            <WelcomeScreen.Center.Heading>
              Whiteboard by `MD MAHABUB HOSSAIN`!
            </WelcomeScreen.Center.Heading>
            <WelcomeScreen.Center.Menu>
              <WelcomeScreen.Center.MenuItemLink href="https://www.upwork.com/freelancers/~01221bf135ed62b3b3">
                Upwork
              </WelcomeScreen.Center.MenuItemLink>
              <WelcomeScreen.Center.MenuItemLink href="https://www.youtube.com/channel/UCK0IEdLWxA2EFgucri7z4SA">
                Youtube
              </WelcomeScreen.Center.MenuItemLink>
              <WelcomeScreen.Center.MenuItemLink href="https://discord.gg/62JDu4dY">
                Discord
              </WelcomeScreen.Center.MenuItemLink>

              <WelcomeScreen.Center.MenuItemHelp />
            </WelcomeScreen.Center.Menu>
          </WelcomeScreen.Center>

          <MainMenu>
            <MainMenu.DefaultItems.LoadScene />
            <MainMenu.DefaultItems.SaveToActiveFile />
            <MainMenu.DefaultItems.SaveAsImage />
            {/* <MainMenu.DefaultItems.CommandPalette /> */}
            <MainMenu.DefaultItems.ClearCanvas />
            {/* <MainMenu.DefaultItems.LiveCollaborationTrigger /> */}
            <MainMenu.DefaultItems.Export />
            <MainMenu.DefaultItems.ChangeCanvasBackground />

            {/* <MainMenu.Item onSelect={() => window.alert("Item1")}>
            Item1
          </MainMenu.Item>
          <MainMenu.Item onSelect={() => window.alert("Item2")}>
            Item 2
          </MainMenu.Item> */}
          </MainMenu>
        </WelcomeScreen>
      </Excalidraw>
    </div>
  )
}
export default ExcalidrawWrapper
