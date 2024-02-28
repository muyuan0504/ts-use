/*
 * @Author: jimouspeng
 * @Date: 2022-04-28 11:46:34
 * @Description: 枚举
 * @FilePath: \typescript\enum.ts
 */
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 1] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 5] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = '123'.length] = "G";
})(FileAccess || (FileAccess = {}));
console.log('枚举', FileAccess[0], FileAccess.None, FileAccess.Read, FileAccess.Write, FileAccess.ReadWrite, FileAccess.G);
