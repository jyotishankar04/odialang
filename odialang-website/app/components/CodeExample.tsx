'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const codeExamples = [
  {
    id: "hello",
    label: "Hello World",
    code: `# Welcome to Odialang!
dhara name = "World"
dekha "Hello, " + name + "!"

dekha "Namaskar, Odia!"`,
  },
  {
    id: "variables",
    label: "Variables",
    code: `# Variables and data types
dhara name = "Rama"
dhara age = 25
dhara isHappy = sata

dekha "Name: " + name
dekha "Age: " + age`,
  },
  {
    id: "functions",
    label: "Functions",
    code: `# Function definition
karya greet(person)
  dekha "Namaskar, " + person + "!"
sesa

karya add(a, b)
  fera a + b
sesa

greet("Odia")
dekha "Sum: " + add(10, 20)`,
  },
  {
    id: "loops",
    label: "Loops",
    code: `# For loop example
aarambha i = 1 ru 5
  dekha "Number: " + i
sesa

# While loop
dhara count = 1
jebe count <= 3
  dekha "Count: " + count
  count = count + 1
sesa`,
  },
];

export default function CodeExample() {
  const [activeTab, setActiveTab] = useState("hello");
  const activeExample = codeExamples.find((ex) => ex.id === activeTab);

  const highlightLine = (line: string) => {
    const keywords = ["dhara", "dekha", "jadi", "tahale", "nahele", "jebe", "karya", "fera", "sesa", "aarambha", "ru", "kar"];
    
    if (line.startsWith("#")) {
      return <span className="text-muted-foreground">{line}</span>;
    }
    
    return line.split(" ").map((word, j) => {
      if (keywords.includes(word)) {
        return <span key={j} className="text-primary">{word} </span>;
      }
      if (word === "sata" || word === "micha") {
        return <span key={j} className="text-blue-400">{word} </span>;
      }
      if (!isNaN(Number(word))) {
        return <span key={j} className="text-blue-400">{word} </span>;
      }
      if (word.startsWith('"') && word.endsWith('"')) {
        return <span key={j} className="text-green-400">{word} </span>;
      }
      return <span key={j}>{word} </span>;
    });
  };

  return (
    <div className="mx-auto max-w-4xl px-4">
      {/* Tabs */}
      <div className="mb-4 flex flex-wrap gap-2">
        {codeExamples.map((example) => (
          <button
            key={example.id}
            onClick={() => setActiveTab(example.id)}
            className={`rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-all ${
              activeTab === example.id
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            }`}
          >
            {example.label}
          </button>
        ))}
      </div>

      {/* Code block */}
      <div className="code-block glow overflow-hidden">
        <div className="code-header">
          <div className="dot dot-red" />
          <div className="dot dot-yellow" />
          <div className="dot dot-green" />
          <span className="ml-2 text-xs text-muted-foreground">example.odia</span>
        </div>
        <div className="relative bg-card">
          <pre className="overflow-x-auto p-4 sm:p-6 text-xs sm:text-sm">
            <code className="font-mono text-foreground">
              {activeExample?.code.split("\n").map((line, i) => (
                <div key={i} className="flex">
                  <span className="select-none pr-3 sm:pr-4 text-muted-foreground/50 text-right w-6 sm:w-8 flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="flex-1 whitespace-pre">{highlightLine(line)}</span>
                </div>
              ))}
            </code>
          </pre>
          <div className="absolute right-2 sm:right-4 top-2 sm:top-4">
            <Link href={`/playground/?example=${activeTab}`}>
              <Button size="sm" className="text-xs">
                <svg className="mr-1.5 h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="hidden sm:inline">Run</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}