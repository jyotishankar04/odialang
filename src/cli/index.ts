#!/usr/bin/env node

import { runFile } from "./run";
import { compileFile } from "./compile";
import fs from "fs";
import path from "path";
import { tokenize } from "../lexer/tokenizer";
import { Parser } from "../parser/parser";
import { generateJavaScript } from "../codegen/generate";

const VERSION = "2.0.0";

function showBanner(): void {
  console.log(`
============================ ODIALANG ============================

 ██████╗ ██████╗ ██╗ █████╗ ██╗      █████╗ ███╗   ██╗ ██████╗
██╔═══██╗██╔══██╗██║██╔══██╗██║     ██╔══██╗████╗  ██║██╔════╝
██║   ██║██║  ██║██║███████║██║     ███████║██╔██╗ ██║██║  ███╗
██║   ██║██║  ██║██║██╔══██║██║     ██╔══██║██║╚██╗██║██║   ██║
╚██████╔╝██████╔╝██║██║  ██║███████╗██║  ██║██║ ╚████║╚██████╔╝
 ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝

                             O D I A L A N G
                   An Odia-flavored programming language
                           Version ${VERSION}

===================================================================
`);
}

function showHelp(): void {
  showBanner();

  console.log(`
Usage:
  odia <file.odia>
  odia run <file.odia>
  odia compile <file.odia>
  odia compile <file.odia> <output.js>
  odia tokens <file.odia>
  odia ast <file.odia>
  odia --help
  odia -h
  odia --version
  odia -v

Examples:
  odia hello.odia
  odia run hello.odia
  odia compile hello.odia
  odia compile hello.odia hello.js
  odia tokens hello.odia
  odia ast hello.odia

Options:
  --verbose    Show detailed debug output (tokens, AST, generated JS)
  -v, --version  Show version number
`);
}

function readSourceFile(filePath: string): string {
  const absolutePath = path.resolve(filePath);

  if (!fs.existsSync(absolutePath)) {
    console.error(`File not found: ${absolutePath}`);
    process.exit(1);
  }

  return fs.readFileSync(absolutePath, "utf-8");
}

function printTokens(filePath: string): void {
  try {
    const sourceCode = readSourceFile(filePath);
    const tokens = tokenize(sourceCode);
    console.log(JSON.stringify(tokens, null, 2));
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown tokenizer error");
    }
    process.exit(1);
  }
}

function printAst(filePath: string): void {
  try {
    const sourceCode = readSourceFile(filePath);
    const tokens = tokenize(sourceCode);
    const parser = new Parser(tokens);
    const ast = parser.parseProgram();
    console.log(JSON.stringify(ast, null, 2));
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown parser error");
    }
    process.exit(1);
  }
}

const args = process.argv.slice(2);

if (args.length === 0) {
  showHelp();
  process.exit(0);
}

const commandOrFile = args[0];
const rest = args.slice(1);

const verbose = rest.includes("--verbose");

function runWithVerbose(filePath: string): void {
  try {
    const sourceCode = readSourceFile(filePath);
    
    if (verbose) {
      console.log("=== TOKENS ===");
      const tokens = tokenize(sourceCode);
      console.log(JSON.stringify(tokens, null, 2));
      console.log("\n=== AST ===");
    }
    
    const tokens = tokenize(sourceCode);
    const parser = new Parser(tokens);
    const ast = parser.parseProgram();
    
    if (verbose) {
      console.log(JSON.stringify(ast, null, 2));
      console.log("\n=== GENERATED JS ===");
    }
    
    const jsCode = generateJavaScript(ast);
    
    if (verbose) {
      console.log(jsCode);
      console.log("\n=== OUTPUT ===");
    }
    
    console.log("Running...\n");
    const runner = new Function(jsCode);
    runner();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Unknown error");
    }
    process.exit(1);
  }
}

function startRepl(): void {
  console.log("Odialang REPL (v2.0.0)");
  console.log("Type 'exit' to quit\n");
  
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "odia> ",
  });
  
  const parser = new Parser([]);
  const tokens: any[] = [];
  
  rl.prompt();
  
  rl.on("line", (line: string) => {
    const trimmed = line.trim();
    if (trimmed === "exit" || trimmed === "quit") {
      rl.close();
      return;
    }
    
    if (!trimmed) {
      rl.prompt();
      return;
    }
    
    try {
      const lineTokens = tokenize(trimmed + "\n");
      const parser = new Parser(lineTokens);
      const ast = parser.parseProgram();
      const jsCode = generateJavaScript(ast);
      const runner = new Function(jsCode);
      runner();
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error:", error.message);
      } else {
        console.error("Unknown error");
      }
    }
    
    rl.prompt();
  });
  
  rl.on("close", () => {
    console.log("\nGoodbye!");
    process.exit(0);
  });
}

if (commandOrFile === "run") {
  if (!rest[0]) {
    console.error("Missing input file");
    process.exit(1);
  }
  
  const filePath = rest.find((a) => !a.startsWith("--")) ?? rest[0];
  runWithVerbose(filePath);
} else if (commandOrFile === "compile") {
  if (!rest[0]) {
    console.error("Missing input file");
    process.exit(1);
  }

  compileFile(rest[0], rest[1]);
} else if (commandOrFile === "tokens") {
  if (!rest[0]) {
    console.error("Missing input file");
    process.exit(1);
  }

  printTokens(rest[0]);
} else if (commandOrFile === "ast") {
  if (!rest[0]) {
    console.error("Missing input file");
    process.exit(1);
  }

  printAst(rest[0]);
} else if (commandOrFile === "--help" || commandOrFile === "-h") {
  showHelp();
} else if (commandOrFile === "--version" || commandOrFile === "-v") {
  console.log(`Odialang v${VERSION}`);
} else if (commandOrFile === "repl" || commandOrFile === "shell") {
  startRepl();
} else if (commandOrFile === "interactive" || commandOrFile === "i") {
  startRepl();
} else if (commandOrFile?.endsWith(".odia")) {
  runWithVerbose(commandOrFile);
} else {
  console.error(`Unknown command: ${commandOrFile}`);
  showHelp();
  process.exit(1);
}