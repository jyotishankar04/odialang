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
        return "bg-primary/10 text-primary border-primary/20";
      case "Intermediate":
        return "bg-terracotta/10 text-terracotta border-terracotta/20";
      case "Advanced":
        return "bg-accent/10 text-accent border-accent/20";
      default:
        return "bg-primary/10 text-primary border-primary/20";
    }
  };

  return (
    <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Example Programs
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn Odialang through hands-on examples. From Hello World to complex algorithms.
          </p>
        </div>

        {/* Examples by level */}
        <div className="space-y-16">
          {Object.entries(groupedExamples).map(([level, levelExamples]) => (
            levelExamples.length > 0 && (
              <section key={level}>
                {/* Level header with decorative element */}
                <div className="mb-6 flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-foreground">{level}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {levelExamples.map((example) => (
                    <Link key={example.id} href={`/playground/?example=${example.id}`}>
                      <Card className="hover:border-primary/30 transition-all cursor-pointer h-full group corner-ornament">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className={getLevelColor(example.level)}>
                              {example.level}
                            </Badge>
                            <ArrowRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                          </div>
                          <CardTitle className="text-foreground mt-4 text-lg">{example.title}</CardTitle>
                          <p className="text-sm text-muted-foreground line-clamp-2">{example.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="overflow-hidden rounded-lg bg-card p-3 border border-border">
                            <pre className="font-mono text-xs text-muted-foreground line-clamp-4">
                              {example.code}
                            </pre>
                          </div>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-sm text-primary flex items-center">
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
            <p className="text-muted-foreground">No examples found. Make sure the examples directory exists.</p>
            <Link href="/playground/">
              <Button className="mt-4">Go to Playground</Button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
