import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installing OdiaLang Locally — Setup Guide",
  description: "Install OdiaLang on your computer. Step-by-step guide to install OdiaLang with npm and start coding in Odia.",
};

export default function InstallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}