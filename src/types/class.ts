/*
 * @Author: jimouspeng
 * @Date: 2022-04-28 10:06:49
 * @Description: class下的ts 
 * @FilePath: \typescript\class.ts
 */

class Animal {
    private name: string; // 当成员被标记成private时，它就不能在声明它的类的外部访问
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容

/** 抽象类- 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化 */
abstract class Person {
    protected name: string // protected属性标识该属性只能在Person类及其子类中使用name
    abstract printMeeting(): void  //  abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法, class前面加abstract标识类是抽象类
    constructor(name: string) { this.name = name; }
}

class Employee2 extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee2("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误


/** 把类当做接口使用 */
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };

function greeter(person: Point3d) {
    return "Hello, " + person.x + "\n " + person.y + '\n' + person.z;
}

console.log(greeter(point3d));



export { }