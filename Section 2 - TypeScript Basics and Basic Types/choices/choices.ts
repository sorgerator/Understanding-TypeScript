// enum Role {
//   Admin,
//   Editor,
//   Guest,
// }

type Role = "admin" | "editor" | "guest" | "reader";
type Users = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

let userRole: "admin" | "editor" | "guest" = "admin";

// ...

// userRole = Role.Guest;
userRole = "guest";

let possibleResults: [1 | -1, number];

possibleResults = [1, -1];

// function access(role: "admin" | "editor" | "guest" | "reader") {
// ---
// }

function access(role: Role) {
  // ...
}
