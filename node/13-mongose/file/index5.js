
const mongoose=require("mongoose");

const Schema=mongoose.Schema;

mongoose
    .connect("mongodb://127.0.0.1:27017/test13",{useNewUrlParser:true})
    .then(()=>{
        console.log("数据库连接成功");})
    .catch(()=>{
        console.log("数据库连接失败");});


let userSchema=new Schema({
    username:{type:String,require:true},
    password:{type:String,require:true},
    age:{type:Number,default:20},
    userInfo:{type:Object},
    arr:[]
});

let user=mongoose.model("user",userSchema);


//增加数据
/*user.create(
        {
            username:"heha",
            password:"789456",
            age:10,
            userInfo:{
                status:"这人很吊"
            }
        },
        {
            username:"zhuque",
            passowrd:"145623",
            age:25
        }
    )
    .then(()=>{
        console.log("添加成功");})
    .catch((err)=>{
        console.log("添加失败");})*/
//更新
/*user
    .updateMany(
        {username:"heha"},
        {
            $set:{
                "userInfo.sex":"男"
            }
        },
        {}
    )
    .then(data=>{
        console.log(data);})
    .catch((err)=>{if(err)throw err});*/


/*user
    .updateMany(
        {username:"heha"},
        {
            $inc:{age:1}//age自增1，只针对数字
        },
        {}
    )
    .then(data=>{
        console.log(data);})
    .catch((err)=>{if(err)throw err});*/

/*user
    .updateMany(
        {username:"heha"},
        {
            $unset:{userInfo:1}//移除某个属性
        },
        {}
    )
    .then(data=>{
        console.log(data);})
    .catch((err)=>{if(err)throw err});*/


/*user
    .updateMany(
        {username:"heha"},
        {
            $unset:{arr:1}//移除某个属性
        },
        {}
    )
    .then(data=>{
        console.log(data);})
    .catch((err)=>{if(err)throw err});*/

/*

user
    .updateMany(
        {username:"heha"},
        {
            $push:{arr:{$each:[246,258],$slice:-3}}//$slice:-3倒数三条
        },
        {}
    )
    .then(data=>{
        console.log(data);})
    .catch((err)=>{if(err)throw err});
*/

