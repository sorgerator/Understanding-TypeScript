class User {
  /*
  constructor(
    private firstName: string,
    private lastName: string,
  ) {}
  */
  protected _firstName: string = "";
  protected _lastName: string = "";

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid nam.");
    }

    this._firstName = name;
  }

  set lastName(name: string) {
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
  constructor(public jobTitle: string) {
    super();
    // super.firstName = "Tarik";
  }

  work() {
    // ...
    console.log(this._firstName);
    // super._firstName;
  }
}

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {
    // logic to duplicate the UI element
  }
}

// let uiElement = new UIElement();

class SideDrawerElement extends UIElement {
  constructor(
    public identifier: string,
    public position: "left" | "right",
  ) {
    super(identifier);
  }
}
