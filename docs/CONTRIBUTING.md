# Contributing to Odialang

Thank you for your interest in contributing to Odialang! This document provides guidelines and instructions for contributing.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [How to Contribute](#how-to-contribute)
4. [Development Setup](#development-setup)
5. [Coding Standards](#coding-standards)
6. [Submitting Changes](#submitting-changes)
7. [Adding New Features](#adding-new-features)
8. [Reporting Bugs](#reporting-bugs)

---

## Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what's best for the community
- Showing empathy towards others

**Unacceptable behavior includes:**
- Trolling, insulting/derogatory comments
- Public or private harassment
- Publishing others' private information
- Other conduct which could reasonably be considered inappropriate

---

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Fork the Repository

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/yourusername/odialang.git
   cd odialang
   ```
3. Add upstream remote:
   ```bash
   git remote add upstream https://github.com/jyotishankar04/odialang.git
   ```

---

## How to Contribute

### Types of Contributions

We welcome:
- 🐛 **Bug fixes**
- ✨ **New features**
- 📝 **Documentation improvements**
- 🌐 **Translations**
- 🧪 **Test cases**
- 💡 **Examples and tutorials**

### Contribution Workflow

1. **Create an Issue** (for significant changes)
   - Describe the problem or feature
   - Wait for maintainer feedback

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

3. **Make Changes**
   - Follow coding standards
   - Add tests if applicable
   - Update documentation

4. **Test Your Changes**
   ```bash
   npm test
   npm run build
   ```

5. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

6. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then create a Pull Request on GitHub.

---

## Development Setup

### Installation

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Link for local testing
npm link

# Test CLI
odia --help
```

### Project Structure

```
odialang/
├── src/
│   ├── cli/          # CLI commands
│   ├── lexer/        # Tokenizer
│   ├── parser/       # Parser
│   └── codegen/      # Code generator
├── docs/             # Documentation
├── examples/         # Example programs
├── tests/            # Test files
├── dist/             # Compiled output (generated)
└── package.json
```

### Build Commands

```bash
# Build TypeScript
npm run build

# Clean build files
npm run clean

# Development mode
npm run dev

# Run CLI
npm start
```

---

## Coding Standards

### TypeScript Style Guide

#### Naming Conventions

```typescript
// Variables and functions: camelCase
let myVariable = 10;
function myFunction() {}

// Classes and types: PascalCase
class MyClass {}
interface MyInterface {}
type MyType = {};

// Constants: UPPER_SNAKE_CASE
const MAX_VALUE = 100;

// Enums: PascalCase for enum, UPPER_SNAKE_CASE for members
enum TokenType {
  KEYWORD = "KEYWORD",
  IDENTIFIER = "IDENTIFIER"
}
```

#### Type Annotations

```typescript
// Always use explicit types for function parameters and return types
function add(a: number, b: number): number {
  return a + b;
}

// Use interfaces for object shapes
interface Token {
  type: TokenType;
  value: string | number;
  line: number;
  column: number;
}
```

#### Comments

```typescript
/**
 * Brief description of the function
 * @param param1 - Description of first parameter
 * @param param2 - Description of second parameter
 * @returns Description of return value
 */
function example(param1: string, param2: number): boolean {
  // Single line comment for logic explanation
  return param1.length > param2;
}
```

### Code Quality

- Use `strict` TypeScript mode
- Avoid `any` type
- Handle all error cases
- Write self-documenting code

### Testing

When adding features:
- Add unit tests for new functions
- Add integration tests for CLI commands
- Ensure all tests pass before submitting PR

---

## Submitting Changes

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

**Examples:**
```
feat(lexer): add support for floating point numbers

fix(parser): handle empty function bodies correctly

docs(readme): update installation instructions
```

### Pull Request Guidelines

1. **Title**: Clear and descriptive
2. **Description**: 
   - What changes were made
   - Why they were made
   - How to test them
3. **Link Issues**: Reference related issues
4. **Checklist**:
   - [ ] Code follows style guidelines
   - [ ] Tests pass
   - [ ] Documentation updated
   - [ ] No breaking changes (or clearly documented)

### Review Process

1. Maintainers will review your PR
2. Address requested changes
3. Once approved, your PR will be merged
4. Your contribution will be acknowledged in the changelog

---

## Adding New Features

### Adding New Keywords

To add a new keyword:

1. Add to `src/lexer/keywords.ts`:
   ```typescript
   export const KEYWORDS = new Set<string>([
     // ... existing keywords
     "newword",  // English meaning
   ]);
   ```

2. Handle in `src/lexer/tokenizer.ts` if special handling needed

3. Handle in `src/parser/parser.ts`:
   ```typescript
   private parseStatement(): StatementNode {
     if (this.isKeyword("newword")) {
       return this.parseNewWordStatement();
     }
     // ...
   }
   ```

4. Add AST node in `src/parser/ast.ts`:
   ```typescript
   export type StatementNode =
     | // ... existing nodes
     | NewWordStatementNode;
   
   export type NewWordStatementNode = {
     type: "NewWordStatement";
     // properties
   };
   ```

5. Generate code in `src/codegen/generate.ts`:
   ```typescript
   function generateNewWordStatement(node: NewWordStatementNode, level: number): string {
     // Generate JavaScript code
   }
   ```

6. Update documentation

### Adding New Operators

1. Add handling in `src/lexer/tokenizer.ts`
2. Update operator parsing in `src/parser/parser.ts`
3. Update code generation in `src/codegen/generate.ts`
4. Add tests and documentation

### Adding CLI Commands

1. Create command file in `src/cli/`:
   ```typescript
   // src/cli/newcommand.ts
   export function newCommand(args: string[]): void {
     // Implementation
   }
   ```

2. Register in `src/cli/index.ts`:
   ```typescript
   import { newCommand } from "./newcommand";
   
   // In main function
   if (command === "newcommand") {
     newCommand(rest);
   }
   ```

3. Update help text
4. Add documentation

---

## Reporting Bugs

### Before Reporting

- Check if the bug is already reported
- Try the latest version
- Simplify the issue to minimal reproducible example

### Bug Report Template

```markdown
**Description**
Clear description of the bug

**To Reproduce**
Steps to reproduce:
1. Create file '...'
2. Run command '...'
3. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Code Example**
```odia
# Minimal code that reproduces the issue
dekha "test"
```

**Environment:**
- OS: [e.g., Ubuntu 22.04]
- Node.js version: [e.g., 20.0.0]
- Odialang version: [e.g., 1.0.0]

**Additional Context**
Any other relevant information
```

### Where to Report

- GitHub Issues: https://github.com/jyotishankar04/odialang/issues

---

## Documentation Contributions

### Improving Documentation

We welcome documentation improvements:
- Fix typos
- Clarify explanations
- Add examples
- Translate to other languages

### Documentation Files

- `README.md` - Project overview
- `docs/LANGUAGE.md` - Language specification
- `docs/TUTORIAL.md` - Step-by-step tutorial
- `docs/CONTRIBUTING.md` - This file
- `docs/CHANGELOG.md` - Version history

### Example Contributions

Add example programs to `examples/`:
- Organize by category: `basics/`, `intermediate/`, `advanced/`
- Include comments explaining the code
- Add expected output

---

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Acknowledged in the project README

---

## Questions?

- Open an issue for questions
- Join discussions on GitHub
- Check existing documentation

Thank you for contributing to Odialang! 🙏
