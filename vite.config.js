/** vite 配置文件: 以命令行方式运行 vite 时，Vite 会自动解析 项目根目录下 vite.config.js 的配置文件 */

import { resolve } from 'path'

export default {
    build: {
        lib: {
            input: './src/index',
            formats: 'umd',
            name: 'tsModule',
            // fileName: '', // fileName 是输出的包文件名 默认 fileName 是 package.json 的 name 选项
        },
        outDir: './dist',
    },
    resolve: {
        alias: {
            '@types': resolve(__dirname, './types'),
        },
    },
    mode: 'development',
}
