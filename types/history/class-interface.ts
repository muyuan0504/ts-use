class School {
    age: number
    name: string
}

class SonSchool extends School {
    user: string
}

interface MySchool {
    getName(): void
    user: string
}
class yourSchool implements MySchool {
    user: string
    getName() {

    }
}

var isSchool: SonSchool = {
    name: 'ncu',
    age: 100,
    num: 12
}

// 正常实例化
var mySchool = new School()

console.log('====================================');
console.log(isSchool instanceof School, mySchool instanceof School); // false  true
console.log('====================================');


// var mySchool2 = new SonSchool()


// class School {
//     private name: string;
// }
// interface Ncu extends School {
//     age: number
// }



// // error: 类“otherSchool”错误实现接口“Ncu”。类型具有私有属性“name”的单独声明
// class otherSchool implements Ncu {
//     private name: string;
//     age: number
// }



// var mySchool: SonSchool = {
//     age: 12,
//     name: '1212'
// }

// console.log('====================================');
// console.log(mySchool instanceof School, '??????');
// console.log('====================================');

// var mySchool: SonSchool = new SonSchool();
// console.log('====================================');
// console.log(mySchool instanceof School, '??????');
// console.log('====================================');