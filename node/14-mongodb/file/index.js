
const mongoose=require("mongoose");

const Schema=mongoose.Schema;

mongoose
    .connect("mongodb://127.0.0.1:27017/test14",{useNewUrlParser:true})
    .then(()=>{
        console.log("数据库连接成功");})
    .catch(()=>{
        console.log("数据库连接失败");});


/*let userSchema=new Schema({
    //name:{type:String,required:[true,"name字段必须存在"]},
    //password:{type:String,required:true},
    age:{type:Number,default:20},
});*/

/*let userSchema=new Schema({
    sex:{
        type:String,
        required:true,
        enum:["男","女"]
    }
});*/

let userSchema=new Schema({
    tel:{
        type:String,
        required:true,
        //minlength:4,
        //maxlength:15,
        match:/^1\d{10}$/
    }
},{versionKey:false});

let user=mongoose.model("user",userSchema);


//增加数据
/*
user.create(
        {
            username:"heha",
            password:"789456",
            age:16
        },
        {
            username:"zhuque",
            passowrd:"145623",
            age:18
        }
    )
    .then(()=>{
        console.log("添加成功");})
    .catch((err)=>{
        console.log("添加失败");})*/

//验证
/*
    require 验证    required:[true,"name字段必须存在"]

*/
/*
user
    .create(
        {
            //name:"hahaha"
            gg:"123"
        }
    )
    .then(data=>{
        console.log(data);})
    .catch(e=>{
        console.log(e);});
*/


//type验证
/*

        针对于Number类型，String类型的Scehma有对应的验证

        Number  min,max

        String
            enum:["男","女"]限制值为enum数组内的值，可多项
            minlength:4,    限定字符串长短
            maxlength:10
            match://正则
*/
user
    .create(
        {
            tel:"12356789100"
        }
    )
    .then(data=>{
        console.log(data);})
    .catch(e=>{
        console.log(e);});
