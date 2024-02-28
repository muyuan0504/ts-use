"use strict";
/*
 * @Author: jimouspeng
 * @Date: 2022-04-28 10:06:49
 * @Description: class下的ts
 * @FilePath: \typescript\class.ts
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
// exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    return Animal;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容
/** 抽象类- 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee2.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    Employee2.prototype.getElevatorPitch = function () {
        return "Hello, my name is ".concat(this.name, " and I work in ").concat(this.department, ".");
    };
    return Employee2;
}(Person));
var howard = new Employee2("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误
/** 把类当做接口使用 */
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
function greeter(person) {
    return "Hello, " + person.x + "\n " + person.y + '\n' + person.z;
}
console.log(greeter(point3d));
