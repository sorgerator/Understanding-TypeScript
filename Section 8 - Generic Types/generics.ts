let names: Array<string> = ["Tarik", "Amina"];

type DataStore<T> = {
  [prop: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = "Tarik";
store.isInstructor = true;

let nameStore: DataStore<string> = {};

function merge<T, U>(a: T, b: U) {
  return [a, b];
}

const ids = merge(1, "Tarik");

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = mergeObj({ userName: "Tarik" }, { age: 35 });
console.log(merge);

class User<T> {
  constructor(public id: T) {}
}

const user = new User("i1");
user.id;
