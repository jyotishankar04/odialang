'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CodeExample from "./components/CodeExample";
import { BookOpen, Code2, Languages, Sparkles, Terminal, Check, Copy } from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install -g @devsuvam/odialang');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        {/* Large Chaka Akhi Watermark Background - Centered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <svg 
            viewBox="0 0 100 100" 
            className="w-[600px] h-[600px] text-primary opacity-[0.04] animate-[chaka-rotate_180s_linear_infinite]"
            style={{ transform: 'rotate(0deg)' }}
          >
            {/* Outer ring */}
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            {/* Middle ring */}
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.3"/>
            {/* Eye-like segments (12) */}
            <g opacity="0.7">
              <ellipse cx="50" cy="12" rx="6" ry="11" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(30, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(60, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(90, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(120, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(150, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(180, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(210, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(240, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(270, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(300, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(330, 50, 50)"/>
            </g>
            {/* Inner rings */}
            <circle cx="50" cy="50" r="32" fill="none" stroke="currentColor" strokeWidth="0.3"/>
            <circle cx="50" cy="50" r="22" fill="none" stroke="currentColor" strokeWidth="0.3"/>
            <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="4" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" />
        
        {/* Wave accent with palm leaf style */}
        <div className="wave-accent" />
        
        {/* Floating orbs for depth */}
        <div className="orb-saffron -top-32 -right-32" />
        <div className="orb-indigo top-1/3 -left-40" />
        <div className="orb-terracotta top-2/3 right-1/4" />
        
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            {/* Enhanced Badge with Pattachitra border */}
            <div className="mb-8 inline-flex items-center gap-2">
              <div className="relative px-3 py-1">
                {/* Mini border pattern */}
                <div className="absolute inset-0 border border-primary/30 rounded-full" />
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-terracotta" />
                <Badge variant="outline" className="border-transparent text-primary bg-transparent">
                  <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  v2.1.0 is here!
                </Badge>
              </div>
              <Link href="/docs/changelog/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                What&#39;s new? →
              </Link>
            </div>

            {/* Main heading */}
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Write code in{" "}
              <span className="gradient-text">Odia</span>
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Compiles to JavaScript
            </p>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Odialang is a <a href="https://github.com/jyotishankar04/Odialang" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline underline-offset-2">toy language project</a> that uses Odia (Oriya) keywords. 
              Write programs in your native language and run them anywhere JavaScript runs.
            </p>

            {/* Install command */}
            <div className="mx-auto mt-10 max-w-lg">
              <div className="code-block glow-saffron">
                <div className="code-header">
                  <div className="dot dot-red" />
                  <div className="dot dot-yellow" />
                  <div className="dot dot-green" />
                  <span className="ml-2 text-xs text-muted-foreground">terminal</span>
                  
                  {/* Mini Chaka Akhi in header */}
                  <div className="ml-auto flex items-center gap-2 opacity-30">
                    <svg viewBox="0 0 50 50" className="w-6 h-6 text-primary" fill="none">
                      <circle cx="25" cy="25" r="23" stroke="currentColor" strokeWidth="1"/>
                      <circle cx="25" cy="25" r="18" stroke="currentColor" strokeWidth="0.5"/>
                      <ellipse cx="25" cy="8" rx="5" ry="9" fill="none" stroke="currentColor" strokeWidth="0.75"/>
                      <ellipse cx="25" cy="8" rx="5" ry="9" fill="none" stroke="currentColor" strokeWidth="0.75" transform="rotate(60, 25, 25)"/>
                      <ellipse cx="25" cy="8" rx="5" ry="9" fill="none" stroke="currentColor" strokeWidth="0.75" transform="rotate(120, 25, 25)"/>
                      <ellipse cx="25" cy="8" rx="5" ry="9" fill="none" stroke="currentColor" strokeWidth="0.75" transform="rotate(180, 25, 25)"/>
                      <ellipse cx="25" cy="8" rx="5" ry="9" fill="none" stroke="currentColor" strokeWidth="0.75" transform="rotate(240, 25, 25)"/>
                      <ellipse cx="25" cy="8" rx="5" ry="9" fill="none" stroke="currentColor" strokeWidth="0.75" transform="rotate(300, 25, 25)"/>
                      <circle cx="25" cy="25" r="5" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-card px-4 py-3">
                  <code className="font-mono text-sm text-foreground">
                    npm install -g @devsuvam/odialang
                  </code>
                  <button 
                    className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    onClick={handleCopy}
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/playground/">
                <Button size="lg">
                  Try Playground
                </Button>
              </Link>
              <Link href="/docs/">
                <Button size="lg" variant="outline">
                  Documentation
                </Button>
              </Link>
            </div>
          </div>

          {/* Code Example with enhanced patterns */}
          <div className="mt-20">
            <CodeExample />
          </div>
        </div>
      </section>

      {/* Pattachitra Divider with enhanced pattern */}
      <div className="divider-pattachitra" />

      {/* Features Section */}
      <section className="border-t border-transparent px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            {/* Lotus motif separator */}
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/30" />
              <svg viewBox="0 0 40 40" className="w-10 h-10 text-primary opacity-30">
                <ellipse cx="20" cy="25" rx="8" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/>
                <ellipse cx="20" cy="22" rx="6" ry="3" fill="none" stroke="currentColor" strokeWidth="0.75"/>
                <ellipse cx="20" cy="19" rx="4" ry="2" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="20" cy="17" r="1.5" fill="currentColor"/>
              </svg>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/30" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Odialang?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Programming should be accessible to everyone, in every language.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="hover:border-primary/30 transition-colors corner-ornament">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Pattern Divider with enhanced style */}
      <div className="relative h-20 overflow-hidden">
        <div className="absolute inset-0 pattern-lotus opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 400 30" className="w-full max-w-xl h-8 text-primary/20">
            <path 
              d="M0 15 Q50 5 100 15 T200 15 T300 15 T400 15" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            />
            <path 
              d="M0 20 Q50 12 100 20 T200 20 T300 20 T400 20" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Example Programs Preview */}
      <section className="border-t border-transparent px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Example Programs
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                From Hello World to complex algorithms
              </p>
            </div>
            <Link href="/examples/">
              <Button variant="outline">
                View all examples →
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {examplePreviews.map((example) => (
              <Link key={example.title} href={`/playground/?example=${example.id}`}>
                <Card className="hover:border-primary/30 transition-all cursor-pointer h-full corner-ornament">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-terracotta/10 text-terracotta border-terracotta/20">
                        {example.level}
                      </Badge>
                      {/* Fish scale pattern accent */}
                      <div className="w-6 h-6 pattern-fish-scale opacity-30" />
                    </div>
                    <CardTitle className="mt-4">{example.title}</CardTitle>
                    <CardDescription>{example.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pattachitra Divider */}
      <div className="divider-pattachitra" />

      {/* CTA Section */}
      <section className="border-t border-transparent px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background accent with pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 pattern-lotus opacity-10" />
        
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Large Chaka Akhi watermark */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-[0.04] pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-48 h-48 text-primary" fill="none">
              <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.75"/>
              <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.5"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" stroke="currentColor" strokeWidth="0.75"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" stroke="currentColor" strokeWidth="0.75" transform="rotate(30, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" stroke="currentColor" strokeWidth="0.75" transform="rotate(60, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" stroke="currentColor" strokeWidth="0.75" transform="rotate(90, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" stroke="currentColor" strokeWidth="0.75" transform="rotate(120, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" stroke="currentColor" strokeWidth="0.75" transform="rotate(150, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" stroke="currentColor" strokeWidth="0.75" transform="rotate(180, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" stroke="currentColor" strokeWidth="0.75" transform="rotate(210, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" stroke="currentColor" strokeWidth="0.75" transform="rotate(240, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" stroke="currentColor" strokeWidth="0.75" transform="rotate(270, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" stroke="currentColor" strokeWidth="0.75" transform="rotate(300, 50, 50)"/>
              <ellipse cx="50" cy="12" rx="6" ry="11" stroke="currentColor" strokeWidth="0.75" transform="rotate(330, 50, 50)"/>
              <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="1"/>
              <circle cx="50" cy="50" r="3" fill="currentColor"/>
            </svg>
          </div>
          
          {/* Palmette accent above heading */}
          <div className="mb-6 flex justify-center">
            <svg viewBox="0 0 60 30" className="w-16 h-8 text-primary/30">
              <path d="M30 30 Q15 15 5 5 Q20 12 30 0 Q40 12 55 5 Q45 15 30 30" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M30 25 Q20 15 12 10" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
              <path d="M30 25 Q40 15 48 10" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.5"/>
            </svg>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to start coding in Odia?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join the growing community of developers writing code in their native language.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/playground/">
              <Button size="lg">
                Launch Playground
              </Button>
            </Link>
            <a 
              href="https://github.com/jyotishankar04/odialang" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                Star on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "Native Language",
    description: "Write code using familiar Odia words like 'dhara' (let), 'dekha' (print), and 'karya' (function).",
    icon: <Languages className="h-6 w-6" />,
  },
  {
    title: "Compiles to JavaScript",
    description: "Your Odialang code compiles to clean JavaScript and runs anywhere Node.js runs.",
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    title: "Simple Syntax",
    description: "Clean, intuitive syntax that's easy to learn. No semicolons, no curly braces.",
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: "Full Features",
    description: "Variables, functions, conditionals, loops, arrays, and more — everything you need to build real programs.",
    icon: <Terminal className="h-6 w-6" />,
  },
  {
    title: "VSCode Extension",
    description: "Syntax highlighting and IntelliSense support for Visual Studio Code.",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: "Open Source",
    description: "Completely free and open source. Contribute on GitHub and help grow the community.",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  },
];

const examplePreviews = [
  {
    id: "01_hello",
    title: "Hello World",
    description: "Your first Odialang program — print messages using dekha",
    level: "Basics",
  },
  {
    id: "02_variables",
    title: "Variables",
    description: "Store and manipulate data with dhara declarations",
    level: "Basics",
  },
  {
    id: "01_functions",
    title: "Functions",
    description: "Define reusable code blocks with karya and fera",
    level: "Intermediate",
  },
  {
    id: "03_fibonacci",
    title: "Fibonacci Sequence",
    description: "Generate Fibonacci numbers iteratively",
    level: "Advanced",
  },
  {
    id: "06_bank_account",
    title: "Bank Account",
    description: "Simulate deposits, withdrawals, and transfers",
    level: "Advanced",
  },
  {
    id: "07_sorting",
    title: "Sorting Algorithms",
    description: "Sort numbers and check if sequences are sorted",
    level: "Advanced",
  },
];
