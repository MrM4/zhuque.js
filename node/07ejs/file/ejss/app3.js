

const express=require("express");
const app=express();

app.listen(9527);

app.set("view engine","ejs");

app.get("/teacher",(req,res)=>{
    res.render("index3",{
        header:"阿飞",
        footer:"朱雀",
    });
});