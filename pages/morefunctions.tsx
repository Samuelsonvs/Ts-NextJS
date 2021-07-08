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

  return (
    <div>
      <h2>TypeScript official more on functions pages notes</h2>
    </div>
  );
}
