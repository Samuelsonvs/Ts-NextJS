import React from "react";

export default function utilitytypes() {
  // Partial<Type>
  interface Todo {
    title: string;
    description: string;
  }

  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };

  const todo2 = updateTodo(todo1, {
    description: "throw out trash",
  });
  // Partial<Type>

  // Required<Type>
  interface Props {
    a?: number;
    b?: string;
  }

  const obj: Props = { a: 5 };

  // const obj2: Required<Props> = { a: 5 }; error because b: string required
  // Required<Type>

  // Readonly<Type>
  interface Todo2 {
    title: string;
  }

  const todo3: Readonly<Todo2> = { title: "Delete inactive users" };

  // todo3.title = "Hello"; error readonly!
  // Readonly<Type>

  // Record<Keys,Type>
  interface CatInfo {
    age: number;
    breed: string;
  }

  type CatName = "miffy" | "boris" | "mordred";

  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
  };

  cats.boris;
  // Record<Keys,Type>

  // Pick<Type, Keys>
  interface Todo4 {
    title: string;
    description: string;
    completed: boolean;
  }

  type TodoPreview = Pick<Todo4, "title" | "completed">;

  const todo5: TodoPreview = {
    title: "Clean room",
    completed: false,
  };

  todo5;
  // Pick<Type, Keys>

  // Omit<Type, Keys>
  interface Todo6 {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }

  type TodoPreview6 = Omit<Todo6, "description">;

  const todo: TodoPreview6 = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
  };

  todo;

  type TodoInfo6 = Omit<Todo6, "completed" | "createdAt">;

  const todoInfo7: TodoInfo6 = {
    title: "Pick up kids",
    description: "Kindergarten closes at 5pm",
  };

  todoInfo7;
  // Omit<Type, Keys>

  // Exclude<Type, ExcludedUnion>
  type T0 = Exclude<"a" | "b" | "c", "a">;

  type T1 = Exclude<"a" | "b" | "c", "a" | "b">;

  type T2 = Exclude<string | number | (() => void), Function>;
  // Exclude<Type, ExcludedUnion>

  // Extract<Type, Union>
  type T3 = Extract<"a" | "b" | "c", "a" | "f">;

  type T4 = Extract<string | number | (() => void), Function>;
  // Extract<Type, Union>

  // NonNullable<Type>
  type T6 = NonNullable<string | number | undefined>;
     
type T7 = NonNullable<string[] | null | undefined>;
  // NonNullable<Type>

  // Parameters<Type>
  //function f12(arg: { a: number; b: string }): void;


type T00 = Parameters<() => string>;
     
type T11 = Parameters<(s: string) => void>;
     

type T22 = Parameters<<T>(arg: T) => T>;
     

//type T33 = Parameters<typeof f1>;
     

type T44 = Parameters<any>;
     

type T55 = Parameters<never>;
     

 //type T66 = Parameters<string>; // error 

     

 // type T77 = Parameters<Function>; // error
  // Parameters<Type>
  return (
    <div>
      <h2>TypeScript official utility types pages notes</h2>
    </div>
  );
}
