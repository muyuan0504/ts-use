/*
 * @Author: jimouspeng
 * @Date: 2023-03-16 16:22:19
 * @Description:
 * @FilePath: \typescript\jimous.ts
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
var person = {
    name: 'jimous',
    school: 'ncu',
    age: 26
};
var hisname = '12';
var isName = 'hello world！';
var nums = 1;
var string = 'hello';
var isNum = 1;
var isString = '1';
var people;
var scs;
scs = {
    value: 1
};
var ncu = {
    name: 'ncu',
    age: 100,
    studentNum: 4000,
    is211: true,
    is985: false,
    beautifully: true
};
console.log(ncu.age, ncu.beautifully, ncu.is211);
var calculate;
calculate = function (a, b) { return a + b; };
console.log(calculate(1, 2));
var mystr = ['1', '2', '3'];
var type0 = /** @class */ (function () {
    function type0() {
    }
    return type0;
}());
var TypeThree = /** @class */ (function (_super) {
    __extends(TypeThree, _super);
    function TypeThree(age) {
        var _this = _super.call(this) || this;
        _this.age = age;
        return _this;
    }
    TypeThree.prototype.select = function () {
        throw new Error("Method not implemented.");
    };
    return TypeThree;
}(type0));
var TypeSix = /** @class */ (function () {
    function TypeSix() {
    }
    TypeSix.prototype.select = function () {
        throw new Error("Method not implemented.");
    };
    return TypeSix;
}());
var typefour = new TypeThree(1);
var type4 = {
    age: 1,
    name: '12',
    is_type: '12',
    select: function () {
        console.log('hahah');
    }
};
// typefour.age
console.log(typefour.age, '打印看看');
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
