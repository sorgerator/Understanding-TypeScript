"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    /*
    constructor(
      private firstName: string,
      private lastName: string,
    ) {}
    */
    _firstName = "";
    _lastName = "";
    set firstName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid nam.");
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid name.");
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
    static eid = "USER";
}
// const tarik = new User("Tarik", "Sorguč");
const tarik = new User();
tarik.firstName = "Tarik";
tarik.lastName = "";
console.log(tarik.fullName);
class Employee extends User {
    jobTitle;
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
        // super.firstName = "Tarik";
    }
    work() {
        // ...
        console.log(this._firstName);
        // super._firstName;
    }
}
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
        // logic to duplicate the UI element
    }
}
// let uiElement = new UIElement();
class SideDrawerElement extends UIElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
//# sourceMappingURL=advanced.js.map