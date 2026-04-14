import { type Token, TokenType } from "../lexer/tokenTypes";
import type {
    AssignmentExpressionNode,
    BinaryExpressionNode,
    BooleanLiteralNode,
    CallExpressionNode,
    ExpressionNode,
    ExpressionStatementNode,
    ForStatementNode,
    FunctionDeclarationNode,
    IdentifierNode,
    IfStatementNode,
    NumberLiteralNode,
    PrintStatementNode,
    ProgramNode,
    ReturnStatementNode,
    StatementNode,
    StringLiteralNode,
    VariableDeclarationNode,
    WhileStatementNode,
} from "./ast";

export class Parser {
    private tokens: Token[];
    private current = 0;

    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    public parseProgram(): ProgramNode {
        const body: StatementNode[] = [];

        this.skipNewlines();

        while (!this.isAtEnd()) {
            body.push(this.parseStatement());
            this.skipNewlines();
        }

        return {
            type: "Program",
            body,
        };
    }

    private parseStatement(): StatementNode {
        this.skipNewlines();

        if (this.isKeyword("dhara")) {
            return this.parseVariableDeclaration();
        }

        if (this.isKeyword("dekha")) {
            return this.parsePrintStatement();
        }

        if (this.isKeyword("jadi")) {
            return this.parseIfStatement();
        }

        if (this.isKeyword("jebe")) {
            return this.parseWhileStatement();
        }

        if (this.isKeyword("karya")) {
            return this.parseFunctionDeclaration();
        }

        if (this.isKeyword("fera")) {
            return this.parseReturnStatement();
        }
        if (this.isKeyword("aarambha")) {
            return this.parseForStatement();
        }
        return this.parseExpressionStatement();
    }

    private parseVariableDeclaration(): VariableDeclarationNode {
        this.expectKeyword("dhara");

        const nameToken = this.expect(
            TokenType.IDENTIFIER,
            "Expected variable name after 'dhara'",
        );

        const identifier: IdentifierNode = {
            type: "Identifier",
            name: String(nameToken.value),
        };

        this.expectAssignmentOperator("Expected '=' after variable name");

        const value = this.parseExpression();

        return {
            type: "VariableDeclaration",
            identifier,
            value,
        };
    }

    private parsePrintStatement(): PrintStatementNode {
        this.expectKeyword("dekha");

        const expression = this.parseExpression();

        return {
            type: "PrintStatement",
            expression,
        };
    }

    private parseIfStatement(): IfStatementNode {
        this.expectKeyword("jadi");

        const condition = this.parseExpression();

        this.expectKeyword("tahale");

        this.skipNewlines();

        const thenBranch: StatementNode[] = [];
        while (
            !this.isAtEnd() &&
            !this.isKeyword("nahele") &&
            !this.isKeyword("sesa")
        ) {
            thenBranch.push(this.parseStatement());
            this.skipNewlines();
        }

        let elseBranch: StatementNode[] | null = null;

        if (this.isKeyword("nahele")) {
            this.expectKeyword("nahele");
            this.skipNewlines();

            elseBranch = [];
            while (!this.isAtEnd() && !this.isKeyword("sesa")) {
                elseBranch.push(this.parseStatement());
                this.skipNewlines();
            }
        }

        this.expectKeyword("sesa");

        return {
            type: "IfStatement",
            condition,
            thenBranch,
            elseBranch,
        };
    }
    private parseForStatement(): ForStatementNode {
        this.expectKeyword("aarambha");

        const iteratorToken = this.expect(
            TokenType.IDENTIFIER,
            "Expected iterator variable after 'aarambha'"
        );

        const iterator: IdentifierNode = {
            type: "Identifier",
            name: String(iteratorToken.value),
        };

        this.expectAssignmentOperator("Expected '=' after iterator");

        const start = this.parseExpression();

        this.expectKeyword("ru");

        const end = this.parseExpression();

        this.skipNewlines();

        const body: StatementNode[] = [];

        while (!this.isAtEnd() && !this.isKeyword("sesa")) {
            body.push(this.parseStatement());
            this.skipNewlines();
        }

        this.expectKeyword("sesa");

        return {
            type: "ForStatement",
            iterator,
            start,
            end,
            body,
        };
    }
    private parseWhileStatement(): WhileStatementNode {
        this.expectKeyword("jebe");

        const condition = this.parseExpression();

        this.skipNewlines();

        const body: StatementNode[] = [];

        while (!this.isAtEnd() && !this.isKeyword("sesa")) {
            body.push(this.parseStatement());
            this.skipNewlines();
        }

        this.expectKeyword("sesa");

        return {
            type: "WhileStatement",
            condition,
            body,
        };
    }

    private parseFunctionDeclaration(): FunctionDeclarationNode {
        this.expectKeyword("karya");

        const nameToken = this.expect(
            TokenType.IDENTIFIER,
            "Expected function name after 'karya'",
        );

        const name: IdentifierNode = {
            type: "Identifier",
            name: String(nameToken.value),
        };

        this.expect(TokenType.LPAREN, "Expected '(' after function name");

        const params: IdentifierNode[] = [];

        if (!this.check(TokenType.RPAREN)) {
            do {
                const paramToken = this.expect(
                    TokenType.IDENTIFIER,
                    "Expected parameter name",
                );

                params.push({
                    type: "Identifier",
                    name: String(paramToken.value),
                });
            } while (this.match(TokenType.COMMA));
        }

        this.expect(TokenType.RPAREN, "Expected ')' after parameters");
        this.skipNewlines();

        const body: StatementNode[] = [];

        while (!this.isAtEnd() && !this.isKeyword("sesa")) {
            body.push(this.parseStatement());
            this.skipNewlines();
        }

        this.expectKeyword("sesa");

        return {
            type: "FunctionDeclaration",
            name,
            params,
            body,
        };
    }

    private parseReturnStatement(): ReturnStatementNode {
        this.expectKeyword("fera");

        if (
            this.check(TokenType.NEWLINE) ||
            this.check(TokenType.EOF) ||
            this.isKeyword("sesa")
        ) {
            return {
                type: "ReturnStatement",
                expression: null,
            };
        }

        const expression = this.parseExpression();

        return {
            type: "ReturnStatement",
            expression,
        };
    }

    private parseExpressionStatement(): ExpressionStatementNode {
        const expression = this.parseExpression();

        return {
            type: "ExpressionStatement",
            expression,
        };
    }

    private parseExpression(): ExpressionNode {
        return this.parseAssignment();
    }

    private parseAssignment(): ExpressionNode {
        const left = this.parseRelational();

        if (this.match(TokenType.ASSIGNMENT_OPERATOR)) {
            const equals = this.previous();

            if (left.type !== "Identifier") {
                throw this.error(equals, "Invalid assignment target");
            }

            const right = this.parseAssignment();

            const assignmentNode: AssignmentExpressionNode = {
                type: "AssignmentExpression",
                left,
                right,
            };

            return assignmentNode;
        }

        return left;
    }

    private parseRelational(): ExpressionNode {
        let expression = this.parseTerm();

        while (this.match(TokenType.RELATIONAL_OPERATOR)) {
            const operator = String(this.previous().value);
            const right = this.parseTerm();

            const node: BinaryExpressionNode = {
                type: "BinaryExpression",
                operator,
                left: expression,
                right,
            };

            expression = node;
        }

        return expression;
    }

    private parseTerm(): ExpressionNode {
        let expression = this.parseFactor();

        while (
            this.check(TokenType.ARITHMETIC_OPERATOR) &&
            ["+", "-"].includes(String(this.peek().value))
        ) {
            this.advance();
            const operator = String(this.previous().value);
            const right = this.parseFactor();

            const node: BinaryExpressionNode = {
                type: "BinaryExpression",
                operator,
                left: expression,
                right,
            };

            expression = node;
        }

        return expression;
    }

    private parseFactor(): ExpressionNode {
        let expression = this.parseCall();

        while (
            this.check(TokenType.ARITHMETIC_OPERATOR) &&
            ["*", "/"].includes(String(this.peek().value))
        ) {
            this.advance();
            const operator = String(this.previous().value);
            const right = this.parseCall();

            const node: BinaryExpressionNode = {
                type: "BinaryExpression",
                operator,
                left: expression,
                right,
            };

            expression = node;
        }

        return expression;
    }

    private parseCall(): ExpressionNode {
        let expression = this.parsePrimary();

        while (true) {
            if (this.match(TokenType.LPAREN)) {
                if (expression.type !== "Identifier") {
                    throw this.error(this.previous(), "Only identifiers can be called");
                }

                expression = this.finishCall(expression);
            } else {
                break;
            }
        }

        return expression;
    }

    private finishCall(callee: IdentifierNode): CallExpressionNode {
        const args: ExpressionNode[] = [];

        if (!this.check(TokenType.RPAREN)) {
            do {
                args.push(this.parseExpression());
            } while (this.match(TokenType.COMMA));
        }

        this.expect(TokenType.RPAREN, "Expected ')' after arguments");

        return {
            type: "CallExpression",
            callee,
            arguments: args,
        };
    }

    private parsePrimary(): ExpressionNode {
        const token = this.peek();

        if (this.match(TokenType.NUMBER)) {
            const node: NumberLiteralNode = {
                type: "NumberLiteral",
                value: Number(this.previous().value),
            };
            return node;
        }

        if (this.match(TokenType.STRING)) {
            const node: StringLiteralNode = {
                type: "StringLiteral",
                value: String(this.previous().value),
            };
            return node;
        }

        if (this.match(TokenType.BOOLEAN)) {
            const node: BooleanLiteralNode = {
                type: "BooleanLiteral",
                value: Boolean(this.previous().value),
            };
            return node;
        }

        if (this.match(TokenType.IDENTIFIER)) {
            const node: IdentifierNode = {
                type: "Identifier",
                name: String(this.previous().value),
            };
            return node;
        }

        if (this.match(TokenType.LPAREN)) {
            const expression = this.parseExpression();
            this.expect(TokenType.RPAREN, "Expected ')' after expression");
            return expression;
        }

        throw this.error(token, `Unexpected token '${token.value}'`);
    }

    private skipNewlines(): void {
        while (this.match(TokenType.NEWLINE)) {
            // ignore
        }
    }

    private match(...types: TokenType[]): boolean {
        for (const type of types) {
            if (this.check(type)) {
                this.advance();
                return true;
            }
        }
        return false;
    }

    private expect(type: TokenType, message: string): Token {
        if (this.check(type)) {
            return this.advance();
        }

        throw this.error(this.peek(), message);
    }

    private expectKeyword(keyword: string): Token {
        const token = this.peek();

        if (token.type === TokenType.KEYWORD && token.value === keyword) {
            return this.advance();
        }

        throw this.error(token, `Expected keyword '${keyword}'`);
    }

    private expectAssignmentOperator(message: string): Token {
        const token = this.peek();

        if (token.type === TokenType.ASSIGNMENT_OPERATOR && token.value === "=") {
            return this.advance();
        }

        throw this.error(token, message);
    }

    private isKeyword(keyword: string): boolean {
        const token = this.peek();
        return token.type === TokenType.KEYWORD && token.value === keyword;
    }

    private check(type: TokenType): boolean {
        if (this.current >= this.tokens.length) {
            return false;
        }
        return this.tokens[this.current]?.type === type;
    }

    private advance(): Token {
        if (!this.isAtEnd()) {
            this.current++;
        }
        return this.previous();
    }

    private previous(): Token {
        return this.tokens[this.current - 1]!;
    }

    private peek(): Token {
        return this.tokens[this.current]!;
    }

    private isAtEnd(): boolean {
        return this.peek().type === TokenType.EOF;
    }

    private error(token: Token, message: string): Error {
        return new Error(
            `[Parser Error] ${message} at line ${token.line}, column ${token.column}`,
        );
    }
}