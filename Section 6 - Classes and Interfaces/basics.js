"use strict";
/*
class User {
  name: string;
  age: number;
  constructor(n: string, a: number) {
    // this.name = "Tarik";
    this.name = n;
    this.age = a;
  }
}

new User();
*/
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("My age: " + this.age);
    }
}
const tarik = new User("Tarik", 22);
const nina = new User("Nina", 21);
// tarik.hobbies.push("Sports");
console.log(tarik, nina);
//# sourceMappingURL=basics.js.map