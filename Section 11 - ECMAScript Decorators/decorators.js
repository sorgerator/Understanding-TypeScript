"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logger(target, ctx) {
    console.log("logger decorator");
    console.log(target);
    console.log(ctx);
    return class extends target {
        constructor(...args) {
            super(...args);
            console.log("class constructor");
            console.log(this);
        }
    };
}
function autobind(target, ctx) {
    // console.log(target);
    // console.log(ctx);
    ctx.addInitializer(function () {
        this[ctx.name] = this[ctx.name].bind(this);
    });
    return function () {
        console.log("Excecuting original function");
        target.apply(this);
    };
}
function replacer(initValue) {
    return function replacerDecorator(target, ctx) {
        console.log(target);
        console.log(ctx);
        return (initialValue) => {
            console.log(initialValue);
            return initValue;
        };
    };
}
@logger
class Person {
    @replacer("")
    name = "Max";
    constructor() {
        this.greet = this.greet.bind(this);
    }
    @autobind
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}
const max = new Person();
const greet = max.greet;
// max.greet();
greet();
// max.greet();
// console.log(max);
// const julie = new Person();
//# sourceMappingURL=decorators.js.map