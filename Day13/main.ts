class Car {
    // Properties
    public brand: string;
    public model: string;
    private isRunning: boolean = false;

    // Constructor
    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    // Method
    public drive(): void {
        this.isRunning = true;
        console.log(`${this.brand} ${this.model} is now driving!`);
    }
}

// Creating an instance
const myCar = new Car("Toyota", "Corolla");
myCar.drive(); // Output: "Toyota Corolla is now driving!"
