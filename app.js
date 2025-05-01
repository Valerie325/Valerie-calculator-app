// app.js

const path = require('path'); // Built-in module
const colors = require('colors'); // Third-party module
const calculator = require('./my_module/calculator'); // Custom module

// 1. Using the path module
const fileName = path.basename(__filename);
console.log(colors.magenta(`Current file name: ${fileName}`));

// 2. Perform some calculator operations
const num1 = 22;
const num2 = 18;

const addition = calculator.add(num1, num2);
const subtraction = calculator.subtract(num1, num2);
const multiplication = calculator.multiply(num1, num2);
const division = calculator.divide(num1, num2);

// 3. Display results with colors
console.log(colors.red(`Addition (${num1} + ${num2}) = ${addition}`));
console.log(colors.blue(`Subtraction (${num1} - ${num2}) = ${subtraction}`));
console.log(colors.green(`Multiplication (${num1} * ${num2}) = ${multiplication}`));
console.log(colors.yellow(`Division (${num1} / ${num2}) = ${division}`));
