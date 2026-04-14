# Odialang Syntax Highlighting

Syntax highlighting support for the Odialang programming language across multiple editors and platforms.

## 📦 Package Contents

```
syntax-highlighting/
├── textmate/                    # TextMate grammar (universal)
│   └── odialang.tmLanguage.json
├── monaco/                      # Monaco Editor support
│   ├── odialang-monaco.js
│   └── editor-demo.html
├── vscode-extension/            # VS Code extension
│   ├── package.json
│   ├── language-configuration.json
│   ├── syntaxes/
│   │   └── odialang.tmLanguage.json
│   ├── snippets/
│   │   └── odialang.json
│   └── README.md
├── package.json                 # NPM package
├── index.js                     # Main entry point
└── index.d.ts                   # TypeScript definitions
```

## 🎯 Supported Editors

| Editor | Method | Status |
|--------|--------|--------|
| **VS Code** | Extension | ✅ Ready |
| **Monaco Editor** | JavaScript | ✅ Ready |
| **GitHub** | Linguist | ✅ TextMate grammar |
| **Sublime Text** | TextMate | ✅ Compatible |
| **Atom** | TextMate | ✅ Compatible |
| **Vim** | TextMate conversion | 🔧 Manual setup |
| **Emacs** | TextMate conversion | 🔧 Manual setup |

## 🚀 Installation

### VS Code

```bash
# Copy extension to VS Code extensions folder
cp -r vscode-extension ~/.vscode/extensions/odialang-vscode
# Restart VS Code
```

Or install from VS Code Marketplace (when published):
```
Ctrl+Shift+X → Search "Odialang" → Install
```

### Monaco Editor (Web)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs/loader.min.js"></script>
<script src="path/to/odialang-monaco.js"></script>
<script>
  require(['vs/editor/editor.main'], function() {
    registerOdialangLanguage(monaco);
    
    monaco.editor.create(document.getElementById('editor'), {
      value: 'dhara x = 10',
      language: 'odialang',
      theme: 'odialang-dark'
    });
  });
</script>
```

### Node.js

```bash
npm install odialang-syntax
```

```javascript
const odialangSyntax = require('odialang-syntax');

// Get TextMate grammar
const grammar = odialangSyntax.getGrammar();
console.log(grammar);

// Get file paths
console.log(odialangSyntax.paths.textmate);  // Path to .tmLanguage.json
console.log(odialangSyntax.paths.monaco);    // Path to Monaco JS file
console.log(odialangSyntax.paths.vscode);    // Path to VS Code extension
```

## 🎨 Color Themes

### VS Code
- Uses editor's default theme with Odialang token colors
- Compatible with all VS Code themes

### Monaco Editor
Two built-in themes:

**Dark Theme (`odialang-dark`):**
- Keywords: `#FF7B72` (red)
- Strings: `#A5D6FF` (light blue)
- Numbers: `#79C0FF` (blue)
- Functions: `#D2A8FF` (purple)
- Comments: `#8B949E` (gray, italic)

**Light Theme (`odialang-light`):**
- Keywords: `#D73A49` (red)
- Strings: `#032F62` (dark blue)
- Numbers: `#005CC5` (blue)
- Functions: `#6F42C1` (purple)
- Comments: `#6A737D` (gray, italic)

## ✨ Supported Syntax

### Keywords
```odia
dhara, dekha, jadi, tahale, nahele, jebe, karya, fera, sesa, aarambha, ru, kar
```

### Booleans
```odia
sata, micha
```

### Operators
```odia
+, -, *, /, ==, !=, <, >, <=, >=, =
```

### Comments
```odia
# Single-line comments
```

### Strings
```odia
"Double-quoted strings"
```

### Numbers
```odia
42, 100, 2026
```

## 🔧 TextMate Grammar

The TextMate grammar can be used with any editor that supports TextMate bundles:

### Sublime Text
1. Copy `textmate/odialang.tmLanguage.json` to Sublime's Packages directory
2. Rename to `Odialang.tmLanguage`
3. Restart Sublime Text

### GitHub Linguist
Add to your `.gitattributes`:
```
*.odia linguist-language=Odialang
```

Then add the grammar to GitHub's linguist (requires PR to github/linguist).

## 📝 VS Code Snippets

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

## 🛠️ Development

### VS Code Extension

```bash
cd vscode-extension

# Install vsce (VS Code Extension CLI)
npm install -g vsce

# Package extension
vsce package

# Publish to marketplace (requires PAT)
vsce publish
```

### Monaco Editor Demo

```bash
cd monaco
# Open editor-demo.html in a browser
# Or serve with a local server:
python3 -m http.server 8000
# Then visit http://localhost:8000/editor-demo.html
```

## 📄 File Types

- **Extension:** `.odia`
- **MIME Type:** `text/x-odialang` (proposed)
- **Scope:** `source.odia`

## 🤝 Contributing

1. Fork the repository
2. Make changes to grammar files
3. Test in VS Code and Monaco
4. Submit a pull request

## 📄 License

MIT © 2026 Odialang Contributors

## 🔗 Links

- [Odialang Repository](https://github.com/devsuvam/odialang)
- [VS Code Extension Docs](https://code.visualstudio.com/api/language-extensions/overview)
- [Monaco Editor Docs](https://microsoft.github.io/monaco-editor/)
- [TextMate Grammar Docs](https://macromates.com/manual/en/language_grammars)
