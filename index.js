// index.js

const colors = require('colors'); // Third-party module
const calculator = require('./my_module/calculator'); // Custom module
const readline = require('readline'); // Built-in module

// Read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(colors.cyan('Welcome to Your Name Calculator!'));

rl.question('Enter first number: ', (num1) => {
  rl.question('Enter second number: ', (num2) => {
    rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);

      if (isNaN(a) || isNaN(b)) {
        console.log(colors.red('Invalid number entered.'));
        rl.close();
        return;
      }

      try {
        let result;

        switch (operation.toLowerCase()) {
          case 'add':
            result = calculator.add(a, b);
            break;
          case 'subtract':
            result = calculator.subtract(a, b);
            break;
          case 'multiply':
            result = calculator.multiply(a, b);
            break;
          case 'divide':
            result = calculator.divide(a, b);
            break;
          default:
            console.log(colors.red('Unknown operation.'));
            rl.close();
            return;
        }

        console.log(colors.green(`Result: ${result}`));
      } catch (error) {
        console.log(colors.red(error.message));
      }

      rl.close();
    });
  });
});
