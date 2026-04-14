# Odialang 🌸

A file-based, CLI-driven programming language with Odia (Oriya) keywords that compiles to JavaScript. Write code in your native language and run it anywhere!

## 📋 Table of Contents

- [What is Odialang?](#what-is-odialang)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [CLI Commands](#cli-commands)
- [Language Syntax](#language-syntax)
- [Examples](#examples)
- [Project Structure](#project-structure)
- [Development](#development)

## 🌟 What is Odialang?

Odialang is a programming language designed to make coding accessible to Odia speakers. It uses Odia words as keywords while compiling to JavaScript for execution.

### Key Features

- 📝 **Odia Keywords**: Write code using familiar Odia words
- 🚀 **Compiles to JavaScript**: Runs on any Node.js environment
- 🛠️ **CLI Interface**: Simple command-line tool for compilation and execution
- 📁 **File-based**: Write `.odia` files and run them directly
- 🔍 **Debug Tools**: View tokens and AST for debugging

## 📦 Installation

### Prerequisites

- Node.js >= 18.0.0
- npm

### Install from npm (Recommended)

```bash
# Install globally
npm install -g odialang

# Verify installation
odia --help
```

### Install from Source

```bash
# Clone the repository
git clone https://github.com/yourusername/odialang.git
cd Odialang

# Install dependencies
npm install

# Build the project
npm run build

# Link globally for `odia` command
npm link

# Or use directly without linking
npm start -- --help
```

### Verify Installation

```bash
odia --help
```

## 🚀 Quick Start

Create a file `hello.odia`:

```odia
# This is a comment
dhara name = "World"
dekha "Hello, " + name + "!"
```

Run it:

```bash
odia hello.odia
```

Output:
```
Hello, World!
```

## 🖥️ CLI Commands

### Run a file
```bash
odia <file.odia>
odia run <file.odia>
```

### Compile to JavaScript
```bash
odia compile <file.odia>              # Outputs file.js
odia compile <file.odia> <output.js>  # Specify output name
```

### Debug Commands
```bash
odia tokens <file.odia>   # View tokenized output
odia ast <file.odia>      # View Abstract Syntax Tree
```

### Help
```bash
odia --help
odia -h
```

## 📝 Language Syntax

### Keywords Reference

| Odia Keyword | English Meaning | Purpose |
|--------------|-----------------|---------|
| `dhara` | let/variable | Variable declaration |
| `dekha` | show/print | Print to console |
| `jadi` | if | Conditional statement |
| `tahale` | then | If-block start |
| `nahele` | else | Else-block |
| `jebe` | while | While loop |
| `karya` | function | Function declaration |
| `fera` | return | Return statement |
| `sesa` | end | Block end |
| `aarambha` | start/begin | For loop |
| `ru` | from | Range operator |
| `sata` | true | Boolean true |
| `micha` | false | Boolean false |

### Variables

```odia
# Strings
dhara name = "Rama"

# Numbers
dhara age = 25
dhara pi = 3.14

# Booleans
dhara isActive = sata
dhara isDone = micha
```

### Print Statements

```odia
dekha "Hello World"
dekha "Value: " + variable
dekha 42
```

### Conditionals (If-Else)

```odia
jadi condition tahale
  # if block
nahele
  # else block
sesa
```

Example:
```odia
dhara x = 10

jadi x > 5 tahale
  dekha "x is greater than 5"
nahele
  dekha "x is 5 or less"
sesa
```

### Loops

#### While Loop
```odia
dhara count = 0

jebe count < 5 tahale
  dekha "Count: " + count
  count = count + 1
sesa
```

#### For Loop
```odia
aarambha i = 1 ru 10
  dekha "Iteration: " + i
sesa
```

### Functions

```odia
karya functionName(param1, param2)
  # function body
  fera value
sesa
```

Example:
```odia
karya add(a, b)
  fera a + b
sesa

dhara result = add(5, 3)
dekha "5 + 3 = " + result
```

### Operators

| Operator | Description |
|----------|-------------|
| `+` | Addition / String concatenation |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `=` | Assignment |
| `==` | Equal to |
| `!=` | Not equal to |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal |
| `<=` | Less than or equal |

### Comments

```odia
# Single line comment
# Another comment
dhara x = 10  # inline comment
```

## 📚 Examples

### Example 1: Hello World
```odia
# hello.odia
dekha "Namaskar, Odia!"
dekha "Welcome to Odialang"
```

### Example 2: Calculator
```odia
karya calculate(a, b, operation)
  jadi operation == "add" tahale
    fera a + b
  sesa
  
  jadi operation == "subtract" tahale
    fera a - b
  sesa
  
  fera 0
sesa

dhara result = calculate(10, 5, "add")
dekha "Result: " + result
```

### Example 3: Factorial
```odia
karya factorial(n)
  jadi n <= 1 tahale
    fera 1
  sesa
  
  fera n * factorial(n - 1)
sesa

dhara num = 5
dekha "Factorial of " + num + " is: " + factorial(num)
```

### Example 4: FizzBuzz
```odia
aarambha i = 1 ru 20
  dhara output = ""
  
  jadi i % 3 == 0 tahale
    output = output + "Fizz"
  sesa
  
  jadi i % 5 == 0 tahale
    output = output + "Buzz"
  sesa
  
  jadi output == "" tahale
    output = i
  sesa
  
  dekha output
sesa
```

## 🏗️ Project Structure

```
Odialang/
├── src/
│   ├── cli/           # CLI commands
│   │   ├── index.ts   # Main CLI entry
│   │   ├── run.ts     # Run command
│   │   └── compile.ts # Compile command
│   ├── lexer/         # Tokenizer
│   │   ├── tokenizer.ts
│   │   ├── tokenTypes.ts
│   │   └── keywords.ts
│   ├── parser/        # Parser
│   │   ├── parser.ts
│   │   └── ast.ts
│   └── codegen/       # Code generation
│       └── generate.ts
├── examples/          # Example .odia files
├── dist/              # Compiled JavaScript
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Development

### Build
```bash
npm run build
```

### Clean
```bash
npm run clean
```

### Link for global usage
```bash
npm link
```

### Development mode (with ts-node)
```bash
npm run dev
```

## 🐛 Debugging

### View Tokens
```bash
odia tokens examples/hello.odia
```
Shows the lexical tokens generated from your source code.

### View AST
```bash
odia ast examples/hello.odia
```
Shows the Abstract Syntax Tree representation.

## 📄 License

MIT License

## 🙏 Acknowledgments

- Inspired by the desire to make programming accessible in regional languages
- Built with TypeScript and Node.js

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Add more Odia keywords
- Improve documentation

---

Made with ❤️ for the Odia community
