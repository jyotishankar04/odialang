#!/usr/bin/env node

/**
 * Manual setup script for Odialang syntax highlighting
 * Run with: npx odialang-setup or node node_modules/@devsuvam/odialang/scripts/setup-syntax.js
 */

const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🎨 Odialang Syntax Highlighting Setup\n');
console.log('This script will help you set up syntax highlighting for your editor.\n');

// Detect available editors
function detectEditors() {
  const editors = [];
  const home = os.homedir();
  
  // Check VSCode
  if (fs.existsSync(path.join(home, '.vscode'))) {
    editors.push('vscode');
  }
  
  return editors;
}

// Setup VSCode
function setupVSCode() {
  const vscodeExtSource = path.join(__dirname, '..', 'syntax-highlighting', 'vscode-extension');
  const vscodeExtDest = path.join(os.homedir(), '.vscode', 'extensions', 'odialang-vscode');
  
  if (!fs.existsSync(vscodeExtSource)) {
    console.log('❌ VSCode extension source not found');
    return;
  }
  
  // Copy extension
  copyRecursive(vscodeExtSource, vscodeExtDest);
  console.log('✅ VSCode extension installed!');
  console.log('   📍 Location:', vscodeExtDest);
  console.log('   🔄 Please restart VSCode to activate\n');
}

// Setup Sublime Text
function setupSublimeText() {
  const grammarSource = path.join(__dirname, '..', 'syntax-highlighting', 'textmate', 'odialang.tmLanguage.json');
  console.log('📋 Sublime Text Setup Instructions:');
  console.log('   1. Copy:', grammarSource);
  console.log('   2. To: ~/Library/Application Support/Sublime Text/Packages/User/ (macOS)');
  console.log('      Or: ~/.config/sublime-text/Packages/User/ (Linux)');
  console.log('      Or: %APPDATA%\Sublime Text\Packages\User\ (Windows)');
  console.log('   3. Rename to: Odialang.tmLanguage');
  console.log('   4. Restart Sublime Text\n');
}

// Show Monaco setup
function showMonacoSetup() {
  const monacoPath = path.join(__dirname, '..', 'syntax-highlighting', 'monaco', 'odialang-monaco.js');
  console.log('🌐 Monaco Editor Setup:');
  console.log('   Import:', monacoPath);
  console.log('   Example:');
  console.log('   ```html');
  console.log('   <script src="odialang-monaco.js"></script>');
  console.log('   <script>');
  console.log('     registerOdialangLanguage(monaco);');
  console.log('     monaco.editor.create(document.getElementById("editor"), {');
  console.log('       language: "odialang"');
  console.log('     });');
  console.log('   </script>');
  console.log('   ```\n');
}

// Recursively copy directory
function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      const srcPath = path.join(src, entry);
      const destPath = path.join(dest, entry);
      copyRecursive(srcPath, destPath);
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Interactive menu
function showMenu() {
  const editors = detectEditors();
  
  console.log('Available options:\n');
  console.log('1. Install VSCode extension');
  console.log('2. Sublime Text setup instructions');
  console.log('3. Monaco Editor setup instructions');
  console.log('4. Install all (VSCode + show others)');
  console.log('5. Exit\n');
  
  rl.question('Select an option (1-5): ', (answer) => {
    switch(answer.trim()) {
      case '1':
        setupVSCode();
        break;
      case '2':
        setupSublimeText();
        break;
      case '3':
        showMonacoSetup();
        break;
      case '4':
        if (editors.includes('vscode')) setupVSCode();
        setupSublimeText();
        showMonacoSetup();
        break;
      case '5':
        console.log('\n👋 Goodbye!');
        rl.close();
        return;
      default:
        console.log('❌ Invalid option\n');
    }
    
    console.log('');
    showMenu();
  });
}

// Main
if (require.main === module) {
  showMenu();
}

module.exports = { setupVSCode, setupSublimeText, showMonacoSetup };
