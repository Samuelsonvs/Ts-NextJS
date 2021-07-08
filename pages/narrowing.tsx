import React from "react";

interface Container {
  value: number | null | undefined;
}

export default function Narrowing() {
  const padLeft = (padding: number | string, input: string) => {
    if (typeof padding === "number") {
      return console.log(new Array(padding + 1).join(" ") + input);

      //(parameter) padding: number
    }
    return console.log(padding + input);

    //(parameter) padding: string
  };

  // if you want to see result, run this app and look at console
  padLeft(5, "hi");
  padLeft("imnotnumber", "hi");

  const example = (x: string | number, y: string | boolean) => {
    if (x === y) {
      // We can now call any 'string' method on 'x' or 'y'.
      console.log(x.toUpperCase());

      //(method) String.toUpperCase(): string
      console.log(y.toLowerCase());

      //(method) String.toLowerCase(): string
    } else {
      console.log(x);

      //(parameter) x: string | number
      console.log(y);

      //(parameter) y: string | boolean
    }
  };

  example("first", "first");
  example("first", true);

  // ?
  const multiplyValue = (container: Container, factor: number) => {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
      console.log(container.value);

      //(property) Container.value: number

      // Now we can safely multiply 'container.value'.
      container.value *= factor;
    }
  };

  //console.log(multiplyValue)

  type Fish = { swim: () => void };
  type Bird = { fly: () => void };
  type Human = { swim?: () => void; fly?: () => void };
  // why this function returning undefined in firs time started ?
  function move(animal: Fish | Bird | Human) {
    if ("swim" in animal) {
      console.log(animal.swim!());

      //(parameter) animal: Fish | Human
    } else {
      //animal
      console.log("free");
      //(parameter) animal: Bird | Human
    }
  }

  // type predicates
  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }

  let n: Fish = { swim: () => console.log("string in animal.swim") };

  if (isFish(n)) {
    console.log("isFish controller");
    n.swim();
  } else {
    console.log("sory im not swim");
  }

  move(n);

  // instanceof narrowing
  function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());

      // (parameter) x: Date
    } else {
      console.log(x.toUpperCase());

      //(parameter) x: string
    }
  }

  logValue(new Date());
  logValue("Date");

  (function assigment() {
    let t = Math.random() < 0.5 ? 10 : "hello world!";

    t = 1;

    console.log(t);

    t = "goodbye!";

    console.log(t);
  })();

  interface Circle {
    kind: "circle";
    radius: number;
  }

  interface Square {
    kind: "square";
    sideLength: number;
  }

  interface Triangle {
    kind: "triangle";
    sideLength: number;
  }

  type Shape = Square | Circle | Triangle;

  // The 'never' type is assignable to every type; however, no type is assignable to 'never'
  function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.sideLength ** 2;
      case "triangle":
        return shape.sideLength ** 2;
      default:
        const _exhaustiveCheck: never = shape;
        return _exhaustiveCheck;
    }
  }

  let square: Shape = { kind: "square", sideLength: 3 };

  let circle: Shape = { kind: "circle", radius: 4 };

  getArea(square);

  getArea(circle);

  return (
    <div>
      <h2>TypeScript official narrowing pages notes</h2>
    </div>
  );
}
