
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
    age:{type:Number},
});

let user=mongoose.model("user",userSchema);


//增加数据
/*user.create(
        {
            username:"heha",
            password:"789456",
        },
        {
            username:"zhuque",
            passowrd:"145623",
        }
    )
    .then(()=>{
        console.log("添加成功");})
    .catch((err)=>{
        console.log("添加失败");});*/

//删除数据
/*
user
    .deleteOne({username:"heha"})
    .catch((err)=>{if(err)throw err});
*/

//查找操作

/*
    gt gte lt lte ne
    in nin
    exists
    size  all
    where  正则


    or nor

 */
/*
    .find(conditions,[projection],[options],[callback])

    conditions 查询条件

*/

//通过name查找
/*
user
    .find({username:"heha"})
    .then((data)=>{
        console.log(data);});
*/

//通过age查找  gt, gte,lt,lte,ne(不等于)
/*
user
    .find({age:{$gte:20,$lte:60}})//age大于等于17的数据 {$gte:17}
    .then(data=>{console.log(data);});
*/


//or(或者) nor
/*user
    .find(
        {
            $or:[
                {username:"heha"},
                {username:"zhuque"}
                //{age:18}
            ]
        }
    )
    .then(data=>{
        console.log(data);});*/

/*user
    .find(
        {
            $nor:[
                {username:"heha"},
                {username:"zhuque"}
                //{age:18}
            ]
        }
    )
    .then(data=>{
        console.log(data);});*/


//in nin

/*user
    .find(
        {
            age:{$in:[18,50]}
        }
    )
    .then(data=>{
        console.log(data);});*/

//exists  属性是否存在
/*
user.find(
        {
            age:{$exists:true} //存在age属性的
        }

    )
    .then(data=>{
        console.log(data);})
*/


