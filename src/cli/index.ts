#!/usr/bin/env node

import { runFile } from "./run";
import { compileFile } from "./compile";
import fs from "fs";
import path from "path";
import { tokenize } from "../lexer/tokenizer";
import { Parser } from "../parser/parser";

function showBanner(): void {
  console.log(`
============================== ODIALANG ==============================

 ██████╗ ██████╗ ██╗ █████╗ ██╗      █████╗ ███╗   ██╗ ██████╗
██╔═══██╗██╔══██╗██║██╔══██╗██║     ██╔══██╗████╗  ██║██╔════╝
██║   ██║██║  ██║██║███████║██║     ███████║██╔██╗ ██║██║  ███╗
██║   ██║██║  ██║██║██╔══██║██║     ██╔══██║██║╚██╗██║██║   ██║
╚██████╔╝██████╔╝██║██║  ██║███████╗██║  ██║██║ ╚████║╚██████╔╝
 ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝

                             O D I A L A N G
                   An Odia-flavored programming language

=====================================================================
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

Examples:
  odia hello.odia
  odia run hello.odia
  odia compile hello.odia
  odia compile hello.odia hello.js
  odia tokens hello.odia
  odia ast hello.odia
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

if (commandOrFile === "run") {
  if (!rest[0]) {
    console.error("Missing input file");
    process.exit(1);
  }

  runFile(rest[0]);
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
} else if (commandOrFile?.endsWith(".odia")) {
  runFile(commandOrFile);
} else {
  console.error(`Unknown command: ${commandOrFile}`);
  showHelp();
  process.exit(1);
}