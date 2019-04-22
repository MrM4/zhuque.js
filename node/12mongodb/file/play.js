
//导入mongoose
const mongoose=require("mongoose");

const Schema=mongoose.Schema;

//建立链接
mongoose
    .connect("mongodb://127.0.0.1:27017/play",{useNewUrlParser:true})
    .then(()=>{console.log("数据库连接成功")})
    .catch(()=>{console.log("数据库连接失败")});


//建表
//设置规则 Schema
let userSchema=new Schema({
    name:{type:String,require:true},
    password:{type:String,require:true},
    age:{type:Number,min:18,max:65,default:"18"},
    text:{type:String,default:"哈哈"}
},{versionKey:false})//禁用_v;


//建表
let user=mongoose.model("userer",userSchema);

//添加数据
user.create({
    name:"meishien",
    password:"mmmei14562",
    age:20,
    sex:"true"
}) ;

//删除数据

//删除一条
user.deleteOne({name:"meishien"},(err,info)=>{
    console.log(err);
    console.log(info);
});

//删除多个
//user.deleteMany({name:"meishien"},(err)=>{if(err)throw err});