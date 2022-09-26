/* eslint-disable @typescript-eslint/consistent-type-definitions */
import React from "react";

type Permissions = "admin" | "user" | "manager";

type BasicUser<A = boolean, P = string[]> = {
  name: string;
  age: number;
  isAdmin: A;
  permissions?: P[];
};
type AdvancedUser = {
  account: number;
};

type FullUser<A = boolean, P = String[]> = BasicUser<A, P> & AdvancedUser;

const user: FullUser<boolean, Permissions> = {
  name: "tangguh",
  age: 25,
  isAdmin: true,
  account:100,
  permissions:[ "admin", "manager", "user"]
};
const user2: BasicUser<number, Permissions> = {
  name: "riyadi",
  age: 25,
  isAdmin: 3,
  permissions: [],
};


console.log(user,user2)
const Test = () => {
  return <div>test</div>;
};

export default Test;
