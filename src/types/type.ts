/*
 * @Author: jimouspeng
 * @Date: 2022-05-17 15:34:01
 * @Description: ts类型
 * @FilePath: \typescript\type.ts
 */

// 基础类型
let isBooleanA: boolean = false;
isBooleanA = null; // 默认情况下，类型检查器认为null与undefined可以赋值给任何类型
let isNumberA: number = 0;
isNumberA = undefined
let isStringA: string = ''
/** 数组 */
let isArrayA0: Array<any> = [] // 使用数组泛型
let isArrayA1: number[] = [] // 类型后面接上[]

/** 元组类型Tuple: 允许表示一个已知元素数量和类型的数组，各元素的类型不必相同 */
let tupleA: [string, number];
tupleA = ['0', 1]; // ok; tupleA = ['0', '1']; // error

/** enum类型 使用枚举类型可以为一组数值赋予友好的名字
 * 默认情况下，从0开始为元素编号
 * 也可以手动的指定成员的数值
 */
//  enum Color { Red, Green, Blue }; // 0, 1, 2
//  enum Color { Red = 1, Green, Blue }; // 1, 2, 3
enum Color { Red = 1, Green = 3, Blue = 99, other }; // 1， 3， 99， 100
let c: Color = Color.Green, d: Color = Color.other
console.log(c, d); // 3, 100

/** 当值来自于动态内容，描述这类不知道类型的变量，可以使用unknow类型 */
let notSure: unknown = 0;
notSure = '4';
console.log('notSure: ', notSure)

/** any类型，允许是任何类型 */
let notSureToo: any = 0;
notSureToo = '0'
console.log('notSureToo: ', notSureToo)

/** Void
 * 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型
 * 声明一个void类型的变量没有什么大用，因为你只能为它赋予null（只在--strictNullChecks未指定时）和undefined
 * 
 * 默认情况下null和undefined是所有类型的子类型。 
 * 就是说你可以把null和undefined赋值给number类型的变量
 * 当你指定了--strictNullChecks标记，null和undefined只能赋值给any和它们各自的类型（有一个例外是undefined还可以赋值给void类型）
 */
let isA: void = null; /** 执行tsc .\type.ts --strictNullChecks 时会报错 */
console.log('isA: ', isA)
function warnUser(): void {
    console.log("This is my warning message");
}

/** Never: 表示的是那些永不存在的值的类型
 * 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 
 * 变量也可能是never类型，当它们被永不为真的类型保护所约束时
 * 
 * 返回never的函数必须存在无法达到的终点， 如下面的error函数
 * 推断的返回值类型为never, 如下面的fail函数
 */
function error(message: string): never {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop(): never {
    while (true) {
    }
}
/** Object: 表示非原始类型，也就是除number，string，boolean，bigint，symbol，null或undefined之外的类型 */
let isObjectA: object = { a: 1 }
console.log(isObjectA)

/** 类型断言 - (类型转换发生于运行时, 类型断言发生于编译时)
 * 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型
 * 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用
 * 类型断言有两种形式。 
 * “尖括号”语法和as语法 (当你在TypeScript里使用JSX时，只有as语法断言是被允许的)
 */

let someStr: any = 'this is string';
let strLength: number = (<string>someStr).length;
let strLength2: number = (someStr as string).length










// 类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}










// 接口
/** TypeScript 的核心原则之一是对值所具有的_结构_进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 
 * 在 TypeScript 里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
 * 
 * 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以
 * 
 *  可选属性： 属性名字定义:前面加上 ? 
 *  只读属性：属性名前用readonly来指定只读属性
 * 
 *  readonly vs const
 * 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 
 * 做为变量使用的话用const，若做为属性则使用readonly
 * 
 */
interface UseName {
    level?: 0,
    age: number,
    readonly name: string,
    [propName: string]: any;
}
function getUserName(person: UseName): void {
    /** person.name = 'jimous is cool' // 由于设置name为只读，所以这里会报错 */
    console.log(person.name, person.age, person.level)
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
getUserName({ name: 'jimous', age: 26, school: 'ncu', from: 'china' })
let useName2 = { name: 'jimous', age: 12 };
getUserName(useName2)

/** 函数类型
 * 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 
 * 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型
 * 
 * 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
 */
interface useNameFunc {
    (age: string, name: string): boolean;
}
let getUserName2: useNameFunc = function (age1: string, name1: string) {
    console.log(age1, name1);
    return true // 如果返回不是boolean类型，会报错，因为useNameFunc接口已经定义了函数的返回值
}
console.log(getUserName2('12', 'jimous'));

/** 可索引的类型
 * 可索引类型具有一个_索引签名_，它描述了对象索引的类型，还有相应的索引返回值类型
 * 
 * Typescript 支持两种索引签名：字符串和数字。 
 * 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 
 * 这是因为当使用number来索引时，JavaScript 会将它转换成string然后再去索引对象。 
 * 也就是说用100去索引等同于使用"100"去索引，因此两者需要保持一致
 */
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

/** 类类型
 * TypeScript能够用它来明确的强制一个类去符合某种契约
 */
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void; // 也可以在接口中描述一个方法，在类里实现它
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number) { }
    setTime(d: Date): void { // 需要在类中实现改方法
        throw new Error("Method not implemented.");
    }
}

/** 继承接口
 * 和类一样，接口也可以相互继承。
 * 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里
 */
interface Shape {
    color: string;
}
interface Square extends Shape {
    sideLength: number;
}
let square = {} as Square;
square.color = "blue";
square.sideLength = 10;











// 函数
/** 函数类型
 * 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确
 * 可以给每个参数添加类型之后再为函数本身添加返回值类型。 TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它
 */
function add(x: number, y: number): number {
    return x + y;
}
/** 可选参数和默认参数
 * 在参数名旁使用?实现可选参数的功能
 * 默认参数同js
 */
function add2(x: number, y?: number, z = 3): number {
    return x + y + z;
}
/** 剩余参数
 * 可以把所有参数收集到一个变量里
 */
function buildName(firstName: string, ...restOfName: Array<any>) {
    return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
/** 重载 */











// 字面量类型
/** 一个字面量是一个集体类型中更为具体的一种子类型
 * 目前 TypeScript 中有三种可用的字面量类型集合，分别是：字符串、数字和布尔值。通过使用字面量类型，
 * 你可以规定一个字符串、数字或布尔值必须含有的确定值
 *
 * 字面量收窄
 * 当你通过 var 或 let 来声明一个变量时，实际上你在告诉编译器这个变量中的内容有可能会被改变。
 * 与之相对地，用 const 来声明对象会让 TypeScript 知道这个对象永远不会被改变
  */
/** 字符串字面量类型
 * type ->  类型别名用来给一个类型起个新名字
 */
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        } else if (easing === "ease-out") {
        } else if (easing === "ease-in-out") {
        } else {
            // It's possible that someone could reach this
            // by ignoring your types though.
        }
    }
}

/** 数字字面量类型 -- 数字字面量类型经常用来描述配置值 */
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
    return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}
const result = rollDice();

/** 布尔字面量类型 */
interface ValidationSuccess {
    isValid: true;
    reason: null;
};
interface ValidationFailure {
    isValid: false;
    reason: string;
};
type ValidationResult =
    | ValidationSuccess
    | ValidationFailure;










// 类










// 枚举
/** 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举 
 * 数字枚举：使用初始化为1。 其余的成员会从1开始自动增长
 * 字符串枚举: 字符串枚举没有自增长的行为，字符串枚举可以很好的序列化
 * 异构枚举（Heterogeneous enums）：从技术的角度来说，枚举可以混合字符串和数字成员(除非你真的想要利用JavaScript运行时的行为，否则我们不建议这样做)
 * 计算的和常量成员: 每个枚举成员都带有一个值，它可以是_常量_或_计算出来的_。 当满足如下条件时，枚举成员被当作是常量
 *   
*/
enum Direction {
    Up, // Up使用初始化为1。 其余的成员会从1开始自动增长
    Down,
    Left,
    Right
}
let NumberA: Direction = Direction.Up
enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
console.log(NumberA, Direction2)











// 泛型
/** 可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件 */
function identity<T>(arg: T): T {
    /** 给identity添加了类型变量T。 
     * T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 
     * 之后我们再次使用了T当做返回值类型。
     * 现在我们可以知道参数类型与返回值类型是相同的了。 
     * 这允许我们跟踪函数里使用的类型的信息 
    */
    return arg;
}
let output = identity<string>("myString");  // type of output will be 'string'
console.log(output)
/** 使用泛型变量 */
// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length);  // Error: T doesn't have .length
//     return arg;
// }
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
/** 泛型类
 * 类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型
 */
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
/** 泛型约束 */
interface Lengthwise {
    length: number;
}
function loggingIdentity0<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}











/** 高级类型
 * 交叉类型：将多个类型合并为一个类型
 * 联合类型（Union Types）: 只能访问此联合类型的所有类型里共有的成员
 */
function extend<First, Second>(first: First, second: Second): First & Second {
    const result: Partial<First & Second> = {};
    for (const prop in first) {
        if (first.hasOwnProperty(prop)) {
            (result as First)[prop] = first[prop];
        }
    }
    for (const prop in second) {
        if (second.hasOwnProperty(prop)) {
            (result as Second)[prop] = second[prop];
        }
    }
    return result as First & Second;
}
class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(name: string): void;
}
class ConsoleLogger implements Loggable {
    log(name) {
        console.log(`Hello, I'm ${name}.`);
    }
}
const jim = extend(new Person('Jim'), ConsoleLogger.prototype);
jim.log(jim.name);


export { }