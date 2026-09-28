function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext<T>,
) {
  console.log("logger decorator");
  console.log(target);
  console.log(ctx);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("class constructor");
      console.log(this);
    }
    // age = 35;
  };
}

function autobind(
  target: (...args: any[]) => any,
  ctx: ClassMethodDecoratorContext,
) {
  // console.log(target);
  // console.log(ctx);

  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });

  return function (this: any) {
    console.log("Excecuting original function");
    target.apply(this);
  };
}

function replacer(initValue: any) {
  return function replacerDecorator(target: undefined, ctx: ClassFieldDecoratorContext) {
    console.log(target);
    console.log(ctx);

    return (initialValue: any) => {
      console.log(initialValue);
      return initValue;
   };
  }
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
