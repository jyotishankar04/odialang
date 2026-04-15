import Link from "next/link";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface Example {
  id: string;
  title: string;
  level: string;
  description: string;
  code: string;
}

function getExamples(): Example[] {
  const examplesDir = join(process.cwd(), "content/examples");
  const examples: Example[] = [];

  const levels = ["basics", "intermediate", "advanced"];
  
  for (const level of levels) {
    const levelDir = join(examplesDir, level);
    try {
      const files = readdirSync(levelDir).filter(f => f.endsWith(".odia"));
      
      for (const file of files) {
        const content = readFileSync(join(levelDir, file), "utf-8");
        const firstLine = content.split("\n")[0];
        const description = firstLine.startsWith("#") 
          ? firstLine.slice(1).trim() 
          : `${level} example`;
        
        examples.push({
          id: file.replace(".odia", ""),
          title: file.replace(".odia", "").replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
          level: level.charAt(0).toUpperCase() + level.slice(1),
          description,
          code: content,
        });
      }
    } catch (e) {
      // Directory might not exist
    }
  }

  return examples;
}

export default function ExamplesPage() {
  const examples = getExamples();

  const groupedExamples = {
    Basics: examples.filter(e => e.level === "Basics"),
    Intermediate: examples.filter(e => e.level === "Intermediate"),
    Advanced: examples.filter(e => e.level === "Advanced"),
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Basics":
        return "bg-green-500/10 text-green-400 border-green-500/20";
      case "Intermediate":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Advanced":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-pink-500/10 text-pink-400 border-pink-500/20";
    }
  };

  return (
    <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Example Programs
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Learn Odialang through hands-on examples. From Hello World to complex algorithms.
          </p>
        </div>

        {/* Examples by level */}
        <div className="space-y-16">
          {Object.entries(groupedExamples).map(([level, levelExamples]) => (
            levelExamples.length > 0 && (
              <section key={level}>
                <h2 className="mb-6 text-2xl font-bold text-white">{level}</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {levelExamples.map((example) => (
                    <Link key={example.id} href={`/playground/?example=${example.id}`}>
                      <Card className="bg-white/5 border-white/10 hover:border-pink-500/30 transition-all cursor-pointer h-full group">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className={getLevelColor(example.level)}>
                              {example.level}
                            </Badge>
                            <ArrowRight className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-pink-400" />
                          </div>
                          <CardTitle className="text-white mt-4 text-lg">{example.title}</CardTitle>
                          <p className="text-sm text-zinc-400 line-clamp-2">{example.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="overflow-hidden rounded-lg bg-[#0d1117] p-3 border border-white/5">
                            <pre className="font-mono text-xs text-zinc-500 line-clamp-4">
                              {example.code}
                            </pre>
                          </div>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-sm text-pink-400 flex items-center">
                              <Play className="mr-1 h-4 w-4" />
                              Open in Playground
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )
          ))}
        </div>

        {/* Empty state */}
        {examples.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-500">No examples found. Make sure the examples directory exists.</p>
            <Link href="/playground/">
              <Button className="mt-4">Go to Playground</Button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
