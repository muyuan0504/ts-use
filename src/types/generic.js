/*
 * @Author: jimouspeng
 * @Date: 2022-04-28 10:29:27
 * @Description: 泛型
 * @FilePath: \typescript\generic.js
 */
/** 【类型变量 T-只是形参名】
 * T帮助我们捕获用户传入的类型（比如：number），之后我们就可以使用这个类型。
 * 之后我们再次使用了T当做返回值类型。
 * 现在我们可以知道参数类型与返回值类型是相同的了。
 * 这允许我们跟踪函数里使用的类型的信息
*/
function identity(arg) {
    return arg;
}
console.log(identity("myString"));
console.log(identity(1212));
function identity2(arg) {
    return arg;
}
var myIdentity = identity;
console.log(myIdentity("myString"));
console.log(myIdentity(1212));

interface Empty<T> {
}
let x: Empty<number>;
let y: Empty<string>;

x = y;  // okay, y matches structure of x
