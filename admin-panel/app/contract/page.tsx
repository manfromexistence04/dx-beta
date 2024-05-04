/**
 * v0 by Vercel.
 * @see https://v0.dev/t/OJByYJ3jtCX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 md:p-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-900 dark:bg-gray-50 rounded-full flex items-center justify-center">
                <BuildingIcon className="h-6 w-6 text-white dark:text-gray-900" />
              </div>
              <h1 className="text-2xl font-bold">Contract</h1>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 dark:text-gray-400 font-medium">Shoccho Sthapona</span>
              <MountainIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold mb-4">Client Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="client-name">Name</Label>
                  <Input id="client-name" placeholder="Enter client name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="client-email">Email</Label>
                  <Input id="client-email" placeholder="Enter client email" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="client-phone">Phone</Label>
                  <Input id="client-phone" placeholder="Enter client phone number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="client-address">Address</Label>
                  <Textarea id="client-address" placeholder="Enter client address" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Project Details</h2>
              <div className="space-y-2">
                <Label htmlFor="project-name">Project Name</Label>
                <Input id="project-name" placeholder="Enter project name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-description">Project Description</Label>
                <Textarea id="project-description" placeholder="Enter project description" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-timeline">Project Timeline</Label>
                <Input id="project-timeline" placeholder="Enter project timeline" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-budget">Project Budget</Label>
                <Input id="project-budget" placeholder="Enter project budget" type="number" />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Terms and Conditions</h2>
              <div className="space-y-4">
                <p>
                  I, Shoccho Sthapona, the owner of Shoccho Sthapona Architecture Firm, hereby agree to the terms and
                  conditions of this contract.
                </p>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms-accepted" />
                  <Label htmlFor="terms-accepted">I accept the terms and conditions</Label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <Button type="submit">Sign Contract</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function BuildingIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}