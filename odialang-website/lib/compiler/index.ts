import { tokenize as tokenizerTokenize } from "@devsuvam/odialang/dist/lexer/tokenizer";
import { Parser as ParserClass } from "@devsuvam/odialang/dist/parser/parser";
import { generateJavaScript } from "@devsuvam/odialang/dist/codegen/generate";

export interface CompileResult {
  success: boolean;
  output: string;
  error?: string;
}

export function compile(code: string): CompileResult {
  try {
    const tokens = tokenizerTokenize(code);
    const parser = new ParserClass(tokens);
    const ast = parser.parseProgram();
    const jsCode = generateJavaScript(ast);
    return { success: true, output: jsCode };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, output: "", error: message };
  }
}

export function execute(code: string): CompileResult {
  try {
    const tokens = tokenizerTokenize(code);
    const parser = new ParserClass(tokens);
    const ast = parser.parseProgram();
    const jsCode = generateJavaScript(ast);

    const logs: string[] = [];
    const originalLog = console.log;
    console.log = (...args: unknown[]) => {
      logs.push(args.map((a) => String(a)).join(" "));
    };

    try {
      const fn = new Function(jsCode);
      fn();
    } finally {
      console.log = originalLog;
    }

    return { success: true, output: logs.join("\n") };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { success: false, output: "", error: message };
  }
}

export function tokenize(code: string) {
  return tokenizerTokenize(code);
}

export { generateJavaScript };
export { ParserClass as Parser };
