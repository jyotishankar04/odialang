# Odialang Developer Guide

This guide provides essential information for agents working on the Odialang project.

## Project Overview

Odialang is a file-based, CLI-driven programming language with Odia (Oriya) keywords that compiles to JavaScript. The project is written in TypeScript and organized into these main components:

- **src/cli/** - Command-line interface (run, compile commands)
- **src/lexer/** - Tokenizer and token types
- **src/parser/** - AST generation
- **src/codegen/** - JavaScript code generation

---

## Build & Test Commands

### Core Commands

```bash
# Build the TypeScript project
npm run build          # Runs: tsc

# Run the CLI in development mode
npm run dev            # Runs: node --loader ts-node/esm src/cli/index.ts

# Run odia on a file (after building)
npm run start          # Runs: node dist/cli/index.js
# Or use the odia bin directly
odia <file.odia>      # Run a .odia file

# Clean build artifacts
npm run clean          # Runs: rm -rf dist
```

### Running Odia Files

```bash
# Run a .odia file directly
odia hello.odia
odia run hello.odia

# Compile to JavaScript
odia compile hello.odia
odia compile hello.odia output.js

# Debug: View tokens
odia tokens hello.odia

# Debug: View AST
odia ast hello.odia
```

### Testing Single Files

To test a single `.odia` file:

```bash
# Build first (if not already built)
npm run build

# Run the test file
node dist/cli/index.js run examples/basics/01_hello.odia
# Or use the odia bin if installed globally/linked
odia examples/basics/01_hello.odia
```

---

## Code Style Guidelines

### TypeScript Configuration

The project uses strict TypeScript with these settings (from `tsconfig.json`):

- **Target**: ES2022
- **Module**: NodeNext
- **Strict mode**: enabled
- **noUncheckedIndexedAccess**: enabled
- **noImplicitOverride**: enabled
- **noFallthroughCasesInSwitch**: enabled

### Imports

Use ES modules with full path resolution:

```typescript
// Correct
import { runFile } from "./run";
import { compileFile } from "./compile";
import fs from "fs";
import path from "path";
import { tokenize } from "../lexer/tokenizer";
import { Parser } from "../parser/parser";

// Avoid relative paths that climb too many directories
```

### Type Annotations

- Always use explicit types for function parameters and return types
- Use `type` for simple type aliases, `interface` for object shapes
- Prefer `type Token = { ... }` over inline types

```typescript
// Good
function showBanner(): void {
  // ...
}

function readSourceFile(filePath: string): string {
  // ...
}

type Token = {
  type: TokenType;
  value: TokenValue;
  line: number;
  column: number;
};
```

### Naming Conventions

- **Files**: kebab-case (`tokenizer.ts`, `tokenTypes.ts`)
- **Functions**: camelCase (`tokenize`, `parseProgram`, `runFile`)
- **Classes**: PascalCase (`Parser`, `Generator`)
- **Constants**: UPPER_SNAKE_CASE for config values
- **Interfaces/Types**: PascalCase
- **Variables**: camelCase

### Error Handling

Always handle errors with proper typing:

```typescript
// Good - check error instanceof Error
try {
  const sourceCode = readSourceFile(filePath);
  const tokens = tokenize(sourceCode);
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Unknown error");
  }
  process.exit(1);
}
```

- Always exit with code 1 on fatal errors
- Use descriptive error messages with line/column numbers when possible
- Never swallow errors silently

### Code Organization

1. **Imports** - First, then blank line
2. **Type declarations** - Before usage
3. **Exports** - At the end or inline
4. **One export per file** - Preferred for clarity

### Functions

- Keep functions focused and small (< 50 lines preferred)
- Use early returns for error conditions
- Document exported functions with JSDoc when behavior is complex

```typescript
/**
 * Tokenizes the input string into a list of tokens.
 * @param input - The source code to tokenize
 * @returns Array of tokens
 */
export function tokenize(input: string): Token[] {
  // ...
}
```

### Control Flow

- Use explicit blocks `{}` for all control structures
- Prefer guard clauses to reduce nesting

```typescript
// Good
if (args.length === 0) {
  showHelp();
  process.exit(0);
}

if (!fs.existsSync(absolutePath)) {
  console.error(`File not found: ${absolutePath}`);
  process.exit(1);
}
```

### String Formatting

- Use template literals for string interpolation
- Use consistent quote style (template literals or double quotes)

```typescript
// Good
console.error(`File not found: ${absolutePath}`);
console.log("Unknown command:", commandOrFile);
```

---

## Project Structure

```
odialang/
├── src/
│   ├── cli/
│   │   ├── index.ts    # Main entry point
│   │   ├── run.ts       # Run command
│   │   └── compile.ts   # Compile command
│   ├── lexer/
│   │   ├── tokenizer.ts # Main tokenizer
│   │   ├── tokenTypes.ts # Token type definitions
│   │   └── keywords.ts  # Reserved keywords
│   ├── parser/
│   │   ├── parser.ts    # AST parser
│   │   └── ast.ts       # AST node types
│   └── codegen/
│       └── generate.ts  # JS code generator
├── examples/             # Odia example programs
│   ├── basics/
│   ├── intermediate/
│   └── advanced/
├── scripts/              # Build/setup scripts
└── dist/                 # Compiled output
```

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/cli/index.ts` | CLI entry point, command routing |
| `src/lexer/tokenizer.ts` | Lexical analysis |
| `src/parser/parser.ts` | Parsing tokens to AST |
| `src/codegen/generate.ts` | AST to JavaScript |
| `src/lexer/keywords.ts` | Odia reserved keywords |
| `src/lexer/tokenTypes.ts` | Token type definitions |

---

## Common Tasks

### Adding a New Token Type

1. Add to `TokenType` enum in `src/lexer/tokenTypes.ts`
2. Handle in tokenizer (`src/lexer/tokenizer.ts`)
3. Handle in parser if needed
4. Handle in code generator if needed

### Adding a New Keyword

1. Add to `KEYWORDS` Set in `src/lexer/keywords.ts`
2. Handle boolean keywords (sata/micha) in tokenizer if special
3. Add parsing logic in parser

### Testing Changes

```bash
# Build the project
npm run build

# Test with an example file
node dist/cli/index.js run examples/basics/01_hello.odia

# Check tokens output
node dist/cli/index.js tokens examples/basics/01_hello.odia

# Check AST output
node dist/cli/index.js ast examples/basics/01_hello.odia
```

---

## Notes for Agents

- Always build before testing (`npm run build`)
- Use strict TypeScript - avoid `any` types
- Test edge cases when modifying the tokenizer/parser
- Verify examples in `examples/` directory work after changes
- The language uses Odia keywords - see `src/lexer/keywords.ts` for the full list
