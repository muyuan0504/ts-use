/*
 * @Author: jimouspeng
 * @Date: 2022-04-28 10:23:52
 * @Description: 函数
 * @FilePath: \typescript\func.ts
 */

function add(x: number, y?: number) { // ?标识参数可选
    return x + y;
}

add(1)

// myAdd has the full function type
// let myAdd = function (x: number, y: number): number { return x + y; };

// The parameters `x` and `y` have the type number
let myAdd: (baseValue: number, increment: number) => number =
    function (x, y) { return x + y; };


export { };
