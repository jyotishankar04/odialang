import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, BookOpen, FileCode, GitBranch, History } from "lucide-react";

export default function DocsPage() {
  const docLinks = [
    { 
      slug: "tutorial", 
      title: "Tutorial", 
      description: "Step-by-step guide for beginners",
      icon: <BookOpen className="h-5 w-5" />
    },
    { 
      slug: "language", 
      title: "Language Reference", 
      description: "Complete syntax and grammar reference",
      icon: <FileCode className="h-5 w-5" />
    },
    { 
      slug: "contributing", 
      title: "Contributing", 
      description: "How to contribute to Odialang",
      icon: <GitBranch className="h-5 w-5" />
    },
    { 
      slug: "changelog", 
      title: "Changelog", 
      description: "Version history and updates",
      icon: <History className="h-5 w-5" />
    },
  ];

  return (
    <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Documentation
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Everything you need to know about Odialang
          </p>
        </div>

        {/* Quick links */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {docLinks.map((doc) => (
            <Link key={doc.slug} href={`/docs/${doc.slug}/`}>
              <Card className="bg-white/5 border-white/10 hover:border-pink-500/30 transition-all cursor-pointer h-full group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                      {doc.icon}
                    </div>
                    <CardTitle className="text-white text-lg">{doc.title}</CardTitle>
                  </div>
                  <p className="text-sm text-zinc-400 mt-2">{doc.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-zinc-500 group-hover:text-pink-400">
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Getting Started Section */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Getting Started</h2>
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white">Installation</h3>
              <p className="mt-4 text-zinc-400">
                Install Odialang globally using npm:
              </p>
              <div className="mt-4 code-block">
                <div className="bg-[#0d1117] px-4 py-3">
                  <code className="font-mono text-sm text-zinc-300">
                    npm install -g @devsuvam/odialang
                  </code>
                </div>
              </div>

              <h3 className="mt-8 text-xl font-semibold text-white">Your First Program</h3>
              <p className="mt-4 text-zinc-400">
                Create a file named <code className="rounded bg-white/10 px-1.5 py-0.5 text-pink-400">hello.odia</code>:
              </p>
              <div className="mt-4 code-block">
                <div className="code-header">
                  <div className="dot dot-red" />
                  <div className="dot dot-yellow" />
                  <div className="dot dot-green" />
                  <span className="ml-2 text-xs text-zinc-500">hello.odia</span>
                </div>
                <pre className="overflow-x-auto bg-[#0d1117] p-4 text-sm">
                  <code className="font-mono text-zinc-300">
                    {`# My first Odialang program
dekha "Namaskar, Odia!"`}
                  </code>
                </pre>
              </div>

              <p className="mt-6 text-zinc-400">
                Run it with:
              </p>
              <div className="mt-4 code-block">
                <div className="bg-[#0d1117] px-4 py-3">
                  <code className="font-mono text-sm text-zinc-300">
                    odia hello.odia
                  </code>
                </div>
              </div>
              
              <div className="mt-6">
                <Link href="/playground/">
                  <Button>Try in Playground</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Keywords Section */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Language Keywords</h2>
          <Card className="bg-white/5 border-white/10 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableHead className="text-white">Odia</TableHead>
                  <TableHead className="text-white">English</TableHead>
                  <TableHead className="text-white">Usage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {keywords.map((kw) => (
                  <TableRow key={kw.odia} className="border-white/10 hover:bg-white/[0.02]">
                    <TableCell className="font-mono text-pink-400">{kw.odia}</TableCell>
                    <TableCell className="text-zinc-400">{kw.english}</TableCell>
                    <TableCell className="text-zinc-500">{kw.usage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </section>
      </div>
    </main>
  );
}

const keywords = [
  { odia: "dhara", english: "let", usage: "Variable declaration" },
  { odia: "dekha", english: "print", usage: "Output to console" },
  { odia: "jadi", english: "if", usage: "Conditional statement" },
  { odia: "tahale", english: "then", usage: "If-block start" },
  { odia: "nahele", english: "else", usage: "Else block" },
  { odia: "jebe", english: "while", usage: "While loop" },
  { odia: "aarambha", english: "for", usage: "For loop start" },
  { odia: "ru", english: "from/to", usage: "Range in for loop" },
  { odia: "karya", english: "function", usage: "Function definition" },
  { odia: "fera", english: "return", usage: "Return value" },
  { odia: "sesa", english: "end", usage: "Block terminator" },
  { odia: "sata", english: "true", usage: "Boolean true" },
  { odia: "micha", english: "false", usage: "Boolean false" },
];
