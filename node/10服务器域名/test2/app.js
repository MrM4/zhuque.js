
const express=require("express");

const path=require("path")

const app=express();

app.listen(80);

app.use( express.static(path.join(__dirname,"static")))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"static/html/jd.html"));
});
app.get("/favicon.ico",(req,res)=>{
    //图标请求，给客户地段返回一个图片
    res.sendFile( path.join(__dirname,"static/images/logo.ico") );
});