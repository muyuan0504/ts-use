/*
 * @Author: jimouspeng
 * @Date: 2023-03-16 16:22:19
 * @Description: 
 * @FilePath: \typescript\jimous.ts
 */

interface personCtx { name: string, school: string, age: number }

interface personCtx { wx?: string }

var person: personCtx = {
    name: 'jimous',
    school: 'ncu',
    age: 26
};

type userNumber = string;
type userAge = string | number;

var hisname: userNumber = '12'

var isName: unknown = 'hello world！';
// isName.hello();

type numScope = 1 | 2 | 3 | 4;
var nums: numScope = 1;

type stringScope = 'hello' | 'world' | '!';
var string: stringScope = 'hello';

interface ValidationSuccess {
    isValid: true
    reason: null
}
interface ValidationFailure {
    isValid: false
    reason: string
}

type ValidationResult = | ValidationSuccess | ValidationFailure;



type NumAndString = number | string;
var isNum: NumAndString = 1;
var isString: NumAndString = '1'


type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}

var people: LinkedList<Person>;
// people = {
//     name: 'jimous',
//     next: people.next
// }
// var s = people.name;
// var s = people.next.name;
// var s = people.next.next.name;
// var s = people.next.next.next.name;


type Container<T> = { value: T };
var scs: Container<number>;
scs = {
    value: 1
}



interface IsSchool {
    name: string
    age: number
    studentNum: number
    readonly is211?: boolean
    readonly is985?: boolean
    [propName: string]: unknown
}

var ncu: IsSchool = {
    name: 'ncu',
    age: 100,
    studentNum: 4000,
    is211: true,
    is985: false,
    beautifully: true
}
console.log(ncu.age, ncu.beautifully, ncu.is211);
// ncu.is211 = 1; // 对只读属性重新赋值会报错


// let certain: ReadonlyArray<number> = [1, 2, 3, 4];
// certain[0] = 1; // 类型“readonly number[]”中的索引签名仅允许读取


interface isFunc {
    (a: number, b: number): number
}
var calculate: isFunc;
calculate = (a, b) => a + b
console.log(calculate(1, 2))

interface StringArray {
    [index: number]: string,
    length: number,
}
var mystr: StringArray = ['1', '2', '3'];
// mystr[3] = 1
// console.log(mystr[3])

// class Animal {
//     name: string
// }
// class Dog extends Animal {
//     breed: string
// }

// interface NotDog {
//     [x: number]: Dog,
//     [x: string]: Animal
// }

// interface NumberDictionary {
//     [index: string]: number;
//     length: number; // 可以，length是number类型
//     name: string; // 错误，`name`的类型与索引类型返回值的类型不匹配
// }
interface StringIndex {
    readonly [index: string]: number | string
    length: number,
    name: string
}
// const stringCtx: StringIndex = {
//     _index: 0,
//     length: 1,
//     name: 'jimous'
// }


// interface School {
//     name: string
// }
// interface China {
//     country: string
// }
// interface Ncu extends School, China {
//     age: number
// }
// // var mySchool = {} as Ncu;
// // mySchool.age = 100;
// // mySchool.name = 'ncu'
// // mySchool.country = '中国'
// var mySchool: Ncu = {
//     name: 'ncu',
//     age: 100,
//     country: 'zhongguo'
// }

// class School {
//     private name: string;
// }
// interface Ncu extends School {
//     age: number
//     select(): void
// }
// class NcuSchool extends School implements Ncu {
//     age: number;
//     select(): void {
//         console.log('hahah')
//     }

// }

// var mySchool = new NcuSchool();
// mySchool.select()


interface Typeone {
    name: string,
    select(): void
}
interface TypeTwo {
    student: number
}

class type0 {
    is_type: string
}


class TypeThree extends type0 implements Typeone {
    constructor(age) {
        super()
        this.age = age;
    }
    select(): void {
        throw new Error("Method not implemented.");
    }
    name: string
    age: number
    student?: number
}
class TypeSix implements Typeone, TypeTwo {
    select(): void {
        throw new Error("Method not implemented.");
    }
    name: string
    student: number
}

type typeFive = {
    name: string
    age?: number
    student?: number
}

var typefour: TypeThree = new TypeThree(1)

var type4: TypeThree = {
    age: 1,
    name: '12',
    is_type: '12',
    select() {
        console.log('hahah')
    }
}

// typefour.age

console.log(typefour.age, '打印看看')

// interface TypeTwo extends Typeone {
//     age: number
// }

// let a: TypeTwo = {
//     name: '12',
//     age: 12
// }

// type astr = string;

// type astr = string;
// type astr = number;

