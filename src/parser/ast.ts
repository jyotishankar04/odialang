export type ProgramNode = {
  type: "Program";
  body: StatementNode[];
};

export type StatementNode =
  | VariableDeclarationNode
  | PrintStatementNode
  | ExpressionStatementNode
  | IfStatementNode
  | WhileStatementNode
  | FunctionDeclarationNode
  | ReturnStatementNode
  | ForStatementNode;

export type ExpressionNode =
  | NumberLiteralNode
  | StringLiteralNode
  | BooleanLiteralNode
  | IdentifierNode
  | BinaryExpressionNode
  | AssignmentExpressionNode
  | CallExpressionNode
  | UnaryExpressionNode;

export type VariableDeclarationNode = {
  type: "VariableDeclaration";
  identifier: IdentifierNode;
  value: ExpressionNode;
};

export type PrintStatementNode = {
  type: "PrintStatement";
  expression: ExpressionNode;
};

export type ExpressionStatementNode = {
  type: "ExpressionStatement";
  expression: ExpressionNode;
};

export type IfStatementNode = {
  type: "IfStatement";
  condition: ExpressionNode;
  thenBranch: StatementNode[];
  elseBranch: StatementNode[] | null;
};

export type WhileStatementNode = {
  type: "WhileStatement";
  condition: ExpressionNode;
  body: StatementNode[];
};

export type FunctionDeclarationNode = {
  type: "FunctionDeclaration";
  name: IdentifierNode;
  params: IdentifierNode[];
  body: StatementNode[];
};

export type ReturnStatementNode = {
  type: "ReturnStatement";
  expression: ExpressionNode | null;
};

export type NumberLiteralNode = {
  type: "NumberLiteral";
  value: number;
};

export type StringLiteralNode = {
  type: "StringLiteral";
  value: string;
};

export type BooleanLiteralNode = {
  type: "BooleanLiteral";
  value: boolean;
};

export type IdentifierNode = {
  type: "Identifier";
  name: string;
};

export type BinaryExpressionNode = {
  type: "BinaryExpression";
  operator: string;
  left: ExpressionNode;
  right: ExpressionNode;
};

export type AssignmentExpressionNode = {
  type: "AssignmentExpression";
  left: IdentifierNode;
  right: ExpressionNode;
};

export type CallExpressionNode = {
  type: "CallExpression";
  callee: IdentifierNode;
  arguments: ExpressionNode[];
};

export type ForStatementNode = {
  type: "ForStatement";
  iterator: IdentifierNode;
  start: ExpressionNode;
  end: ExpressionNode;
  body: StatementNode[];
};

export type UnaryExpressionNode = {
  type: "UnaryExpression";
  operator: string;
  argument: ExpressionNode;
};