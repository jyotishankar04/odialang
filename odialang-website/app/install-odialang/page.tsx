'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import CodeBlock from "@/components/ui/CodeBlock";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function InstallPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold">Installing OdiaLang Locally</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Get OdiaLang running on your machine in just a few minutes. 
        Write code in Odia and compile to JavaScript on your local computer.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Prerequisites</h2>
        <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-2">
          <li><strong>Node.js</strong> version 18 or higher</li>
          <li><strong>npm</strong>, pnpm, or yarn package manager</li>
        </ul>
        <p className="mt-2 text-sm text-muted-foreground">
          Check your Node.js version: <code className="font-mono">node --version</code>
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Install via npm</h2>
        <p className="mt-2 text-muted-foreground">
          The easiest way to install OdiaLang is using npm:
        </p>
        <div className="mt-4">
          <CodeBlock code="npm install -g @devsuvam/odialang" language="bash" />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Verify Installation</h2>
        <p className="mt-2 text-muted-foreground">
          Run this command to verify OdiaLang is installed correctly:
        </p>
        <div className="mt-4">
          <CodeBlock code="odia --help" language="bash" />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Quick Start</h2>
        <p className="mt-2 text-muted-foreground">
          Once installed, create your first OdiaLang program:
        </p>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-medium">1. Create a file</h3>
            <p className="mt-1 text-sm text-muted-foreground">Create a file named <code className="font-mono">hello.odia</code> with:</p>
            <div className="mt-2">
              <CodeBlock 
                code={`# hello.odia
dekha "Namaskar, Odia!"`}
                language="odia"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">2. Run it</h3>
            <div className="mt-2">
              <CodeBlock code="odia hello.odia" language="bash" />
            </div>
            <p className="mt-2 text-muted-foreground">Output: Namaskar, Odia!</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Available Commands</h2>
        <div className="mt-4 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Command</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><code>odia file.odia</code></TableCell>
                <TableCell>Run an OdiaLang file</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>odia compile file.odia</code></TableCell>
                <TableCell>Compile to JavaScript</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>odia tokens file.odia</code></TableCell>
                <TableCell>Show tokens (debug)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>odia ast file.odia</code></TableCell>
                <TableCell>Show AST (debug)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Try Online</h2>
        <p className="mt-2 text-muted-foreground">
          Don't want to install? Try OdiaLang in your browser:
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
              Learn OdiaLang step by step with our beginner-friendly tutorial.
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
              Complete reference for all OdiaLang keywords and syntax.
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