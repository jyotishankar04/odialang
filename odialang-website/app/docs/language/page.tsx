'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import CodeBlock from "@/components/ui/CodeBlock";

const keywords = [
  { odia: "dhara", english: "let", usage: "Variable declaration", example: 'dhara name = "Rama"' },
  { odia: "dekha", english: "print", usage: "Output to console", example: 'dekha "Hello!"' },
  { odia: "jadi", english: "if", usage: "Conditional statement", example: 'jadi x > 0 tahale' },
  { odia: "tahale", english: "then", usage: "If-block start", example: 'jadi x > 0 tahale' },
  { odia: "nahele", english: "else", usage: "Else block", example: 'nahele' },
  { odia: "sesa", english: "end", usage: "Block terminator", example: 'sesa' },
  { odia: "jebe", english: "while", usage: "While loop", example: 'jebe x > 0' },
  { odia: "aarambha", english: "for", usage: "For loop start", example: 'aarambha i = 1 ru 10' },
  { odia: "ru", english: "to", usage: "Range in for loop", example: 'aarambha i = 1 ru 10' },
  { odia: "karya", english: "function", usage: "Function definition", example: 'karya add(a, b)' },
  { odia: "fera", english: "return", usage: "Return value", example: 'fera a + b' },
  { odia: "sata", english: "true", usage: "Boolean true", example: 'dhara isTrue = sata' },
  { odia: "micha", english: "false", usage: "Boolean false", example: 'dhara isFalse = micha' },
  { odia: "ruha", english: "break", usage: "Break out of loop", example: 'ruha' },
  { odia: "chala", english: "continue", usage: "Skip to next iteration", example: 'chala' },
];

export default function LanguageReferencePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Language Reference</h1>
      <p className="mt-4 text-muted-foreground text-lg">
        Complete syntax and grammar reference for Odialang
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Keywords</h2>
        <div className="mt-4 border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="text-foreground">Odia</TableHead>
                <TableHead className="text-foreground">English</TableHead>
                <TableHead className="text-foreground">Usage</TableHead>
                <TableHead className="text-foreground">Example</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {keywords.map((kw) => (
                <TableRow key={kw.odia}>
                  <TableCell className="font-mono text-pink-400">{kw.odia}</TableCell>
                  <TableCell className="text-muted-foreground">{kw.english}</TableCell>
                  <TableCell className="text-muted-foreground">{kw.usage}</TableCell>
                  <TableCell className="font-mono text-muted-foreground text-xs">{kw.example}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Variables</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-medium">Declaration</h3>
            <div className="mt-2">
              <CodeBlock 
                code={`dhara name = "Rama"
dhara age = 25
dhara isStudent = sata`}
                language="odia"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Assignment</h3>
            <div className="mt-2">
              <CodeBlock 
                code={`dhara count = 0
count = 10
count = count + 5`}
                language="odia"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Data Types</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-medium">String</h3>
            <div className="mt-2">
              <CodeBlock code='dhara greeting = "Namaskar!"' language="odia" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Number (Integer)</h3>
            <div className="mt-2">
              <CodeBlock code="dhara year = 2026" language="odia" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Boolean</h3>
            <div className="mt-2">
              <CodeBlock 
                code={`dhara isTrue = sata
dhara isFalse = micha`}
                language="odia"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Operators</h2>
        <div className="mt-4 grid gap-6">
          <div>
            <h3 className="text-lg font-medium">Arithmetic</h3>
            <div className="mt-2 grid grid-cols-3 sm:grid-cols-5 gap-2 text-sm">
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">+</code></div>
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">-</code></div>
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">*</code></div>
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">/</code></div>
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">%</code></div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Comparison</h3>
            <div className="mt-2 grid grid-cols-3 sm:grid-cols-6 gap-2 text-sm">
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">==</code></div>
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">!=</code></div>
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">&gt;</code></div>
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">&lt;</code></div>
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">&gt;=</code></div>
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">&lt;=</code></div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Logical</h3>
            <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">&amp;&amp;</code></div>
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">||</code></div>
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">!</code></div>
            </div>
            <div className="mt-2">
              <CodeBlock 
                code={`dhara a = sata
dhara b = micha
dekha a && b   # false
dekha a || b   # true
dekha !a       # false`}
                language="odia"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Compound Assignment</h3>
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">+=</code></div>
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">-=</code></div>
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">*=</code></div>
              <div className="bg-muted rounded p-2 text-center"><code className="text-pink-400">/=</code></div>
            </div>
            <div className="mt-2">
              <CodeBlock 
                code={`dhara x = 10
x += 5    # x is now 15
x -= 3    # x is now 12
x *= 2    # x is now 24`}
                language="odia"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Control Flow</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-medium">If-Else</h3>
            <div className="mt-2">
              <CodeBlock 
                code={`jadi condition tahale
  # code
nahele
  # else code
sesa`}
                language="odia"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">While Loop</h3>
            <div className="mt-2">
              <CodeBlock 
                code={`jebe condition
  # code
sesa`}
                language="odia"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">For Loop</h3>
            <div className="mt-2">
              <CodeBlock 
                code={`aarambha variable = start ru end
  # code
sesa`}
                language="odia"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Functions</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-medium">Definition</h3>
            <div className="mt-2">
              <CodeBlock 
                code={`karya functionName(param1, param2)
  # code
  fera value
sesa`}
                language="odia"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Call</h3>
            <div className="mt-2">
              <CodeBlock 
                code={`functionName(arg1, arg2)

dhara result = functionName(arg1, arg2)`}
                language="odia"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Arrays</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-medium">Creating Arrays</h3>
            <div className="mt-2">
              <CodeBlock 
                code={`dhara nums = [10, 20, 30, 40, 50]
dhara names = ["Rama", "Sita", "Hari"]
dhara empty = []`}
                language="odia"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Indexing &amp; Length</h3>
            <div className="mt-2">
              <CodeBlock 
                code={`dekha nums[0]         # 10 (0-based index)
dekha nums.length      # 5

dhara matrix = [[1, 2], [3, 4]]
dekha matrix[0][1]     # 2 (nested indexing)`}
                language="odia"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Modifying Elements</h3>
            <div className="mt-2">
              <CodeBlock 
                code={`dhara arr = [1, 2, 3]
arr[0] = 100          # Assign new value
arr[1] += 50          # Compound assignment
dekha arr              # [100, 52, 3]`}
                language="odia"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Looping Through Arrays</h3>
            <div className="mt-2">
              <CodeBlock 
                code={`dhara items = ["a", "b", "c", "d", "e"]
aarambha i = 0 ru items.length - 1
  dekha items[i]
sesa`}
                language="odia"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Break &amp; Continue</h2>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-medium">Break (ruha)</h3>
            <p className="mt-2 text-muted-foreground">Exit a loop early</p>
            <div className="mt-2">
              <CodeBlock 
                code={`aarambha i = 1 ru 10
  jadi i == 5 tahale
    ruha
  sesa
  dekha i
sesa
# Prints: 1, 2, 3, 4`}
                language="odia"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Continue (chala)</h3>
            <p className="mt-2 text-muted-foreground">Skip to the next iteration</p>
            <div className="mt-2">
              <CodeBlock 
                code={`aarambha i = 1 ru 5
  jadi i == 3 tahale
    chala
  sesa
  dekha i
sesa
# Prints: 1, 2, 4, 5`}
                language="odia"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <div className="mt-4">
          <CodeBlock code="# This is a comment" language="odia" />
        </div>
      </section>
    </div>
  );
}