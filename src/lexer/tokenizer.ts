import { KEYWORDS } from "./keywords";
import { type Token, TokenType, type TokenValue } from "./tokenTypes";

export function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  let currentToken: Token = {
    type: TokenType.EOF,
    value: "",
    line: 1,
    column: 0,
  };
  let line = 1;
  let column = 1;
  let current = 0;

  function addToken(
    type: TokenType,
    value: TokenValue,
    tokenLine: number = line,
    tokenColumn: number = column,
  ) {
    const token: Token = {
      type,
      value,
      line: tokenLine,
      column: tokenColumn,
    };
    tokens.push(token);
  }
  function peek(offset: number = 0): string | undefined {
    return input[current + offset];
  }
  function advance(): string | undefined {
    const char = input[current++];
    if (char === "\n") {
      line++;
      column = 1;
    } else {
      column++;
    }
    return char;
  }
  function isWhitespace(char: string | undefined): boolean {
    return char === " " || char === "\t" || char === "\r";
  }
  function isDigit(char: string | undefined): boolean {
    return char !== undefined && char >= "0" && char <= "9";
  }
  function isAlpha(char: string | undefined): boolean {
    return (
      char !== undefined &&
      ((char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") ||
        char === "_")
    );
  }
  function isAlphaNumeric(char: string | undefined): boolean {
    return isAlpha(char) || isDigit(char);
  }
  while (current < input.length) {
    const char = peek();

    if (isWhitespace(char)) {
      advance();
      continue;
    }

    if (char === "\n") {
      addToken(TokenType.NEWLINE, "\n", line, column);
      advance();
      continue;
    }

    if (char === "#") {
      while (current < input.length && peek() !== "\n") {
        advance();
      }
      continue;
    }

    if (char === "(") {
      addToken(TokenType.LPAREN, "(", line, column);
      advance();
      continue;
    }

    if (char === ")") {
      addToken(TokenType.RPAREN, ")", line, column);
      advance();
      continue;
    }

    if (char === ",") {
      addToken(TokenType.COMMA, ",", line, column);
      advance();
      continue;
    }

    const twoChar = (char ?? "") + (peek(1) ?? "");

    if (["==", "!=", ">=", "<="].includes(twoChar)) {
      addToken(TokenType.RELATIONAL_OPERATOR, twoChar, line, column);
      advance();
      advance();
      continue;
    }

    if ([">", "<"].includes(char ?? "")) {
      addToken(TokenType.RELATIONAL_OPERATOR, char ?? "", line, column);
      advance();
      continue;
    }
    if (["="].includes(char ?? "")) {
      addToken(TokenType.ASSIGNMENT_OPERATOR, char ?? "", line, column);
      advance();
      continue;
    }
    if (["+", "-", "*", "/", "%"].includes(char ?? "")) {
      addToken(TokenType.ARITHMETIC_OPERATOR, char ?? "", line, column);
      advance();
      continue;
    }

    if (char === '"') {
      const startLine = line;
      const startColumn = column;
      advance(); // skip opening quote

      let value = "";

      while (current < input.length && peek() !== '"') {
        if (peek() === "\\") {
          advance();
          const escaped = peek();
          if (escaped === '"') {
            value += '"';
            advance();
          } else if (escaped === "\\") {
            value += "\\";
            advance();
          } else if (escaped === "n") {
            value += "\n";
            advance();
          } else if (escaped === "t") {
            value += "\t";
            advance();
          } else {
            value += "\\";
          }
          continue;
        }

        value += advance();
      }

      if (peek() !== '"') {
        throw new Error(
          `Unterminated string at line ${startLine}, column ${startColumn}`,
        );
      }

      advance(); // skip closing quote
      addToken(TokenType.STRING, value, startLine, startColumn);
      continue;
    }

    if (isDigit(char)) {
      const startLine = line;
      const startColumn = column;
      let value = "";

      while (current < input.length && isDigit(peek())) {
        value += advance();
      }

      if (peek() === "." && peek(1) !== undefined && isDigit(peek(1))) {
        value += advance();
        while (current < input.length && isDigit(peek())) {
          value += advance();
        }
      }

      addToken(TokenType.NUMBER, Number(value), startLine, startColumn);
      continue;
    }

    if (isAlpha(char)) {
      const startLine = line;
      const startColumn = column;
      let value = "";

      while (current < input.length && isAlphaNumeric(peek())) {
        value += advance();
      }

      if (value === "sata" || value === "micha") {
        addToken(TokenType.BOOLEAN, value === "sata", startLine, startColumn);
      } else if (KEYWORDS.has(value)) {
        addToken(TokenType.KEYWORD, value, startLine, startColumn);
      } else {
        addToken(TokenType.IDENTIFIER, value, startLine, startColumn);
      }

      continue;
    }

    throw new Error(
      `Unexpected character '${char}' at line ${line}, column ${column}`,
    );
  }
  addToken(TokenType.EOF, "", line, column);
  return tokens;
}
