'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import CodeBlock from "@/components/ui/CodeBlock";

export default function WhatIsOdialangPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold">What is OdiaLang?</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        <strong>OdiaLang</strong> is a programming language that uses Odia (Oriya) keywords to write code that compiles to JavaScript. 
        Write programs in your native language using keywords like <code className="font-mono">bada</code> (if), <code className="font-mono">nahin</code> (else), 
        <code className="font-mono">ahara</code> (function), and more — then run it anywhere JavaScript runs.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Why OdiaLang?</h2>
        <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Code in Odia</strong> — Write programs using familiar Odia keywords</li>
          <li><strong>Compiles to JavaScript</strong> — Runs on Node.js, browsers, and anywhere JS works</li>
          <li><strong>Learn programming</strong> — Great for beginners learning to code in their native language</li>
          <li><strong>Fun & accessible</strong> — Makes programming more approachable for Odia speakers</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Hello World in OdiaLang</h2>
        <p className="mt-2 text-muted-foreground">
          Here's a simple hello world program in OdiaLang:
        </p>
        <div className="mt-4">
          <CodeBlock 
            code={`# hello.odia
dekha "Namaskar, Bharia!"`}
            language="odia"
          />
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Output: Namaskar, Bharia!
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">OdiaLang vs JavaScript</h2>
        <p className="mt-2 text-muted-foreground">
          Compare the same program in OdiaLang vs JavaScript:
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium mb-2">OdiaLang</h3>
            <CodeBlock 
              code={`bada (x > 5) {
  dekha "Bada!"
} nahin {
  chota dekha "Chota!"
}`}
              language="odia"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">JavaScript</h3>
            <CodeBlock 
              code={`if (x > 5) {
  console.log("Big!");
} else {
  console.log("Small!");
}`}
              language="javascript"
            />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Get Started</h2>
        <p className="mt-2 text-muted-foreground">
          Ready to try OdiaLang? Install it or try the online playground:
        </p>
        <div className="mt-4 flex gap-4">
          <Link href="/docs/installation/">
            <Button>Install OdiaLang</Button>
          </Link>
          <Link href="/playground/">
            <Button variant="outline">Try Playground</Button>
          </Link>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Learn More</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium">Language Reference</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Complete reference for all OdiaLang keywords and syntax.
            </p>
            <Link href="/docs/language/">
              <Button variant="outline" size="sm" className="mt-3">
                View Reference
              </Button>
            </Link>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium">Tutorial</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Learn OdiaLang step by step with our beginner-friendly tutorial.
            </p>
            <Link href="/docs/tutorial/">
              <Button variant="outline" size="sm" className="mt-3">
                Start Tutorial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}