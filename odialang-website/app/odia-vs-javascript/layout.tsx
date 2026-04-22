import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OdiaLang vs JavaScript Syntax — Compare Odia and JavaScript",
  description: "Compare OdiaLang syntax with JavaScript side by side. See how Odia keywords like bada, nahin, and arahi map to JavaScript's if, else, and for.",
};

export default function OdiaVsJsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}