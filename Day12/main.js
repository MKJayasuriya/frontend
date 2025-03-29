var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
// Example usage
var user1 = UserRole.Admin;
console.log(user1); // Output: "ADMIN"
var user2 = "Editor"; // Valid
// const user3: UserRoleUnion = "SuperAdmin"; // Invalid, TypeScript will show an error
console.log(user2);
