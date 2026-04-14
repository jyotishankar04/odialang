// Odialang Language Definition for Monaco Editor
// Usage: Import this file and call registerOdialangLanguage(monaco)

const odialangLanguageDefinition = {
  // Language ID
  id: 'odialang',
  
  // Language configuration
  configuration: {
    comments: {
      lineComment: '#'
    },
    brackets: [
      ['(', ')']
    ],
    autoClosingPairs: [
      { open: '(', close: ')' },
      { open: '"', close: '"' }
    ],
    surroundingPairs: [
      { open: '(', close: ')' },
      { open: '"', close: '"' }
    ],
    folding: {
      offSide: true
    }
  },

  // Monarch tokenizer (syntax highlighter)
  tokenizer: {
    root: [
      // Comments
      [/#.*$/, 'comment'],
      
      // Strings
      [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
      
      // Keywords
      [/\b(dhara|dekha|jadi|tahale|nahele|jebe|karya|fera|sesa|aarambha|ru|kar)\b/, 'keyword'],
      
      // Booleans
      [/\b(sata|micha)\b/, 'keyword.constant'],
      
      // Numbers
      [/\b[0-9]+\b/, 'number'],
      
      // Function calls
      [/([a-zA-Z_][a-zA-Z0-9_]*)(?=\()/, 'identifier.function'],
      
      // Operators
      [/==|!=|<=|>=/, 'operator.comparison'],
      [/[+\-*/]/, 'operator.arithmetic'],
      [/=/, 'operator.assignment'],
      
      // Identifiers
      [/[a-zA-Z_][a-zA-Z0-9_]*/, 'identifier'],
      
      // Whitespace
      [/\s+/, 'white']
    ],
    
    string: [
      [/[^\\"]+/, 'string'],
      [/\\./, 'string.escape'],
      [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
    ]
  }
};

// Theme definition for Odialang (Dark)
const odialangTheme = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'keyword', foreground: 'FF7B72', fontStyle: 'bold' },
    { token: 'keyword.constant', foreground: '79C0FF' },
    { token: 'identifier.function', foreground: 'D2A8FF' },
    { token: 'identifier', foreground: 'E6EDF3' },
    { token: 'string', foreground: 'A5D6FF' },
    { token: 'string.escape', foreground: '79C0FF' },
    { token: 'number', foreground: '79C0FF' },
    { token: 'comment', foreground: '8B949E', fontStyle: 'italic' },
    { token: 'operator.arithmetic', foreground: 'FF7B72' },
    { token: 'operator.comparison', foreground: 'FF7B72' },
    { token: 'operator.assignment', foreground: 'FF7B72' }
  ],
  colors: {
    'editor.background': '#0D1117',
    'editor.foreground': '#E6EDF3',
    'editor.lineHighlightBackground': '#161B22',
    'editor.selectionBackground': '#264F78',
    'editor.inactiveSelectionBackground': '#264F7855'
  }
};

// Light theme
const odialangLightTheme = {
  base: 'vs',
  inherit: true,
  rules: [
    { token: 'keyword', foreground: 'D73A49', fontStyle: 'bold' },
    { token: 'keyword.constant', foreground: '005CC5' },
    { token: 'identifier.function', foreground: '6F42C1' },
    { token: 'identifier', foreground: '#24292E' },
    { token: 'string', foreground: '032F62' },
    { token: 'string.escape', foreground: '005CC5' },
    { token: 'number', foreground: '005CC5' },
    { token: 'comment', foreground: '6A737D', fontStyle: 'italic' },
    { token: 'operator.arithmetic', foreground: 'D73A49' },
    { token: 'operator.comparison', foreground: 'D73A49' },
    { token: 'operator.assignment', foreground: 'D73A49' }
  ],
  colors: {
    'editor.background': '#FFFFFF',
    'editor.foreground': '#24292E',
    'editor.lineHighlightBackground': '#F6F8FA',
    'editor.selectionBackground': '#0366D625',
    'editor.inactiveSelectionBackground': '#0366D625'
  }
};

// Function to register the language with Monaco
function registerOdialangLanguage(monaco) {
  // Register the language
  monaco.languages.register({
    id: odialangLanguageDefinition.id,
    extensions: ['.odia'],
    aliases: ['Odialang', 'odia']
  });

  // Set language configuration
  monaco.languages.setLanguageConfiguration(
    odialangLanguageDefinition.id,
    odialangLanguageDefinition.configuration
  );

  // Set tokenizer
  monaco.languages.setMonarchTokensProvider(
    odialangLanguageDefinition.id,
    {
      tokenizer: odialangLanguageDefinition.tokenizer
    }
  );

  // Define themes
  monaco.editor.defineTheme('odialang-dark', odialangTheme);
  monaco.editor.defineTheme('odialang-light', odialangLightTheme);

  // Completion item provider (autocomplete)
  monaco.languages.registerCompletionItemProvider(odialangLanguageDefinition.id, {
    provideCompletionItems: function(model, position) {
      const suggestions = [
        {
          label: 'dhara',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'dhara ${1:name} = ${2:value}',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Declare a variable'
        },
        {
          label: 'dekha',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'dekha ${1:message}',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Print to console'
        },
        {
          label: 'jadi',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'jadi ${1:condition} tahale\n  ${2:# code}\nsesa',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'If statement'
        },
        {
          label: 'jebe',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'jebe ${1:condition}\n  ${2:# code}\nsesa',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'While loop'
        },
        {
          label: 'karya',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'karya ${1:functionName}(${2:params})\n  ${3:# code}\nsesa',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Define a function'
        },
        {
          label: 'aarambha',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'aarambha ${1:i} = ${2:1} ru ${3:10}\n  ${4:# code}\nsesa',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'For loop'
        },
        {
          label: 'fera',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'fera ${1:value}',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Return statement'
        },
        {
          label: 'sata',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'sata',
          documentation: 'Boolean true'
        },
        {
          label: 'micha',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'micha',
          documentation: 'Boolean false'
        }
      ];
      return { suggestions };
    }
  });
}

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    registerOdialangLanguage: registerOdialangLanguage,
    odialangLanguageDefinition: odialangLanguageDefinition,
    odialangTheme: odialangTheme,
    odialangLightTheme: odialangLightTheme
  };
}

if (typeof window !== 'undefined') {
  window.registerOdialangLanguage = registerOdialangLanguage;
  window.odialangLanguageDefinition = odialangLanguageDefinition;
  window.odialangTheme = odialangTheme;
  window.odialangLightTheme = odialangLightTheme;
}
