"use strict";
/*
 * @Author: jimouspeng
 * @Date: 2022-04-25 17:30:58
 * @Description: typescript类型体操
 * 默认情况下null和undefined是所有类型的子类型，即可以把null和undefined赋值给number类型的变量
 * 当指定了--strictNullChecks标记，null和undefined只能赋值给void和它们自身
 * @FilePath: \typescript\index.ts
 */
exports.__esModule = true;
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
console.log(greeter(user));
var isDone = false;
var decLiteral = 6;
var anyA = 1;
anyA = [];
console.log(isDone, decLiteral);
var list = [1, 2, 3, null];
var list0 = [1, '2', { a: 0 }];
var list1 = [1, 2, 3];
var list2 = [1, 2, 3, '4'];
function getUser() {
    var b = [12, 2];
    return 1;
}
function foo() {
    // okay to capture 'a'
    return a;
}
// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo();
var a; // 执行tsc index.ts后，会将声明方式改用var
