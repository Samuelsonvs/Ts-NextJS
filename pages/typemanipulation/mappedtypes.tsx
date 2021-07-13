import React from "react";

export default function mappedtypes() {
  type Horse = {
    tail: "small";
  };

  type OnlyBoolsAndHorses = {
    [key: string]: boolean | Horse;
  };

  const conforms: OnlyBoolsAndHorses = {
    del: true,
    rodney: false,
  };

  console.log(conforms);

  type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
  };

  type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
  };

  type FeatureOptions = OptionsFlags<FeatureFlags>;

  let b: FeatureOptions = {
    darkMode: true,
    newUserProfile: false,
  };

  console.log(b);

  // *** Mapping Modifiers ***
  type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
  };

  type LockedAccount = {
    readonly id: string;
    readonly name: string;
  };

  type UnlockedAccount = CreateMutable<LockedAccount>;

  let c: UnlockedAccount = {
    id: "id str",
    name: "name str",
  };

  let h: LockedAccount = {
    id: "sad",
    name: "heyt",
  };

  c.id = "id chanced";
  // h.id = 'dd' error not chanced

  console.log(c);

  console.log(h);

  type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
  };

  type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
  };

  type User = Concrete<MaybeUser>;

  let u: User = {
    id: "maybeuser id",
    name: "username",
    age: 6,
  };

  console.log(u.id);
  // *** Mapping Modifiers ***

  // Key Remapping via as
  type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<
      string & Property
    >}`]: () => Type[Property];
  };

  interface Person {
    name: string;
    age: number;
    location: string;
  }

  type LazyPerson = Getters<Person>;

  let gt: LazyPerson = {
    getName: () => "samuel",
    getAge: () => 111,
    getLocation: () => "Europa",
  };

  console.log(gt.getLocation());

  type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
  };

  interface Circle {
    kind: "circle";
    radius: number;
  }

  type KindlessCircle = RemoveKindField<Circle>;

  let bg: KindlessCircle = {
    radius: 114,
    // kind excluded
  };

  console.log(bg.radius);

  // *** Further Exploration ***
  type ExtractPII<Type> = {
    [Property in keyof Type]: Type[Property] extends { pii: true }
      ? true
      : false;
  };

  type DBFields = {
    id: { format: "incrementing" };
    name: { type: string; pii: true };
  };

  type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;

  let cc: ObjectsNeedingGDPRDeletion = {
    id: false, //false because  not have pii
    name: true,
  };

  console.log(cc.id);
  // *** Further Exploration ***
  // Key Remapping via as

  return (
    <div>
      <h2>TypeScript official mapped types pages notes</h2>
    </div>
  );
}
