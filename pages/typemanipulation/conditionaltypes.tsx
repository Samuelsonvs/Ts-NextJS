import React from "react";

export default function conditionaltypes() {
  interface Animal {
    live(): void;
  }

  interface Dog extends Animal {
    woof(): void;
  }

  type Example1 = Dog extends Animal ? number : string;

  type Example2 = RegExp extends Animal ? number : string;

  let g: Example1 = 10;
  let x: Example2 = "str because regexp not in animal";
  console.log("x :", x, "g :", g);

  return (
    <div>
      <h2>TypeScript official conditional types pages notes</h2>
    </div>
  );
}
