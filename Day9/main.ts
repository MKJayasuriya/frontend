// Basic Function Syntax
function greet1(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet1("Alice")); // Output: Hello, Alice!

// Function with Optional Parameters
function greet2(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}. You are ${age} years old.`;
    }
    return `Hello, ${name}!`;
}

console.log(greet2("Alice")); // Output: Hello, Alice!
console.log(greet2("Bob", 25)); // Output: Hello, Bob. You are 25 years old.

function greet3(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

// Function with Default Parameters
console.log(greet3("Alice")); // Output: Hello, Alice!
console.log(greet3("Bob", "Hi")); // Output: Hi, Bob!

// Return Types
function multiply(a: number, b: number): number {
    return a * b;
}

console.log(multiply(4, 5)); // Output: 20
