// Define a tuple type for user details
type UserTuple = [string, number, boolean];

// Create an array of users (Typed Array of Tuples)
let users: UserTuple[] = [
    ["Alice", 30, true],
    ["Bob", 25, false],
    ["Charlie", 35, true]
];

// Function to print users
function printUsers(users: UserTuple[]) {
    users.forEach(([name, age, isActive]) => {
        console.log(`Name: ${name}, Age: ${age}, Active: ${isActive}`);
    });
}

// Call the function
printUsers(users);
