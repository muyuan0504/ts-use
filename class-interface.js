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
var School = /** @class */ (function () {
    function School() {
    }
    return School;
}());
var SonSchool = /** @class */ (function (_super) {
    __extends(SonSchool, _super);
    function SonSchool() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SonSchool;
}(School));
var yourSchool = /** @class */ (function () {
    function yourSchool() {
    }
    yourSchool.prototype.getName = function () {
    };
    return yourSchool;
}());
var isSchool = {
    name: 'ncu',
    age: 100,
    num: 12
};
// 正常实例化
var mySchool = new School();
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
