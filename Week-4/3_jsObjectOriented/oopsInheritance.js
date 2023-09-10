// Define the base Vehicle class
class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive() {
        console.log(`Driving ${this.make} ${this.model}.`);
    }
}

// Define the Car class as a subclass of Vehicle
class Car extends Vehicle {
    constructor(make, model, year, color, numSeats) {
        super(make, model, year, color);
        this.numSeats = numSeats;
    }
}

// Define the RideShareCar class as a subclass of Car
class RideShareCar extends Car {
    constructor(make, model, year, color, numSeats, isAvailable) {
        super(make, model, year, color, numSeats);
        this.isAvailable = isAvailable;
    }
}

// Create an instance of the Vehicle class
const vehicle = new Vehicle("Toyota", "Camry", 2022, "Silver");
vehicle.drive();

// Create an instance of the Car class
const car = new Car("Honda", "Civic", 2020, "Blue", 5);
car.drive();

// Create an instance of the RideShareCar class
const rideShareCar = new RideShareCar("Ford", "Focus", 2019, "Red", 4, true);
rideShareCar.drive();

// Access properties of the RideShareCar
console.log(`RideShareCar is available: ${rideShareCar.isAvailable}`);
console.log(`RideShareCar has ${rideShareCar.numSeats} seats.`);