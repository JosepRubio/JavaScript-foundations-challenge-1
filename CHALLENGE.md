# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

```
JavaScript is a scripting or programming language that allows you to implement complex features on web pages s a scripting language that enables you to create dynamically updating content, control multimedia, animate images 
```

## About values

### What is a primitive value?

```
A primitive value on java script is a data type taht represents a single inmutable value, meaning their values cannot be changed after creation.
(- Number
 - String
 - Boolean
 - Undefined
 - Null
 - Symbol)
```

### Which are primitive values? Explain them with at least one example for primitive.

```
 - Number: Represents numeric values, both integers and floating-point numbers.
 (let age = 20;)
 - String: Represents textual data enclosed in single or double quotes.
 (let name = "Josep";)
 - Boolean: Represents a true or false value.
 (let isStudent = true;)
 - Undefined: Represents a variable that has been declared but hasn't been assigned a value.
 (let x;)
 - Null: Represents the intentional absence of any object value.
 (let empty = null;)

```

## About variables

### What is a variable in JS?

```
 A variable in JS is a container that is used to store data, such as numbers, strings, objects, or other values. Variables are an essential concept in programming because they allow you to work with and manipulate data within your programs. Each variable has a name, a data type, and a value.
```

### How many ways can we define a variable in JS? Is there any not recommended way?

```
In JavaScript, there are three ways to define variables: using var, let, and const. 

Variables declared with var are function-scoped or globally scoped but not block-scoped. This can lead to unexpected behavior, especially within blocks like if statements or loops.
```

### Which are the most used var naming conventions in JS?

```
Camel Case: In JavaScript, it's common to use camel case for variable names. Camel case is a naming convention where the first word starts with a lowercase letter, and the first letter of each subsequent word is capitalized.
```

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

```
Equal (==): 10 == "10" 
Not Equal (!=): 6 != 11
Strict Equal (===): 5 === 5
Strict Not Equal (!==): 5 !== "5"
Greater Than (>): 10 > 5
Less Than (<): 3 < 8
Greater Than or Equal To (>=): 10 >= 10
Less Than or Equal To (<=): 3 <= 3
```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

```
- Logical AND ('&&'): 
true && true // true
true && false // false
false && true // false
false && false // false

- Logical OR ('||'):
true || true // true
true || false // true
false || true // true
false || false // false

- Logical NOT ('!'):
!true // false
!false // true


```
