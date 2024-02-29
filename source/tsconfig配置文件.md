### tsconfig.json

tsconfig.json 是 TypeScript 项目的配置文件，用于指定 TypeScript 编译器的行为，指定了用来编译这个项目的根文件和编译选项

```shell
### 在项目根目录初始化生成typescript配置文件
tsc --init
```

如何使用：

-   不带输入输入文件的情况下调用 tsc 命令，编译器会从当前目录开始查找 tsconfig.json 文件，逐级向上搜索父目录；

-   不带任何输入文件的情况下调用 tsc 命令，且使用命令行参数 --project 或 -p 指定一个包含 tsconfig.json 文件的目录

#### 字段配置

配置包括

-   compilerOptions

必需的字段属性, 编译器选项如果忽略，这时编译器会使用默认值.

```json
/** 编译选项配置参数 */
{
    /* Visit https://aka.ms/tsconfig to read more about this file */
    "compilerOptions": {

        /* Language and Environment */
        /* target 指定编译后的 JavaScript 代码的目标版本 */
		"target": "ES2020",
		/* module 指定生成模块代码的模块系统, 常见的选项包括 "commonjs"、"amd"、"es6"、"umd" 等  */
		"module": "ESNext",
		/* allowJs 控制是否允许在 TypeScript 项目中编译 JavaScript 文件, 默认false */
		"allowJs": false,
		/* checkJs 控制是否对 JavaScript 文件进行类型检查，默认false */
		"checkJs": false,
		/* useDefineForClassFields 允许在类字段（class fields）的声明中使用 JavaScript 中的 defineProperty 形式而不是在构造函数中直接赋值 */
		"useDefineForClassFields": true, // 默认情况下，TypeScript 会根据目标 JavaScript 版本自动决定是否使用 defineProperty 形式
		/* noLib 引入默认的 TypeScript 核心库文件,
		   默认情况下，TypeScript 编译器会自动引入默认的 TypeScript 核心库文件，其中包含了 TypeScript 所需的内置类型定义和基本函数声明
		   设置为 true 会禁止引入默认的 TypeScript 核心库文件
		*/
		"noLib": false,
		/* skipDefaultLibCheck  控制是否跳过默认库的检查, 默认false,不跳过，需要进行默认库的检查 */
        "skipDefaultLibCheck": false,
		/* jsx 指定 JSX 语法的解析方式, 默认preserve，保留 JSX 语法不变，编译器会将 JSX 语法转换为 React.createElement 调用，但不会对 JSX 语法进行任何其他转换 */
		"jsx": "preserve",
		/* 指定在 JSX 中使用的工厂函数, 默认情况下，TypeScript 使用 React.createElement 作为 JSX 的工厂函数 */
		"jsxFactory": "React.createElement",
		/* jsxFragmentFactory 指定在 JSX 中使用的片段（Fragment）的工厂函数, 默认情况下，TypeScript 使用 React.Fragment 作为片段的工厂函数 */
		"jsxFragmentFactory": "React.Fragment",
		/* jsxImportSource 指定从何处导入 JSX 相关的辅助函数。默认情况下，TypeScript 使用内置的 React 模块来导入 JSX 相关的辅助函数 */
		// "jsxImportSource": "",
		/* reactNamespace 用于指定在 JSX 中使用的 React 命名空间, 默认情况下，TypeScript 使用 React 作为 JSX 的命名空间*/
		// "reactNamespace": "react",
		/* 启用或禁用装饰器的实验性支持，默认情况下，TypeScript 编译器禁用装饰器的实验性支持 */
		"experimentalDecorators": false,
		/* emitDecoratorMetadata 在装饰器中是否生成设计时类型元数据, 默认为false */
		"emitDecoratorMetadata": false,


		/* Type Checking */
		/* noImplicitAny 是否允许隐式的 any 类型, 设置为 true 会禁止隐式的 any 类型, 默认flase */
        "noImplicitAny": false,
		/* strictNullChecks 控制是否对空值（null 和 undefined）的使用进行严格检查, 默认false */
		"strictNullChecks": false,
		/* strictFunctionTypes 控制是否对函数类型检查进行严格检查, 默认false */
		"strictFunctionTypes": false,
		/* strictBindCallApply Check that the arguments for 'bind', 'call', and 'apply' methods match the original function */
		"strictBindCallApply": false,
		/* strictPropertyInitialization 控制是否强制类的属性进行初始化或者在构造函数中明确地赋值, 默认false */
		"strictPropertyInitialization": false,
		/* noImplicitThis 禁止隐式的 this 类型，默认false */
		"noImplicitThis": false,
		/* useUnknownInCatchVariables 控制 catch 块中捕获异常时变量的类型为unknown, 默认catch块捕获的异常变量类型为any，开启后类型设置为 unknown */
		"useUnknownInCatchVariables": false,
		/* alwaysStrict 控制生成的 JavaScript 代码是否始终采用严格模式, 默认情况下，alwaysStrict 是禁用的，即不始终采用严格模式 */
		"alwaysStrict": false,
		/* noUnusedParameters 控制是否检查未使用的函数参数, 默认false */
        "noUnusedParameters": false,
		/* noImplicitReturns 启用检查函数是否有明确的返回值， 默认flase */
		"noImplicitReturns": false,
		/* noUncheckedIndexedAccess 控制是否对索引访问进行严格检查， 默认flase
		   当你通过索引访问数组、元组或者对象的属性时，TypeScript 会检查索引是否为 undefined 或 null，如果是则产生警告或者错误。
		   这有助于避免在运行时因为对未定义的索引进行访问而导致的错误
		*/
        "noUncheckedIndexedAccess": false,
		/* noImplicitOverride 子类可以重写父类的方法是否需要显式声明 override */
        "noImplicitOverride": false,
		/* noPropertyAccessFromIndexSignature 禁止通过索引签名来访问对象的属性, 默认 false */
        "noPropertyAccessFromIndexSignature": false,
		/* allowUnusedLabels 控制是否允许未使用的标签存在于代码中，当启用 allowUnusedLabels 时，未使用的标签不会导致编译错误或警告
		   在 TypeScript 中，默认情况下不会有 allowUnusedLabels 这个编译选项。
		   在 JavaScript 中，通常也不鼓励未使用的标签存在，因为它们会使代码变得混乱和难以理解
		*/
        "allowUnusedLabels": true,
		/* allowUnreachableCode 控制是否允许在代码中存在不可到达的代码段， 默认false， 即不允许存在永远不会执行的代码 如 if(false) */
        "allowUnreachableCode": false,


		/* Linting 语法检查相关 */
		/* strict 启用严格的类型检查选项, 包括 "strictNullChecks"、"strictFunctionTypes"、"strictPropertyInitialization" 等 */
		"strict": true,
		/* noUnusedLocals 禁止声明未使用的局部变量 */
        "noUnusedLocals": true,
		/* noFallthroughCasesInSwitch 禁止switch 语句中的 case 语句穿透，如 case 的执行结束没有 break 或 return 等终止语句 */
        "noFallthroughCasesInSwitch": true,
		/* exactOptionalPropertyTypes 控制在可选属性上的类型是否为可选类型，默认false, 即可选属性上的类型不会被视为可选类型 */
		"exactOptionalPropertyTypes": false,


		/* 模块相关支持 */
		/* moduleResolution 指定模块解析策略, 常见的选项包括 "node"、"classic"、"node12" 等 */
        "moduleResolution": "node12",
		/* allowImportingTsExtensions 允许导入 TypeScript 文件时使用文件.ts扩展名  */
        "allowImportingTsExtensions": true,
		/* resolveJsonModule 允许导入 JSON 文件作为模块 */
        "resolveJsonModule": true,
		/* isolatedModules 控制是否将每个文件作为单独的模块进行编译
		   默认情况下，TypeScript 编译器会将所有文件视为相互依赖的模块，并在编译过程中对它们进行连接,
		   设置为 true 会禁用这种连接行为，使得每个文件都被视为单独的模块进行编译
		   在某些情况下，将每个文件作为单独的模块进行编译可能会带来一些好处，比如更快的编译速度、更好的缓存效果等, 需要根据项目的具体情况进行权衡和调整
		*/
        "isolatedModules": true,
		/* resolvePackageJsonExports 控制是否解析 package.json 文件中的 exports 字段, 默认为true */
		"resolvePackageJsonExports": true,
		/* noEmit 控制是否生成编译后的输出文件, 默认为false, 设置为 true 会禁止生成编译后的输出文件，只进行类型检查而不生成实际的 JavaScript 文件 */
        "noEmit": true,
		/* allowArbitraryExtensions 控制 TypeScript 编译器是否允许输入文件具有任意的文件扩展名, 默认不允许 */
		"allowArbitraryExtensions": false,
		/* noResolve 控制 TypeScript 编译器是否跳过解析阶段, 默认情况下，noResolve 是禁用的，即进行解析阶段 */
		"noResolve": false,
		/* maxNodeModuleJsDepth 控制 Node.js 在解析 JavaScript 文件时递归查找的深度
		  默认情况下，Node.js 的 maxNodeModuleJsDepth 是 0，表示不递归查找，只查找当前目录下的 JavaScript 文件
		*/
		"maxNodeModuleJsDepth": 0,


		/* Projects 项目相关配置 */
		/* typeRoots 指定供 TypeScript 搜索类型声明文件的根目录 默认情况下，TypeScript 会在 node_modules/@types 目录中搜索类型声明文件，也可以添加自定义的目录*/
		"typeRoots": ["./node_modules/@types"],
		/* types 指定需要引入的类型声明文件的名称, eg: "types": ["node", "lodash", "jquery"], 告诉 TypeScript 编译器需要引入这三个类型声明文件
		   当设置了 types 时，TypeScript 会尝试从 node_modules/@types 目录下查找这些类型声明文件，并引入对应的类型定义
		   当你设置了 types 时，TypeScript 不会再自动引入 node_modules/@types 目录下的其他类型声明文件。因此，如果你希望引入 node_modules/@types 中的所有类型声明文件，可以使用 "types": [] 或者省略 types 字段，TypeScript 会自动引入所有的类型声明文件
		*/
		"types": [],
		/* rootDir 指定 TypeScript 文件的根目录, eg: "rootDirs": ["src1", "src2"] */
		"rootDir": "./",
		/* rootDirs 用于指定多个源码根目录，以支持项目中分布式的源码文件 */
		"rootDirs": [],
		/* baseUrl 设置相对路径的基准目录, 在 TypeScript 项目中，如果指定了 baseUrl，那么所有相对路径的导入都将相对于 baseUrl 所指定的目录进行解析 */
		"baseUrl": "./",
		/* paths 路径映射，通常情况下，它与 baseUrl 选项一起使用
		    如"paths": { "mylib/*": ["src/mylib/*"] }，所有以 mylib/ 开头的模块名称指定了路径映射，将它们都映射到 src/mylib/ 目录下
		 */
		"paths": {},
		/* outDir 指定编译后的 JavaScript 文件输出目录 */
		// "outDir": "dist",
		/* skipLibCheck 用于控制是否跳过对引入的库文件的类型检查, 默认false, 设置为true，可提高编译性能 */
		"skipLibCheck": true,
		/* lib 指定要包含的默认库文件 */
		"lib": ["ES2020", "DOM", "DOM.Iterable"],
        /* incremental 启用增量编译, TypeScript 会在默认位置（通常是 node_modules/.cache/typescript）创建增量编译缓存,显著提高大型项目的编译速度 */
        "incremental": true,
        /* tsBuildInfoFile 指定增量编译信息（.tsbuildinfo）文件的输出路径, 是启用增量编译时的一个重要配置选项 */
        "tsBuildInfoFile": "./.tsbuildinfo",
        /* composite 启用项目组合（Composite）编译模式, true || 对象({"tsconfig": "./tsconfig.json"}), 在项目拥有多个相互依赖的子项目时启用可以提高编译性能  */
        "composite": false,
		/* disableSourceOfProjectReferenceRedirect 禁用项目引用时的源文件重定向, 默认false
		   通常情况下，当使用项目引用时，TypeScript 编译器会将引用项目中的源文件重定向到当前项目中，以便于进行整体编译
		*/
        "disableSourceOfProjectReferenceRedirect": flase,
		/* disableSolutionSearching 禁用 TypeScript 编译器在项目引用时搜索 *.sln 文件, 默认false */
        "disableSolutionSearching": false,
		/* disableReferencedProjectLoad 禁用在编译时加载引用项目的行为 */
        "disableReferencedProjectLoad": true,

		/** 代码生成 emit */
		/** declaration 控制是否生成声明文件，默认false
		    通过设置 declaration 为 true，TypeScript 编译器会在编译时生成与源文件对应的声明文件，通常是在同一个目录下生成一个同名的 .d.ts 文件
		*/
		"declaration": false,
		/* declarationDir 指定生成声明文件的输出目录 通常情况下，TypeScript 编译器会将生成的声明文件与相应的 JavaScript 文件放在同一个目录中 */
		"declarationDir": "./",
		/* declarationMap 控制是否生成声明文件的源映射文件，生成声明文件的源映射文件可能会增加编译后的文件大小，并且可能会泄露一些源代码信息 默认false */
		"declarationMap": false,
		/* 仅生成声明文件而不生成 JavaScript 文件， 默认false */
		"emitDeclarationOnly": false,
		/* sourceMap 控制是否生成源映射文件，默认false 源映射文件是一种特殊的文件，它包含了编译后的 JavaScript 代码与原始 TypeScript 代码之间的映射关系 */
		"sourceMap": false,
		/* inlineSourceMap 控制是否将源映射嵌入到生成的 JavaScript 文件中, 默认false */
		"inlineSourceMap": false,
		/* outFile 指定编译后的 JavaScript 文件的输出路径和文件名,
		   使用 outFile 选项时，TypeScript 编译器会将所有的 TypeScript 文件合并成一个 JavaScript 文件，并且会根据依赖关系自动确定编译顺序。
		   因此，如果你的项目中存在循环依赖或者复杂的依赖关系，可能会导致编译错误
		   另外，outFile 选项不适用于使用了 ES6 模块系统的项目，因为 ES6 模块系统是以文件为模块的单位，每个文件都会被编译成一个单独的 JavaScript 文件。如果你的项目使用了 ES6 模块系统，可以考虑使用 outDir 选项来指定输出目录，而不是使用 outFile
		*/
		// "outFile": "dist/main.js"
		/* removeComments 在编译后的 JavaScript 文件中移除注释，默认false */
		"removeComments": false,
		/* importHelpers 控制是否引入辅助函数 开启需要确保你的项目中包含了 TypeScript 辅助库，比如 tslib。否则编译后的代码可能会出现运行时错误，默认false */
		"importHelpers": false,
		/* importsNotUsedAsValues 控制当导入模块时，是否允许将导入的值仅用于类型注解而不在编译后的 JavaScript 代码中被引用, 默认 'remove'
		   可以设置为 "remove", "preserve", "error", 或者 true
		   remove - 编译器会在编译后的 JavaScript 代码中移除未被使用的导入语句，以减小生成的 JavaScript 文件的大小
		   preserve - 编译器会保留未被使用的导入语句，即使它们在编译后的 JavaScript 代码中没有被引用。这可能会增加生成的 JavaScript 文件的大小，但可以保留原始代码结构和导入语句，有助于维护和调试
		   error -  编译器会在发现未被使用的导入语句时抛出编译错误，阻止编译过程继续进行
		*/
		"importsNotUsedAsValues": "remove",
		/* downlevelIteration 控制是否在编译 ES2015+ 的 for..of 循环时，是否降级为 ES5 语法，默认不降级 - false */
		"downlevelIteration": false,
		/* sourceRoot 指定生成的源映射文件中源码文件的根目录 */
		// "sourceRoot": "",
		/* mapRoot 指定生成的源映射文件的根目录 */
		// "mapRoot": "",
		/* inlineSources 控制是否将源文件的内容嵌入到生成的源映射文件中, 默认false  */
		"inlineSources": false,
		/* emitBOM 控制是否在生成的文件中包含字节顺序标记, 默认false
		   字节顺序标记是位于 Unicode 文本文件开头的特殊标记，用于指示文本文件的字节顺序
		*/
		"emitBOM": false,
		/* newLine 指定生成的 JavaScript 文件中的换行符类型, 支持 crlf(\r\n), lf(\n), auto 默认 auto */
		"newLine": "auto",
		/* stripInternal 控制是否在编译后的 JavaScript 文件中移除被 @internal 标记的成员的声明，默认false */
		"stripInternal": false,
		/* noEmitHelpers 禁止在编译后的 JavaScript 文件中不生成辅助函数，默认false */
		"noEmitHelpers": false,
		/* noEmitOnError 禁止在发生编译错误时是否生成输出文件，默认false,即使在发生编译错误时也会生成输出文件 */
		"noEmitOnError": false,
		/* preserveConstEnums 控制是否在编译过程中保留使用 const enum 定义的枚举类型， 默认false-不保留 */
		"preserveConstEnums": false,
		/* preserveValueImports 控制是否保留对值的导入, 默认 false - 不保留对值的导入
		   在 TypeScript 中，当你从 JavaScript 模块中导入一个值时（比如常量或者变量），
		   TypeScript 编译器通常会尝试将它视为类型，并且会在输出的声明文件中将其移除。这样可以避免在导入声明文件时产生类型错误
		   启用 preserveValueImports 选项后，TypeScript 编译器会保留对值的导入，即使它们被当做类型使用。这样可以确保生成的声明文件中保留了所有的导入语句，使得在导入声明文件时可以使用这些值
		*/
		"preserveValueImports": false,
		/* verbatimModuleSyntax 在输出的 JavaScript 文件中保留模块语法的原样性， 默认false */
		"verbatimModuleSyntax": false,
		/* allowSyntheticDefaultImports 允许合成默认导入, 默认 false
		   在 JavaScript 中，如果一个模块使用的是 export default 导出的默认值，那么这个模块会被视为默认导入。
		   但是在一些旧的 JavaScript 模块系统中，没有默认导出的概念，因此 TypeScript 需要合成默认导入
		*/
		"allowSyntheticDefaultImports": false,
		/* esModuleInterop  控制是否允许在导入 CommonJS 模块时以 ES 模块的方式导入, 默认false, 不允许以 ES 模块的方式导入 CommonJS 模块*/
		"esModuleInterop": false,
		/* 控制是否在解析模块时保留符号链接的行为, 默认false,不保留符号链接的行为 */
		"preserveSymlinks": true,
		/* forceConsistentCasingInFileNames 控制是否强制文件名大小写一致,默认false,不强制 */
		"forceConsistentCasingInFileNames": false,
    }
}
```

-   files

指定要编译的 TypeScript 文件列表。通常不推荐使用，除非确实需要显式地指定每个文件

```json
{
    "files": ["core.ts"]
}
```

-   include 与 exclude

指定需要包含在编译过程中的文件或目录，可以使用 glob 模式匹配多个文件或目录；

如果没有特殊指定，"exclude"默认情况下会排除 node_modules，bower_components，jspm_packages 和<outDir>目录

支持的 glob 通配符有:

1. \*: 匹配 0 或多个字符（不包括目录分隔符）

2. ?: 匹配一个任意字符（不包括目录分隔符）

3. \*\*/: 递归匹配任意子目录

```json
{
    "include": ["src/**/**"],
    "exclude": ["node_modules", "**/*.spec.ts"]
}
```

如果"files"和"include"都没有被指定，编译器默认包含当前目录和子目录下所有的 TypeScript 文件（.ts, .d.ts 和 .tsx），排除在"exclude"里指定的文件

**使用"include"引入的文件可以使用"exclude"属性过滤：**

如 include 指定了 ./src 目录，但是可以 通过配置 exclude 的 ./src/history 文件夹，过滤掉 history 目录下的文件，但是通过"files"属性明确指定的文件却总是会被包含在内，

不管"exclude"如何设置。

如果没有特殊指定，"exclude"默认情况下会排除 node_modules，bower_components，jspm_packages 和<outDir>目录

-   compileOnSave

启用编辑器保存文件时自动触发 TypeScript 编译

```json
{
    "compileOnSave": true,
    "compilerOptions": {
        "noImplicitAny": true
    }
}
```

-   extends

从另一个配置文件里继承配置

```json
{
    "extends": "./tsconfig.base.json",
    "compilerOptions": {}
}
```
