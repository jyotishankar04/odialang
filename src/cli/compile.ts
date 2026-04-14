import fs from "fs";
import path from "path";
import { tokenize } from "../lexer/tokenizer";
import { Parser } from "../parser/parser";
import { generateJavaScript } from "../codegen/generate";

export function compileFile(inputPath: string, outputPath?: string): void {
  const absoluteInputPath = path.resolve(inputPath);

  if (!fs.existsSync(absoluteInputPath)) {
    console.error(`File not found: ${absoluteInputPath}`);
    process.exit(1);
  }

  const sourceCode = fs.readFileSync(absoluteInputPath, "utf-8");

  try {
    const tokens = tokenize(sourceCode);
    const parser = new Parser(tokens);
    const ast = parser.parseProgram();
    const jsCode = generateJavaScript(ast);

    const finalOutputPath =
      outputPath ?? absoluteInputPath.replace(/\.odia$/, ".js");

    fs.writeFileSync(finalOutputPath, jsCode, "utf-8");
    console.log(`Compiled successfully: ${finalOutputPath}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown compile error");
    }
    process.exit(1);
  }
}