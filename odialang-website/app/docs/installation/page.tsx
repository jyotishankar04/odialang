'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import CodeBlock from "@/components/ui/CodeBlock";

export default function InstallationPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Installation</h1>
      <p className="mt-4 text-muted-foreground text-lg">
        Get started with Odialang in just a few steps.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Prerequisites</h2>
        <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-2">
          <li>Node.js version 18 or higher</li>
          <li>npm, pnpm, or yarn package manager</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Install via npm</h2>
        <div className="mt-4">
          <CodeBlock code="npm install -g @devsuvam/odialang" language="bash" />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Verify Installation</h2>
        <p className="mt-2 text-muted-foreground">
          Run the following command to verify Odialang is installed:
        </p>
        <div className="mt-4">
          <CodeBlock code="odia --help" language="bash" />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Quick Start</h2>
        
        <div className="mt-4">
          <h3 className="text-lg font-medium">1. Create a file</h3>
          <div className="mt-2">
            <CodeBlock 
              code={`# hello.odia
dekha "Namaskar, Odia!"`}
              language="odia"
            />
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-medium">2. Run it</h3>
          <div className="mt-2">
            <CodeBlock code="odia hello.odia" language="bash" />
          </div>
          <p className="mt-2 text-muted-foreground">Output: Namaskar, Odia!</p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Try Online</h2>
        <p className="mt-2 text-muted-foreground">
          Don't want to install? Try Odialang in your browser:
        </p>
        <div className="mt-4">
          <Link href="/playground/">
            <Button>Open Playground</Button>
          </Link>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">What's Next?</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium">Tutorial</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Learn Odialang step by step with our beginner-friendly tutorial.
            </p>
            <Link href="/docs/tutorial/">
              <Button variant="outline" size="sm" className="mt-3">
                Start Tutorial
              </Button>
            </Link>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium">Language Reference</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Complete reference for all Odialang keywords and syntax.
            </p>
            <Link href="/docs/language/">
              <Button variant="outline" size="sm" className="mt-3">
                View Reference
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}