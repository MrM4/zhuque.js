
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
    arr:[]
});

let user=mongoose.model("user",userSchema);


//增加数据
/*user.create(
        {
            username:"heha",
            password:"789456",
            age:20,
            arr:[123,456],

        },
        {
            username:"zhuque",
            passowrd:"145623",
            arr:[489,3458,478]
        }
    )
    .then(()=>{
        console.log("添加成功");})
    .catch((err)=>{
        console.log("添加失败");});*/

//属性值为数组的操作 $size  $all
/*
user
    .find(
        {
            arr:{$size:3}
        }
    )
    .then(data=>{
        console.log(data);});
*/


/*user
    .find(
        {
            arr:{$all:[123,456]}
        }
    )
    .then(data=>{
        console.log(data);});*/


//where，正则

/*user
    .find(
        {
            //$where:"this.age===20"
            $where:function(){
                return true
            }
        }
    )
    .then(data=>{
        console.log(data);})*/

//正则
user.find(
        {
            username:/he/
        }
    )
    .then(data=>{
        console.log(data);
    });