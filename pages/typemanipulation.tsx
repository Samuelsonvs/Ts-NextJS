import React from "react";

export default function typemanipulation() {
  // Hello World of Generics
  function identity<Type>(arg: Type): Type {
    return arg;
  }

  let output = identity<string>("myString");
  let output2 = identity("myString");
  console.log(typeof output);
  console.log(typeof output2);
  // Hello World of Generics

  // Generic Types
  function identity1<Type>(arg: Type): Type {
    return arg;
  }

  let myIdentity1: <Type>(arg: Type) => Type = identity1;

  console.log(myIdentity1(5));

  function identity2<Type>(arg: Type): Type {
    return arg;
  }

  let myIdentity2: <Input>(arg: Input) => Input = identity2;

  console.log(myIdentity2(10));

  function identity3<Type>(arg: Type): Type {
    return arg;
  }

  let myIdentity3: { <Type>(arg: Type): Type } = identity3;

  console.log(myIdentity3(15));

  interface GenericIdentityFn {
    <Type>(arg: Type): Type;
  }

  function identity4<Type>(arg: Type): Type {
    return arg;
  }

  let myIdentity4: GenericIdentityFn = identity4;

  console.log(myIdentity4(20));
  // Generic Types

  // Generic Constraints
  interface Lengthwise {
    length: number;
  }

  function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
  }

  console.log(loggingIdentity({ length: 3, value: "sad" }));
  // Generic Constraints

  // Using Type Parameters in Generic Constraints
  function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }

  let x = { a: 1, b: 2, c: 3, d: 4 };

  getProperty(x, "a");
  // getProperty(x, "m") '"m"' is not assignable
  // Using Type Parameters in Generic Constraints

  // Using Class Types in Generics
  class BeeKeeper {
    hasMask: boolean = true;
  }

  class ZooKeeper {
    nametag: string = "Mikle";
  }

  class Animal {
    numLegs: number = 4;
  }

  class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
  }

  class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
  }

  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }

  console.log(createInstance(Lion).keeper.nametag);
  console.log(createInstance(Bee).keeper.hasMask);

  // Using Class Types in Generics
  return (
    <div>
      <h2>TypeScript official type manipulation pages notes</h2>
    </div>
  );
}
