/*
 * @Author: jimouspeng
 * @Date: 2022-04-25 17:30:58
 * @Description:  
 * @FilePath: \typescript\index.ts
 */

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

console.log(greeter(user));

let isDone: boolean = false;
let decLiteral: number = 6;

console.log(isDone, decLiteral);

export {}


