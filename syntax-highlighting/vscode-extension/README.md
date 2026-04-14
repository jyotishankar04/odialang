# Odialang Support for VS Code

Syntax highlighting and snippets for the Odialang programming language.

## Features

- 🎨 **Syntax Highlighting**: Full color support for keywords, strings, numbers, comments, and functions
- ✂️ **Code Snippets**: Quick insertion of common code patterns
- 📁 **File Icon**: Custom icon for `.odia` files
- 🔤 **Auto-indentation**: Automatic indentation based on code structure

## Installation

### From VS Code Marketplace

1. Open VS Code
2. Press `Ctrl+Shift+X` (or `Cmd+Shift+X` on Mac) to open Extensions
3. Search for "Odialang"
4. Click Install

### From Source

1. Copy this folder to your VS Code extensions directory:
   - Windows: `%USERPROFILE%\.vscode\extensions\`
   - Mac/Linux: `~/.vscode/extensions/`
2. Restart VS Code

## Usage

Open any `.odia` file and the syntax highlighting will automatically apply.

### Snippets

Type the following prefixes and press `Tab` to insert code:

| Prefix | Description |
|--------|-------------|
| `dhara` | Variable declaration |
| `dekha` | Print statement |
| `jadi` | If statement |
| `jadi-else` | If-Else statement |
| `jebe` | While loop |
| `aarambha` | For loop |
| `karya` | Function definition |
| `karya-return` | Function with return |

## Example

```odia
# My first Odialang program
dhara name = "Rama"
dekha "Hello, " + name + "!"

karya greet(person)
  dekha "Namaskar, " + person + "!"
sesa

greet("Odia")
```

## Supported Features

### Syntax Highlighting

- ✅ Keywords: `dhara`, `dekha`, `jadi`, `tahale`, `nahele`, `jebe`, `karya`, `fera`, `sesa`, `aarambha`, `ru`, `kar`
- ✅ Booleans: `sata`, `micha`
- ✅ Comments: `# single line comments`
- ✅ Strings: `"double quoted strings"`
- ✅ Numbers: `42`, `100`
- ✅ Operators: `+`, `-`, `*`, `/`, `==`, `!=`, `<`, `>`, `<=`, `>=`, `=`
- ✅ Functions: function names and parameters

### Editor Features

- ✅ Auto-closing brackets: `()`, `""`
- ✅ Comment toggling: `Ctrl+/`
- ✅ Auto-indentation for blocks
- ✅ Code folding

## Contributing

See the main [Odialang repository](https://github.com/devsuvam/odialang) for contribution guidelines.

## License

MIT © 2026 Odialang Contributors
