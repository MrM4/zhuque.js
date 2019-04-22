

/*
    表关联
 */
const mongoose=require("mongoose");

const Schema=mongoose.Schema;

mongoose
    .connect("mongodb://127.0.0.1:27017/test14",{useNewUrlParser:true})
    .then(()=>{
        console.log("数据库连接成功");})
    .catch(()=>{
        console.log("数据库连接失败");});

//用户Schema
let userSchema=new Schema(
    {
        name:String,
        pwd:String
    }
);

//建立user表

let user =mongoose.model("user",userSchema);

/*user.create(
    {name:"ha123",pwd:"14562"},
    {name:"zhuque",pwd:"msme456"},
    {name:"yinshi",pwd:"123456"},
    {name:"xinai",pwd:"789586"}
);*/


//文章Schema

let articalSchema=new Schema(
    {
        title:String,
        content:String,
        author:{
            type:Schema.Types.ObjectId,
            ref:"user"  //关联一下user表
        }

    }
);

//文章表

let artical=mongoose.model("artical",articalSchema);

/*artical.create(
    {
        title:"文章",
        content:"随便写点什么吧",
        author:'5cb37b3582199a3604aa3f32'
    }
);*/

//进入到文章页，找到所有文章，整理好数据返回给前端

artical.find().populate("author").then(data=>{
    console.log(data);
    data.forEach(v=>{
        console.log(v.author.name);
    })
});