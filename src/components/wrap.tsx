/* eslint-disable import/no-extraneous-dependencies */
import React, { FC } from "react";

interface BasicUser<A = boolean> {
  name: string;
  age: number;
  isAdmin: A;
  permissions?: string[];
}
const user:BasicUser = {
  name: "tangguh",
  age: 25,
  isAdmin: true,
};

/* const user2:BasicUser<number> = {
  name:'riyadi',
  age:25,
  isAdmin:3,
  permissions:['FE','UI/UX','BE']
} */

const allUser:BasicUser[] = [user,user,user]

function getFirstUser<T>(arr:T[]):T {
  return arr[0]
}


console.log(getFirstUser<BasicUser>(allUser))
const Wrap: FC<any> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default Wrap;
