'use client';

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const versions = [
  {
    version: "1.0.0",
    date: "2026-04-15",
    type: "major",
    features: [
      "Initial release of Odialang",
      "Variable declaration (dhara)",
      "Print statement (dekha)",
      "Conditional statements (jadi, tahale, nahele, sesa)",
      "While loops (jebe)",
      "For loops (aarambha, ru)",
      "Function declarations (karya)",
      "Return statements (fera)",
      "Boolean literals (sata, micha)",
      "String, number, and boolean data types",
      "Arithmetic operators (+, -, *, /, %)",
      "Comparison operators (==, !=, >, <, >=, <=)",
      "Assignment operator (=)",
      "Single-line comments (#)",
    ],
    cli: [
      "odia <file.odia> - Run a file directly",
      "odia run <file.odia> - Run a file",
      "odia compile <file.odia> - Compile to JavaScript",
      "odia tokens <file.odia> - Display tokenized output",
      "odia ast <file.odia> - Display abstract syntax tree",
      "odia --help / odia -h - Show help",
    ],
  },
];

const comingSoon = [
  "Arrays and array methods",
  "Object/Class support",
  "More built-in functions",
  "Import/Export modules",
  "Error handling (try-catch)",
  "Better error messages",
];

export default function ChangelogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Changelog</h1>
      <p className="mt-4 text-muted-foreground text-lg">
        All notable changes to Odialang are documented here.
      </p>

      {versions.map((v) => (
        <Card key={v.version} className="mt-8 p-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold">Version {v.version}</h2>
            <Badge variant={v.type === "major" ? "default" : "secondary"}>
              {v.type}
            </Badge>
          </div>
          <p className="mt-2 text-muted-foreground">{v.date}</p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Language Features</h3>
            <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
              {v.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">CLI Commands</h3>
            <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1 font-mono text-sm">
              {v.cli.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </Card>
      ))}

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Coming Soon</h2>
        <Card className="mt-4 p-6">
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            {comingSoon.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Release History</h2>
        <Card className="mt-4 p-6">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <code className="text-pink-400">1.0.0</code>
              <span className="text-muted-foreground">2026-04-15</span>
              <span className="text-muted-foreground">Initial release</span>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}