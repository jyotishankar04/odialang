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
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Documentation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about Odialang
          </p>
        </div>

        {/* Quick links */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {docLinks.map((doc) => (
            <Link key={doc.slug} href={`/docs/${doc.slug}/`}>
              <Card className="hover:border-primary/30 transition-all cursor-pointer h-full group corner-ornament">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {doc.icon}
                    </div>
                    <CardTitle className="text-foreground text-lg">{doc.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{doc.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors">
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
          {/* Section divider */}
          <div className="mb-6 flex items-center gap-4">
            <h2 className="text-2xl font-bold text-foreground">Getting Started</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          
          <Card className="border-pattachitra">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground">Installation</h3>
              <p className="mt-4 text-muted-foreground">
                Install Odialang globally using npm:
              </p>
              <div className="mt-4 code-block">
                <div className="code-header">
                  <div className="dot dot-red" />
                  <div className="dot dot-yellow" />
                  <div className="dot dot-green" />
                  <span className="ml-2 text-xs text-muted-foreground">terminal</span>
                </div>
                <div className="bg-card px-4 py-3">
                  <code className="font-mono text-sm text-foreground">
                    npm install -g @devsuvam/odialang
                  </code>
                </div>
              </div>

              <h3 className="mt-8 text-xl font-semibold text-foreground">Your First Program</h3>
              <p className="mt-4 text-muted-foreground">
                Create a file named <code className="rounded bg-muted px-1.5 py-0.5 text-primary font-mono">hello.odia</code>:
              </p>
              <div className="mt-4 code-block">
                <div className="code-header">
                  <div className="dot dot-red" />
                  <div className="dot dot-yellow" />
                  <div className="dot dot-green" />
                  <span className="ml-2 text-xs text-muted-foreground">hello.odia</span>
                </div>
                <pre className="overflow-x-auto bg-card p-4 text-sm">
                  <code className="font-mono text-foreground">
                    {`# My first Odialang program
dekha "Namaskar, Odia!"`}
                  </code>
                </pre>
              </div>

              <p className="mt-6 text-muted-foreground">
                Run it with:
              </p>
              <div className="mt-4 code-block">
                <div className="code-header">
                  <div className="dot dot-red" />
                  <div className="dot dot-yellow" />
                  <div className="dot dot-green" />
                  <span className="ml-2 text-xs text-muted-foreground">terminal</span>
                </div>
                <div className="bg-card px-4 py-3">
                  <code className="font-mono text-sm text-foreground">
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
          {/* Section divider */}
          <div className="mb-6 flex items-center gap-4">
            <h2 className="text-2xl font-bold text-foreground">Language Keywords</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
          
          <Card className="border-pattachitra overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-foreground font-semibold">Odia</TableHead>
                  <TableHead className="text-foreground font-semibold">English</TableHead>
                  <TableHead className="text-foreground font-semibold">Usage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {keywords.map((kw) => (
                  <TableRow key={kw.odia} className="hover:bg-muted/50">
                    <TableCell className="font-mono text-primary">{kw.odia}</TableCell>
                    <TableCell className="text-foreground">{kw.english}</TableCell>
                    <TableCell className="text-muted-foreground">{kw.usage}</TableCell>
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
