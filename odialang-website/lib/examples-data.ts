export const examplesData: Record<string, { code: string; level: string }> = {
  "01_hello": { level: "basics", code: `# Example 1: Hello World
# The most basic program - prints a greeting

# Print a simple message
dekha "Hello, World!"

# Print in Odia
dekha "Namaskar, Odia!"

# Print multiple lines
dekha "Welcome to"
dekha "Odialang!"` },
  "02_variables": { level: "basics", code: `# Example 2: Variables
# Learn about different data types

# String variable (text)
dhara name = "Rama"
dhara greeting = "Hello"
dekha greeting + " " + name

# Number variables
dhara age = 25
dhara year = 2026
dhara bigNumber = 1000
dekha "Age: " + age
dekha "Year: " + year
dekha "Big number: " + bigNumber

# Boolean variables (true/false)
dhara isStudent = sata
dhara isWorking = micha
dekha "Is student: " + isStudent
dekha "Is working: " + isWorking

# Changing variable values
dhara score = 0
dekha "Initial score: " + score

score = 10
dekha "After assignment: " + score

score = score + 5
dekha "After adding 5: " + score` },
  "03_operators": { level: "basics", code: `# Example 3: Operators
# Arithmetic and comparison operations

dhara a = 10
dhara b = 3

# Arithmetic operators
dekha "=== Arithmetic Operators ==="
dekha "a = " + a + ", b = " + b
dekha "Addition: " + a + " + " + b + " = " + (a + b)
dekha "Subtraction: " + a + " - " + b + " = " + (a - b)
dekha "Multiplication: " + a + " * " + b + " = " + (a * b)
dekha "Division: " + a + " / " + b + " = " + (a / b)

# String concatenation
dekha ""
dekha "=== String Concatenation ==="
dhara first = "Hello"
dhara second = "World"
dekha first + " " + second + "!"

# Comparison operators
dekha ""
dekha "=== Comparison Operators ==="
dekha "a > b: " + (a > b)
dekha "a < b: " + (a < b)
dekha "a == b: " + (a == b)
dekha "a != b: " + (a != b)
dekha "a >= b: " + (a >= b)
dekha "a <= b: " + (a <= b)` },
  "04_conditionals": { level: "basics", code: `# Example 4: Conditionals (If-Else)
# Making decisions in your program

# Simple if statement
dhara age = 18
dekha "Age: " + age

jadi age >= 18 tahale
  dekha "You are an adult"
sesa

# If-else statement
dekha ""
dhara marks = 75
dekha "Marks: " + marks

jadi marks >= 60 tahale
  dekha "Result: PASSED"
nahele
  dekha "Result: FAILED"
sesa

# Multiple conditions
dekha ""
dhara score = 85
dekha "Score: " + score

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
sesa` },
  "05_while_loop": { level: "basics", code: `# Example 5: While Loop
# Repeat actions with conditions

# Basic while loop
dhara count = 1
jebe count <= 5
  dekha "Count: " + count
  count = count + 1
sesa

# While with sum
dekha ""
dhara sum = 0
dhara i = 1
jebe i <= 10
  sum = sum + i
  i = i + 1
sesa
dekha "Sum of 1-10: " + sum

# While with array-like logic
dekha ""
dhara n = 5
dhara factorial = 1
jebe n > 0
  factorial = factorial * n
  n = n - 1
sesa
dekha "Factorial: " + factorial` },
  "06_for_loop": { level: "basics", code: `# Example 6: For Loop
# Count-controlled iteration

# Basic for loop
aarambha i = 1 ru 5
  dekha "Number: " + i
sesa

# For loop with sum
dekha ""
dhara sum = 0
aarambha i = 1 ru 10
  sum = sum + i
sesa
dekha "Sum 1-10: " + sum

# For loop with multiplication table
dekha ""
dhara n = 7
aarambha i = 1 ru 10
  dekha n + " x " + i + " = " + (n * i)
sesa` },
  "01_functions": { level: "intermediate", code: `# Example 1: Functions
# Creating reusable code blocks

# Simple function with no parameters
karya greet()
  dekha "Namaskar!"
sesa

# Call the function
greet()

# Function with parameters
karya sayHello(name)
  dekha "Hello, " + name + "!"
sesa

sayHello("Rama")
sayHello("Sita")

# Function with return value
karya add(a, b)
  fera a + b
sesa

dhara result = add(5, 3)
dekha "5 + 3 = " + result

# Function with multiple statements
karya calculate(a, b)
  dhara sum = a + b
  dhara product = a * b
  dekha "Sum: " + sum
  dekha "Product: " + product
sesa

calculate(4, 5)` },
  "02_recursion": { level: "intermediate", code: `# Example 2: Recursion
# Functions that call themselves

# Recursive factorial
karya factorial(n)
  jadi n <= 1 tahale
    fera 1
  sesa
  fera n * factorial(n - 1)
sesa

dekha "Factorial of 5: " + factorial(5)
dekha "Factorial of 3: " + factorial(3)

# Recursive sum
karya sumTo(n)
  jadi n <= 1 tahale
    fera 1
  sesa
  fera n + sumTo(n - 1)
sesa

dekha "Sum of 1-5: " + sumTo(5)

# Recursive fibonacci
karya fib(n)
  jadi n <= 1 tahale
    fera n
  sesa
  fera fib(n - 1) + fib(n - 2)
sesa

dekha "Fibonacci sequence:"
aarambha i = 0 ru 8
  dekha fib(i)
sesa` },
  "03_calculator": { level: "intermediate", code: `# Example 3: Calculator
# Building a simple calculator with functions

karya add(a, b)
  fera a + b
sesa

karya subtract(a, b)
  fera a - b
sesa

karya multiply(a, b)
  fera a * b
sesa

karya divide(a, b)
  jadi b == 0 tahale
    fera 0
  sesa
  fera a / b
sesa

# Test the calculator
dekha "=== Calculator Demo ==="

dhara x = 10
dhara y = 3

dekha x + " + " + y + " = " + add(x, y)
dekha x + " - " + y + " = " + subtract(x, y)
dekha x + " * " + y + " = " + multiply(x, y)
dekha x + " / " + y + " = " + divide(x, y)

# Chaining operations
dekha ""
dekha "Chained: " + add(multiply(2, 3), divide(10, 2))` },
  "04_temperature": { level: "intermediate", code: `# Example 4: Temperature Converter
# Converting between Celsius and Fahrenheit

karya celsiusToFahrenheit(c)
  fera (c * 9 / 5) + 32
sesa

karya fahrenheitToCelsius(f)
  fera (f - 32) * 5 / 9
sesa

# Convert various temperatures
dekha "=== Temperature Converter ==="

dhara temps = 0
jebe temps <= 100
  dekha temps + "C = " + celsiusToFahrenheit(temps) + "F"
  temps = temps + 20
sesa

dekha ""
dekha "Room temp (72F) in C: " + fahrenheitToCelsius(72)` },
  "01_fizzbuzz": { level: "advanced", code: `# Example 1: FizzBuzz
# Classic programming interview question

karya fizzBuzz(n)
  dhara result = ""
  
  jadi n % 3 == 0 tahale
    result = "Fizz"
  sesa
  
  jadi n % 5 == 0 tahale
    result = result + "Buzz"
  sesa
  
  jadi result == "" tahale
    dekha n
  sesa
    dekha result
  sesa
sesa

# Print FizzBuzz for 1-20
dekha "=== FizzBuzz ==="
aarambha i = 1 ru 20
  fizzBuzz(i)
sesa` },
  "02_prime": { level: "advanced", code: `# Example 2: Prime Number Checker
# Checking if a number is prime

karya isPrime(n)
  jadi n <= 1 tahale
    fera micha
  sesa
  
  dhara i = 2
  jebe i * i <= n
    jadi n % i == 0 tahale
      fera micha
    sesa
    i = i + 1
  sesa
  
  fera sata
sesa

# Find prime numbers
dekha "=== Prime Numbers ==="
dekha "2 is prime: " + isPrime(2)
dekha "3 is prime: " + isPrime(3)
dekha "4 is prime: " + isPrime(4)
dekha "17 is prime: " + isPrime(17)

dekha ""
dekha "Prime numbers up to 20:"
aarambha i = 2 ru 20
  jadi isPrime(i) tahale
    dekha i
  sesa
sesa` },
  "03_fibonacci": { level: "advanced", code: `# Example 3: Fibonacci Sequence
# Generate Fibonacci numbers

karya fibonacci(n)
  jadi n <= 1 tahale
    fera n
  sesa
  
  dhara a = 0
  dhara b = 1
  dhara i = 2
  
  jebe i <= n
    dhara next = a + b
    a = b
    b = next
    i = i + 1
  sesa
  
  fera b
sesa

# Generate Fibonacci sequence
dekha "=== Fibonacci Sequence ==="
aarambha i = 0 ru 15
  dekha "F(" + i + ") = " + fibonacci(i)
sesa

# Sum of first 10 Fibonacci numbers
dhara sum = 0
aarambha i = 0 ru 10
  sum = sum + fibonacci(i)
sesa
dekha ""
dekha "Sum of first 10: " + sum` },
  "04_factorial": { level: "advanced", code: `# Example 4: Factorial
# Calculate factorial with iteration

karya factorial(n)
  jadi n <= 1 tahale
    fera 1
  sesa
  
  dhara result = 1
  dhara i = 2
  
  jebe i <= n
    result = result * i
    i = i + 1
  sesa
  
  fera result
sesa

karya factorialRecursive(n)
  jadi n <= 1 tahale
    fera 1
  sesa
  fera n * factorialRecursive(n - 1)
sesa

# Calculate factorials
dekha "=== Factorial Examples ==="
aarambha i = 0 ru 10
  dekha i + "! = " + factorial(i)
sesa

dekha ""
dekha "Recursive 5! = " + factorialRecursive(5)` },
  "05_grade_calculator": { level: "advanced", code: `# Example 5: Grade Calculator
# Calculate grades and statistics

# Coming soon: Array and Class support

karya getGrade(score)
  jadi score >= 90 tahale
    fera "A"
  sesa
  jadi score >= 80 tahale
    fera "B"
  sesa
  jadi score >= 70 tahale
    fera "C"
  sesa
  jadi score >= 60 tahale
    fera "D"
  sesa
  fera "F"
sesa

dekha "=== Grade Calculator ==="
dekha "Average of 4 subjects"
dhara m1 = 85
dhara m2 = 92
dhara m3 = 78
dhara m4 = 88
dhara avg = (m1 + m2 + m3 + m4) / 4
dekha "Average: " + avg
dekha "Grade: " + getGrade(avg)

dekha ""
dekha "[Arrays and Classes coming soon!]"
dekha "Arrays: dhara arr = [1, 2, 3]"
dekha "Classes: karya Person(name, age)"` },
  "06_bank_account": { level: "advanced", code: `# Example 6: Bank Account Simulation
# Simple banking operations

karya createAccount(name, initialBalance)
  dhara account = name
  dhara balance = initialBalance
  dekha "Account created for: " + name
  dekha "Initial balance: " + initialBalance
  fera initialBalance
sesa

karya deposit(balance, amount)
  jadi amount <= 0 tahale
    dekha "Invalid deposit amount"
    fera balance
  sesa
  dhara newBalance = balance + amount
  dekha "Deposited: " + amount
  dekha "New balance: " + newBalance
  fera newBalance
sesa

karya withdraw(balance, amount)
  jadi amount <= 0 tahale
    dekha "Invalid withdrawal amount"
    fera balance
  sesa
  jadi amount > balance tahale
    dekha "Insufficient funds"
    fera balance
  sesa
  dhara newBalance = balance - amount
  dekha "Withdrawn: " + amount
  dekha "New balance: " + newBalance
  fera newBalance
sesa

# Demo
dekha "=== Bank Account Demo ==="
dhara myBalance = createAccount("Rama", 1000)
myBalance = deposit(myBalance, 500)
myBalance = withdraw(myBalance, 200)
dekha "Final balance: " + myBalance` },
};