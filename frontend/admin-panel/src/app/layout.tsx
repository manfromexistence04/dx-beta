import './globals.css'
import { AtomicState } from 'atomic-state'
import { FetchConfig } from 'http-react'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/ThemeProvider'
import AuthProvider from '@/components/AuthProvider'
import Navbar from '@/components/Navbar'
import { Toaster as DefaultToaster } from "@/registry/default/ui/toaster"
import { Toaster as NewYorkSonner } from "@/registry/new-york/ui/sonner"
import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/toaster"

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page '
}

export default function MainLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>Next.js starter</title>
        <meta name='description' content='A Starter with Next.js' />
      </head>

      <body className={GeistSans.className}>
        <ThemeProvider attribute='class' defaultTheme='system'>
          <main className='min-h-screen'>
            <AuthProvider>
              <AtomicState>
                <FetchConfig baseUrl='/api'>
                  <Navbar />
                  <div className=''>
                    {children}
                  </div>
                </FetchConfig>
              </AtomicState>
            </AuthProvider>
          </main>
          <NewYorkToaster />
          <DefaultToaster />
          <NewYorkSonner />
        </ThemeProvider>
      </body>
    </html>
  )
}
