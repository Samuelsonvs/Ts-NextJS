/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import TypeExamples from "@/forms/TypeExamples";

type Inputs = {
  entry: string;
  union: string | number;
  x: number;
};

export default function types() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  //optional property

  const objType: SubmitHandler<Inputs> = ({ entry }) => {
    if (entry !== undefined) {
      // OK
      console.log(entry.toUpperCase());
    }

    // A safe alternative using modern JavaScript syntax:
    console.log(entry?.toUpperCase());
  };

  // union types
  const unionType: SubmitHandler<Inputs> = ({ union }) => {
    console.log("Your ID is: " + union);
    console.log(watch("union"));
  };
  // OK
  //unionType(101);
  // OK
  //printId("202");
  // Error
  //printId({ myID: 22342 });

  const aliasesType: SubmitHandler<Inputs> = ({ x }) => {
    console.log("The coordinate's x value is " + x * 2);
    console.log(watch("x"));
  };

  let x: "hello" = "hello";

  //Type '"howdy"' is not assignable to type '"hello"'
  //x = "howdy";

  return (
    <div>
      <div>
        <h2>object types</h2>
        <TypeExamples
          handleSubmit={handleSubmit(objType)}
          register={register("entry")}
        />
      </div>
      <div>
        <h2>union types</h2>
        <TypeExamples
          handleSubmit={handleSubmit(unionType)}
          register={register("union")}
        />
      </div>
      <div>
        <h2>aliases type</h2>
        <TypeExamples
          handleSubmit={handleSubmit(aliasesType)}
          register={register("x")}
        />
      </div>
    </div>
  );
}
