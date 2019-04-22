
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

//$set(增加某个属性值)  $inc(针对数字自增)  $unset(移出某个属性值)

/*user.updateMany(
        {name:"wanda"},
        {
            $set:{
                "userInfo.sex":"男"
            }
        }
    )
    .then(data=>{
        console.log(data);})
    .catch((err)=>{if(err)throw err});*/

//针对数组的几个 $push   $slice  $pop  $pull $addToSet:{arr:20}

user
    .updateMany(
        {name:"wanda"},
        {
            $push:{arr:{$each:[246,258],$slice:-3}}
        },
        {}

    )
    .then(data=>{
        console.log(data);})
    .catch((err)=>{if(err)throw err});