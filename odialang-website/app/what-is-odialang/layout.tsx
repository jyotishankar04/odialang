import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is OdiaLang? — Programming Language in Odia",
  description: "Learn what OdiaLang is — a fun programming language using Odia-style keywords that compiles to JavaScript. Write code in Odia and run anywhere JavaScript runs.",
};

export default function WhatIsOdialangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}