// Calculator class
class Calculator {
    add(a, b) {
        let sum = a + b;
        return sum;
    }

    subtract(a, b) {
        let difference = a - b;
      return difference;
    }

    multiply(a, b) {
      let multiplication = a * b;  
      return multiplication;
    }

    divide(a, b) {
      
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
      let division = a/b;
        return division;
    }
}

// ScientificCalculator class that extends Calculator
class ScientificCalculator extends Calculator {
    square(num) {
        let square = num * num;
        return square;
    }

    cube(num) {
        let cube = num * num * num;
        return cube;
    }

    power(base, exponent) {
        let power = Math.pow(base, exponent);
        return power;
    }
}


// Create an instance of ScientificCalculator
const calculator = new ScientificCalculator();
console.log("Welcome to Calculator");

// Using "call" method to invoke the "add" method of Calculator
const addTwoNumbers = calculator.add.call(calculator, 10, 5);
console.log("Using call method to add:", addTwoNumbers);

// Using "apply" method to invoke the "subtract" method of Calculator
const subtractTwoNumbers = calculator.subtract.apply(calculator, [10, 5]);
console.log("Using apply method to subtract:", subtractTwoNumbers);

// Using "bind" method to create "multiplyByTwo" method
const multiplyByTwo = calculator.multiply.bind(calculator, 2);

// Using "bind" method to create "powerOfThree" method
const powerOfThree = calculator.power.bind(calculator, 3);

// Call "multiplyByTwo" method with argument 5
const multiplyWithTwo = multiplyByTwo(5);
console.log("Multiply by two:", multiplyWithTwo);

// Call "powerOfThree" method with argument 2
const powersOfThree = powerOfThree(2);
console.log("Power of three:", powersOfThree);

console.log("Thank you for using the calculator");

