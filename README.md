# Odialang 🌸

A file-based, CLI-driven programming language with **Odia (Oriya) keywords** that compiles to JavaScript. Write code in your native language and run it anywhere!

[![npm version](https://img.shields.io/npm/v/@devsuvam/odialang.svg)](https://www.npmjs.com/package/@devsuvam/odialang)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)

```odia
# Welcome to Odialang!
dhara name = "World"
dekha "Hello, " + name + "!"

karya greet(person)
  dekha "Namaskar, " + person + "!"
sesa

greet("Odia")
```

## 🚀 Quick Start

### Install

```bash
npm install -g @devsuvam/odialang
```

### Create Your First Program

Create `hello.odia`:

```odia
dekha "Namaskar, Odia!"
dekha "Welcome to Odialang!"
```

### Run It

```bash
odia hello.odia
```

Output:
```
Namaskar, Odia!
Welcome to Odialang!
```

## 🎨 Syntax Highlighting (Auto-Installed!)

When you install `@devsuvam/odialang`, syntax highlighting is **automatically set up** for VSCode!

### ✅ What Happens Automatically

- **VSCode Extension** is copied to your extensions folder
- **Restart VSCode** to activate syntax highlighting for `.odia` files
- Works with all VSCode themes

### 🛠️ Manual Setup (if needed)

If automatic setup didn't work or you want to set up other editors:

```bash
# Run the interactive setup
npx odialang-setup
```

Or manually:

**VSCode:**
```bash
# Extension is already installed! Just restart VSCode.
# If needed, reinstall:
cp -r node_modules/@devsuvam/odialang/syntax-highlighting/vscode-extension ~/.vscode/extensions/odialang-vscode
```

**Other Editors:**
- **Sublime Text:** Copy `syntax-highlighting/textmate/odialang.tmLanguage.json`
- **Monaco Editor:** Import `syntax-highlighting/monaco/odialang-monaco.js`
- **GitHub:** Add `*.odia linguist-language=Odialang` to `.gitattributes`

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [📖 Tutorial](docs/TUTORIAL.md) | Step-by-step guide for beginners |
| [📋 Language Spec](docs/LANGUAGE.md) | Complete syntax and grammar reference |
| [🤝 Contributing](docs/CONTRIBUTING.md) | How to contribute to the project |
| [📝 Changelog](docs/CHANGELOG.md) | Version history and updates |

## 🎯 Features

- 🌏 **Native Language** - Program using familiar Odia words
- ⚡ **Compiles to JavaScript** - Runs on any Node.js platform
- 🛠️ **CLI Interface** - Simple commands for run, compile, and debug
- 📁 **File-based** - Write `.odia` files and execute directly
- 🔍 **Debug Tools** - View tokens and AST for learning

## 💡 Language Keywords

| Odia | English | Usage |
|------|---------|-------|
| `dhara` | let | Variable declaration |
| `dekha` | print | Output to console |
| `jadi` | if | Conditional statement |
| `tahale` | then | If-block start |
| `nahele` | else | Else block |
| `jebe` | while | While loop |
| `aarambha` | for | For loop start |
| `ru` | from/to | Range in for loop |
| `karya` | function | Function definition |
| `fera` | return | Return value |
| `sesa` | end | Block terminator |
| `sata` | true | Boolean true |
| `micha` | false | Boolean false |

## 📖 Example Programs

### Variables and Printing

```odia
dhara name = "Rama"
dhara age = 25
dhara isHappy = sata

dekha "Name: " + name
dekha "Age: " + age
dekha "Happy: " + isHappy
```

### Conditionals

```odia
dhara marks = 85

jadi marks >= 60 tahale
  dekha "You passed!"
nahele
  dekha "You failed"
sesa
```

### Loops

```odia
# While loop
dhara count = 1
jebe count <= 5
  dekha "Count: " + count
  count = count + 1
sesa

# For loop
aarambha i = 1 ru 5
  dekha "Number: " + i
sesa
```

### Functions

```odia
karya add(a, b)
  fera a + b
sesa

dhara result = add(10, 20)
dekha "Sum: " + result
```

See [examples/](examples/) folder for more programs.

## 🖥️ CLI Commands

```bash
# Run a .odia file
odia <file.odia>
odia run <file.odia>

# Compile to JavaScript
odia compile <file.odia>              # Outputs file.js
odia compile <file.odia> <output.js>  # Custom output name

# Debug commands
odia tokens <file.odia>   # View tokens
odia ast <file.odia>      # View AST

# Help
odia --help
```

## 🏗️ Installation from Source

```bash
# Clone the repository
git clone https://github.com/jyotishankar04/odialang
cd odialang

# Install dependencies
npm install

# Build
npm run build

# Link globally
npm link

# Test
odia --help
```

## 🧑‍💻 Development

```bash
# Build project
npm run build

# Clean build files
npm run clean

# Development mode
npm run dev
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

### Quick Contributions

- 🐛 [Report bugs](https://github.com/jyotishankar04/odialang/issues)
- 💡 [Suggest features](https://github.com/jyotishankar04/odialang/issues)
- 📝 [Improve docs](docs/)
- 🌐 Translate to other languages

## 📄 License

[MIT](LICENSE) © 2026 Odialang Contributors

## 🙏 Acknowledgments

- Built for the Odia-speaking community
- Inspired by the desire to make programming accessible in regional languages
- Powered by TypeScript and Node.js

---

**Made with ❤️ for Odia programmers** 🇮🇳

[⭐ Star this repo](https://github.com/jyotishankar04/odialang) if you find it useful!
