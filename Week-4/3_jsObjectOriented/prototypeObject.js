// Create a person object
const person = {
    name: "John",  // Read-only
    email: "john@example.com",  // Read-only
    age: undefined,  // Write-only

    getAge() {
        return this.age;
    },

    setAge(age) {
        this.age = age;
    },
};

// Attempt to access name and email (read-only)
console.log(`Name: ${person.name}`);
console.log(`Email: ${person.email}`);

// Set the age (write-only)
person.setAge(30);

// Get and display the age
console.log(`Age: ${person.getAge()}`);

// Create a Vehicle class
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}

// Create a Car class that extends Vehicle
class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
        super(make, model, year);
        this.numDoors = numDoors;
    }

    getDetails() {
        return `${super.getDetails()}, Number of Doors: ${this.numDoors}`;
    }
}

// Create instances of Vehicle and Car
const vehicle = new Vehicle("Toyota", "Camry", 2022);
const car = new Car("Honda", "Civic", 2020, 4);

// Get and display details
console.log(vehicle.getDetails());
console.log(car.getDetails());
