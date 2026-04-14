// Odialang Syntax Highlighting Package
// Main entry point

const fs = require('fs');
const path = require('path');

// Load TextMate grammar
const textmateGrammar = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'textmate', 'odialang.tmLanguage.json'), 'utf8')
);

// Export TextMate grammar
module.exports.textmateGrammar = textmateGrammar;

// Export paths
module.exports.paths = {
  textmate: path.join(__dirname, 'textmate', 'odialang.tmLanguage.json'),
  monaco: path.join(__dirname, 'monaco', 'odialang-monaco.js'),
  vscode: path.join(__dirname, 'vscode-extension')
};

// Helper function to get grammar as JSON
module.exports.getGrammar = function() {
  return textmateGrammar;
};

// Helper function to get grammar as string
module.exports.getGrammarString = function() {
  return JSON.stringify(textmateGrammar, null, 2);
};
