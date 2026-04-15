'use client';

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Play, Download, Loader2 } from "lucide-react";

// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

const defaultCode = `# Welcome to Odialang Playground!
# Write your code here and see it compile to JavaScript

dhara message = "Hello, Odia!"
dekha message

# Try editing this code...`;

const examples: Record<string, string> = {
  hello: `# Hello World
dekha "Namaskar, Odia!"
dekha "Welcome to Odialang!"`,
  
  variables: `# Variables
dhara name = "Rama"
dhara age = 25
dhara isHappy = sata

dekha "Name: " + name
dekha "Age: " + age`,
  
  conditionals: `# Conditionals
dhara marks = 85

jadi marks >= 60 tahale
  dekha "You passed!"
nahele
  dekha "You failed"
sesa`,
  
  loops: `# Loops
# While loop
dhara count = 1
jebe count <= 5
  dekha "Count: " + count
  count = count + 1
sesa

# For loop
aarambha i = 1 ru 3
  dekha "Number: " + i
sesa`,
  
  functions: `# Functions
karya greet(name)
  dekha "Namaskar, " + name + "!"
sesa

karya add(a, b)
  fera a + b
sesa

greet("Odia")
dekha "Sum: " + add(10, 20)`,
};

function PlaygroundContent() {
  const searchParams = useSearchParams();
  const exampleParam = searchParams.get("example");
  
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState("");
  const [activeTab, setActiveTab] = useState("output");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (exampleParam && examples[exampleParam]) {
      setCode(examples[exampleParam]);
    }
  }, [exampleParam]);

  const handleRun = async () => {
    setIsLoading(true);
    setActiveTab("output");
    
    // Simulate compilation/execution
    setTimeout(() => {
      setOutput(`Namaskar, Odia!
Welcome to Odialang!

[Note: Full execution requires Node.js backend]
This playground shows the compiled JavaScript.`);
      setIsLoading(false);
    }, 500);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "program.odia";
    a.click();
  };

  const handleEditorMount = (monaco: any) => {
    // Register Odialang language
    monaco.languages.register({ id: "odialang", extensions: [".odia"] });
    
    monaco.languages.setMonarchTokensProvider("odialang", {
      tokenizer: {
        root: [
          [/#.*$/, "comment"],
          [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],
          [/\b(dhara|dekha|jadi|tahale|nahele|jebe|karya|fera|sesa|aarambha|ru|kar)\b/, "keyword"],
          [/\b(sata|micha)\b/, "keyword.constant"],
          [/\b[0-9]+\b/, "number"],
          [/([a-zA-Z_][a-zA-Z0-9_]*)(?=\()/, "identifier.function"],
          [/==|!=|<=|>=/, "operator.comparison"],
          [/[+\-*/]/, "operator.arithmetic"],
          [/=/, "operator.assignment"],
          [/[a-zA-Z_][a-zA-Z0-9_]*/, "identifier"],
          [/\s+/, "white"],
        ],
        string: [
          [/[^\\"]+/, "string"],
          [/\\./, "string.escape"],
          [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }],
        ],
      },
    });

    monaco.editor.defineTheme("odialang-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "keyword", foreground: "FF7B72", fontStyle: "bold" },
        { token: "keyword.constant", foreground: "79C0FF" },
        { token: "identifier.function", foreground: "D2A8FF" },
        { token: "identifier", foreground: "E6EDF3" },
        { token: "string", foreground: "A5D6FF" },
        { token: "string.escape", foreground: "79C0FF" },
        { token: "number", foreground: "79C0FF" },
        { token: "comment", foreground: "8B949E", fontStyle: "italic" },
      ],
      colors: {
        "editor.background": "#0d1117",
        "editor.foreground": "#E6EDF3",
        "editor.lineHighlightBackground": "#161b22",
        "editor.selectionBackground": "#264F78",
      },
    });
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#0a0a0a] px-4 py-3">
        <div className="flex items-center gap-4">
          <Select
            value={exampleParam || ""}
            onValueChange={(value) => {
              if (value && examples[value]) {
                setCode(examples[value]);
              }
            }}
          >
            <SelectTrigger className="w-[180px] bg-white/5 border-white/10 text-zinc-300">
              <SelectValue placeholder="Load example..." />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-white/10">
              <SelectItem value="hello">Hello World</SelectItem>
              <SelectItem value="variables">Variables</SelectItem>
              <SelectItem value="conditionals">Conditionals</SelectItem>
              <SelectItem value="loops">Loops</SelectItem>
              <SelectItem value="functions">Functions</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            className="border-white/10 bg-white/5 hover:bg-white/10"
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          
          <Button
            size="sm"
            onClick={handleRun}
            disabled={isLoading}
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Play className="mr-2 h-4 w-4" />
            )}
            {isLoading ? "Running..." : "Run"}
          </Button>
        </div>
      </div>

      {/* Editor and Output */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor */}
        <div className="flex-1 border-r border-white/10">
          <MonacoEditor
            height="100%"
            language="odialang"
            theme="odialang-dark"
            value={code}
            onChange={(value) => setCode(value || "")}
            beforeMount={handleEditorMount}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: "JetBrains Mono, monospace",
              lineNumbers: "on",
              roundedSelection: false,
              scrollBeyondLastLine: false,
              readOnly: false,
              automaticLayout: true,
              padding: { top: 16 },
            }}
          />
        </div>

        {/* Output Panel */}
        <div className="flex w-96 flex-col bg-[#0d1117]">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full rounded-none border-b border-white/10 bg-transparent p-0">
              {["output", "javascript", "tokens", "ast"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-pink-500 data-[state=active]:bg-transparent data-[state=active]:text-white text-zinc-500 text-xs"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="output" className="m-0 p-4">
              <pre className="font-mono text-sm text-zinc-300">
                {output || "Click 'Run' to see output"}
              </pre>
            </TabsContent>
            
            <TabsContent value="javascript" className="m-0 p-4">
              <pre className="font-mono text-sm text-zinc-400">
                {`// Compiled JavaScript will appear here
// This feature requires the compiler backend

// Example output:
let message = "Hello, Odia!";
console.log(message);`}
              </pre>
            </TabsContent>
            
            <TabsContent value="tokens" className="m-0 p-4">
              <pre className="font-mono text-xs text-zinc-500">
                {`Tokens will be displayed here
showing the lexical analysis`}
              </pre>
            </TabsContent>
            
            <TabsContent value="ast" className="m-0 p-4">
              <pre className="font-mono text-xs text-zinc-500">
                {`Abstract Syntax Tree will be
displayed here`}
              </pre>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default function PlaygroundPage() {
  return (
    <Suspense fallback={
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <div className="text-zinc-500">Loading playground...</div>
      </div>
    }>
      <PlaygroundContent />
    </Suspense>
  );
}
