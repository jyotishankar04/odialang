# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- New features in development

## [1.0.3] - 2026-04-16

### Added
- Decimal number support (e.g., `3.14`, `2.71828`, `42.0`)
- Escape sequences in strings (`\"`, `\\`, `\n`, `\t`)
- Multi-line strings (strings that span multiple lines)
- Unary operators (`+` and `-`)
- Modulo operator (`%`)
- Division by zero protection (throws error)

### Fixed
- Fixed tokenizer to support decimal numbers
- Fixed string parsing for escape sequences
- Fixed string tokenizer for multi-line strings
- Fixed parser to handle unary operators (`-5`, `+7`)
- Fixed parser to support modulo operator
- Added runtime check for division by zero

### Examples Added
- `07_strings.odia` - String operations and escape sequences
- `08_math.odia` - Math operations with decimals and negatives
- `05_math_funcs.odia` - Mathematical functions (factorial, prime, GCD, LCM)
- `06_scope.odia` - Variable scope and shadowing
- `07_sorting.odia` - Sorting algorithms
- `08_binary_search.odia` - Binary search algorithm

## [1.0.0] - 2026-04-15

### Added
- Initial release of Odialang
- **Language Features:**
  - Variable declaration (`dhara`)
  - Print statement (`dekha`)
  - Conditional statements (`jadi`, `tahale`, `nahele`, `sesa`)
  - While loops (`jebe`)
  - For loops (`aarambha`, `ru`)
  - Function declarations (`karya`)
  - Return statements (`fera`)
  - Boolean literals (`sata`, `micha`)
  - String, number, and boolean data types
  - Arithmetic operators (`+`, `-`, `*`, `/`)
  - Comparison operators (`==`, `!=`, `>`, `<`, `>=`, `<=`)
  - Assignment operator (`=`)
  - Single-line comments (`#`)

- **CLI Commands:**
  - `odia <file.odia>` - Run a file directly
  - `odia run <file.odia>` - Run a file
  - `odia compile <file.odia>` - Compile to JavaScript
  - `odia compile <file.odia> <output.js>` - Compile with custom output
  - `odia tokens <file.odia>` - Display tokenized output
  - `odia ast <file.odia>` - Display abstract syntax tree
  - `odia --help` / `odia -h` - Show help

- **Compiler Components:**
  - Lexer (Tokenizer) - Converts source code to tokens
  - Parser - Converts tokens to AST
  - Code Generator - Converts AST to JavaScript

- **Documentation:**
  - Comprehensive README
  - Language specification (LANGUAGE.md)
  - Step-by-step tutorial (TUTORIAL.md)
  - Contributing guidelines (CONTRIBUTING.md)
  - This changelog

- **Examples:**
  - Hello world
  - Variables and data types
  - Control flow examples
  - Function examples
  - Loop examples

### Technical Details
- Built with TypeScript
- Compiles to JavaScript for Node.js execution
- Uses CommonJS module system
- Supports Node.js >= 18.0.0
- Published to npm as `@devsuvam/odialang`

---

## Release Notes Format

Each version section includes:

### Added
- New features

### Changed
- Changes to existing functionality

### Deprecated
- Soon-to-be removed features

### Removed
- Now removed features

### Fixed
- Bug fixes

### Security
- Security improvements

---

## Planned Features

### Version 1.1.0 (Planned)
- [ ] Array/list data type
- [ ] Array operations (push, pop, length)
- [ ] For-each loop
- [ ] String methods (length, substring, etc.)

### Version 1.2.0 (Planned)
- [ ] Object/dictionary type
- [ ] Property access syntax
- [ ] Object methods

### Version 2.0.0 (Planned)
- [ ] Module system (import/export)
- [ ] Standard library
- [ ] Error handling (try-catch equivalent)

---

## Migration Guide

### From 1.0.x to 1.0.3

No breaking changes. All existing code will continue to work.

### From 0.x to 1.0.0

This is the first stable release. No migration needed.

---

## How to Update

### Using npm

```bash
# Update to latest version
npm update -g @devsuvam/odialang

# Install specific version
npm install -g @devsuvam/odialang@1.0.3
```

### Verify Version

```bash
odia --version
```

---

## Contributing to Changelog

When submitting PRs:
- Add your changes to the [Unreleased] section
- Follow the format: `### Category` then `- Description`
- Link to related issues: `- Fixed bug #123`

Example:
```markdown
## [Unreleased]

### Added
- New feature description (#456)

### Fixed
- Fixed memory leak in parser (#789)
```

---

## Version History Summary

| Version | Date | Description |
|---------|------|-------------|
| 1.0.3 | 2026-04-16 | Bug fixes: decimals, escape sequences, unary ops |
| 1.0.0 | 2026-04-15 | Initial stable release |

---

For the complete commit history, see [GitHub commits](https://github.com/jyotishankar04/odialang/commits/main).
