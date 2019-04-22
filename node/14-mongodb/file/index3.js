

const mongoose=require("mongoose");

const Schema=mongoose.Schema;

mongoose
    .connect("mongodb://127.0.0.1:27017/test14",{useNewUrlParser:true})
    .then(()=>{
        console.log("数据库连接成功");})
    .catch(()=>{
        console.log("数据库连接失败");});
/*
    中间件
 */

let userSchema=new Schema(
    {
        name:String,
        pwd:String
    }
);

//所有执行find操作之前，先执行这个中间件
userSchema.pre("find",function(next){
    console.log("我是pre中间件");
    next();
});


//user表所有find操作之后，会执行这个函数
userSchema.post("find",function(){
    console.log("find之后执行的中间件");
});

let user=mongoose.model("user",userSchema)

/*user.create(
    {
        name:"hehaha",
        pwd:"146325"
    }
);*/

user.find({name:"hehaha"}).then(data=>{
    console.log(data);
});