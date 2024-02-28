/*
 * @Author: jimouspeng
 * @Date: 2023-03-17 19:45:38
 * @Description: 使用工具类型
 * @FilePath: \typescript\util.ts
 */

class MySchool {
    constructor(public name: string, public age: number) {
    }
}

var mySchool0 = new MySchool('ncu', 100)
console.log(mySchool0.age, mySchool0.name)


interface Todo {
    title: string
    description: string
    user: string
}
class Todo {
    color: string
}

var mytodo: Todo = {
    title: 'yes',
    description: 'haha',
    user: '1212',
    color: '1212'
}

type TodoMini = Pick<Todo, 'title' | 'user'>

var myTodo: TodoMini = {
    title: '11',
    user: 'mini'
}

// var myTodo: Readonly<Todo> = {
//     title: 'just title',
//     description: 'one todo'
// }

// myTodo.title = '111' // error: 无法分配到 "title" ，因为它是只读属性


// interface ParamVal {
//     name: string
// }
// type keys = 'home' | 'about' | 'contact'

// var params: Record<keys, ParamVal> = {
//     home: { name: 'home' },
//     about: { name: 'about' },
//     contact: { name: 'csontact' }
// }


function identity<T>(arg: T): T {
    return arg;
}

let output = identity("myString");




// class BeeKeeper {
//     hasMask: boolean;
// }

// class ZooKeeper {
//     nametag: string;
// }

// class Animal {
//     numLegs: number;
// }

// class Bee extends Animal {
//     keeper: BeeKeeper;
// }

// class Lion extends Animal {
//     keeper: ZooKeeper;
// }

// function createInstance<A extends Animal>(c: new () => A): A {
//     return new c();
// }

// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!