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
interface TodoInter {
    title: string;
    description?: string;
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



/** Exclude<Type, ExcludedUnion>: Type中取Type、ExcludedUnion交集的补集，然后构造一个类型 */
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"
type T1 = Exclude<string | number | (() => void), Function>; // string | number



/** Extract<Type, Union>: 从类型Type中提取所有可以赋值给Union的类型，然后构造一个类型 */
type T2 = Extract<'a' | 'b' | 'c', 'a' | 'f'>; // "a"
type T3 = Extract<string | number | (() => void), Function>; // () => void



/** NonNullable<Type>: 从类型Type中剔除null和undefined，然后构造一个类型 */
type T4 = NonNullable<string | number | undefined>; // string | number
type T5 = NonNullable<string[] | null | undefined>; // string[]



/** Parameters<Type>: 由函数类型Type的参数类型来构建出一个元组类型 */
declare function f1(arg: { a: number; b: string }): void;
type T6 = Parameters<() => string>; // T6 []



/** ConstructorParameters<Type>: 由构造函数类型来构建出一个元组类型或数组类型。 由构造函数类型Type的参数类型来构建出一个元组类型。（若Type不是构造函数类型，则返回never） */
type T7 = ConstructorParameters<ErrorConstructor>; // t7 [message?: string | undefined]



/** ReturnType<Type>: 由函数类型Type的返回值类型构建一个新类型 */
type T8 = ReturnType<() => string>;  // string
type T9 = ReturnType<(<T>() => T)>;  // unknow
interface useNameFunc {
    (age: string, name: string): boolean;
}
type T10 = ReturnType<useNameFunc>; // boolean



/** InstanceType<Type>: 由构造函数类型Type的实例类型来构建一个新类型 */
class C {
    x = 0;
    y = 0;
}
type T11 = InstanceType<typeof C>; // C
const newT11: T11 = {
    x: 2,
    y: 3
}



/** Required<Type>: 构建一个类型，使类型Type的所有属性为required。 与此相反的是Partial */
type TodoRequired = Required<Todo>;
const newRequired: TodoRequired = {
    title: 'cool',
    name: 'jimous',
    description: 'is'
}






/** 操作字符串的类型: 模版字面量类型
 * 模版字面量类型以字符串字面量类型为基础，且可以展开为多个字符串类型的联合类型
 * 
 * 当与某个具体的字面量类型一起使用时，模版字面量会将文本连接从而生成一个新的字符串字面量类型
 */
type World = 'world';
type Greeting = `hello ${World}`; // 'hello world'



/** 数字字面量类型 */
function rollDice1(): 1 | 2 | 3 | 4 | 5 | 6 {
    return 1
}



/** 操作固有字符串的类型
 * Uppercase<StringType>: 将字符串中的每个字符转换为大写字母
 * Lowercase<StringType>: 将字符串中的每个字符转换为小写字母
 * Capitalize<StringType>: 将字符串中的首字母转换为大写字母
 * Uncapitalize<StringType>: 将字符串中的首字母转换为小写字母
 */
type ShoutyGreeting = Uppercase<Greeting>;
type QuietGreeting = Lowercase<ShoutyGreeting>;
type CapitalizeGreeting = Capitalize<QuietGreeting>;
type UncomfortableGreeting = Uncapitalize<ShoutyGreeting>;