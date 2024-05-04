// import Footer from "@/components/shared/footer"
// import MainNav from "@/components/shared/main-nav"

// interface AppLayoutProps {
//   children: React.ReactNode
// }

// export default function AppLayout({ children }: AppLayoutProps) {
//   return (
//     <>
//       <MainNav />
//       <main className="flex-1">{children}</main>
//       <Footer />
//     </>
//   )
// }
// import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import MainNav from "@/components/shared/main-nav";
import Footer from "@/components/shared/footer";
import { TooltipProvider } from '@/components/plate-ui/tooltip';


const inter = Inter({ subsets: ["latin"] });

const title =
  "Variant Vault - A collection of Framer Motion variants for your next project.";
const description =
  "Variant Vault is a collection of Framer Motion variants for your next project. All free to use and open source.";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
