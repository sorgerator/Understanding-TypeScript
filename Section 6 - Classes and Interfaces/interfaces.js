"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthenticatableUser {
    userName;
    email;
    password;
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    login() {
        // ...
    }
    logout() {
        // ...
    }
}
function authenticate(user) {
    user.login();
}
// interface Authenticatable {
//   role: string;
// }
let user;
user = {
    email: "test@example.com",
    password: "abc1",
    login() {
        // reach out to database, check credentials, create a session
    },
    logout() {
        // clear the session
    },
};
//# sourceMappingURL=interfaces.js.map