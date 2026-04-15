'use client';

import { useState } from "react";

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

  return (
    <div className="mx-auto max-w-4xl">
      {/* Tabs */}
      <div className="mb-4 flex flex-wrap gap-2">
        {codeExamples.map((example) => (
          <button
            key={example.id}
            onClick={() => setActiveTab(example.id)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              activeTab === example.id
                ? "bg-pink-500 text-white"
                : "bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
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
          <span className="ml-2 text-xs text-zinc-500">example.odia</span>
        </div>
        <div className="relative bg-[#0d1117]">
          <pre className="overflow-x-auto p-6 text-sm">
            <code className="font-mono text-zinc-300">
              {activeExample?.code.split("\n").map((line, i) => (
                <div key={i} className="table-row">
                  <span className="table-cell select-none pr-4 text-right text-zinc-600">
                    {i + 1}
                  </span>
                  <span className="table-cell">
                    {line.startsWith("#") ? (
                      <span className="text-zinc-500">{line}</span>
                    ) : (
                      line.split(" ").map((word, j) => {
                        // Simple syntax highlighting
                        const keywords = ["dhara", "dekha", "jadi", "tahale", "nahele", "jebe", "karya", "fera", "sesa", "aarambha", "ru", "kar"];
                        const strings = line.match(/"[^"]*"/g) || [];
                        
                        if (keywords.includes(word)) {
                          return <span key={j} className="text-pink-400">{word} </span>;
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
                      })
                    )}
                  </span>
                </div>
              ))}
            </code>
          </pre>
          <div className="absolute right-4 top-4">
            <a
              href={`/playground/?example=${activeTab}`}
              className="inline-flex items-center gap-2 rounded-lg bg-pink-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-pink-600"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Run in Playground
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
