import fs from "fs";
import path from "path";
import vm from "vm";
import { tokenize } from "../lexer/tokenizer";
import { Parser } from "../parser/parser";
import { generateJavaScript } from "../codegen/generate";

export function runFile(filePath: string): void {
  const absolutePath = path.resolve(filePath);

  if (!fs.existsSync(absolutePath)) {
    console.error(`File not found: ${absolutePath}`);
    process.exit(1);
  }

  const sourceCode = fs.readFileSync(absolutePath, "utf-8");

  try {
    const tokens = tokenize(sourceCode);
    const parser = new Parser(tokens);
    const ast = parser.parseProgram();
    const jsCode = generateJavaScript(ast);

    const script = new vm.Script(jsCode, { filename: absolutePath });
    script.runInThisContext();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown runtime error");
    }
    process.exit(1);
  }
}