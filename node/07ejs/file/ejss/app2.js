

const express=require("express");
const app=express();

//端口监听
app.listen(9527);

app.set("view engine","ejs") //启动模板引擎

app.get("/",(req,res)=>{       //监听根路由

    let h="";

    //添加回调以后不会主动send,需要手动send
    res.render("index1",(err,html)=>{
        console.log(html);
        h+=html;
    });

    res.render("index2",(err,html)=>{
        console.log(html);
        h+=html;
        res.send(h)
    });
});
