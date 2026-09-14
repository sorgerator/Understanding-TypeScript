type Operations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};

// type Results = {
//   add: number;
//   subtract: number;
// };

type Result<T> = {
  readonly [Key in keyof T]?: number;
};

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },
  subtract(a: number, b: number) {
    return a - b;
  },
};

let mathResults: Result<Operations> = {
  add: mathOperations.add(1, 2),
  subtract: mathOperations.subtract(5, 2),
};

// mathOperations.add = 10;
