import React, { FormEventHandler } from "react";
import {
  UseFormRegisterReturn,
} from "react-hook-form";



export default function TypeExamples(prop: {
  handleSubmit: FormEventHandler;
  register: UseFormRegisterReturn;
}) {
  return (
    <div>
      <form onSubmit={prop.handleSubmit}>
        <input {...prop.register} />

        <input type="submit" />
      </form>
    </div>
  );
}
