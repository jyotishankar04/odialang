import { tokenize } from "./tokenizer";
import { Parser } from "./parser";
import { generateJavaScript } from "./codegen";

export interface CompileResult {
  success: boolean;
  output: string;
  error?: string;
}

export function compile(code: string): CompileResult {
  try {
    const tokens = tokenize(code);
    const parser = new Parser(tokens);
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
    const tokens = tokenize(code);
    const parser = new Parser(tokens);
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

export { tokenize, generateJavaScript };
export { Parser } from "./parser";
export type { ProgramNode, StatementNode, ExpressionNode } from "./ast";