/*
 * @Author: jimouspeng
 * @Date: 2022-05-18 16:23:06
 * @Description: 实用工具类型
 * @FilePath: \typescript\tool-type.ts
 */

interface Todo {
    title: string;
    description: string;
    name?: string;
}
/** Partial<Type>: 构造类型Type，并将它(Type)所有的属性设置为可选的。它的返回类型表示输入类型的所有子类型 */
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}
const todo1 = {
    title: 'organize desk',
    description: 'clear clutter',
};
const todo2 = updateTodo(todo1, {
    description: 'throw out trash',
});

console.log(todo1, todo2)



/** Readonly<Type>: 构造类型Type，并将它所有的属性设置为readonly，也就是说构造出的类型的属性不能被再次赋值 */
let todo3: Readonly<Todo> = {
    title: 'hhhh',
    description: '1212'
}
// todo3.title = 'sfesf' // 会报错



/** Record<Keys, Type>: 构造一个类型，其属性名的类型为K(keys的每个子项)，属性值的类型为T(Type的每个属性)。这个工具可用来将某个类型的属性映射到另一个类型上 */
type Page = 'home' | 'about' | 'contact';
const x: Record<Page, Todo> = {
    about: { title: 'about1', description: '0' },
    contact: { title: 'contact2', description: '1' },
    home: { title: 'home3', description: '2' }
};



/** Pick<Type, Keys>: 从类型Type中挑选部分属性Keys来构造类型 */
type TodoPreview = Pick<Todo, 'title' | 'name'>;
const todo: TodoPreview = {
    title: 'Clean room',
    name: 'jimous',
};



/** Omit<Type, Keys>： 从类型Type中获取所有属性，然后从中剔除Keys属性后构造一个类型 */
type TodoTitle = Omit<Todo, 'description' | 'name'>;

const TodoTitle: TodoTitle = {
    title: 'Clean room'
};



/** Exclude<Type, ExcludedUnion>: 从类型Type中剔除所有可以赋值给ExcludedUnion的属性，然后构造一个类型 */
