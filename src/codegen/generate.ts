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
} from "../parser/ast";

function indent(level: number): string {
  return "  ".repeat(level);
}

export function generateJavaScript(ast: ProgramNode): string {
  return ast.body.map((stmt) => generateStatement(stmt, 0)).join("\n");
}

function generateStatement(node: StatementNode, level: number): string {
  switch (node.type) {
    case "VariableDeclaration":
      return generateVariableDeclaration(node, level);

    case "PrintStatement":
      return generatePrintStatement(node, level);

    case "ExpressionStatement":
      return generateExpressionStatement(node, level);

    case "IfStatement":
      return generateIfStatement(node, level);

    case "WhileStatement":
      return generateWhileStatement(node, level);

    case "FunctionDeclaration":
      return generateFunctionDeclaration(node, level);

    case "ReturnStatement":
      return generateReturnStatement(node, level);
    case "ForStatement":
        return generateForStatement(node, level);
    default: {
      const neverNode: never = node;
      throw new Error(`Unhandled statement node: ${JSON.stringify(neverNode)}`);
    }
  }
}

function generateVariableDeclaration(
  node: VariableDeclarationNode,
  level: number,
): string {
  return `${indent(level)}let ${generateExpression(node.identifier)} = ${generateExpression(node.value)};`;
}

function generatePrintStatement(
  node: PrintStatementNode,
  level: number,
): string {
  return `${indent(level)}console.log(${generateExpression(node.expression)});`;
}

function generateExpressionStatement(
  node: ExpressionStatementNode,
  level: number,
): string {
  return `${indent(level)}${generateExpression(node.expression)};`;
}

function generateIfStatement(node: IfStatementNode, level: number): string {
  const condition = generateExpression(node.condition);

  const thenBody =
    node.thenBranch.length > 0
      ? node.thenBranch
          .map((stmt) => generateStatement(stmt, level + 1))
          .join("\n")
      : `${indent(level + 1)}`;

  let result = `${indent(level)}if (${condition}) {\n${thenBody}\n${indent(level)}}`;

  if (node.elseBranch) {
    const elseBody =
      node.elseBranch.length > 0
        ? node.elseBranch
            .map((stmt) => generateStatement(stmt, level + 1))
            .join("\n")
        : `${indent(level + 1)}`;

    result += ` else {\n${elseBody}\n${indent(level)}}`;
  }

  return result;
}
function generateForStatement(node: ForStatementNode, level: number): string {
  const iterator = generateExpression(node.iterator);
  const start = generateExpression(node.start);
  const end = generateExpression(node.end);

  const body =
    node.body.length > 0
      ? node.body.map((stmt) => generateStatement(stmt, level + 1)).join("\n")
      : `${indent(level + 1)}`;

  return `${indent(level)}for (let ${iterator} = ${start}; ${iterator} <= ${end}; ${iterator}++) {\n${body}\n${indent(level)}}`;
}
function generateWhileStatement(
  node: WhileStatementNode,
  level: number,
): string {
  const condition = generateExpression(node.condition);

  const body =
    node.body.length > 0
      ? node.body.map((stmt) => generateStatement(stmt, level + 1)).join("\n")
      : `${indent(level + 1)}`;

  return `${indent(level)}while (${condition}) {\n${body}\n${indent(level)}}`;
}

function generateFunctionDeclaration(
  node: FunctionDeclarationNode,
  level: number,
): string {
  const name = generateExpression(node.name);
  const params = node.params.map((param) => generateExpression(param)).join(", ");

  const body =
    node.body.length > 0
      ? node.body.map((stmt) => generateStatement(stmt, level + 1)).join("\n")
      : `${indent(level + 1)}`;

  return `${indent(level)}function ${name}(${params}) {\n${body}\n${indent(level)}}`;
}

function generateReturnStatement(
  node: ReturnStatementNode,
  level: number,
): string {
  if (node.expression === null) {
    return `${indent(level)}return;`;
  }

  return `${indent(level)}return ${generateExpression(node.expression)};`;
}

function generateExpression(node: ExpressionNode): string {
  switch (node.type) {
    case "NumberLiteral":
      return generateNumberLiteral(node);

    case "StringLiteral":
      return generateStringLiteral(node);

    case "BooleanLiteral":
      return generateBooleanLiteral(node);

    case "Identifier":
      return generateIdentifier(node);

    case "BinaryExpression":
      return generateBinaryExpression(node);

    case "AssignmentExpression":
      return generateAssignmentExpression(node);

    case "CallExpression":
      return generateCallExpression(node);

    default: {
      const neverNode: never = node;
      throw new Error(`Unhandled expression node: ${JSON.stringify(neverNode)}`);
    }
  }
}

function generateNumberLiteral(node: NumberLiteralNode): string {
  return String(node.value);
}

function generateStringLiteral(node: StringLiteralNode): string {
  return JSON.stringify(node.value);
}

function generateBooleanLiteral(node: BooleanLiteralNode): string {
  return node.value ? "true" : "false";
}

function generateIdentifier(node: IdentifierNode): string {
  return node.name;
}

function generateBinaryExpression(node: BinaryExpressionNode): string {
  return `(${generateExpression(node.left)} ${node.operator} ${generateExpression(node.right)})`;
}

function generateAssignmentExpression(node: AssignmentExpressionNode): string {
  return `${generateExpression(node.left)} = ${generateExpression(node.right)}`;
}

function generateCallExpression(node: CallExpressionNode): string {
  const args = node.arguments.map((arg) => generateExpression(arg)).join(", ");
  return `${generateExpression(node.callee)}(${args})`;
}