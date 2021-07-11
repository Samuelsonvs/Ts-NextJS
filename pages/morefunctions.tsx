import React from "react";

export default function Morefunctions() {
  // Call Signatures
  type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }

  const callable = (num: number) => {
    return num > 5;
  };

  callable.description = "Number is greater than 5";
  doSomething(callable);
  // Call Signatures

  // Construct Signatures
  interface CallOrConstruct {
    new (s: string): Date;
    (n?: number): number;
  }

  type SomeConstructor = {
    new (s: string): CallOrConstruct;
  };

  function fn(ctor: SomeConstructor) {
    return new ctor("hello");
  }

  // Construct Signatures

  // Generic Functions

  function firstElement<Type>(arr: Type[]): Type {
    return arr[0];
  }

  // s is of type 'string'
  const s = firstElement(["a", "b", "c"]);
  // n is of type 'number'
  const n = firstElement([1, 2, 3]);

  console.log(s);
  console.log(n);

  // Note that we didn’t have to specify Type in this sample. The type was inferred - chosen automatically - by TypeScript.

  // We can use multiple type parameters as well. For example, a standalone version of map would look like this:

  function map<Input, Output>(
    arr: Input[],
    func: (arg: Input) => Output
  ): Output[] {
    return arr.map(func);
  }

  // Parameter 'n' is of type 'string'
  // 'parsed' is of type 'number[]'
  const parsed = map(["1", "2", "3"], (n) => parseInt(n));
  console.log(parsed);

  // write a function that returns the longer of two values
  function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }

  // longerArray is of type 'number[]'
  const longerArray = longest([1, 2], [3, 5, 8]);
  // longerString is of type 'string'
  const longerString = longest("alice", "bob");
  // Error! Numbers don't have a 'length' property
  //const notOK = longest(10, 100);

  console.log(longerArray);
  console.log(longerString);

  function minimumLength<Type extends { length: number }>(
    obj: Type,
    minimum: Type
  ): Type {
    if (obj.length >= minimum.length) {
      return obj;
    } else {
      return minimum;
    }
  }

  // TypeScript can usually infer the intended type arguments in a generic call, but not always.
  // For example, let’s say you wrote a function to combine two arrays

  function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
  }

  // this will be error
  // const arr = combine([1, 2, 3], ["hello"]);

  const arr = combine<string | number>([1, 2, 3], ["hello"]);

  console.log(arr);

  // When possible, use the type parameter itself rather than constraining it

  function firstElement1<Type>(arr: Type[]) {
    return arr[0];
  }

  const p = firstElement1([20, 30, 40]);

  console.log(p);
  // Generic Functions

  // Optional Parameters
  function f(n: number) {
    // f(n?: number)
    console.log(n.toFixed()); // 0 arguments
    console.log(n.toFixed(3)); // 1 argument
  }

  console.log(f(5));

  // Once you’ve learned about optional parameters and function type expressions,
  // it’s very easy to make the following mistakes when writing functions that invoke callbacks:
  function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i);
    }
  }

  myForEach([1, 2, 3], (a) => console.log(a));
  myForEach([1, 2, 3], (a, i) => console.log(a, i));
  // Optional Parameters

  // Function Overloads
  function makeDate(timestamp: number): Date;
  function makeDate(m: number, d: number, y: number): Date;
  function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
      return new Date(y, mOrTimestamp, d);
    } else {
      return new Date(mOrTimestamp);
    }
  }
  const d1 = makeDate(12345678);
  const d2 = makeDate(5, 5, 5);
  // const d3 = makeDate(1, 3); error for two parameters

  function ss(x: string): string;
  // function ss(x: number): boolean;  must be return string
  function ss(x: string | number) {
    return "oops";
  }
  // Function Overloads

  // Other Types to Know About
  function safeParse(s: string): unknown {
    return JSON.parse(s);
  }

  // Need to be careful with 'obj'!
  const obj = safeParse('"someRandomString"');
  console.log(obj);

  // Some functions never return a value:

  function fail(msg: string): never {
    throw new Error(msg);
  }

  function fng(x: string | number) {
    if (typeof x === "string") {
      // do something
    } else if (typeof x === "number") {
      // do something else
    } else {
      x; // has type 'never'!
    }
  }
  // Other Types to Know About

  // Rest Parameters and Arguments

  function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
  }

  const a = multiply(10, 1, 2, 3, 4);
  console.log(a);

  const args = [8, 5] as const; // 'as const' fixed immutable
  const angle = Math.atan2(...args);
  console.log(angle);
  // Rest Parameters and Arguments

  // Parameter Destructuring
  function sum({ a, b, c }: { a: number; b: number; c: number }) {
    console.log(a + b + c);
  }

  // same above example
  type ABC = { a: number; b: number; c: number };
  function sum1({ a, b, c }: ABC) {
    console.log(a + b + c);
  }
  // Parameter Destructuring

  // Assignability of Functions
  type voidFunc = (x: number) => void;

  const f11: voidFunc = (x: number) => {
    return x;
  };

  console.log(f11(5));
  // Assignability of Functions
  return (
    <div>
      <h2>TypeScript official more on functions pages notes</h2>
    </div>
  );
}
