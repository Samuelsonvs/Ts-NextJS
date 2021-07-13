import React from "react";

export default function typeoftypeoperator() {
  function f() {
    return { x: 10, y: 3 };
  }

  type ReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : any;
  type P = ReturnType<typeof f>;

  function z(x: P) {
    console.log(x.x);
  }
  z({ x: 4, y: 2 });
  return (
    <div>
      <h2>TypeScript official typeof type operator pages notes</h2>
    </div>
  );
}
