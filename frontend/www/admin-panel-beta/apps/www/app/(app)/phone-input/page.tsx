import Link from "next/link"
import { GitPullRequestArrow, Star } from "lucide-react"
import Balancer from "react-wrap-balancer"

import { Button } from "@/components/ui/button"
import { PhoneInputExamples } from "@/components/examples"
import { ThemeSwitcher } from "@/components/theme-switcher"

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center gap-8 px-5 py-24">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">Shadcn Phone Input</h1>
        <h2 className="text-muted-foreground text-center text-xl font-medium">
          <Balancer>
            Simple and formatted phone input component built with Shadcn UI y
            libphonenumber-js
          </Balancer>
        </h2>
        <p className="text-md text-muted-foreground my-2 text-center font-normal">
          <Balancer>
            *With country data and ISO codes obtained from the API of the OSS{" "}
            <Link
              className="underline"
              href="https://github.com/dr5hn/countries-states-cities-database"
            >
              countries-states-cities-database
            </Link>{" "}
            project.
          </Balancer>
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <GitPullRequestArrow className="mr-2 size-4" />
            PR for Shadcn UI (soon)
          </Button>
          <Button asChild>
            <Link
              href="https://github.com/damianricobelli/shadcn-phone-input"
              target="_blank"
            >
              <Star className="mr-2 size-4" />
              GitHub
            </Link>
          </Button>
          <ThemeSwitcher />
        </div>
        <Button
          asChild
          variant="link"
          className="text-muted-foreground underline"
        >
          Documentation (soon)
        </Button>
      </div>
      <PhoneInputExamples />
    </main>
  )
}
