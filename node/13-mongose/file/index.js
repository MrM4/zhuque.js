
const mongoose=require("mongoose");

const Schema=mongoose.Schema;

mongoose
    .connect("mongodb://127.0.0.1:27017/test13",{useNewUrlParser:true})
    .then(()=>{
        console.log("数据库连接成功");})
    .catch(()=>{
        console.log("数据库连接失败");});


let userSchema=new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:Number,default:20},
});

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

//删除数据
user
    .deleteOne({username:"heha"})
    .catch((err)=>{if(err)throw err});

