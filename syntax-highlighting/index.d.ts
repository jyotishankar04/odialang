export interface TextMateGrammar {
  $schema: string;
  name: string;
  scopeName: string;
  fileTypes: string[];
  patterns: Array<{ include: string }>;
  repository: {
    [key: string]: {
      patterns?: Array<{
        name?: string;
        match?: string;
        begin?: string;
        end?: string;
        beginCaptures?: { [key: string]: { name: string } };
        captures?: { [key: string]: { name: string } };
      }>;
    };
  };
}

export interface MonacoLanguageDefinition {
  id: string;
  configuration: {
    comments: { lineComment: string };
    brackets: string[][];
    autoClosingPairs: Array<{ open: string; close: string }>;
    surroundingPairs: Array<{ open: string; close: string }>;
    folding: { offSide: boolean };
  };
  tokenizer: {
    root: Array<[string | RegExp, string | object]>;
    string: Array<[string | RegExp, string | object]>;
  };
}

export const textmateGrammar: TextMateGrammar;
export const paths: {
  textmate: string;
  monaco: string;
  vscode: string;
};

export function getGrammar(): TextMateGrammar;
export function getGrammarString(): string;
