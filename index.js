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
/**  :number 表示函数返回number */
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
function printLabel(labelledObj) {
    console.log(labelledObj.name);
    // labelledObj.company = '小鹅通' // 只读属性无法变更
    // labelledObj.aList.push(3) // ReadonlyArray定义后数组无法被修改
}
var myObj = { name: 'jimous', company: 'xiaoe', aList: [1, 2] };
printLabel(myObj);
function createSquare(config) {
    // ...
    console.log(config.color);
    return {
        color: config.color,
        area: 12
    };
}
createSquare({ colour: "red", width: 100 }); // 由于colour属性未定义，所以会提示错误
var mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
mySearch('', '');
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var x;
// y's inferred type is { name: string; location: string; }
var y = { name: 'Alice', location: 'Seattle' };
x = y; // 只有目标类型（这里是Named）的成员会被一一检查是否兼容, 所以这里y即使有location属性，但不会引发错误
console.log(x, '看看x');
var x1 = function (a) { return 0; };
var y2 = function (b, s) { return 0; };
/** 要查看x是否能赋值给y，首先看它们的参数列表。 x的每个参数必须能在y里找到对应类型的参数。
 * 注意的是参数的名字相同与否无所谓，只看它们的类型。
 * 这里，x的每个参数在y中都能找到对应的参数，所以允许赋值
 */
y2 = x1; // OK
// x1 = y2; // Error
var symbolA = Symbol();
console.log(symbolA, 'symbol');
