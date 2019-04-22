/*

    数据库是一个软件，可以创建多个数据库

    moongdb => 数据库 => 表 => 文档   非关系型数据库

    1、 安装  mongoose包
    2、链接数据库，判断是否连接成功
    3、建表，建表之前先通过Schema指定规则
    4、增加数据  user.create
    5、删除数据


    Schema

 */

//引入
const mongoose=require("mongoose");

//连接数据库+检测  connect API 操作返回一个 Promise,所以我们可以使用.then  .catch来监听数据库是否连接成功
mongoose
    .connect(" mongodb://127.0.0.1:27017/test",  {useNewUrlParser: true})//mongodb://localhost:27017/test
    .then(()=>{console.log("数据库连接成功")})
    .catch(()=>{console.log("数据库连接失败")});



//建表
//建表之前，先要指定你所将要建立的表的数据规则  Schema

const Schema=mongoose.Schema;
//先定义规则
//如果没有指定必需，默认为非必需
const userSchema=new Schema({
    name:{type:String,required:true},//required:true指定当前数据为必需
    password:{type:String,required:true},
    age:{type:Number,default:"10"} //defalut为默认值
},{versionKey:false});//versionKey:false在保存时不再显示__v

//建表,定义变量接收返回值进行接下来的增删改查操作
let user=mongoose.model("user",userSchema);

//增-添加数据  .create()/.save()
/*
user.create({
    name:"mm",
    password:"445566"
});


*/

//objectid组成：时间戳，机器码，进程，随机数

//userSchema里面没有设置的属性可以传，但是不会保存
/*
    user.create({
        name:"mmm",
        password:"1445566",
        sex:"true"
    });
*/

//删除
//user.remove({name:"mm"},(err)=>{if(err)throw err});
//删除一条
user.deleteOne({name:"mm"},(err)=>{if(err)throw err});


//删除多个
user
    .deleteMany({name:"mmm"})
    .then((i)=>{
        console.log(i);
    })
    .catch((err)=>{
        console.log(err);
    });




/*
//检测 -数据库连上了还是没有连上
//数据库连接成功会触发open事件
mongoose.connection.on("open",()=>{
    console.log("数据库连接成功")
});

//数据库连接失败，会触发error事件
mongoose.connection.on("error",()=>{
    console.log("数据库连接失败")
});
*/
