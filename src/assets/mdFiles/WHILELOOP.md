### What is a "while" loop?

A "while" loop is a programming construct that allows you to repeat a set of instructions as long as a certain condition is true.

### How does it work?

1. **Condition Check:**

   - First, the program checks a specified condition.
   - If the condition is true, the instructions inside the loop are executed.

2. **Execution:**

   - The instructions inside the loop are performed.
   - After completing the instructions, the program goes back to step 1 and rechecks the condition.

3. **Repeat or Exit:**
   - If the condition is still true, the loop repeats, and the instructions are executed again.
   - If the condition becomes false, the loop stops, and the program continues with the next set of instructions after the loop.

**Syntax:**

```python
while condition:
    # Code to be executed as long as the condition is True
    # Update the condition as needed
```

Replace `condition` with the boolean expression that determines whether the loop should continue. The loop will continue executing as long as the condition remains True. Make sure to update the condition within the loop to avoid an infinite loop.

Certainly! Let's delve into each example in detail:

### Example 1: **Greetings Say hello to everyone in the list below:**

#### names = ["Sun", "Moon", "Water", "Air", "Soil", "Charan", "Cherry", "Lucky", "Reddy"]

```python
names = ["Sun", "Moon", "Water", "Air", "Soil", "Charan", "Cherry", "Lucky", "Reddy"]
i = 0
while i < 9:
    print("Hello, ", names[i])
    i = i + 1
```

### Output:

```python
Hello,  Sun
Hello,  Moon
Hello,  Water
Hello,  Air
Hello,  Soil
Hello,  Charan
Hello,  Cherry
Hello,  Lucky
Hello,  Reddy
```

- **Explanation:**
  - We start with a list of names.
  - The variable `i` is initialized to 0, representing the index of the first name in the list.
  - The `while` loop continues to execute as long as `i` is less than 9 (the length of the 'names' list).
  - Inside the loop, it prints a greeting message for each name using the current index `i`.
  - After each iteration, `i` is incremented by 1 to move to the next name in the list.
  - The loop stops when `i` becomes equal to or greater than 9.

### Example 2: Odd or Even

#### Print whether the numbers from 1 to 10 are odd or even.

```python
i = 1
while i <= 10:
    if i % 2 == 0:
        print("EVEN No:", i)
    else:
        print("ODD No:", i)
    i = i + 1
```

### Output:

```python
ODD No: 1
EVEN No: 2
ODD No: 3
EVEN No: 4
ODD No: 5
EVEN No: 6
ODD No: 7
EVEN No: 8
ODD No: 9
EVEN No: 10
```

- **Explanation:**
  - Here, the loop runs from 1 to 10 (inclusive) using the variable `i`.
  - The `if` statement inside the loop checks if the current value of `i` is even (`i % 2 == 0`) or odd.
  - If even, it prints a message indicating that the number is even; otherwise, it prints a message for an odd number.
  - The variable `i` is incremented after each iteration, ensuring that the loop covers all numbers from 1 to 10.

### Example 3: Print Tables

### Print the multiplication tables.

```python
table = 24
i = 1
while i <= 10:
    print(table, "*", i, "=", table * i)
    i = i + 1
```

### Output:

```python
24 * 1 = 24
24 * 2 = 48
24 * 3 = 72
24 * 4 = 96
24 * 5 = 120
24 * 6 = 144
24 * 7 = 168
24 * 8 = 192
24 * 9 = 216
24 * 10 = 240
```

- **Explanation:**
  - This loop is designed to print the multiplication table for the number 24.
  - The loop iterates from 1 to 10.
  - Inside the loop, it prints the multiplication expression for the current value of `i` (from 1 to 10).
  - The variable `i` is incremented after each iteration, ensuring that the loop covers the multiplication for each factor from 1 to 10.

These examples showcase the versatility of the `while` loop, allowing you to perform tasks repetitively based on a specified condition. It's crucial to manage the loop variable (`i` in these cases) properly to avoid infinite loops.
