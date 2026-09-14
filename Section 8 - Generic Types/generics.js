"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["Tarik", "Amina"];
let store = {};
store.name = "Tarik";
store.isInstructor = true;
let nameStore = {};
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, "Tarik");
function mergeObj(a, b) {
    return { ...a, ...b };
}
const merged = mergeObj({ userName: "Tarik" }, { age: 35 });
console.log(merge);
class User {
    id;
    constructor(id) {
        this.id = id;
    }
}
const user = new User("i1");
user.id;
//# sourceMappingURL=generics.js.map