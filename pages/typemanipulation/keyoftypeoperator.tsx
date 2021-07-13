import React from "react";

export default function keyoftypeoperator() {
  // The keyof operator takes an object type and produces a string or numeric literal union of its keys:
  type Point = { x: number; y: number };
  type P = keyof Point;

  function log(object: Point, key: P) {
    return key;
  }

  let pnt: Point = {
    x: 5,
    y: 10,
  };

  console.log(log(pnt, "x"));

  return (
    <div>
      <h2>TypeScript official keyof type operator pages notes</h2>
    </div>
  );
}
