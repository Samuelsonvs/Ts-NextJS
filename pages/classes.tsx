import React from "react";

export default function classes() {
  class Point {
    x: number;
    y: number;
  }

  const pt = new Point();
  pt.x = 0;
  pt.y = 5;
  console.log(pt.x);
  console.log(pt.y);

  class GoodGreeter {
    name: string;

    constructor() {
      this.name = "hello";
    }
  }
  const gg = new GoodGreeter();
  console.log(gg.name);

  class Point1 {
    x: number;
    y: number;

    // Normal signature with defaults
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  }

  class Base {
    k = 4;
  }

  class Derived extends Base {
    constructor() {
      super();
      console.log(this.k);
    }
  }

  const dd = new Derived();
  dd; // 4

  // *** Methods ***
  class Point2 {
    x = 10;
    y = 10;

    scale(n: number): void {
      this.x *= n;
      this.y *= n;
    }
  }

  let x: number = 0;

  class C {
    x: string = "hello";

    m() {
      // This is trying to modify 'x' from line 1, not the class property
      this.x = "world"; // mandatory 'this.x' not 'x'
    }
  }

  let h = new C();

  console.log(h.x);
  h.m();
  console.log(h.x);
  // *** Methods ***

  // *** Getters / Setters ***
  class C1 {
    _length = 0;
    get length() {
      return this._length;
    }
    set length(value) {
      this._length = value;
    }
  }

  let gh = new C1();
  console.log(gh.length); // return getter
  gh.length = 5;
  console.log(gh.length); // first of going to setter after returning getter
  // *** Getters / Setters ***

  // Class Heritage

  // *** implements Clauses ***
  interface Pingable {
    ping(): void;
  }

  class Sonar implements Pingable {
    ping() {
      console.log("ping!");
    }
  }

  let sf = new Sonar();

  sf.ping();
  // *** implements Clauses ***

  // *** Cautions ***
  interface Checkable {
    check(name: string): boolean;
  }

  class NameChecker implements Checkable {
    check(s: string) {
      // Notice no error here
      return s === "s";
    }
  }

  let fg = new NameChecker();

  console.log(fg.check("f"));

  interface A {
    x: number;
    y?: number;
  }
  class C2 implements A {
    x = 0;
  }
  const c = new C2();
  //c.y = 10;  Property 'y' does not exist on type 'C'.
  // *** Cautions ***

  // *** extends Clauses ***
  class Animal {
    move() {
      console.log("Moving along!");
    }
  }

  class Dog extends Animal {
    woof(times: number) {
      for (let i = 0; i < times; i++) {
        console.log("woof!");
      }
    }
  }

  const d = new Dog();
  // Base class method
  d.move();
  // Derived class method
  d.woof(3);
  // *** extends Clauses ***

  // *** Overriding Methods ***
  class Base1 {
    greet() {
      console.log("Hello, world!");
    }
  }

  class Derived1 extends Base1 {
    greet(name?: string) {
      if (name === undefined) {
        super.greet();
      } else {
        console.log(`Hello, ${name.toUpperCase()}`);
      }
    }
  }

  const ds = new Derived1();
  ds.greet();
  ds.greet("reader");

  const bs: Base1 = ds;
  // No problem
  bs.greet();
  // *** Overriding Methods ***

  // *** Initialization Order ***
  class Base4 {
    name = "base";
    constructor() {
      console.log("My name is " + this.name);
    }
  }

  class Derived4 extends Base4 {
    name = "derived";
  }

  // Prints "base", not "derived"
  const dr = new Derived4();

  console.log(dr.name);
  // *** Initialization Order ***
  // Class Heritage

  // Member Visibility
  // *** public ***
  // The default visibility of class members is public. A public member can be accessed anywhere:
  class Greeter5 {
    public greet() {
      console.log("hi!");
    }
  }
  const gtt = new Greeter5();
  gtt.greet();
  // *** public ***

  // *** protected ***
  // protected members are only visible to subclasses of the class they’re declared in.
  class Greeter6 {
    public greet() {
      console.log("Hello, " + this.getName());
    }
    protected getName() {
      return "hi";
    }
  }

  class SpecialGreeter extends Greeter6 {
    public howdy() {
      // OK to access protected member here
      console.log("Howdy, " + this.getName());
    }
  }

  const g = new SpecialGreeter();
  g.greet(); // OK
  // g.getName();  // Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses
  // *** protected ***

  // *** Exposure of protected members ***
  class Base5 {
    protected m = 10;
  }
  class Derived5 extends Base5 {
    // No modifier, so default is 'public'
    m = 15;
  }
  const d5 = new Derived5();
  console.log(d5.m); // OK
  // *** Exposure of protected members ***

  // *** Cross-hierarchy protected access ***
  class Base8 {
    protected x: number = 1;
  }
  class Derived7 extends Base8 {
    protected x: number = 5;
  }
  class Derived8 extends Base8 {
    f1(other: Derived8) {
      other.x = 10;
    }
    // f2(other: Base8) { base8 class protected
    //   other.x = 10;
    // }
  }
  // *** Cross-hierarchy protected access ***

  // *** Cross-instance private access ***
  class A3 {
    private x = 10;

    public sameAs(other: A3) {
      // No error
      return other.x === this.x;
    }
  }

  const bh = new A3();
  const ft = new A3();
  console.log(bh.sameAs(ft));
  // *** Cross-instance private access ***

  // Static Members
  class MyClass {
    static x = 0;
    static printX() {
      console.log(MyClass.x);
    }
  }

  //const ghz =new MyClass()
  //ghz.x  // can't access static member 
  console.log(MyClass.x);
  MyClass.printX();

  // static member inherited
  class Base11 {
    static getGreeting() {
      return "Hello world";
    }
  }
  class Derived11 extends Base11 {
    myGreeting = Derived11.getGreeting();
  }
  // Static Members

  // Generic Classes
  class Box<Type> {
    contents: Type;
    constructor(value: Type) {
      this.contents = value;
    }
  }
  
  const b = new Box("hello!");
  console.log(b.contents)
  // Generic Classes

  //this at Runtime in Classes
  class MyClass12 {
    name = "MyClass";
    getName() {
      return this.name;
    }
  }
  const cf = new MyClass12();
  const obj = {
    name: "obj",
    getName: cf.getName,
  };
  
  // Prints "obj", not "MyClass"
  console.log(obj.getName());  // the value of 'this' inside a function depends on how the function was called.
  // *** Arrow Functions ***
  class MyClass13 {
    name = "MyClass";
    getName = () => {
      return this.name;
    };
  }
  const c13 = new MyClass13();
  const g13 = c13.getName;
  // Prints "MyClass" instead of crashing
  console.log(g13());

  // used this in getName for memory save 
  class MyClass15 {
    name = "MyClass";
    getName(this: MyClass15) {
      return this.name;
    }
  }
  const c22 = new MyClass15();
  // OK
  c22.getName();
  
  // Error, would crash
  const g22 = c22.getName;
  // console.log(g22()); // crash
  // *** Arrow Functions ***
  // *** this Types ***
  class Box14 {
    contents: string = "";
    set(value: string) {
      this.contents = value;
      return this;
    }
  }
  class ClearableBox extends Box14 {
    clear() {
      this.contents = "";
    }
  }
  
  const a5 = new ClearableBox();
  const b5 = a5.set("hello");
  
  console.log(b5.contents)
  b5.clear()
  console.log(b5.contents)
  // *** this Types ***
  //this at Runtime in Classes

  // Parameter Properties
  class Params {
    constructor(
      public readonly x: number,
      protected y: number,
      private z: number
    ) {
      // No body necessary
    }
  }
  const a = new Params(1, 2, 3);

  console.log(a.x) // only access x because of y and z parameters
  // Parameter Properties

  //Class Expressions
  const someClass = class<Type> {
    content: Type;
    constructor(value: Type) {
      this.content = value;
    }
  };
  
  const m = new someClass("Hello, world");
  console.log(m.content)
  //Class Expressions

  // Relationships Between Classes
  class Point12 {
    x = 0;
    y = 0;
  }
  
  class Point22 {
    x = 5;
    y = 10;
  }
  
  // OK
  const p: Point12 = new Point22();
  console.log(p.x)

  class Person22 {
    name: string;
    age: number;
  }
  
  class Employee22 {
    name: string;
    age: number;
    salary: number;
  }
  
  // OK
  const p22: Person22 = new Employee22();

  p22.name = 'samuel'

  console.log(p22.name)
  // Relationships Between Classes
  // Member Visibility

  return (
    <div>
      <h2>TypeScript official classes pages notes</h2>
    </div>
  );
}
