/*
 * @Author: jimouspeng
 * @Date: 2022-04-28 10:29:27
 * @Description: 泛型 
 * @FilePath: \typescript\generic.ts
 */

/** 【类型变量 T-只是形参名,只用于表示类型而不是值】
 * T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。 
 * 之后我们再次使用了T当做返回值类型。
 * 现在我们可以知道参数类型与返回值类型是相同的了。 
 * 这允许我们跟踪函数里使用的类型的信息
*/
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>("myString")); // 手动传入了类型变量的类型参数<string>
console.log(identity(1212)); // 也可省略T的类型参数，利用了类型推论 – 即编译器会根据传入的参数自动地帮助我们确定T的类型

/** 【泛型接口与泛型函数】 */
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity2<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<any> = identity;


console.log(myIdentity("myString"));
console.log(myIdentity(1212));

/** 泛型约束 */
interface Lengthwise {
    length: number;
}
// T extends Lengthwise: 使用这个接口和extends关键字还实现约束
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
// loggingIdentity(3); // 现在这个泛型函数被定义了约束，因此它不再是适用于任意类型

let x:number = 3;

interface Named {
    name: string;
}

interface Func {
    (): void;
}

class Person {
    name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();

interface Empty<T> {
}
let empty1: Empty<number>;
let empty2: Empty<string>;

empty1 = empty2;  // okay, y matches structure of x x和y是兼容的，因为它们的结构使用类型参数时并没有什么不同


interface NotEmpty<T> {
    data: T;
}
let empty3: NotEmpty<number>;
let empty4: NotEmpty<string>;

// empty3 = empty4;  // error, x and y are not compatible
