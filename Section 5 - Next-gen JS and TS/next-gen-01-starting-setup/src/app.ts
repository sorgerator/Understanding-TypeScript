// Code goes here!
const userName = "Tarik";
let age = 30;

age = 29;
var result;

function add(a: number, b: number) {
  result = a + b;
  return XPathResult;
}

// if (age > 20) {
//   var isOld = true;
// }

// console.log(isOld);
// console.log(result);

const add = (a: number, b: number = 1) => a + b;

console.log(add(2, 5));

const printOutput: (a: string | number) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(5));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  firstName: "Sorga",
  age: 30,
};

const copiedPerson = { ...person };

const adding = (...numbers: [number, number, number]) => {
  numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = adding(5, 10, 2);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);
