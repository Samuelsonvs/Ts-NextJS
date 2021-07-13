import React from "react";

export default function templateliteraltypes() {
  type World = "world";
  type Greeting = `hello ${World}`;

  let t: Greeting = "hello world";
  console.log(t);

  type EmailLocaleIDs = "welcome_email" | "email_heading";
  type FooterLocaleIDs = "footer_title" | "footer_sendoff";

  type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
  type Lang = "en" | "ja" | "pt";

  type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
  let e: AllLocaleIDs = "footer_title_id";
  let b: LocaleMessageIDs = "en_footer_title_id";

  console.log("e:", e, " b:", b);

  // Intrinsic String Manipulation Types
  type BasicGreeting = "Hello, world";
  type ShoutyGreeting = Uppercase<BasicGreeting>;

  type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`;
  type MainID = ASCIICacheKey<"my_app">;

  type LowercaseGreeting = "hello, world";
  type GreetingLowercase = Capitalize<LowercaseGreeting>;

  type UppercaseGreeting = "HELLO WORLD";
  type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
  // Intrinsic String Manipulation Types
  return (
    <div>
      <h2>TypeScript official template literal types pages notes</h2>
    </div>
  );
}
