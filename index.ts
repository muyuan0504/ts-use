/*
 * @Author: jimouspeng
 * @Date: 2022-04-25 17:30:58
 * @Description: typescript类型体操
 * 默认情况下null和undefined是所有类型的子类型，即可以把null和undefined赋值给number类型的变量
 * 当指定了--strictNullChecks标记，null和undefined只能赋值给void和它们自身
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

let anyA: any = 1;
anyA = []

console.log(isDone, decLiteral);

let list: number[] = [1, 2, 3, null]
let list0: Array<any> = [1, '2', { a: 0 }]
let list1: Array<number> = [1, 2, 3]
let list2: any[] = [1, 2, 3, '4']

function getUser(): number {
    let b: Array<number> = [12, 2]
    return 1
}

function foo(): any {
    // okay to capture 'a'
    return a;
}

// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo();

let a: any;   // 执行tsc index.ts后，会将声明方式改用var



/** 接口 */

interface UserInfo {
    name: string,
    age?: number, // 可选属性 [属性名字定义的后面加一个?符号声明]
    readonly company?: string,
    aList: ReadonlyArray<number>
}

function printLabel(labelledObj: UserInfo) {
    console.log(labelledObj.name);
    // labelledObj.company = '小鹅通' // 只读属性无法变更
    // labelledObj.aList.push(3) // ReadonlyArray定义后数组无法被修改
}

let myObj = { name: 'jimous', company: 'xiaoe', aList: [1, 2] };
printLabel(myObj);


export { }


