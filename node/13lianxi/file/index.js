
//导入mongoose
const mongoose=require("mongoose");
const Schema=mongoose.Schema;

//创建表规则
let userSchema=new Schema(
    {
        name:{type:String,required:true},
        pwd:{type:String,required:true},
        age:{type:Number},
        arr:[],
        userInfo:{
            status:String,
            sex:String
        }
    }
);

//连接数据库
mongoose
    .connect("mongodb://localhost:27017/13lianxi",{useNewUrlParser:true})
    .then(()=>{
        console.log("数据库连接成功");})
    .catch(()=>{
        console.log("数据库连接失败");});

//创建users表
let user=mongoose.model("user",userSchema);

//添加数据
/*user
    .create(
        {
            name:"user1",
            pwd:"admin",
            age:40,
            arr:[123]
        },
        {
            name:"wanda1",
            pwd:"admsi",
            age:62,
            userInfo:{
                status:"牛皮",
            }
        }
    )
    .then(()=>{
        console.log("添加成功");})
    .catch((err)=>{
        console.log(err);});*/


//删除数据
//.deleteOne()
/*user
    .deleteMany(
        {age:{$lt:19}}
    )
    .then(data=>{
        console.log(data);})
    .catch(err=>{
        console.log(err);});*/

//查找数据
/*user
    .find({name:"user"})
    .then(data=>{
        console.log(data);})
    .catch((err)=>{if(err)throw err});*/

//gt lt gte lte ne
/*user
    .find(
        {
            age:{$ne:20}
        }
    )
    .then(data=>{
        console.log(data);})
    .catch((err)=>{if(err)throw err});*/

//or nor
/*
user
    .find(
        {
            $or:[       //包含其中一个
                {name:"user"},
                {age:25}
            ]
        }
    )
    .then(data=>{
        console.log(data);})
    .catch((err)=>{if(err)throw err});*/

//in nin
/*
user
    .find(
        {
            name:{$nin:["user","wanda"]}
        }
    )
    .then(data=>{
        console.log(data);})
    .catch((err)=>{if(err)throw err});
*/

//size  all  针对数组
/*
user
    .find(
        {
            arr:{$all:[123]}
        }
    )
    .then(data=>{
        console.log(data);})
    .catch((err)=>{if(err)throw err});
*/

//exists  针对某个属性
/*user
    .find(
        {
            userInfo:{$exists:true}
        }
    )
    .then(data=>{
        console.log(data);})
    .catch((err)=>{if(err)throw err});*/

//where
/*
user
    .find(
        {
            $where:"this.pwd==='admsi'"
        }
    )
    .then(data=>{
        console.log(data);})
    .catch((err)=>{if(err)throw err});*/

//正则
/*
user
    .find(
        {
            name:/[a-z]{1,6}\d/,

        },
        {},//find第二个参数表示返回的数据，过滤
        {sort:{age:-1}}//find第三个参数  skip跳过，limit限制长度，sort排序
    )
    .then(data=>{
        console.log(data);})
    .catch((err)=>{if(err)throw err});*/

//通过ID查找
user
    .findById(
        '5cb33c4f7aaa4c034026194c'
    )
    .then(data=>{console.log(data)});