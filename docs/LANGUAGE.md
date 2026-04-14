# Odialang Language Specification

**Version:** 1.0.0  
**Last Updated:** April 2026

## Table of Contents

1. [Introduction](#introduction)
2. [Lexical Structure](#lexical-structure)
3. [Keywords](#keywords)
4. [Data Types](#data-types)
5. [Variables](#variables)
6. [Operators](#operators)
7. [Control Flow](#control-flow)
8. [Functions](#functions)
9. [Comments](#comments)
10. [Grammar (BNF)](#grammar-bnf)

---

## Introduction

Odialang is a programming language designed for Odia speakers. It uses Odia words as keywords while maintaining a familiar programming structure. The language compiles to JavaScript, making it runnable on any Node.js environment.

### Design Philosophy

- **Accessibility**: Use familiar Odia words instead of English keywords
- **Simplicity**: Easy to learn for beginners
- **Compatibility**: Compiles to JavaScript for broad platform support
- **Familiarity**: Syntax similar to popular programming languages

---

## Lexical Structure

### Identifiers

Identifiers are names given to variables and functions.

**Rules:**
- Must start with a letter (a-z, A-Z) or underscore (_)
- Can contain letters, digits (0-9), and underscores
- Case-sensitive
- Cannot be a keyword

**Examples:**
```odia
# Valid identifiers
dhara name = "Rama"
dhara age_1 = 25
dhara _temp = 10

# Invalid identifiers
dhara 1age = 25    # Starts with number
dhara dhara = 10   # Uses reserved keyword
```

### Literals

#### String Literals
Enclosed in double quotes:
```odia
"Hello, World!"
"Odia Language"
""
```

#### Number Literals
Integers and decimals:
```odia
42
3.14
0
1000
```

#### Boolean Literals
```odia
sata    # true
micha   # false
```

---

## Keywords

### Reserved Words

| Odia Keyword | English Meaning | Purpose | Example |
|--------------|-----------------|---------|---------|
| `dhara` | let/hold | Variable declaration | `dhara x = 10` |
| `dekha` | show/see | Print output | `dekha "Hello"` |
| `jadi` | if | Conditional check | `jadi x > 5 tahale` |
| `tahale` | then | Start if block | `jadi x > 5 tahale` |
| `nahele` | else | Alternative block | `nahele dekha "No"` |
| `jebe` | while | Loop condition | `jebe x < 10 tahale` |
| `karya` | work/function | Function definition | `karya add(a, b)` |
| `fera` | return | Return value | `fera a + b` |
| `sesa` | end | Block terminator | `sesa` |
| `aarambha` | begin/start | For loop start | `aarambha i = 1 ru 10` |
| `ru` | from | Range operator | `aarambha i = 1 ru 10` |
| `sata` | true | Boolean true | `dhara flag = sata` |
| `micha` | false | Boolean false | `dhara flag = micha` |
| `kar` | do | Action indicator | (Reserved for future) |

### Keyword Usage Patterns

```odia
# Variable Declaration
dhara <identifier> = <expression>

# Print Statement
dekha <expression>

# If Statement
jadi <condition> tahale
  <statements>
[nahele
  <statements>]
sesa

# While Loop
jebe <condition> tahale
  <statements>
sesa

# For Loop
aarambha <variable> = <start> ru <end>
  <statements>
sesa

# Function Definition
karya <name>([<params>])
  <statements>
  [fera <expression>]
sesa
```

---

## Data Types

### Primitive Types

#### 1. String (Text)
```odia
dhara message = "Hello, Odia!"
dhara empty = ""
```

#### 2. Number (Integer and Float)
```odia
dhara count = 42          # Integer
dhara price = 99.99       # Float
dhara negative = -10      # Negative
```

#### 3. Boolean
```odia
dhara isActive = sata     # true
dhara isComplete = micha  # false
```

#### 4. Null (Implicit)
Returned when a function doesn't specify a return value.

### Type Coercion

When operations involve different types:

```odia
# String + Number = String
dekha "Age: " + 25        # "Age: 25"

# Number + Number = Number
dekha 10 + 5              # 15

# String + String = String
dekha "Hello " + "World"  # "Hello World"
```

---

## Variables

### Declaration

All variables are declared using `dhara`:

```odia
dhara name = "Rama"
dhara age = 25
dhara isStudent = sata
```

### Assignment

After declaration, use `=` to reassign:

```odia
dhara x = 10
x = 20                    # Reassignment
x = x + 5                 # Update with expression
```

### Scope

Variables have function scope:

```odia
karya example()
  dhara local = "I'm local"
  dekha local           # Works
sesa

dekha local               # Error: not defined
```

---

## Operators

### Arithmetic Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `5 - 3` | `2` |
| `*` | Multiplication | `5 * 3` | `15` |
| `/` | Division | `6 / 3` | `2` |

### String Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Concatenation | `"Hi" + " " + "Bye"` | `"Hi Bye"` |

### Comparison Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Equal | `5 == 5` | `sata` |
| `!=` | Not equal | `5 != 3` | `sata` |
| `>` | Greater than | `5 > 3` | `sata` |
| `<` | Less than | `5 < 3` | `micha` |
| `>=` | Greater or equal | `5 >= 5` | `sata` |
| `<=` | Less or equal | `5 <= 3` | `micha` |

### Assignment Operator

| Operator | Example | Equivalent |
|----------|---------|------------|
| `=` | `x = 10` | Assign 10 to x |

### Operator Precedence

From highest to lowest:

1. Parentheses `()`
2. Multiplication/Division `*`, `/`
3. Addition/Subtraction `+`, `-`
4. Comparison `>`, `<`, `>=`, `<=`
5. Equality `==`, `!=`
6. Assignment `=`

```odia
dhara result = 2 + 3 * 4      # 14 (not 20)
dhara result = (2 + 3) * 4    # 20
```

---

## Control Flow

### Conditional Statements

#### If-Then

```odia
jadi condition tahale
  # Execute if condition is true
sesa
```

#### If-Then-Else

```odia
jadi condition tahale
  # Execute if true
nahele
  # Execute if false
sesa
```

#### Nested If

```odia
jadi x > 0 tahale
  jadi x > 10 tahale
    dekha "Greater than 10"
  nahele
    dekha "Between 1 and 10"
  sesa
nahele
  dekha "Zero or negative"
sesa
```

### Loops

#### While Loop

Executes while condition is true:

```odia
dhara count = 0

jebe count < 5 tahale
  dekha "Count: " + count
  count = count + 1
sesa
```

#### For Loop

Iterates from start to end (inclusive):

```odia
aarambha i = 1 ru 5
  dekha "Iteration: " + i
sesa
```

Output:
```
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
Iteration: 5
```

### Loop Control

Currently, Odialang doesn't have `break` or `continue`. Use conditionals:

```odia
dhara i = 0
jebe i < 10 tahale
  jadi i == 5 tahale
    i = 10    # Force exit by setting condition false
  nahele
    dekha i
    i = i + 1
  sesa
sesa
```

---

## Functions

### Function Declaration

```odia
karya functionName(param1, param2)
  # Function body
  dekha "Parameters: " + param1 + ", " + param2
  fera someValue
sesa
```

### Function with Return

```odia
karya add(a, b)
  fera a + b
sesa

dhara result = add(5, 3)
dekha "5 + 3 = " + result    # 5 + 3 = 8
```

### Function without Return

```odia
karya greet(name)
  dekha "Namaskar, " + name + "!"
sesa

greet("Rama")               # Namaskar, Rama!
```

### Parameters

- Functions accept multiple parameters
- Parameters are passed by value
- Missing arguments are undefined (null)

```odia
karya calculate(a, b, operation)
  dekha "a = " + a
  dekha "b = " + b
  dekha "operation = " + operation
sesa

calculate(10, 20, "add")
```

### Recursion

Functions can call themselves:

```odia
karya factorial(n)
  jadi n <= 1 tahale
    fera 1
  sesa
  fera n * factorial(n - 1)
sesa

dekha factorial(5)          # 120
```

---

## Comments

### Single-Line Comments

Start with `#`:

```odia
# This is a comment
dhara x = 10    # This is an inline comment

# Multi-line comments
# require multiple
# hash symbols
```

### Comment Best Practices

```odia
# Calculate the factorial of a number
karya factorial(n)
  # Base case: factorial of 0 or 1 is 1
  jadi n <= 1 tahale
    fera 1
  sesa
  
  # Recursive case: n! = n * (n-1)!
  fera n * factorial(n - 1)
sesa
```

---

## Grammar (BNF)

```bnf
<program> ::= <statement_list>

<statement_list> ::= <statement>
                   | <statement> <statement_list>

<statement> ::= <variable_declaration>
              | <print_statement>
              | <if_statement>
              | <while_statement>
              | <for_statement>
              | <function_declaration>
              | <return_statement>
              | <expression_statement>

<variable_declaration> ::= "dhara" <identifier> "=" <expression>

<print_statement> ::= "dekha" <expression>

<if_statement> ::= "jadi" <expression> "tahale" <statement_list> ["nahele" <statement_list>] "sesa"

<while_statement> ::= "jebe" <expression> "tahale" <statement_list> "sesa"

<for_statement> ::= "aarambha" <identifier> "=" <expression> "ru" <expression> <statement_list> "sesa"

<function_declaration> ::= "karya" <identifier> "(" [<parameter_list>] ")" <statement_list> "sesa"

<return_statement> ::= "fera" [<expression>]

<expression_statement> ::= <expression>

<expression> ::= <assignment>

<assignment> ::= <relational> ["=" <assignment>]

<relational> ::= <additive> [("==" | "!=" | ">" | "<" | ">=" | "<=") <additive>]

<additive> ::= <multiplicative> [("+" | "-") <multiplicative>]

<multiplicative> ::= <call> [("*" | "/") <call>]

<call> ::= <primary> ["(" [<argument_list>] ")"]

<primary> ::= <number>
            | <string>
            | <boolean>
            | <identifier>
            | "(" <expression> ")"

<number> ::= [0-9]+("."[0-9]+)?

<string> ::= """ <character>* """

<boolean> ::= "sata" | "micha"

<identifier> ::= [a-zA-Z_][a-zA-Z0-9_]*

<parameter_list> ::= <identifier> | <identifier> "," <parameter_list>

<argument_list> ::= <expression> | <expression> "," <argument_list>
```

---

## Error Handling

### Common Errors

#### Syntax Errors
```odia
dhara x 10          # Missing =
dekha "Hello        # Missing closing quote
jadi x > 5          # Missing tahale
```

#### Runtime Errors
```odia
dekha undefinedVar  # Variable not defined
add(5)              # Function called with wrong args
```

### Error Messages

Odialang provides descriptive error messages:

```
Unexpected character '@' at line 5, column 10
File not found: /path/to/file.odia
Unterminated string at line 3, column 15
```

---

## Reserved for Future

These keywords are reserved for potential future features:

- `kar` - Do/perform action
- Array/list operations
- Object/dictionary support
- Import/module system
- Exception handling

---

## Version History

- **1.0.0** (April 2026)
  - Initial release
  - Basic data types (string, number, boolean)
  - Variables and operators
  - Control flow (if, while, for)
  - Functions with recursion
  - CLI tools (run, compile, tokens, ast)
