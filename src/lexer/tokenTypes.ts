export enum TokenType {
  KEYWORD = "KEYWORD",
  IDENTIFIER = "IDENTIFIER",
  NUMBER = "NUMBER",
  STRING = "STRING",
  BOOLEAN = "BOOLEAN",
  ARITHMETIC_OPERATOR = "ARITHMETIC_OPERATOR",
  ASSIGNMENT_OPERATOR = "ASSIGNMENT_OPERATOR",
  RELATIONAL_OPERATOR = "RELATIONAL_OPERATOR",
  LPAREN = "LPAREN",
  RPAREN = "RPAREN",
  COMMA = "COMMA",
  NEWLINE = "NEWLINE",
  EOF = "EOF",
}

export type TokenValue = string | number | boolean | null;

export interface Token {
  type: TokenType;
  value: TokenValue;
  line: number;
  column: number;
}
