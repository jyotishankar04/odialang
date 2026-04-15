'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContributingPage() {
  const waysToContribute = [
    { title: "Code Contributions", description: "Help implement new features, fix bugs, or improve the compiler." },
    { title: "Documentation", description: "Improve tutorials, add examples, or fix typos in docs." },
    { title: "Examples", description: "Create new example programs to help others learn." },
    { title: "Feedback", description: "Report bugs, suggest features, or share your experience." },
  ];

  const steps = [
    { step: "1", title: "Fork the Repository", desc: "Click the 'Fork' button on GitHub to create your own copy." },
    { step: "2", title: "Clone Your Fork", code: "git clone https://github.com/YOUR_USERNAME/Odialang.git" },
    { step: "3", title: "Install Dependencies", code: "npm install" },
    { step: "4", title: "Create a Branch", code: "git checkout -b feature/your-feature-name" },
    { step: "5", title: "Make Changes", desc: "Implement your feature or fix the bug." },
    { step: "6", title: "Test Your Changes", code: "npm test" },
    { step: "7", title: "Commit and Push", code: "git add .\ngit commit -m \"Description\"\ngit push" },
    { step: "8", title: "Create a PR", desc: "Go to GitHub and create a pull request." },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold">Contributing</h1>
      <p className="mt-4 text-muted-foreground text-lg">
        Welcome to Odialang! We appreciate your interest in contributing.
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Ways to Contribute</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {waysToContribute.map((item, i) => (
            <Card key={i} className="p-4">
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Getting Started</h2>
        <div className="mt-4 space-y-4">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
                {s.step}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{s.title}</h3>
                {s.desc && <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>}
                {s.code && <pre className="mt-2 bg-muted rounded-lg p-3 font-mono text-sm">{s.code}</pre>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Code Style</h2>
        <Card className="mt-4 p-4">
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Use meaningful variable and function names</li>
            <li>Add comments for complex logic</li>
            <li>Keep functions small and focused</li>
            <li>Follow existing indentation style</li>
            <li>Use TypeScript for new code</li>
          </ul>
        </Card>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Project Structure</h2>
        <div className="mt-4 bg-muted rounded-lg p-4 font-mono text-sm">
          src/<br/>
          ├── lexer/ &nbsp;&nbsp;# Tokenizer<br/>
          ├── parser/ &nbsp;# Parser<br/>
          ├── codegen/ &nbsp;# Code generator<br/>
          └── cli/ &nbsp;&nbsp;&nbsp;# Command line interface
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Need Help?</h2>
        <Card className="mt-4 p-4">
          <p className="text-muted-foreground">Open an issue on GitHub or ask questions in discussions.</p>
          <div className="mt-4 flex gap-4">
            <a href="https://github.com/jyotishankar04/Odialang" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">GitHub Repository</Button>
            </a>
            <Link href="/docs/">
              <Button variant="outline">Read Docs</Button>
            </Link>
          </div>
        </Card>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Thank You!</h2>
        <Card className="mt-4 p-4">
          <p className="text-muted-foreground">Thank you for contributing to Odialang! Every contribution helps make this project better.</p>
        </Card>
      </section>
    </div>
  );
}