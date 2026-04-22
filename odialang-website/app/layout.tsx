import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Odialang - Write Code in Odia",
  description: "A file-based, CLI-driven programming language with Odia (Oriya) keywords that compiles to JavaScript",
  keywords: ["odia", "programming language", "javascript", "compiler", "regional language"],
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='16' cy='16' r='14' fill='none' stroke='%23c9730f' stroke-width='1.5'/%3E%3Ccircle cx='16' cy='16' r='9' fill='none' stroke='%232a3f7c' stroke-width='0.75' opacity='0.6'/%3E%3Ccircle cx='16' cy='16' r='3' fill='%23c9730f'/%3E%3Cline x1='16' y1='2' x2='16' y2='7' stroke='%23c9730f' stroke-width='1'/%3E%3Cline x1='16' y1='25' x2='16' y2='30' stroke='%23c9730f' stroke-width='1'/%3E%3Cline x1='2' y1='16' x2='7' y2='16' stroke='%23c9730f' stroke-width='1'/%3E%3Cline x1='25' y1='16' x2='30' y2='16' stroke='%23c9730f' stroke-width='1'/%3E%3Cline x1='5.86' y1='5.86' x2='9.9' y2='9.9' stroke='%23c9730f' stroke-width='0.75'/%3E%3Cline x1='22.1' y1='22.1' x2='26.14' y2='26.14' stroke='%23c9730f' stroke-width='0.75'/%3E%3Cline x1='26.14' y1='5.86' x2='22.1' y2='9.9' stroke='%23c9730f' stroke-width='0.75'/%3E%3Cline x1='9.9' y1='22.1' x2='5.86' y2='26.14' stroke='%23c9730f' stroke-width='0.75'/%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, jetbrainsMono.variable, "font-sans")}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground paper-texture">
        <TooltipProvider>
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </TooltipProvider>
        <Analytics />
      </body>
    </html>
  );
}
