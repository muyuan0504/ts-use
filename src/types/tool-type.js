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
/** Partial<Type>: 构造类型Type，并将它(Type)所有的属性设置为可选的。它的返回类型表示输入类型的所有子类型 */
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
/** Readonly<Type>: 构造类型Type，并将它所有的属性设置为readonly，也就是说构造出的类型的属性不能被再次赋值 */
var todo3 = {
    title: 'hhhh',
    description: '1212'
};
var x = {
    about: { title: 'about1', description: '0' },
    contact: { title: 'contact2', description: '1' },
    home: { title: 'home3', description: '2' }
};
var todo = {
    title: 'Clean room',
    name: 'jimous'
};
var TodoTitle = {
    title: 'Clean room'
};
var todoEx = {
    title: 'cool',
    name: 'jimous'
};
