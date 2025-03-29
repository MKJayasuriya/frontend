enum UserRole {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER",
}

// Example usage
const user1: UserRole = UserRole.Admin;
console.log(user1); // Output: "ADMIN"

type UserRoleUnion = "Admin" | "Editor" | "Viewer";

const user2: UserRoleUnion = "Editor"; // Valid
// const user3: UserRoleUnion = "SuperAdmin"; // Invalid, TypeScript will show an error
console.log(user2); 
