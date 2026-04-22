'use client';

import CodeBlock from "@/components/ui/CodeBlock";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function OdiaVsJsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold">OdiaLang vs JavaScript Syntax</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        See how OdiaLang keywords compare to their JavaScript equivalents. 
        Write code in Odia using familiar keywords — it's easier than you think!
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Conditionals</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium mb-2">OdiaLang</h3>
            <CodeBlock 
              code={`bada (x > 5) {
  dekha "Bada!"
} nahin_ki {
  chota dekha "Chota!"
}`}
              language="odia"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">JavaScript</h3>
            <CodeBlock 
              code={`if (x > 5) {
  console.log("Big!");
} else {
  console.log("Small!");
}`}
              language="javascript"
            />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Loops</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium mb-2">OdiaLang</h3>
            <CodeBlock 
              code={`ahara (i = 0; i < 10; i++) {
  dekha(i)
}`}
              language="odia"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">JavaScript</h3>
            <CodeBlock 
              code={`for (let i = 0; i < 10; i++) {
  console.log(i);
}`}
              language="javascript"
            />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">While Loops</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium mb-2">OdiaLang</h3>
            <CodeBlock 
              code={`jbabanta (i < 10) {
  dekha(i)
  i = i + 1
}`}
              language="odia"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">JavaScript</h3>
            <CodeBlock 
              code={`while (i < 10) {
  console.log(i);
  i = i + 1;
}`}
              language="javascript"
            />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Functions</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium mb-2">OdiaLang</h3>
            <CodeBlock 
              code={`ahara rakho(gotta) {
  gotta * 2
}`}
              language="odia"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">JavaScript</h3>
            <CodeBlock 
              code={`function double(x) {
  return x * 2;
}`}
              language="javascript"
            />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Variables</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium mb-2">OdiaLang</h3>
            <CodeBlock 
              code={`gotta x = 10
gotta name = "Prasanta"`}
              language="odia"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">JavaScript</h3>
            <CodeBlock 
              code={`let x = 10;
const name = "Prasanta";`}
              language="javascript"
            />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Keyword Reference Table</h2>
        <div className="mt-4 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>OdiaLang</TableHead>
                <TableHead>JavaScript</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell><code>bada</code></TableCell>
                <TableCell><code>if</code></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>nahin_ki</code></TableCell>
                <TableCell><code>else</code></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>ahara</code></TableCell>
                <TableCell><code>for</code></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>jbabanta</code></TableCell>
                <TableCell><code>while</code></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>ahara</code></TableCell>
                <TableCell><code>function</code></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>rakho</code></TableCell>
                <TableCell><code>return</code></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>gotta</code></TableCell>
                <TableCell><code>let</code></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>sthira</code></TableCell>
                <TableCell><code>const</code></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>dekha</code></TableCell>
                <TableCell><code>console.log</code></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>sata</code></TableCell>
                <TableCell><code>true</code></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><code>micha</code></TableCell>
                <TableCell><code>false</code></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Try It Out</h2>
        <p className="mt-2 text-muted-foreground">
          See the full language reference or try OdiaLang in the playground:
        </p>
      </section>
    </div>
  );
}