/*
 * @Author: jimouspeng
 * @Date: 2022-05-17 15:34:01
 * @Description: ts类型
 * @FilePath: \typescript\type.ts
 */
// 基础类型
var isBooleanA = false;
var isNumberA = 0;
var isStringA = '';
/** 数组 */
var isArrayA0 = []; // 使用数组泛型
var isArrayA1 = []; // 类型后面接上[]
/** 元组类型Tuple: 允许表示一个已知元素数量和类型的数组，各元素的类型不必相同 */
var tupleA;
tupleA = ['0', 1]; // ok; tupleA = ['0', '1']; // error
/** enum类型 使用枚举类型可以为一组数值赋予友好的名字
 * 默认情况下，从0开始为元素编号
 * 也可以手动的指定成员的数值
 */
//  enum Color { Red, Green, Blue }; // 0, 1, 2
//  enum Color { Red = 1, Green, Blue }; // 1, 2, 3
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 99] = "Blue";
    Color[Color["other"] = 100] = "other";
})(Color || (Color = {}));
; // 1， 3， 99， 100
var c = Color.Green, d = Color.other;
console.log(c, d); // 3, 100
/** 当值来自于动态内容，描述这类不知道类型的变量，可以使用unknow类型 */
var notSure = 0;
notSure = '4';
console.log('notSure: ', notSure);
/** any类型，允许是任何类型 */
var notSureToo = 0;
notSureToo = '0';
console.log('notSureToo: ', notSureToo);
/** Void
 * 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型
 * 声明一个void类型的变量没有什么大用，因为你只能为它赋予null（只在--strictNullChecks未指定时）和undefined
 *
 * 默认情况下null和undefined是所有类型的子类型。
 * 就是说你可以把null和undefined赋值给number类型的变量
 * 当你指定了--strictNullChecks标记，null和undefined只能赋值给any和它们各自的类型（有一个例外是undefined还可以赋值给void类型）
 */
var isA = null; /** 执行tsc .\type.ts --strictNullChecks 时会报错 */
console.log('isA: ', isA);
function warnUser() {
    console.log("This is my warning message");
}
/** Never: 表示的是那些永不存在的值的类型
 * 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
 * 变量也可能是never类型，当它们被永不为真的类型保护所约束时
 *
 * 返回never的函数必须存在无法达到的终点， 如下面的error函数
 * 推断的返回值类型为never, 如下面的fail函数
 */
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
/** Object: 表示非原始类型，也就是除number，string，boolean，bigint，symbol，null或undefined之外的类型 */
var isObjectA = { a: 1 };
console.log(isObjectA);
/** 类型断言 - (类型转换发生于运行时, 类型断言发生于编译时)
 * 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型
 * 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用
 * 类型断言有两种形式。
 * “尖括号”语法和as语法 (当你在TypeScript里使用JSX时，只有as语法断言是被允许的)
 */
var someStr = 'this is string';
var strLength = someStr.length;
var strLength2 = someStr.length;
function getUserName(person) {
    /** person.name = 'jimous is cool' // 由于设置name为只读，所以这里会报错 */
    console.log(person.name, person.age, person.level);
}
/**
 * 由于UseName没有school属性，TypeScript 会认为这段代码可能存在 bug。
 * 对象字面量会被特殊对待而且会经过_额外属性检查_，当将它们赋值给变量或作为参数传递的时候。
 * 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误
 *
 * 解决办法1-类型断言:
 *   getUserName({ name: 'jimous', age: 26, school: 'ncu' } as UseName)
 * 解决办法2-添加一个字符串索引签名:
 *   interface UseName { level?: 0, age: number, readonly name: string, [propName: string]: any; }
 * 解决办法3-将这个对象赋值给一个另一个变量
 *   let useName2 = { name: 'jimous', age: 26, school: 'ncu', from: 'china' }; 前提是变量间起码要存在一个共同的对象属性，否则报错
 */
getUserName({ name: 'jimous', age: 26, school: 'ncu', from: 'china' });
var useName2 = { name: 'jimous', age: 12 };
getUserName(useName2);
var getUserName2 = function (age1, name1) {
    console.log(age1, name1);
    return true; // 如果返回不是boolean类型，会报错，因为useNameFunc接口已经定义了函数的返回值
};
console.log(getUserName2('12', 'jimous'));
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        throw new Error("Method not implemented.");
    };
    return Clock;
}());
var square = {};
square.color = "blue";
square.sideLength = 10;
// 函数
/** 函数类型
 * 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确
 * 可以给每个参数添加类型之后再为函数本身添加返回值类型。 TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它
 */
function add(x, y) {
    return x + y;
}
/** 可选参数和默认参数
 * 在参数名旁使用?实现可选参数的功能
 * 默认参数同js
 */
function add2(x, y, z) {
    if (z === void 0) { z = 3; }
    return x + y + z;
}
/** 剩余参数
 * 可以把所有参数收集到一个变量里
 */
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // It's possible that someone could reach this
            // by ignoring your types though.
        }
    };
    return UIElement;
}());
/** 数字字面量类型 -- 数字字面量类型经常用来描述配置值 */
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
var result = rollDice();
;
;
// 类
// 枚举
/** 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举
 * 数字枚举：使用初始化为1。 其余的成员会从1开始自动增长
 * 字符串枚举: 字符串枚举没有自增长的行为，字符串枚举可以很好的序列化
 * 异构枚举（Heterogeneous enums）：从技术的角度来说，枚举可以混合字符串和数字成员(除非你真的想要利用JavaScript运行时的行为，否则我们不建议这样做)
 * 计算的和常量成员: 每个枚举成员都带有一个值，它可以是_常量_或_计算出来的_。 当满足如下条件时，枚举成员被当作是常量
 *
*/
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var NumberA = Direction.Up;
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
console.log(NumberA, Direction2);
// 泛型
/** 可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件 */
function identity(arg) {
    /** 给identity添加了类型变量T。
     * T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。
     * 之后我们再次使用了T当做返回值类型。
     * 现在我们可以知道参数类型与返回值类型是相同的了。
     * 这允许我们跟踪函数里使用的类型的信息
    */
    return arg;
}
var output = identity("myString"); // type of output will be 'string'
console.log(output);
// export { }
