// Define the base Shape class
class Shape {
    calculateArea() {
        throw new Error("calculateArea() method must be implemented in subclasses.");
    }
}

// Define the Rectangle class as a subclass of Shape
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

// Define the Triangle class as a subclass of Shape
class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return (this.base * this.height) / 2;
    }
}

// Define the Circle class as a subclass of Shape
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Create instances of each subclass and calculate their areas
const rectangle = new Rectangle(5, 8);
console.log("Rectangle Area:", rectangle.calculateArea());

const triangle = new Triangle(4, 6);
console.log("Triangle Area:", triangle.calculateArea());

const circle = new Circle(3);
console.log("Circle Area:", circle.calculateArea());
