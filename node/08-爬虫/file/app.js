

/*
    request 发起请求模块package
        在node里面向其他服务器端发起请求的模块

 */

const request=require("request");
const fs=require("fs");
const path=require("path");


//向百度发起请求
request({
    method:"GET",       //请求方式 GET,POST
    url:"http://afei.fun/",   //目标路径
    },(err,res,body)=>{           //回调的三个参数
    //console.log(err);           //err请求失败的错误信息
    //console.log(res);           //res请求返回信息
               //body请求结果
    //fs.writeFile()
    let reg=/http:\/\/afei\.fun\/images\/artical\/[0-9]\.jpg/ig
    let imgArr=body.match(reg);
    console.log(imgArr);
    imgArr.forEach((v,i)=>{
        request(v).pipe(fs.createWriteStream(path.join(__dirname,"afeiimg"+i+".jpg")))
    })
});


//http://afei.fun/images/article/1.jpg
//http://afei.fun/images/article/1.jpg

//reg=/http:\/\/afei\.fun\/images\/artical\/[0-9]\.jpg/