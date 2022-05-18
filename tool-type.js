/*
 * @Author: jimouspeng
 * @Date: 2022-05-18 16:23:06
 * @Description: 实用工具类型
 * @FilePath: \typescript\tool-type.ts
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo1 = {
    title: 'organize desk',
    description: 'clear clutter'
};
var todo2 = updateTodo(todo1, {
    description: 'throw out trash'
});
console.log(todo1, todo2);