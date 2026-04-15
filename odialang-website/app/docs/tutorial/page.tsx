'use client';

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/ui/CodeBlock";

export default function TutorialPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Tutorial</h1>
      <p className="mt-4 text-muted-foreground text-lg">
        Learn Odialang from scratch - A complete guide for beginners
      </p>

      {/* Getting Started */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Getting Started</h2>
        <Card className="mt-4">
          <div className="p-4">
            <h3 className="text-lg font-medium">What is Programming?</h3>
            <p className="mt-2 text-muted-foreground">
              Programming is like giving instructions to a computer. Just like you might tell someone how to make tea step-by-step, you write instructions for the computer to follow.
            </p>
            <h3 className="mt-4 text-lg font-medium">Why Odialang?</h3>
            <p className="mt-2 text-muted-foreground">
              Odialang uses Odia words you already know, making programming feel familiar and natural.
            </p>
          </div>
        </Card>
      </section>

      {/* Your First Program */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Your First Program</h2>
        <Card className="mt-4">
          <div className="p-4 space-y-4">
            <div>
              <h3 className="text-lg font-medium">Hello World</h3>
              <p className="mt-2 text-muted-foreground">Create a file named <code className="bg-muted px-2 py-1 rounded text-sm">hello.odia</code>:</p>
              <div className="mt-2">
                <CodeBlock 
                  code={`# My first program
dekha "Hello, World!"
dekha "Namaskar, Odia!"`} 
                  language="odia"
                />
              </div>
            </div>
            <div>
              <p className="text-muted-foreground">Run it:</p>
              <div className="mt-2">
                <CodeBlock code="odia hello.odia" language="bash" />
              </div>
            </div>
            <div>
              <p className="font-medium">Output:</p>
              <div className="mt-2 text-muted-foreground">
                Hello, World!<br/>
                Namaskar, Odia!
              </div>
            </div>
            <div>
              <p className="font-medium">Understanding the code:</p>
              <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-1">
                <li><code>#</code> starts a comment</li>
                <li><code>dekha</code> means "show" or "print"</li>
                <li>Text in quotes <code>"..."</code> is a string</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Variables */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Variables & Data Types</h2>
        <Card className="mt-4">
          <div className="p-4 space-y-4">
            <div>
              <h3 className="text-lg font-medium">Creating Variables</h3>
              <p className="mt-2 text-muted-foreground">Use <code>dhara</code> to create a variable:</p>
              <div className="mt-2">
                <CodeBlock 
                  code={`dhara name = "Rama"
dekha name

dhara age = 25
dekha age`} 
                  language="odia"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium">Data Types</h3>
              <ul className="mt-2 list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Strings:</strong> <code>dhara message = "Hello!"</code></li>
                <li><strong>Numbers:</strong> <code>dhara year = 2026</code></li>
                <li><strong>Booleans:</strong> <code>dhara isSunny = sata</code> (true) or <code>dhara isRaining = micha</code> (false)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">Changing Values</h3>
              <CodeBlock 
                code={`dhara score = 0
score = 10
score = score + 5`}
                language="odia"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* Operators */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Operators</h2>
        <Card className="mt-4">
          <div className="p-4 space-y-4">
            <div>
              <h3 className="text-lg font-medium">Arithmetic Operators</h3>
              <div className="mt-2">
                <CodeBlock 
                  code={`dhara a = 10
dhara b = 3

dekha "Addition: " + (a + b)        # 13
dekha "Subtraction: " + (a - b)      # 7
dekha "Multiplication: " + (a * b)   # 30
dekha "Division: " + (a / b)         # 3
dekha "Modulo: " + (a % b)           # 1`}
                  language="odia"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium">Comparison Operators</h3>
              <div className="mt-2">
                <CodeBlock 
                  code={`dhara x = 10
dhara y = 5

dekha "x > y: " + (x > y)       # true
dekha "x == y: " + (x == y)     # false
dekha "x != y: " + (x != y)     # true`}
                  language="odia"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium">String Concatenation</h3>
              <div className="mt-2">
                <CodeBlock 
                  code={`dhara firstName = "Rama"
dhara lastName = "Das"
dhara fullName = firstName + " " + lastName
dekha fullName  # "Rama Das"`}
                  language="odia"
                />
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Conditionals */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Making Decisions</h2>
        <Card className="mt-4">
          <div className="p-4 space-y-4">
            <div>
              <h3 className="text-lg font-medium">If Statement</h3>
              <div className="mt-2">
                <CodeBlock 
                  code={`dhara age = 18

jadi age >= 18 tahale
  dekha "You are an adult"
sesa`}
                  language="odia"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium">If-Else Statement</h3>
              <div className="mt-2">
                <CodeBlock 
                  code={`dhara marks = 75

jadi marks >= 60 tahale
  dekha "You passed!"
nahele
  dekha "You need to study more"
sesa`}
                  language="odia"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium">Multiple Conditions</h3>
              <div className="mt-2">
                <CodeBlock 
                  code={`dhara score = 85

jadi score >= 90 tahale
  dekha "Grade: A"
sesa

jadi score >= 80 tahale
  dekha "Grade: B"
sesa

jadi score >= 70 tahale
  dekha "Grade: C"
nahele
  dekha "Grade: F"
sesa`}
                  language="odia"
                />
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Loops */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Loops</h2>
        <Card className="mt-4">
          <div className="p-4 space-y-4">
            <div>
              <h3 className="text-lg font-medium">While Loop</h3>
              <div className="mt-2">
                <CodeBlock 
                  code={`dhara count = 1

jebe count <= 5
  dekha "Count: " + count
  count = count + 1
sesa`}
                  language="odia"
                />
              </div>
              <p className="mt-2 text-muted-foreground">Output: Count: 1, 2, 3, 4, 5</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">For Loop</h3>
              <div className="mt-2">
                <CodeBlock 
                  code={`aarambha i = 1 ru 5
  dekha "Number: " + i
sesa`}
                  language="odia"
                />
              </div>
              <p className="mt-2 text-muted-foreground">Output: Number: 1, 2, 3, 4, 5</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Functions */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Functions</h2>
        <Card className="mt-4">
          <div className="p-4 space-y-4">
            <div>
              <h3 className="text-lg font-medium">Creating a Function</h3>
              <div className="mt-2">
                <CodeBlock 
                  code={`karya greet()
  dekha "Hello!"
sesa

greet()`}
                  language="odia"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium">Function with Parameters</h3>
              <div className="mt-2">
                <CodeBlock 
                  code={`karya greetPerson(name)
  dekha "Namaskar, " + name + "!"
sesa

greetPerson("Rama")
greetPerson("Sita")`}
                  language="odia"
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium">Function with Return</h3>
              <div className="mt-2">
                <CodeBlock 
                  code={`karya add(a, b)
  fera a + b
sesa

dhara result = add(5, 3)
dekha "5 + 3 = " + result

dekha "10 + 20 = " + add(10, 20)`}
                  language="odia"
                />
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Quick Reference */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Quick Reference</h2>
        <Card className="mt-4">
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><code className="text-pink-400">dhara name = value</code><p className="text-muted-foreground">Variable</p></div>
              <div><code className="text-pink-400">dekha "message"</code><p className="text-muted-foreground">Print</p></div>
              <div><code className="text-pink-400">jadi ... tahale ... sesa</code><p className="text-muted-foreground">If</p></div>
              <div><code className="text-pink-400">jebe ... sesa</code><p className="text-muted-foreground">While</p></div>
              <div><code className="text-pink-400">aarambha i = 1 ru 10 ... sesa</code><p className="text-muted-foreground">For</p></div>
              <div><code className="text-pink-400">karya name(params) ... sesa</code><p className="text-muted-foreground">Function</p></div>
              <div><code className="text-pink-400">fera value</code><p className="text-muted-foreground">Return</p></div>
              <div><code className="text-pink-400">sata / micha</code><p className="text-muted-foreground">True / False</p></div>
            </div>
          </div>
        </Card>
      </section>

      {/* Navigation */}
      <div className="mt-8 flex gap-4">
        <Link href="/docs/language/">
          <Button variant="outline">Language Reference</Button>
        </Link>
        <Link href="/playground/">
          <Button>Try in Playground</Button>
        </Link>
      </div>
    </div>
  );
}