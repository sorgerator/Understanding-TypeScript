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

class User {
  public hobbies: string[] = [];

  constructor(
    public name: string,
    private age: number,
  ) {}

  greet() {
    console.log("My age: " + this.age);
  }
}

const tarik = new User("Tarik", 22);
const nina = new User("Nina", 21);

// tarik.hobbies.push("Sports");

console.log(tarik, nina);
