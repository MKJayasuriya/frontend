var Car = /** @class */ (function () {
    // Constructor
    function Car(brand, model) {
        this.isRunning = false;
        this.brand = brand;
        this.model = model;
    }
    // Method
    Car.prototype.drive = function () {
        this.isRunning = true;
        console.log("".concat(this.brand, " ").concat(this.model, " is now driving!"));
    };
    return Car;
}());
// Creating an instance
var myCar = new Car("Toyota", "Corolla");
myCar.drive(); // Output: "Toyota Corolla is now driving!"
