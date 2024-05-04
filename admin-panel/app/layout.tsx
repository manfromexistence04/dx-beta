import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import MainNav from "@/components/shared/main-nav";
import Footer from "@/components/shared/footer";
import { Nextui } from "./nextui";
import { TooltipProvider } from '@/components/plate-ui/tooltip';
import { Toaster as DefaultToaster } from "@/registry/default/ui/toaster"
import { Toaster as NewYorkSonner } from "@/registry/new-york/ui/sonner"
import { Toaster as NewYorkToaster } from "@/registry/new-york/ui/toaster"
import { SiteHeader } from "@/components/site-header";

const inter = Inter({ subsets: ["latin"] });

const title =
  "Architecture Firm";
const description =
  "This is a highly cutomizable admin panel.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@abdo_eth",
  },
  metadataBase: new URL("https://variantvault.chrisabdo.dev"),
  themeColor: "#ffffff",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nextui>
            <TooltipProvider
              disableHoverableContent
              delayDuration={500}
              skipDelayDuration={0}
            >
              <SiteHeader />
              <div className="min-h-[90vh]">
                {children}
              </div>
              <Footer />
              <Toaster />
              <NewYorkToaster />
              <DefaultToaster />
              <NewYorkSonner />
            </TooltipProvider>

          </Nextui>
        </ThemeProvider>
      </body>
    </html>
  );
}

