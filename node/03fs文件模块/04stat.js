
/*
    fs.stat()类
    let stats=fs.stat()
    stats有很多方法

 */

const fs=require("fs");
const path=require("path");

let fp=path.join(__dirname,"/test");

/*
    stat 的主要作用是它继承类的属性

    stat.isDirectory()

    stat.isFile()
 */
fs.stat(fp,(err,stats)=>{
    if(err)throw err
    console.log(stats);
});
