
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
});

let user=mongoose.model("user",userSchema);


//增加数据
/*user.create(
        {
            username:"heha",
            password:"789456",
            age:10
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

/*
    .find  第二个参数，表示返回的数据 过滤

 */
/*
user
    .find(
        {username:"heha"},
        {username:1,password:1,_id:0}//希望返回的数据
        )
    .then(data=>{
        console.log(data);});*/


/*
    .find  的第三个参数   skip跳过     limit限制长度
                        sort排序  1升序，-1降序
        写第三个参数必须要有第二个参数

 */
/*
user
    .find(
        {age:{$exists:true}},
        {},
        {sort:{age:1}}
        )
    .then(data=>{
        console.log(data);});*/

/*
    .find   第四个参数为回调函数 可以用.then .catch代替

 */

//通过ID查找
user
    .findById(
        '5cb2dcc2d90df436480cfc14',
        {},
        {}
    )
    .then(data=>{
        console.log(data);})