// Dark Mode Toggle
// This function toggles the website's theme between light and dark modes.
function toggleTheme() {
    const body = document.body;
    const isDark = body.style.backgroundColor === 'black';
    body.style.backgroundColor = isDark ? 'white' : 'black';
    body.style.color = isDark ? 'black' : 'white';
}

// JavaScript Variables
// Variables are used to store data in JavaScript. There are three ways to declare variables: `var`, `let`, and `const`.
function showVariablesExample() {
    const outputElement = document.getElementById("variablesOutput");
    if (outputElement.innerText) {
        // If examples are already displayed, clear them
        outputElement.innerText = "";
    } else {
        // Otherwise, display the examples
        const examples = `
1. var:
   var x = 10; // Declares a variable using 'var'. It has function scope.
   console.log(x); // Output: 10

2. let:
   let y = 20; // Declares a variable using 'let'. It has block scope.
   y = 30; // 'let' allows reassignment.
   console.log(y); // Output: 30

3. const:
   const z = 40; // Declares a constant using 'const'. It cannot be reassigned.
   console.log(z); // Output: 40

4. Block Scope:
   {
       let a = 50; // 'let' is only accessible within this block.
       console.log(a); // Output: 50
   }

5. Global Scope:
   var globalVar = "I am global"; // 'var' can be accessed globally if declared outside a function.
   console.log(globalVar); // Output: "I am global"

6. Hoisting with var:
   console.log(hoistedVar); // 'var' variables are hoisted but initialized as undefined.
   var hoistedVar = "Hoisted"; // Output: undefined

7. No Hoisting with let:
   // console.log(notHoisted); // Error: 'let' variables are not hoisted.
   let notHoisted = "Not Hoisted";

8. Reassignment:
   let reassignable = 100; // 'let' allows reassignment.
   reassignable = 200;
   console.log(reassignable); // Output: 200

9. Constants:
   const constantValue = 300; // 'const' variables cannot be reassigned.
   // constantValue = 400; // Error: Assignment to constant variable.

10. Template Literals:
   let name = "Alice"; // Template literals allow embedding variables in strings.
   console.log(\`Hello, \${name}!\`); // Output: "Hello, Alice!"

11. Dynamic Typing:
   let dynamic = 42; // JavaScript variables can change types dynamically.
   dynamic = "Now I'm a string";
   console.log(dynamic); // Output: "Now I'm a string"

12. Undefined:
   let undefinedVar; // A variable declared but not assigned a value is 'undefined'.
   console.log(undefinedVar); // Output: undefined

13. Null:
   let nullVar = null; // 'null' represents an intentional absence of value.
   console.log(nullVar); // Output: null

14. Arrays:
   let arr = [1, 2, 3]; // Arrays are used to store multiple values.
   console.log(arr); // Output: [1, 2, 3]

15. Objects:
   let obj = { key: "value" }; // Objects store key-value pairs.
   console.log(obj); // Output: { key: "value" }

16. Functions as Variables:
   let greet = function() { // Functions can be assigned to variables.
       return "Hello!";
   };
   console.log(greet()); // Output: "Hello!"

17. Arrow Functions:
   let arrowGreet = () => "Hello, Arrow!"; // Arrow functions are a shorthand for writing functions.
   console.log(arrowGreet()); // Output: "Hello, Arrow!"

18. Boolean Variables:
   let isTrue = true; // Boolean variables store true or false values.
   console.log(isTrue); // Output: true

19. Numbers:
   let num = 123; // Numbers can be integers or floating-point values.
   console.log(num); // Output: 123

20. Strings:
   let str = "JavaScript"; // Strings are sequences of characters.
   console.log(str); // Output: "JavaScript"
        `;
        outputElement.innerText = examples;
    }
}

// JavaScript Data Types
function showDataTypesExample() {
    const outputElement = document.getElementById("dataTypesOutput");
    if (outputElement.innerText) {
        outputElement.innerText = "";
    } else {
        const examples = `
1. String:
   let str = "Hello, World!"; // Strings are used to represent text.
   console.log(str); // Output: "Hello, World!"

2. Number:
   let num = 42; // Numbers can be integers or floating-point values.
   console.log(num); // Output: 42

3. Boolean:
   let isTrue = true; // Booleans represent true or false values.
   console.log(isTrue); // Output: true

4. Object:
   let obj = { name: "Alice", age: 30 }; // Objects store key-value pairs.
   console.log(obj); // Output: { name: "Alice", age: 30 }

5. Array:
   let arr = [1, 2, 3]; // Arrays store multiple values in an ordered list.
   console.log(arr); // Output: [1, 2, 3]

6. Null:
   let nullValue = null; // 'null' represents an intentional absence of value.
   console.log(nullValue); // Output: null

7. Undefined:
   let undefinedValue; // A variable declared but not assigned a value is 'undefined'.
   console.log(undefinedValue); // Output: undefined

8. BigInt:
   let bigIntValue = 123456789012345678901234567890n; // BigInt is used for very large integers.
   console.log(bigIntValue); // Output: 123456789012345678901234567890n

9. Symbol:
   let sym = Symbol("unique"); // Symbols are unique and immutable identifiers.
   console.log(sym); // Output: Symbol(unique)

10. typeof Operator:
   console.log(typeof str); // 'typeof' returns the data type of a variable. Output: "string"

11. String Methods:
   console.log(str.toUpperCase()); // Converts a string to uppercase. Output: "HELLO, WORLD!"

12. Array Methods:
   console.log(arr.map(x => x * 2)); // Applies a function to each array element. Output: [2, 4, 6]

13. Object Methods:
   console.log(Object.keys(obj)); // Returns an array of object keys. Output: ["name", "age"]

14. Boolean Logic:
   console.log(!isTrue); // Negates a boolean value. Output: false

15. Number Methods:
   console.log(num.toFixed(2)); // Formats a number to 2 decimal places. Output: "42.00"

16. Template Literals:
   console.log(\`Hello, \${obj.name}!\`); // Embeds variables in strings. Output: "Hello, Alice!"

17. Nested Objects:
   let nestedObj = { person: { name: "Bob", age: 25 } }; // Objects can be nested.
   console.log(nestedObj.person.name); // Output: "Bob"

18. Nested Arrays:
   let nestedArr = [[1, 2], [3, 4]]; // Arrays can be nested.
   console.log(nestedArr[0][1]); // Output: 2

19. Combining Types:
   let mixed = [1, "two", { three: 3 }]; // Arrays can store mixed data types.
   console.log(mixed); // Output: [1, "two", { three: 3 }]

20. Dynamic Typing:
   let dynamic = "string"; // Variables can change types dynamically.
   dynamic = 123;
   console.log(dynamic); // Output: 123
        `;
        outputElement.innerText = examples;
    }
}

// JavaScript Data Structures and Methods
function showDataStructuresExample() {
    const outputElement = document.getElementById("dataStructuresOutput");
    if (outputElement.innerText) {
        outputElement.innerText = "";
    } else {
        const examples = `
1. Arrays:
   let arr = [1, 2, 3]; // Arrays store multiple values in an ordered list.
   console.log(arr); // Output: [1, 2, 3]

2. Objects:
   let obj = { key: "value" }; // Objects store key-value pairs.
   console.log(obj); // Output: { key: "value" }

3. Sets:
   let set = new Set([1, 2, 2, 3]); // Sets store unique values.
   console.log(set); // Output: Set(3) { 1, 2, 3 }

4. Maps:
   let map = new Map(); // Maps store key-value pairs with any data type as keys.
   map.set("key", "value");
   console.log(map); // Output: Map(1) { "key" => "value" }

5. Nested Structures:
   let nested = { arr: [1, 2, 3], obj: { key: "value" } }; // Data structures can be nested.
   console.log(nested); // Output: { arr: [1, 2, 3], obj: { key: "value" } }

6. Array Methods:
   console.log(arr.map(x => x * 2)); // Applies a function to each array element. Output: [2, 4, 6]

7. Object Methods:
   console.log(Object.keys(obj)); // Returns an array of object keys. Output: ["key"]

8. Set Methods:
   set.add(4); // Adds a value to the set.
   console.log(set); // Output: Set(4) { 1, 2, 3, 4 }

9. Map Methods:
   map.set("newKey", "newValue"); // Adds a key-value pair to the map.
   console.log(map); // Output: Map(2) { "key" => "value", "newKey" => "newValue" }

10. Combining Structures:
   let combined = [obj, set, map]; // Data structures can be combined.
   console.log(combined); // Output: [{ key: "value" }, Set(4), Map(2)]

11. Array Iteration:
   arr.forEach(x => console.log(x)); // Iterates over array elements. Output: 1, 2, 3

12. Object Iteration:
   for (let key in obj) { // Iterates over object keys.
       console.log(key, obj[key]); // Output: key value
   }

13. Set Iteration:
   for (let value of set) { // Iterates over set values.
       console.log(value); // Output: 1, 2, 3, 4
   }

14. Map Iteration:
   for (let [key, value] of map) { // Iterates over map key-value pairs.
       console.log(key, value); // Output: key value, newKey newValue
   }

15. Array Filtering:
   console.log(arr.filter(x => x > 1)); // Filters array elements based on a condition. Output: [2, 3]

16. Array Reducing:
   console.log(arr.reduce((sum, x) => sum + x, 0)); // Reduces array elements to a single value. Output: 6

17. Object Destructuring:
   let { key } = obj; // Extracts object properties into variables.
   console.log(key); // Output: "value"

18. Array Destructuring:
   let [first, second] = arr; // Extracts array elements into variables.
   console.log(first, second); // Output: 1 2

19. Spread Operator:
   let newArr = [...arr, 4]; // Expands an array into individual elements.
   console.log(newArr); // Output: [1, 2, 3, 4]

20. Rest Operator:
   function sum(...nums) { // Collects arguments into an array.
       return nums.reduce((sum, x) => sum + x, 0);
   }
   console.log(sum(1, 2, 3)); // Output: 6
        `;
        outputElement.innerText = examples;
    }
}

// JavaScript Functions
function showFunctionsExample() {
    const outputElement = document.getElementById("functionsOutput");
    if (outputElement.innerText) {
        outputElement.innerText = "";
    } else {
        const examples = `
1. Regular Function:
   function add(a, b) { // A function that takes two numbers and returns their sum.
       return a + b;
   }
   console.log(add(2, 3)); // Output: 5

2. Arrow Function:
   let multiply = (a, b) => a * b; // A shorter syntax for writing functions.
   console.log(multiply(2, 3)); // Output: 6

3. Function with Default Parameters:
   function greet(name = "Guest") { // A function with a default parameter.
       return "Hello, " + name;
   }
   console.log(greet()); // Output: Hello, Guest

4. Higher-Order Function:
   let numbers = [1, 2, 3];
   let squared = numbers.map(num => num ** 2); // A function that takes another function as an argument.
   console.log(squared); // Output: [1, 4, 9]

5. Recursive Function:
   function factorial(n) { // A function that calls itself to calculate the factorial of a number.
       return n === 0 ? 1 : n * factorial(n - 1);
   }
   console.log(factorial(5)); // Output: 120

6. Anonymous Function:
   let greet = function() { // A function without a name, assigned to a variable.
       return "Hello!";
   };
   console.log(greet()); // Output: Hello!

7. Immediately Invoked Function Expression (IIFE):
   (function() { // A function that runs immediately after being defined.
       console.log("IIFE executed!");
   })(); // Output: IIFE executed!

8. Function Returning a Function:
   function outer() { // A function that returns another function.
       return function inner() {
           return "Hello from inner!";
       };
   }
   console.log(outer()()); // Output: Hello from inner!

9. Function with Rest Parameters:
   function sum(...nums) { // A function that takes a variable number of arguments.
       return nums.reduce((total, num) => total + num, 0);
   }
   console.log(sum(1, 2, 3, 4)); // Output: 10

10. Function with Spread Operator:
   function multiply(a, b, c) { // A function that multiplies three numbers.
       return a * b * c;
   }
   let nums = [2, 3, 4];
   console.log(multiply(...nums)); // Output: 24

11. Callback Function:
   function processArray(arr, callback) { // A function that takes another function as an argument.
       return arr.map(callback);
   }
   console.log(processArray([1, 2, 3], num => num * 2)); // Output: [2, 4, 6]

12. Function with Destructuring:
   function display({ name, age }) { // A function that extracts properties from an object.
       console.log(\`Name: \${name}, Age: \${age}\`);
   }
   display({ name: "Alice", age: 30 }); // Output: Name: Alice, Age: 30

13. Function with Default Object Parameter:
   function displayUser(user = { name: "Guest", age: 0 }) { // A function with a default object parameter.
       console.log(\`Name: \${user.name}, Age: \${user.age}\`);
   }
   displayUser(); // Output: Name: Guest, Age: 0

14. Function with Template Literals:
   function greet(name) { // A function that uses template literals.
       return \`Hello, \${name}!\`;
   }
   console.log(greet("Alice")); // Output: Hello, Alice!

15. Function with Conditional Logic:
   function checkAge(age) { // A function that uses conditional logic.
       return age >= 18 ? "Adult" : "Minor";
   }
   console.log(checkAge(20)); // Output: Adult

16. Function with Array Methods:
   function doubleArray(arr) { // A function that doubles each element in an array.
       return arr.map(num => num * 2);
   }
   console.log(doubleArray([1, 2, 3])); // Output: [2, 4, 6]

17. Function with Object Methods:
   function getKeys(obj) { // A function that returns the keys of an object.
       return Object.keys(obj);
   }
   console.log(getKeys({ name: "Alice", age: 30 })); // Output: ["name", "age"]

18. Function with Nested Functions:
   function outer() { // A function that contains another function.
       function inner() {
           return "Inner Function";
       }
       return inner();
   }
   console.log(outer()); // Output: Inner Function

19. Function with Try-Catch:
   function safeDivide(a, b) { // A function that handles errors using try-catch.
       try {
           if (b === 0) throw "Division by zero!";
           return a / b;
       } catch (error) {
           return error;
       }
   }
   console.log(safeDivide(10, 0)); // Output: Division by zero!

20. Function with Loops:
   function sumArray(arr) { // A function that sums all elements in an array using a loop.
       let sum = 0;
       for (let num of arr) {
           sum += num;
       }
       return sum;
   }
   console.log(sumArray([1, 2, 3])); // Output: 6
        `;
        outputElement.innerText = examples;
    }
}

// JavaScript Operators and Flow Control

function showOperatorsExample() {
    const outputElement = document.getElementById("operatorsOutput");
    if (outputElement.innerText) {
        outputElement.innerText = "";
    } else {
        const examples = `
1. Arithmetic Operators:
   let sum = 5 + 3; // Adds two numbers.
   console.log(sum); // Output: 8

   let difference = 10 - 4; // Subtracts two numbers.
   console.log(difference); // Output: 6

   let product = 6 * 7; // Multiplies two numbers.
   console.log(product); // Output: 42

   let quotient = 20 / 4; // Divides two numbers.
   console.log(quotient); // Output: 5

   let remainder = 10 % 3; // Finds the remainder of division.
   console.log(remainder); // Output: 1

2. Comparison Operators:
   console.log(5 > 3); // Greater than. Output: true
   console.log(5 < 3); // Less than. Output: false
   console.log(5 >= 5); // Greater than or equal to. Output: true
   console.log(5 <= 4); // Less than or equal to. Output: false
   console.log(5 == "5"); // Equality (loose). Output: true
   console.log(5 === "5"); // Strict equality. Output: false

3. Logical Operators:
   console.log(true && false); // Logical AND. Output: false
   console.log(true || false); // Logical OR. Output: true
   console.log(!true); // Logical NOT. Output: false

4. Assignment Operators:
   let x = 10;
   x += 5; // Equivalent to x = x + 5.
   console.log(x); // Output: 15

   x *= 2; // Equivalent to x = x * 2.
   console.log(x); // Output: 30

5. Conditional (Ternary) Operator:
   let age = 18;
   let status = age >= 18 ? "Adult" : "Minor";
   console.log(status); // Output: "Adult"

6. Flow Control - if/else:
   let num = 10;
   if (num > 5) {
       console.log("Greater than 5"); // Output: "Greater than 5"
   } else {
       console.log("5 or less");
   }

7. Flow Control - switch:
   let day = 3;
   switch (day) {
       case 1:
           console.log("Monday");
           break;
       case 2:
           console.log("Tuesday");
           break;
       case 3:
           console.log("Wednesday"); // Output: "Wednesday"
           break;
       default:
           console.log("Other day");
   }

8. Nullish Coalescing Operator:
   let value = null ?? "Default";
   console.log(value); // Output: "Default"

9. Optional Chaining:
   let user = { name: "Alice", address: { city: "Wonderland" } };
   console.log(user?.address?.city); // Output: "Wonderland"
   console.log(user?.contact?.phone); // Output: undefined

10. Short-Circuit Evaluation:
   console.log(false && "Hello"); // Output: false
   console.log(true || "World"); // Output: true

11. Bitwise Operators:
   console.log(5 & 3); // Bitwise AND. Output: 1
   console.log(5 | 3); // Bitwise OR. Output: 7
   console.log(5 ^ 3); // Bitwise XOR. Output: 6

12. Unary Operators:
   let a = 5;
   console.log(-a); // Negation. Output: -5
   console.log(+a); // Positive. Output: 5

13. typeof Operator:
   console.log(typeof "Hello"); // Output: "string"
   console.log(typeof 42); // Output: "number"

14. instanceof Operator:
   let date = new Date();
   console.log(date instanceof Date); // Output: true

15. in Operator:
   let obj = { key: "value" };
   console.log("key" in obj); // Output: true

16. delete Operator:
   delete obj.key;
   console.log(obj.key); // Output: undefined

17. Spread Operator:
   let arr1 = [1, 2];
   let arr2 = [...arr1, 3];
   console.log(arr2); // Output: [1, 2, 3]

18. Rest Operator:
   function sum(...nums) {
       return nums.reduce((total, num) => total + num, 0);
   }
   console.log(sum(1, 2, 3)); // Output: 6

19. Exponentiation Operator:
   console.log(2 ** 3); // Output: 8

20. Comma Operator:
   let result = (1 + 2, 3 + 4);
   console.log(result); // Output: 7
        `;
        outputElement.innerText = examples;
    }
}

// JavaScript Iteration
function showIterationExample() {
    const outputElement = document.getElementById("iterationOutput");
    if (outputElement.innerText) {
        outputElement.innerText = "";
    } else {
        const examples = `
1. for Loop:
   for (let i = 0; i < 5; i++) {
       console.log(i); // Output: 0, 1, 2, 3, 4
   }

2. while Loop:
   let count = 0;
   while (count < 3) {
       console.log(count); // Output: 0, 1, 2
       count++;
   }

3. do-while Loop:
   let num = 0;
   do {
       console.log(num); // Output: 0, 1, 2
       num++;
   } while (num < 3);

4. for...of Loop:
   let arr = [10, 20, 30];
   for (let value of arr) {
       console.log(value); // Output: 10, 20, 30
   }

5. for...in Loop:
   let obj = { a: 1, b: 2, c: 3 };
   for (let key in obj) {
       console.log(key, obj[key]); // Output: a 1, b 2, c 3
   }

6. break Statement:
   for (let i = 0; i < 5; i++) {
       if (i === 3) break;
       console.log(i); // Output: 0, 1, 2
   }

7. continue Statement:
   for (let i = 0; i < 5; i++) {
       if (i === 2) continue;
       console.log(i); // Output: 0, 1, 3, 4
   }

8. Nested Loops:
   for (let i = 0; i < 2; i++) {
       for (let j = 0; j < 2; j++) {
           console.log(\`i: \${i}, j: \${j}\`);
       }
   }
   // Output: i: 0, j: 0; i: 0, j: 1; i: 1, j: 0; i: 1, j: 1

9. Iterating Strings:
   let str = "Hello";
   for (let char of str) {
       console.log(char); // Output: H, e, l, l, o
   }

10. Array forEach:
   let nums = [1, 2, 3];
   nums.forEach(num => console.log(num)); // Output: 1, 2, 3

11. Infinite Loop (with break):
   let i = 0;
   while (true) {
       if (i === 3) break;
       console.log(i); // Output: 0, 1, 2
       i++;
   }

12. Reverse Loop:
   for (let i = 5; i >= 0; i--) {
       console.log(i); // Output: 5, 4, 3, 2, 1, 0
   }

13. Iterating Objects:
   let person = { name: "Alice", age: 25 };
   for (let key in person) {
       console.log(\`\${key}: \${person[key]}\`);
   }
   // Output: name: Alice, age: 25

14. Iterating Sets:
   let set = new Set([1, 2, 3]);
   for (let value of set) {
       console.log(value); // Output: 1, 2, 3
   }

15. Iterating Maps:
   let map = new Map([["a", 1], ["b", 2]]);
   for (let [key, value] of map) {
       console.log(\`\${key}: \${value}\`);
   }
   // Output: a: 1, b: 2

16. Skipping Iterations:
   for (let i = 0; i < 5; i++) {
       if (i % 2 === 0) continue;
       console.log(i); // Output: 1, 3
   }

17. Iterating Arrays with reduce:
   let total = nums.reduce((sum, num) => sum + num, 0);
   console.log(total); // Output: 6

18. Iterating Arrays with map:
   let doubled = nums.map(num => num * 2);
   console.log(doubled); // Output: [2, 4, 6]

19. Iterating Arrays with filter:
   let even = nums.filter(num => num % 2 === 0);
   console.log(even); // Output: [2]

20. Iterating Arrays with every:
   let allPositive = nums.every(num => num > 0);
   console.log(allPositive); // Output: true
        `;
        outputElement.innerText = examples;
    }
}

// Ternary Expressions and Arrow Functions
function showTernaryArrowExample() {
    const outputElement = document.getElementById("ternaryArrowOutput");
    if (outputElement.innerText) {
        outputElement.innerText = "";
    } else {
        const examples = `
1. Ternary Expression:
   let age = 16;
   let canVote = age >= 18 ? "Yes" : "No";
   console.log(canVote); // Output: "No"

2. Nested Ternary:
   let score = 85;
   let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
   console.log(grade); // Output: "B"

3. Arrow Function - Single Line:
   let square = x => x * x;
   console.log(square(4)); // Output: 16

4. Arrow Function - Multiple Lines:
   let add = (a, b) => {
       let sum = a + b;
       return sum;
   };
   console.log(add(3, 5)); // Output: 8

5. Arrow Function with Default Parameters:
   let greet = (name = "Guest") => \`Hello, \${name}!\`;
   console.log(greet()); // Output: "Hello, Guest"
   console.log(greet("Alice")); // Output: "Hello, Alice"

6. Arrow Function Returning Object:
   let createUser = (name, age) => ({ name, age });
   console.log(createUser("Alice", 30)); // Output: { name: "Alice", age: 30 }

7. Arrow Function with Rest Parameters:
   let sum = (...nums) => nums.reduce((total, num) => total + num, 0);
   console.log(sum(1, 2, 3)); // Output: 6

8. Arrow Function with Array Methods:
   let nums = [1, 2, 3];
   let doubled = nums.map(num => num * 2);
   console.log(doubled); // Output: [2, 4, 6]

9. Arrow Function with Conditional Logic:
   let isEven = num => num % 2 === 0 ? "Even" : "Odd";
   console.log(isEven(4)); // Output: "Even"

10. Arrow Function with Destructuring:
   let display = ({ name, age }) => \`Name: \${name}, Age: \${age}\`;
   console.log(display({ name: "Alice", age: 30 })); // Output: "Name: Alice, Age: 30"

11. Arrow Function with Spread Operator:
   let multiply = (a, b, c) => a * b * c;
   console.log(multiply(...[2, 3, 4])); // Output: 24

12. Arrow Function with Template Literals:
   let greetUser = name => \`Welcome, \${name}!\`;
   console.log(greetUser("Alice")); // Output: "Welcome, Alice!"

13. Arrow Function with Array Filtering:
   let evenNums = nums.filter(num => num % 2 === 0);
   console.log(evenNums); // Output: [2]

14. Arrow Function with Array Reducing:
   let total = nums.reduce((sum, num) => sum + num, 0);
   console.log(total); // Output: 6

15. Arrow Function with Array Sorting:
   let sorted = nums.sort((a, b) => b - a);
   console.log(sorted); // Output: [3, 2, 1]

16. Arrow Function with Boolean Logic:
   let isPositive = num => num > 0;
   console.log(isPositive(-1)); // Output: false

17. Arrow Function with String Methods:
   let shout = str => str.toUpperCase();
   console.log(shout("hello")); // Output: "HELLO"

18. Arrow Function with Nested Functions:
   let outer = () => {
       let inner = () => "Inner Function";
       return inner();
   };
   console.log(outer()); // Output: "Inner Function"

19. Arrow Function with Optional Chaining:
   let getCity = user => user?.address?.city || "Unknown";
   console.log(getCity({ address: { city: "Wonderland" } })); // Output: "Wonderland"

20. Arrow Function with Nullish Coalescing:
   let getName = name => name ?? "Guest";
   console.log(getName(null)); // Output: "Guest"
        `;
        outputElement.innerText = examples;
    }
}