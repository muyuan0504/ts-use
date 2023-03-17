/*
 * @Author: jimouspeng
 * @Date: 2023-03-17 19:45:38
 * @Description: 使用工具类型
 * @FilePath: \typescript\util.ts
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MySchool = /** @class */ (function () {
    function MySchool(name, age) {
        this.name = name;
        this.age = age;
    }
    return MySchool;
}());
var mySchool0 = new MySchool('ncu', 100);
console.log(mySchool0.age, mySchool0.name);
var Todo = /** @class */ (function () {
    function Todo() {
    }
    return Todo;
}());
var mytodo = {
    title: 'yes',
    description: 'haha',
    user: '1212',
    color: '1212'
};
var myTodo = {
    title: '11',
    user: 'mini'
};
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
function identity(arg) {
    return arg;
}
var output = identity("myString");
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
