/*
 * @Author: jimouspeng
 * @Date: 2022-04-25 17:30:58
 * @Description:
 * @FilePath: \typescript\index.ts
 */
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
console.log(greeter(user));
var isDone = false;
var decLiteral = 6;
console.log(isDone, decLiteral);
