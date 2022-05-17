/*
 * @Author: jimouspeng
 * @Date: 2022-05-17 15:34:01
 * @Description: ts类型
 * @FilePath: \typescript\type.ts
 */

// 基础类型
let isBooleanA: boolean = false;
let isNumberA: number = 0;
let isStringA: string = ''
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

/** 类型断言 */






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
    readonly name: string
}
function getUserName(person: UseName): void {
    /** person.name = 'jimous is cool' // 由于设置name为只读，所以这里会报错 */
    console.log(person.name, person.age, person.level)
}
getUserName({ name: 'jimous', age: 26 })






// 函数








// 字面量类型










// 类

// 枚举

// 泛型


// export { }