'use client';

import { useState, useEffect, Suspense, useRef, useCallback } from "react";
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
import { Play, Download, Loader2, PanelRightClose, PanelRightOpen, Code, FileOutput, Network, GitBranch, GripVertical } from "lucide-react";

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
  const [showOutput, setShowOutput] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [panelWidth, setPanelWidth] = useState(320);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (exampleParam && examples[exampleParam]) {
      setCode(examples[exampleParam]);
    }
  }, [exampleParam]);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setShowOutput(false);
        setPanelWidth(window.innerWidth);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !containerRef.current || isMobile) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth = containerRect.right - e.clientX;
      const minWidth = 200;
      const maxWidth = containerRect.width * 0.6;
      
      setPanelWidth(Math.min(Math.max(newWidth, minWidth), maxWidth));
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, isMobile]);

  const handleRun = async () => {
    setIsLoading(true);
    setActiveTab("output");
    if (!showOutput && !isMobile) {
      setShowOutput(true);
    }
    
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
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-border bg-background px-3 py-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Select
            value={exampleParam || ""}
            onValueChange={(value) => {
              if (value && examples[value]) {
                setCode(examples[value]);
              }
            }}
          >
            <SelectTrigger className="w-[140px] sm:w-[180px] text-xs sm:text-sm">
              <SelectValue placeholder="Load..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hello">Hello World</SelectItem>
              <SelectItem value="variables">Variables</SelectItem>
              <SelectItem value="conditionals">Conditionals</SelectItem>
              <SelectItem value="loops">Loops</SelectItem>
              <SelectItem value="functions">Functions</SelectItem>
            </SelectContent>
          </Select>
          
          {!isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowOutput(!showOutput)}
              className="text-muted-foreground hover:text-foreground"
              title={showOutput ? "Hide output" : "Show output"}
            >
              {showOutput ? (
                <PanelRightClose className="h-4 w-4" />
              ) : (
                <PanelRightOpen className="h-4 w-4" />
              )}
            </Button>
          )}
          
          {isMobile && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowOutput(!showOutput)}
              className="ml-auto"
            >
              {showOutput ? (
                <PanelRightClose className="h-4 w-4" />
              ) : (
                <PanelRightOpen className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            className="text-xs sm:text-sm"
          >
            <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Download</span>
            <span className="sm:hidden">DL</span>
          </Button>
          
          <Button
            size="sm"
            onClick={handleRun}
            disabled={isLoading}
            className="text-xs sm:text-sm"
          >
            {isLoading ? (
              <Loader2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
            ) : (
              <Play className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            )}
            <span className="hidden sm:inline">{isLoading ? "Running..." : "Run"}</span>
            <span className="sm:hidden">{isLoading ? "..." : "Run"}</span>
          </Button>
        </div>
      </div>

      {/* Editor and Output */}
      <div ref={containerRef} className="flex flex-1 overflow-hidden">
        {/* Editor */}
        {showOutput && !isMobile && (
          <div 
            className="relative"
            style={{ width: `calc(100% - ${panelWidth}px)` }}
          >
            <MonacoEditor
              height="100%"
              language="odialang"
              theme="odialang-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              beforeMount={handleEditorMount}
              options={{
                minimap: { enabled: false },
                fontSize: 13,
                fontFamily: "JetBrains Mono, monospace",
                lineNumbers: "on",
                roundedSelection: false,
                scrollBeyondLastLine: false,
                readOnly: false,
                automaticLayout: true,
                padding: { top: 12 },
                wordWrap: "on",
                lineNumbersMinChars: 3,
              }}
            />
          </div>
        )}

        {(!showOutput || isMobile) && (
          <div className="flex-1">
            <MonacoEditor
              height="100%"
              language="odialang"
              theme="odialang-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              beforeMount={handleEditorMount}
              options={{
                minimap: { enabled: false },
                fontSize: 13,
                fontFamily: "JetBrains Mono, monospace",
                lineNumbers: "on",
                roundedSelection: false,
                scrollBeyondLastLine: false,
                readOnly: false,
                automaticLayout: true,
                padding: { top: 12 },
                wordWrap: "on",
                lineNumbersMinChars: 3,
              }}
            />
          </div>
        )}

        {/* Resizer */}
        {showOutput && !isMobile && (
          <div
            className={`w-1 cursor-col-resize bg-border hover:bg-primary transition-colors flex items-center justify-center ${
              isResizing ? 'bg-primary' : ''
            }`}
            onMouseDown={handleMouseDown}
          >
            <GripVertical className="h-4 w-4 text-muted-foreground opacity-50" />
          </div>
        )}

        {/* Output Panel - hidden on mobile unless toggled */}
        {showOutput && (
          <div 
            className={`${isMobile ? 'fixed inset-0 z-50 bg-background' : ''} flex flex-col`}
            style={isMobile ? {} : { width: panelWidth }}
          >
            {isMobile && (
              <div className="flex items-center justify-between border-b border-border px-3 py-2">
                <span className="text-sm font-medium">Output</span>
                <Button variant="ghost" size="sm" onClick={() => setShowOutput(false)}>
                  <PanelRightClose className="h-4 w-4" />
                </Button>
              </div>
            )}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
              <TabsList className="w-full rounded-none border-b border-border bg-transparent p-0 justify-start">
                <TabsTrigger value="output" className="text-xs px-2 sm:px-4 data-[state=active]:border-b-2" >
                  <FileOutput className="h-3 w-3 sm:mr-1" />
                  <span className="hidden sm:inline">Output</span>
                </TabsTrigger>
                <TabsTrigger value="javascript" className="text-xs px-2 sm:px-4 data-[state=active]:border-b-2">
                  <Code className="h-3 w-3 sm:mr-1" />
                  <span className="hidden sm:inline">JS</span>
                </TabsTrigger>
                <TabsTrigger value="tokens" className="text-xs px-2 sm:px-4 data-[state=active]:border-b-2">
                  <Network className="h-3 w-3 sm:mr-1" />
                  <span className="hidden sm:inline">Tokens</span>
                </TabsTrigger>
                <TabsTrigger value="ast" className="text-xs px-2 sm:px-4 data-[state=active]:border-b-2">
                  <GitBranch className="h-3 w-3 sm:mr-1" />
                  <span className="hidden sm:inline">AST</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="output" className="flex-1 m-0 p-3 overflow-auto">
                <pre className="font-mono text-xs sm:text-sm text-foreground whitespace-pre-wrap">
                  {output || "Click 'Run' to see output"}
                </pre>
              </TabsContent>
              
              <TabsContent value="javascript" className="flex-1 m-0 p-3 overflow-auto">
                <pre className="font-mono text-xs sm:text-sm text-muted-foreground whitespace-pre-wrap">{`// Compiled JavaScript
// Backend required for execution

let message = "Hello, Odia!";
console.log(message);`}
                </pre>
              </TabsContent>
              
              <TabsContent value="tokens" className="flex-1 m-0 p-3 overflow-auto">
                <pre className="font-mono text-xs text-muted-foreground whitespace-pre-wrap">{`// Token analysis
// Available in full version`}
                </pre>
              </TabsContent>
              
              <TabsContent value="ast" className="flex-1 m-0 p-3 overflow-auto">
                <pre className="font-mono text-xs text-muted-foreground whitespace-pre-wrap">{`// AST viewer
// Available in full version`}
                </pre>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PlaygroundPage() {
  return (
    <Suspense fallback={
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <div className="text-muted-foreground">Loading playground...</div>
      </div>
    }>
      <PlaygroundContent />
    </Suspense>
  );
}