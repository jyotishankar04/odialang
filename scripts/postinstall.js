#!/usr/bin/env node

/**
 * Postinstall script for @devsuvam/odialang
 * Automatically installs VSCode extension for syntax highlighting
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

console.log('🎨 Setting up Odialang syntax highlighting...\n');

// Detect VSCode extensions directory based on OS
function getVSCodeExtensionsPath() {
  const home = os.homedir();
  const platform = os.platform();
  
  switch (platform) {
    case 'darwin': // macOS
      return path.join(home, '.vscode', 'extensions');
    case 'win32': // Windows
      return path.join(home, '.vscode', 'extensions');
    case 'linux': // Linux
    default:
      return path.join(home, '.vscode', 'extensions');
  }
}

// Check if VSCode is installed by looking for extensions directory
function isVSCodeInstalled() {
  const extensionsPath = getVSCodeExtensionsPath();
  return fs.existsSync(extensionsPath);
}

// Install VSCode extension
function installVSCodeExtension() {
  const vscodeExtSource = path.join(__dirname, '..', 'syntax-highlighting', 'vscode-extension');
  const vscodeExtDest = path.join(getVSCodeExtensionsPath(), 'odialang-vscode');
  
  // Check if extension already exists
  if (fs.existsSync(vscodeExtDest)) {
    console.log('✅ VSCode extension already installed');
    return;
  }
  
  // Check if source exists
  if (!fs.existsSync(vscodeExtSource)) {
    console.log('⚠️  VSCode extension source not found');
    return;
  }
  
  try {
    // Copy extension to VSCode extensions folder
    copyRecursive(vscodeExtSource, vscodeExtDest);
    console.log('✅ VSCode extension installed successfully!');
    console.log('   Location:', vscodeExtDest);
    console.log('   📝 Please restart VSCode to activate syntax highlighting\n');
  } catch (error) {
    console.error('❌ Failed to install VSCode extension:', error.message);
    console.log('   You can manually install it from:', vscodeExtSource);
  }
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

// Setup syntax highlighting for other editors
function setupOtherEditors() {
  const syntaxHighlightingPath = path.join(__dirname, '..', 'syntax-highlighting');
  
  console.log('📦 Syntax highlighting package available at:');
  console.log('   ', syntaxHighlightingPath);
  console.log('');
  console.log('🎯 Supported editors:');
  console.log('   • VS Code: Auto-installed ✅');
  console.log('   • Monaco Editor: Import from', path.join(syntaxHighlightingPath, 'monaco'));
  console.log('   • Sublime Text: Copy', path.join(syntaxHighlightingPath, 'textmate', 'odialang.tmLanguage.json'));
  console.log('   • GitHub: Add to .gitattributes: *.odia linguist-language=Odialang');
  console.log('');
}

// Main function
function main() {
  // Check if we're in a development environment (skip if so)
  if (process.env.NODE_ENV === 'development' || process.env.ODIALANG_SKIP_POSTINSTALL) {
    console.log('⏭️  Skipping postinstall (development mode)\n');
    return;
  }
  
  // Install VSCode extension if VSCode is detected
  if (isVSCodeInstalled()) {
    console.log('📝 VSCode detected, installing extension...');
    installVSCodeExtension();
  } else {
    console.log('ℹ️  VSCode not detected, skipping extension install');
  }
  
  // Show setup info for other editors
  setupOtherEditors();
  
  console.log('✨ Odialang syntax highlighting setup complete!\n');
}

main();
