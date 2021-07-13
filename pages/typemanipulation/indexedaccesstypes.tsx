import React from "react";

export default function indexedaccesstypes() {
  type Person = { age: number; name: string; alive: boolean };
  type Age = Person["age"];
  type I1 = Person["age" | "name"];
  type I2 = Person[keyof Person];
  type AliveOrName = "alive" | "name";
  type I3 = Person[AliveOrName];

  let b: I3 = true;

  console.log(b);

  function f(x: Age) {
    console.log(x);
  }

  f(5);

  return (
    <div>
      <h2>TypeScript official indexed access types pages notes</h2>
    </div>
  );
}
