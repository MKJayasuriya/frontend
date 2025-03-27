// Create an array of users (Typed Array of Tuples)
var users = [
    ["Alice", 30, true],
    ["Bob", 25, false],
    ["Charlie", 35, true]
];
// Function to print users
function printUsers(users) {
    users.forEach(function (_a) {
        var name = _a[0], age = _a[1], isActive = _a[2];
        console.log("Name: ".concat(name, ", Age: ").concat(age, ", Active: ").concat(isActive));
    });
}
// Call the function
printUsers(users);
