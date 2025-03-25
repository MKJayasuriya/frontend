// Basic Function Syntax
function greet1(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet1("Alice")); // Output: Hello, Alice!
// Function with Optional Parameters
function greet2(name, age) {
    if (age) {
        return "Hello, ".concat(name, ". You are ").concat(age, " years old.");
    }
    return "Hello, ".concat(name, "!");
}
console.log(greet2("Alice")); // Output: Hello, Alice!
console.log(greet2("Bob", 25)); // Output: Hello, Bob. You are 25 years old.
function greet3(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
// Function with Default Parameters
console.log(greet3("Alice")); // Output: Hello, Alice!
console.log(greet3("Bob", "Hi")); // Output: Hi, Bob!
// Return Types
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5)); // Output: 20
