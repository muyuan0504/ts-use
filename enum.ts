/*
 * @Author: jimouspeng
 * @Date: 2022-04-28 11:46:34
 * @Description: 枚举 
 * @FilePath: \typescript\enum.ts
 */

enum FileAccess {
    // constant members
    None,
    Read = 3 >> 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length
}



console.log('枚举', FileAccess.None, FileAccess.Read, FileAccess.Write, FileAccess.ReadWrite, FileAccess.G);

