# Odialang Tutorial

**Learn Odialang from scratch - A complete guide for beginners**

## Table of Contents

1. [Getting Started](#getting-started)
2. [Your First Program](#your-first-program)
3. [Variables and Data Types](#variables-and-data-types)
4. [Working with Operators](#working-with-operators)
5. [Making Decisions](#making-decisions)
6. [Loops](#loops)
7. [Functions](#functions)
8. [Building a Complete Program](#building-a-complete-program)
9. [Practice Exercises](#practice-exercises)
10. [Next Steps](#next-steps)

---

## Getting Started

### What is Programming?

Programming is like giving instructions to a computer. Just like you might tell someone how to make tea step-by-step, you write instructions for the computer to follow.

### Why Odialang?

Odialang uses Odia words you already know, making programming feel familiar and natural.

### Installation

```bash
# Install Odialang globally
npm install -g @devsuvam/odialang

# Verify installation
odia --help
```

---

## Your First Program

### Hello World

Create a file named `hello.odia`:

```odia
# My first program
dekha "Hello, World!"
dekha "Namaskar, Odia!"
```

Run it:
```bash
odia hello.odia
```

Output:
```
Hello, World!
Namaskar, Odia!
```

### Understanding the Code

- `#` starts a comment (notes for humans)
- `dekha` means "show" or "print" - it displays text
- Text in quotes `"..."` is called a string

### Try It Yourself!

Change the message to greet your name:

```odia
dekha "Hello, [Your Name]!"
```

---

## Variables and Data Types

### What are Variables?

Variables are like labeled boxes where you store information.

### Creating Variables

Use `dhara` (meaning "hold" or "let") to create a variable:

```odia
# Store your name
dhara name = "Rama"
dekha name

# Store your age
dhara age = 25
dekha age
```

### Data Types

#### 1. Strings (Text)
```odia
dhara message = "Hello!"
dhara name = "Odia Language"
dekha message + " " + name    # Joining strings
```

#### 2. Numbers
```odia
dhara year = 2026
dhara pi = 3.14
dhara negative = -10
dekha year
```

#### 3. Booleans (True/False)
```odia
dhara isRaining = micha      # false
dhara isSunny = sata         # true
dekha isSunny
```

### Changing Variable Values

```odia
dhara score = 0
dekha "Initial score: " + score

score = 10
dekha "New score: " + score

score = score + 5
dekha "Final score: " + score
```

### Exercise 1: Personal Info Card

Create a program that stores and displays:
- Your name
- Your age
- Your favorite color
- Whether you like programming (sata/micha)

---

## Working with Operators

### Arithmetic Operators

```odia
dhara a = 10
dhara b = 3

dekha "Addition: " + (a + b)        # 13
dekha "Subtraction: " + (a - b)     # 7
dekha "Multiplication: " + (a * b)  # 30
dekha "Division: " + (a / b)        # 3.33...
```

### String Concatenation

```odia
dhara firstName = "Rama"
dhara lastName = "Das"
dhara fullName = firstName + " " + lastName

dekha "Full name: " + fullName
```

### Comparison Operators

```odia
dhara x = 10
dhara y = 5

dekha "x > y: " + (x > y)       # true
dekha "x == y: " + (x == y)     # false
dekha "x != y: " + (x != y)     # true
```

### Exercise 2: Calculator

Create a calculator that:
1. Stores two numbers
2. Shows their sum, difference, product, and quotient
3. Checks if the first number is greater than the second

---

## Making Decisions

### The If Statement

Use `jadi` (if) to make decisions:

```odia
dhara age = 18

jadi age >= 18 tahale
  dekha "You are an adult"
sesa
```

### If-Else Statement

```odia
dhara marks = 75

jadi marks >= 60 tahale
  dekha "You passed!"
nahele
  dekha "You need to study more"
sesa
```

### Multiple Conditions

```odia
dhara score = 85

jadi score >= 90 tahale
  dekha "Grade: A"
sesa

jadi score >= 80 tahale
  dekha "Grade: B"
sesa

jadi score >= 70 tahale
  dekha "Grade: C"
nahele
  dekha "Grade: F"
sesa
```

### Exercise 3: Number Checker

Write a program that:
1. Takes a number
2. Checks if it's positive, negative, or zero
3. Checks if it's even or odd
4. Displays appropriate messages

---

## Loops

### While Loop

Use `jebe` (while) to repeat actions:

```odia
# Count from 1 to 5
dhara count = 1

jebe count <= 5 tahale
  dekha "Count: " + count
  count = count + 1
sesa
```

Output:
```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

### Countdown Example

```odia
# Countdown from 10
dhara timer = 10

jebe timer > 0 tahale
  dekha "Time remaining: " + timer
  timer = timer - 1
sesa

dekha "Time's up!"
```

### For Loop

Use `aarambha` (start) and `ru` (from/to) for counting loops:

```odia
# Print 1 to 10
aarambha i = 1 ru 10
  dekha "Number: " + i
sesa
```

### Multiplication Table

```odia
# Print multiplication table of 5
dhara num = 5

aarambha i = 1 ru 10
  dekha num + " x " + i + " = " + (num * i)
sesa
```

Output:
```
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50
```

### Exercise 4: Pattern Printing

Print this pattern:
```
*
**
***
****
*****
```

Hint: Use nested loops (a loop inside another loop).

---

## Functions

### What are Functions?

Functions are reusable blocks of code that perform specific tasks.

### Creating a Function

```odia
karya greet()
  dekha "Hello!"
  dekha "Welcome to Odialang!"
sesa

# Call the function
greet()
greet()
```

### Functions with Parameters

```odia
karya greetPerson(name)
  dekha "Namaskar, " + name + "!"
sesa

greetPerson("Rama")
greetPerson("Sita")
```

### Functions that Return Values

```odia
karya add(a, b)
  fera a + b
sesa

dhara result = add(5, 3)
dekha "5 + 3 = " + result

# Use directly
dekha "10 + 20 = " + add(10, 20)
```

### Temperature Converter

```odia
# Convert Celsius to Fahrenheit
karya celsiusToFahrenheit(celsius)
  dhara fahrenheit = (celsius * 9 / 5) + 32
  fera fahrenheit
sesa

dekha "0°C = " + celsiusToFahrenheit(0) + "°F"
dekha "100°C = " + celsiusToFahrenheit(100) + "°F"
```

### Recursive Functions

Functions can call themselves:

```odia
# Calculate factorial
karya factorial(n)
  jadi n <= 1 tahale
    fera 1
  sesa
  fera n * factorial(n - 1)
sesa

dekha "5! = " + factorial(5)    # 120
```

### Exercise 5: Function Library

Create these functions:
1. `isEven(num)` - returns sata if even, micha if odd
2. `maxOfThree(a, b, c)` - returns the largest number
3. `reverseString(str)` - returns the reversed string

---

## Building a Complete Program

### Project: Student Grade Calculator

Create a complete program that:

```odia
# Student Grade Calculator

# Function to calculate grade
karya calculateGrade(marks)
  jadi marks >= 90 tahale
    fera "A"
  sesa
  
  jadi marks >= 80 tahale
    fera "B"
  sesa
  
  jadi marks >= 70 tahale
    fera "C"
  sesa
  
  jadi marks >= 60 tahale
    fera "D"
  sesa
  
  fera "F"
sesa

# Function to display result
karya displayResult(name, marks)
  dhara grade = calculateGrade(marks)
  dekha "=================="
  dekha "Student: " + name
  dekha "Marks: " + marks
  dekha "Grade: " + grade
  
  jadi marks >= 60 tahale
    dekha "Status: PASSED"
  nahele
    dekha "Status: FAILED"
  sesa
  dekha "=================="
sesa

# Test with multiple students
displayResult("Rama", 85)
displayResult("Sita", 92)
displayResult("Hari", 55)
```

### Running the Program

```bash
odia grade_calculator.odia
```

Output:
```
==================
Student: Rama
Marks: 85
Grade: B
Status: PASSED
==================
Student: Sita
...
```

---

## Practice Exercises

### Exercise 6: FizzBuzz

Print numbers 1 to 100:
- If divisible by 3, print "Fizz"
- If divisible by 5, print "Buzz"
- If divisible by both, print "FizzBuzz"
- Otherwise, print the number

### Exercise 7: Prime Number Checker

Create a function that checks if a number is prime.

### Exercise 8: Fibonacci Series

Print the first 20 numbers in the Fibonacci series:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

### Exercise 9: Palindrome Checker

Create a function that checks if a word is a palindrome (reads same forwards and backwards).

Examples: "radar", "level", "madam"

### Exercise 10: Simple Bank Account

Create a program with:
- Balance tracking
- Deposit function
- Withdraw function
- Show balance function
- Prevent negative balance

---

## Next Steps

### What You've Learned

✅ Variables and data types
✅ Operators and expressions
✅ Control flow (if-else)
✅ Loops (while, for)
✅ Functions
✅ Building complete programs

### Where to Go Next

1. **Read the Language Specification**
   - See `docs/LANGUAGE.md` for complete syntax reference

2. **Explore Examples**
   - Check the `examples/` folder for more programs

3. **Build Your Own Projects**
   - Calculator
   - Todo list
   - Quiz game
   - Number guessing game

4. **Contribute**
   - Help improve Odialang
   - Add new features
   - Report bugs
   - Write tutorials

5. **Join the Community**
   - Share your programs
   - Ask questions
   - Help others learn

### Tips for Success

1. **Practice Daily**: Write at least one small program every day
2. **Start Simple**: Don't try to build complex things immediately
3. **Experiment**: Change code and see what happens
4. **Read Errors**: Error messages help you fix problems
5. **Ask for Help**: When stuck, ask the community

### Quick Reference Card

```
Variable:     dhara name = value
Print:        dekha "message"
If:           jadi condition tahale ... sesa
If-Else:      jadi condition tahale ... nahele ... sesa
While:        jebe condition tahale ... sesa
For:          aarambha i = start ru end ... sesa
Function:     karya name(params) ... sesa
Return:       fera value
True:         sata
False:        micha
Comment:      # this is a comment
```

---

## Congratulations! 🎉

You've completed the Odialang tutorial! You now know enough to write your own programs. Keep practicing and building - that's how you become a great programmer.

**Happy Coding in Odia!** 🇮🇳

---

## Resources

- [Language Specification](LANGUAGE.md) - Complete syntax reference
- [Examples](../examples/) - Sample programs
- [GitHub Repository](https://github.com/devsuvam/odialang) - Source code
- [npm Package](https://www.npmjs.com/package/@devsuvam/odialang) - Installation
