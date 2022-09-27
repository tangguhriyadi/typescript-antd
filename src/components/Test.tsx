/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import React from "react";

type Permissions = "admin" | "user" | "manager";

type PermissionsWithoutAdmin = Exclude<Permissions, "admin">

type TuplePermissions = [Permissions, Permissions]

interface DepartmentsForPermission {
    depName:string,
    lvl:number
}

const depsForPerms: Record<Permissions, DepartmentsForPermission> = {
    admin:{
        depName:"PS",
        lvl:10
    },
    user:{
        depName:'sales',
        lvl:5
    },
    manager:{
        depName:'sales',
        lvl:15
    }
}

type BasicUser<A = boolean, P = TuplePermissions> = {
  name: string;
  age: number;
  isAdmin: A;
  permissions?: P;
};
type BasicUserWithoutPermissions = Omit<BasicUser, "permissions"> 

const userNoPerm:BasicUserWithoutPermissions = {
    name:'mu',
    age:5,
    isAdmin:true
}

type BasicUserReadOnly = Readonly<BasicUser>
type BasicUserRequired = Required<BasicUser>
type BasicUserPartial = Partial<BasicUser>

type BasicUserReadOnlyRequired = Readonly<Required<BasicUser>>

type AdvancedUser = {
  account: number;
};

type FullUser<A = boolean, P = String[]> = BasicUser<A, P> & AdvancedUser;

const user: FullUser<boolean> = {
  name: "tangguh",
  age: 25,
  isAdmin: true,
  account:100,
  permissions:[ "admin", "manager" ]
};
/* const user2: BasicUser<number, Permissions> = {
  name: "riyadi",
  age: 25,
  isAdmin: 3,
  permissions: [],
};
 */
const longFunction = (data:unknown):never => {
    const data2:unknown = data
    console.log(data2)
    while(true){
        console.log(data2)
    }
}


console.log(user)

const allUser:FullUser[] = [user,user,user]

function getFirstUser<T>(arr:T[]):T {
  return arr[0]
}

type BasicFunction = () => FullUser[]

type getFirstReturnType = ReturnType<BasicFunction>;

console.log(getFirstUser<FullUser>(allUser))
const Test = () => {
  return <div>test</div>;
};

export default Test;
