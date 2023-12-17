### What is a "for" loop?

A "for" loop is a programming construct that allows you to iterate over a sequence of elements, executing a set of instructions for each element in the sequence.

### How does it work?

1. **Initialization:**

   - The loop begins with the initialization of a control variable.
   - This variable is often used to iterate over a sequence, like the elements of an array or the indices of a list.

2. **Condition Check:**

   - The program checks a condition to determine whether the loop should continue.
   - If the condition is true, the instructions inside the loop are executed.

3. **Execution:**

   - The instructions inside the loop are performed.
   - After completing the instructions, the control variable is updated (incremented or decremented).

4. **Repeat or Exit:**
   - The program goes back to step 2 and rechecks the condition.
   - If the condition is still true, the loop repeats with the updated control variable.
   - If the condition becomes false, the loop stops, and the program continues with the next set of instructions after the loop.

**Syntax:**

```python
for variable in sequence:
    # Code to be executed during each iteration
    # Update the variable as needed
```

Replace `variable` with the loop control variable and `sequence` with the iterable you want to loop through.

## 1. Greetings

### Objective:

The goal of this code snippet is to greet each person in the given list.

### Code Explanation:

```python
# List of names to greet
names = ["Sun", "Moon", "Water", "Air", "Soil", "Charan", "Cherry", "Lucky", "Reddy"]

# Greeting each person in the list
for name in names:
    print("Hello, ", name)
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

### Explanation:

- The `names` list contains names of individuals to greet.
- The `for` loop iterates through each name in the list.
- Inside the loop, the `print` statement outputs a greeting for each person.

---

## 2. Odd or Even

### Objective:

This code determines whether numbers from 1 to 10 are odd or even.

### Code Explanation:

```python
# Checking if numbers from 1 to 10 are odd or even
for number in range(1, 11):
    if number % 2 == 0:
        print("EVEN No: ", number)
    else:
        print("ODD No: ", number)
```

### Output:

```python
ODD No:  1
EVEN No:  2
ODD No:  3
EVEN No:  4
ODD No:  5
EVEN No:  6
ODD No:  7
EVEN No:  8
ODD No:  9
EVEN No:  10

```

### Explanation:

- The `for` loop iterates through numbers from 1 to 10 using `range(1, 11)`.
- The `if` statement checks if a number is even (`number % 2 == 0`) and prints accordingly.
- If the number is not even, it is considered odd and is printed with the "ODD No" label.

---

## 3. Print Tables

### Objective:

This code snippet prints the multiplication tables.

### Code Explanation:

```python
# Printing multiplication table for a specific number (in this case, 123)
table = 123
for i in range(1, 11):
    print(table, "*", i, "=", table * i)
```

### Output:

```python
123 * 1 = 123
123 * 2 = 246
123 * 3 = 369
123 * 4 = 492
123 * 5 = 615
123 * 6 = 738
123 * 7 = 861
123 * 8 = 984
123 * 9 = 1107
123 * 10 = 1230
```

### Explanation:

- The variable `table` is set to 123, and the multiplication table for this number is printed.
- The `for` loop iterates from 1 to 10 using `range(1, 11)`.
- Inside the loop, the `print` statement displays the multiplication table for the specified number.

---
