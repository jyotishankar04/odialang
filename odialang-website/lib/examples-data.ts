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

# Count from 1 to 5
dekha "=== Counting 1 to 5 ==="
dhara count = 1

jebe count <= 5
  dekha "Count: " + count
  count += 1
sesa

# Countdown
dekha ""
dekha "=== Countdown ==="
dhara timer = 5

jebe timer > 0
  dekha "Time: " + timer
  timer -= 1
sesa

dekha "Blast off!"

# Sum of numbers 1 to 10
dekha ""
dekha "=== Sum of 1 to 10 ==="
dhara sum = 0
dhara num = 1

jebe num <= 10
  sum += num
  num += 1
sesa

dekha "Sum = " + sum` },
  "06_for_loop": { level: "basics", code: `# Example 6: For Loop
# Iterate with range

# Print 1 to 5
dekha "=== Print 1 to 5 ==="
aarambha i = 1 ru 5
  dekha "Number: " + i
sesa

# Countdown 5 to 1
dekha ""
dekha "=== Countdown 5 to 1 ==="
aarambha j = 5 ru 1
  dekha j
sesa

# Multiplication table
dekha ""
dekha "=== Multiplication Table of 7 ==="
dhara table = 7

aarambha k = 1 ru 10
  dekha table + " x " + k + " = " + (table * k)
sesa

# Sum using for loop
dekha ""
dekha "=== Sum of 1 to 100 ==="
dhara total = 0

aarambha n = 1 ru 100
  total += n
sesa

dekha "Total: " + total` },
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
# Using logical operators (&&) and modulo (%)

karya fizzBuzz(n)
  jadi n % 3 == 0 && n % 5 == 0 tahale
    dekha "FizzBuzz"
  sesa

  jadi n % 3 == 0 tahale
    dekha "Fizz"
  sesa

  jadi n % 5 == 0 tahale
    dekha "Buzz"
  sesa

  jadi n % 3 != 0 && n % 5 != 0 tahale
    dekha n
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
# Calculate grades with logical operators (&&)

karya calculateGrade(marks)
  jadi marks >= 90 tahale
    fera "A+"
  sesa
  jadi marks >= 80 tahale
    fera "A"
  sesa
  jadi marks >= 70 tahale
    fera "B"
  sesa
  jadi marks >= 60 tahale
    fera "C"
  sesa
  jadi marks >= 50 tahale
    fera "D"
  sesa
  fera "F"
sesa

# Check if student passed all subjects using &&
karya hasPassed(m1, m2, m3, m4, m5)
  jadi m1 >= 50 && m2 >= 50 && m3 >= 50 && m4 >= 50 && m5 >= 50 tahale
    fera sata
  nahele
    fera micha
  sesa
sesa

# Student 1: All subjects passed
dhara m1 = 92
dhara m2 = 88
dhara m3 = 85
dhara m4 = 90
dhara m5 = 87
dhara avg = (m1 + m2 + m3 + m4 + m5) / 5
dekha "Average: " + avg
dekha "Grade: " + calculateGrade(avg)
dekha "All passed: " + hasPassed(m1, m2, m3, m4, m5)

# Student 2: Failed one subject
dekha ""
dhara s1 = 45
dhara s2 = 78
dhara s3 = 82
dhara s4 = 75
dhara s5 = 80
dhara avg2 = (s1 + s2 + s3 + s4 + s5) / 5
dekha "Average: " + avg2
dekha "Grade: " + calculateGrade(avg2)
dekha "All passed: " + hasPassed(s1, s2, s3, s4, s5)` },
  "06_bank_account": { level: "advanced", code: `# Example 6: Bank Account
# Banking operations with compound assignment (+=, -=)

dhara balance = 1000

karya showBalance()
  dekha "Balance: Rs. " + balance
sesa

karya deposit(amount)
  jadi amount > 0 tahale
    balance += amount
    dekha "Deposited Rs. " + amount
    showBalance()
  nahele
    dekha "Error: Invalid amount"
  sesa
sesa

karya withdraw(amount)
  jadi amount <= 0 tahale
    dekha "Error: Invalid amount"
  sesa

  jadi amount > balance tahale
    dekha "Error: Insufficient balance"
  sesa

  balance -= amount
  dekha "Withdrew Rs. " + amount
  showBalance()
sesa

showBalance()
deposit(500)
withdraw(300)
withdraw(5000)

dekha ""
dekha "=== Transaction Summary ==="
dekha "Final Balance: Rs. " + balance` },
  "07_strings": { level: "basics", code: `# Example 7: String Operations
# Working with text in Odialang

# Basic string concatenation
dhara firstName = "Rama"
dhara lastName = "Das"
dhara fullName = firstName + " " + lastName
dekha "Name: " + fullName

# String with numbers
dhara age = 25
dekha "Age: " + age

# String with escape sequences
dhara quote = "He said \"Namaste\" to everyone"
dekha quote

# String concatenation chain
dekha "Hello" + ", " + "World" + "!"` },
  "08_math": { level: "basics", code: `# Example 8: Math Operations
# Advanced mathematical operations

# Decimal numbers
dhara pi = 3.14159
dhara radius = 5
dhara area = pi * radius * radius
dekha "Circle area (r=" + radius + "): " + area

# Negative numbers
dhara x = -5
dhara y = -10
dekha "x = " + x + ", y = " + y
dekha "-x = " + (-x)
dekha "-y = " + (-y)

# Absolute value
karya abs(n)
  jadi n < 0 tahale
    dhara result = 0 - n
    dekha "abs(" + n + ") = " + result
  nahele
    dekha "abs(" + n + ") = " + n
  sesa
sesa

abs(-42)
abs(25)
abs(0)

# Modulo
dekha "10 % 3 = " + (10 % 3)` },
  "05_math_funcs": { level: "intermediate", code: `# Example 5: Mathematical Functions
# Common mathematical algorithms

# Factorial
karya factorial(n)
  dhara result = 1
  dhara i = 2
  jebe i <= n
    result = result * i
    i = i + 1
  sesa
  fera result
sesa

# Check if prime
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

# GCD
karya gcd(a, b)
  jebe b != 0
    dhara temp = b
    b = a % b
    a = temp
  sesa
  fera a
sesa

dekha "5! = " + factorial(5)
dekha "Is 7 prime? " + isPrime(7)
dekha "Is 15 prime? " + isPrime(15)
dekha "GCD(48, 18) = " + gcd(48, 18)` },
  "06_scope": { level: "intermediate", code: `# Example 6: Variable Scope
# Understanding variable visibility

# Global variable
dhara globalVar = "I am global"
dekha "Global: " + globalVar

karya testScope()
  # Local variable
  dhara localVar = "I am local"
  dekha "Inside function - Local: " + localVar
  dekha "Inside function - Global: " + globalVar
sesa

testScope()
dekha "Outside - Global: " + globalVar

# Modifying global
dhara counter = 0
karya increment()
  counter = counter + 1
  dekha "Incremented to: " + counter
sesa

dekha "Initial: " + counter
increment()
increment()
dekha "Final: " + counter` },
  "07_sorting": { level: "advanced", code: `# Example 7: Sorting Algorithms
# Sorting concepts in Odialang

# Manual sorting of 3 numbers
karya sort3(a, b, c)
  dhara smallest = a
  dhara largest = c
  
  # Find smallest
  jadi b < smallest tahale
    smallest = b
  sesa
  jadi c < smallest tahale
    smallest = c
  sesa
  
  # Find largest
  jadi b > largest tahale
    largest = b
  sesa
  jadi c > largest tahale
    largest = c
  sesa
  
  # Middle calculation
  dhara middle = a + b + c - smallest - largest
  
  dekha "Sorted: " + smallest + ", " + middle + ", " + largest
sesa

dekha "=== Sorting ==="
sort3(5, 2, 8)
sort3(9, 1, 3)

# Check if sorted
karya isSorted(a, b, c)
  dhara result = sata
  jadi a > b tahale
    result = micha
  sesa
  jadi b > c tahale
    result = micha
  sesa
  dekha "Is " + a + ", " + b + ", " + c + " sorted? " + result
sesa

isSorted(1, 5, 9)
isSorted(3, 7, 2)` },
  "08_binary_search": { level: "advanced", code: `# Example 8: Binary Search
# Efficient searching algorithm

# Linear search simulation
karya linearSearch(target, n1, n2, n3, n4, n5)
  dhara found = micha
  
  jadi n1 == target tahale
    dekha "Found at position 1!"
    found = sata
  sesa
  
  jadi found == micha tahale
    jadi n2 == target tahale
      dekha "Found at position 2!"
      found = sata
    sesa
  sesa
  
  jadi found == micha tahale
    jadi n3 == target tahale
      dekha "Found at position 3!"
      found = sata
    sesa
  sesa
  
  jadi found == micha tahale
    jadi n4 == target tahale
      dekha "Found at position 4!"
      found = sata
    sesa
  sesa
  
  jadi found == micha tahale
    jadi n5 == target tahale
      dekha "Found at position 5!"
      found = sata
    sesa
  sesa
  
  jadi found == micha tahale
    dekha target + " not found"
  sesa
sesa

dekha "=== Linear Search ==="
linearSearch(8, 3, 8, 5, 9, 2)
linearSearch(7, 3, 8, 5, 9, 2)

# Find min and max
karya findMinMax(a, b, c)
  dhara minVal = a
  dhara maxVal = a
  
  jadi b < minVal tahale
    minVal = b
  sesa
  jadi c < minVal tahale
    minVal = c
  sesa
  
  jadi b > maxVal tahale
    maxVal = b
  sesa
  jadi c > maxVal tahale
    maxVal = c
  sesa
  
  dekha "Min: " + minVal + ", Max: " + maxVal
sesa

dekha ""
dekha "=== Min and Max ==="
findMinMax(5, 3, 8)
findMinMax(100, 25, 75)` },
  "07_arrays": { level: "intermediate", code: `# Example 7: Arrays
# Working with lists of data

# Creating arrays
dhara nums = [10, 20, 30, 40, 50]
dekha "Numbers: " + nums

# Accessing elements by index
dekha "First: " + nums[0]
dekha "Third: " + nums[2]
dekha "Last: " + nums[4]

# Array length
dekha "Length: " + nums.length

# Modifying array elements
dekha ""
dekha "=== Modifying Arrays ==="
dhara scores = [85, 92, 78, 95, 88]
dekha "Original scores: " + scores
scores[0] = 90
scores[2] = 82
dekha "Updated scores: " + scores

# Arrays with strings
dhara names = ["Rama", "Sita", "Hari"]
dekha "Names: " + names
dekha "Second name: " + names[1]

# Indexing in loops
dekha ""
dekha "=== Looping Through Arrays ==="
aarambha i = 0 ru 4
  dekha "nums[" + i + "] = " + nums[i]
sesa

# Nested arrays
dekha ""
dekha "=== Nested Arrays ==="
dhara matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
dekha "Row 0: " + matrix[0]
dekha "Row 1: " + matrix[1]
dekha "Element [0][0]: " + matrix[0][0]
dekha "Element [1][2]: " + matrix[1][2]

# Compound assignment on array elements
dhara data = [100, 200, 300]
dekha ""
dekha "Original: " + data
data[1] += 50
data[0] -= 10
dekha "After += and -=: " + data

# Empty array
dhara empty = []
dekha ""
dekha "Empty array: " + empty` },
};