"use client"

import React from "react"
import Link from "next/link"
import {
  BLUR_IN_CODE,
  FADE_DOWN_CODE,
  FADE_UP_CODE,
  GRADUAL_SPACING_CODE,
  MULTIDIRECTION_SLIDE_CODE,
  RIPPLE_PULL_UP_CODE,
  ROTATE_WORDS_CODE,
  SEPARATE_CODE,
  SLIGHT_FLIP_CODE,
  STAGGERED_FADE_IN_CODE,
  STAGGERED_PULL_UP_CODE,
  TYPING_EFFECT_CODE,
  VELOCITY_CODE,
  WAVY_TEXT_CODE,
} from "@/variants/code-snippets"
import {
  BlurIn,
  FadeDownStagger,
  FadeUpStagger,
  GradualSpacing,
  LetterPullUp,
  MultiDirectionSlide,
  RotateText,
  SeparateAway,
  SlightFlip,
  StaggeredFadeIn,
  TypingEffect,
  VelocityScroll,
  WavyText,
  WordPullUp,
} from "@/variants/variant-previews"
import { ReloadIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Spotlight } from "@/components/shared/spotlight"

export default function Home() {
  let generateZeros = (n: number) => Array(n).fill(0)
  let [keys, setKeys] = React.useState(generateZeros(20))
  let variants = [
    {
      name: "Fade Down with Stagger",
      preview: <FadeDownStagger key={keys[0]} />,
      code: FADE_DOWN_CODE,
    },
    {
      name: "Fade Up with Stagger",
      preview: <FadeUpStagger key={keys[1]} />,
      code: FADE_UP_CODE,
    },
    {
      name: "Multi Direction Slide",
      preview: <MultiDirectionSlide key={keys[2]} />,
      code: MULTIDIRECTION_SLIDE_CODE,
    },
    {
      name: "Staggered Fade In",
      preview: <StaggeredFadeIn key={keys[3]} />,
      code: STAGGERED_FADE_IN_CODE,
    },
    {
      name: "Staggered Letter Pull Up",
      preview: <LetterPullUp key={keys[4]} />,
      code: STAGGERED_PULL_UP_CODE,
    },
    {
      name: "Word Pull Up",
      preview: <WordPullUp key={keys[5]} />,
      code: RIPPLE_PULL_UP_CODE,
    },
    {
      name: "Scroll Based Velocity",
      preview: <VelocityScroll key={keys[6]} />,
      code: VELOCITY_CODE,
    },
    {
      name: "Rotate Between Words",
      preview: <RotateText key={keys[7]} />,
      code: ROTATE_WORDS_CODE,
    },
    {
      name: "Typing Effect",
      preview: <TypingEffect key={keys[8]} />,
      code: TYPING_EFFECT_CODE,
    },
    {
      name: "Separate Away",
      preview: <SeparateAway key={keys[9]} />,
      code: SEPARATE_CODE,
    },
    {
      name: "Gradual Spacing",
      preview: <GradualSpacing key={keys[10]} />,
      code: GRADUAL_SPACING_CODE,
    },
    {
      name: "Blur In",
      preview: <BlurIn key={keys[11]} />,
      code: BLUR_IN_CODE,
    },
    {
      name: "Slight Flip",
      preview: <SlightFlip key={keys[12]} />,
      code: SLIGHT_FLIP_CODE,
    },
    {
      name: "Wavy Text",
      preview: <WavyText key={keys[13]} />,
      code: WAVY_TEXT_CODE,
    },
  ]

  function restartAnimation(index: number) {
    setKeys((prevKeys) => {
      const newKeys = [...prevKeys] // copy the previous keys
      newKeys[index] += 1 // increment the key at the given index
      return newKeys
    })
  }

  let [query, setQuery] = React.useState("")
  let filteredVariants =
    query === ""
      ? variants
      : variants.filter((variant) => {
          return variant.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div className="w-full">
        <div className="flex min-h-screen flex-col items-center space-y-12 py-2">
          <div className="mb-6 w-full">
            <Spotlight filteredVariants={filteredVariants} />
          </div>
          {filteredVariants.length > 0 ? (
            filteredVariants.map((variant, index) => (
              <Tabs defaultValue="preview" className="w-full" key={index}>
                <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
                  <div className="mb-2 flex w-full justify-between lg:mb-0">
                    <h1
                      id={variant.name.toLowerCase().replace(" ", "-")}
                      className="text-xl"
                    >
                      {variant.name}
                    </h1>

                    <Button
                      variant="ghost"
                      className="lg:hidden"
                      size="icon"
                      onClick={() => restartAnimation(index)}
                    >
                      <ReloadIcon className="size-4" />
                    </Button>
                  </div>
                  <div className="flex flex-col space-x-0 space-y-4 lg:flex-row lg:space-x-6 lg:space-y-0">
                    <TabsList className="grid w-[355px] grid-cols-2 lg:w-[400px]">
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                      <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>

                    <div className="hidden space-x-6 lg:flex">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => restartAnimation(index)}
                            >
                              <ReloadIcon className="size-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="mr-12">
                            <p>Restart Animation</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>

                <TabsContent value="preview">
                  <Card className="bg-background">
                    <CardContent className="mt-4 space-y-2 overflow-hidden bg-background text-primary">
                      {variant.preview}
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="code">
                  <Card className="bg-background">
                    <CardContent className="space-y-2">
                      <div className="mt-6 rounded-md bg-primary-foreground p-6 dark:bg-primary-foreground">
                        <ScrollArea className="h-96">
                          <pre>
                            <code className="grid gap-1 text-sm text-black dark:text-white [&_span]:h-4">
                              {variant.code}
                            </code>
                          </pre>
                        </ScrollArea>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            ))
          ) : (
            <div>
              <h1 className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]">
                No variants found.
              </h1>
              <p className="text-center">
                {" "}
                If you want to see a variant added, please message me on{" "}
                <Link
                  className="text-primary underline"
                  href="https://twitter.com/abdo_eth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Link>
                &nbsp;@abdo_eth or create a pull request on the GitHub repo.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
