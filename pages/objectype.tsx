import React from "react";

export default function Objectype() {
  // Property Modifiers
  // *** Optional Properties ***
  interface Shape {
    sh: string;
  }

  interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
  }

  const arow = ({ shape, xPos = 0, yPos = 0 }: PaintOptions) => {
    console.log(xPos);
    return shape.sh;
  };

  let pp: PaintOptions = { shape: { sh: "str" }, xPos: 5 };

  console.log(arow(pp));
  // *** Optional Properties ***
  // *** readonly Properties ***
  interface Person {
    name: string;
    age: number;
  }

  interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
  }

  let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
  };

  let readonlyPerson: ReadonlyPerson = writablePerson;

  console.log(readonlyPerson.age); // prints '42'
  writablePerson.age++;
  console.log(readonlyPerson.age); // prints '43'
  // *** readonly Properties ***

  // *** Index Signatures ***
  interface StringArray {
    [index: number]: string;
  }

  interface ReadonlyStringArray {
    readonly [index: number]: StringArray;
  }

  const ar = ["ss", "aa", "az"];

  const myArray: ReadonlyStringArray = ar;
  const secondItem = myArray[1];
  // myArray[1] = 'samuel' only readable
  console.log(secondItem);
  // *** Index Signatures ***
  // Property Modifiers

  // Extending Types
  interface BasicAddress {
    name?: string;
    street: string;
    city: string;
    country: string;
    postalCode: string;
  }

  interface AddressWithUnit extends BasicAddress {
    unit: string;
  }

  const newMan: AddressWithUnit = {
    name: "Samuel",
    street: "Sam Street",
    city: "Rome",
    country: "Italy",
    postalCode: "444",
    unit: "San Francisco",
  };

  console.log(newMan);

  interface Colorful {
    color: string;
  }

  interface Circle {
    radius: number;
  }

  interface ColorfulCircle extends Colorful, Circle {}

  const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
  };

  console.log(cc.color);
  // Extending Types

  // Intersection Types
  interface Colorful2 {
    color: string;
  }
  interface Circle2 {
    radius: number;
  }

  type ColorfulCircle2 = Colorful2 & Circle2;

  let colorfulcirclexp: ColorfulCircle2 = {
    color: "puprle",
    radius: 5,
  };

  console.log(colorfulcirclexp);

  function draw(circle: Colorful2 & Circle2) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
  }

  draw(colorfulcirclexp);
  // Intersection Types

  // Generic Object Types
  interface NumberBox {
    contents: number;
  }

  interface StringBox {
    contents: string;
  }

  interface BooleanBox {
    contents: boolean;
  }

  function setContents(box: StringBox, newContents: string): void;
  function setContents(box: NumberBox, newContents: number): void;
  function setContents(box: BooleanBox, newContents: boolean): void;
  function setContents(box: { contents: any }, newContents: any) {
    box.contents = newContents;
  }

  interface Box<Type> {
    contents: Type;
    pp: number;
  }

  let box: Box<string> = {
    contents: "boxtype",
    pp: 5,
  };

  console.log(box);

  // *** TheReadonlyArray Type ***

  interface ReadonlyArray {
    readonly array: string[];
  }

  let arg: ReadonlyArray = {
    array: ["ff", "dd", "gg"],
  };

  console.log(arg.array.push("hh"));
  console.log(arg.array);

  // *** Tuple Types ***
  function doSomething(pair: [string, number]) {
    return pair[0];
  }

  console.log(doSomething(["samuel", 5]));

  type Either2dOr3d = [number, number, number?];

  function setCoordinate(coord: Either2dOr3d) {
    const [x, y, z] = coord;

    console.log(`Provided coordinates had ${coord.length} dimensions`);
  }

  setCoordinate([1, 2, 3]);
  type StringNumberBooleans = [string, number, ...boolean[]];
  type StringBooleansNumber = [string, ...boolean[], number];
  type BooleansStringNumber = [...boolean[], string, number];

  const a: StringNumberBooleans = ["hello", 1];
  const b: StringNumberBooleans = ["beautiful", 2, true];
  const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];

  console.log(c);

  function readButtonInput(...args: [string, number, ...boolean[]]) {
    const [name, version, ...input] = args;
    console.log(input);
  }

  readButtonInput("sas", 5, true, false, true);
  // *** Tuple Types ***
  // Generic Object Types
  return (
    <div>
      <h2>TypeScript official object types pages notes</h2>
    </div>
  );
}
