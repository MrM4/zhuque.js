
const mongoose=require("mongoose");

const Schema=mongoose.Schema;

mongoose
    .connect("mongodb://127.0.0.1:27017/test14",{useNewUrlParser:true})
    .then(()=>{
        console.log("数据库连接成功");})
    .catch(()=>{
        console.log("数据库连接失败");});
/*
    自定义验证
 */
let userSchema=new Schema({
    pwd:{
        type:String,
        required:true,
        /*validate:function(value){
            console.log(value);
            //检测是否是纯数字
            let ifNum=/^\d+$/.test(value);
            if(ifNum)return false;

            //验证是否是纯小写字母
            let ifLow=/^[a-z]+$/.test(value);
            if(ifLow)return false;

            //验证是否是纯大写字母
            let ifUp=/^[A-Z]+$/.test(value);
            if(ifUp)return false;

            return true
        }*/

        validate:{
            validator(value){
                //检测是否是纯数字
                let ifNum=/^\d+$/.test(value);
                if(ifNum)return false;

                //验证是否是纯小写字母
                let ifLow=/^[a-z]+$/.test(value);
                if(ifLow)return false;

                //验证是否是纯大写字母
                let ifUp=/^[A-Z]+$/.test(value);
                if(ifUp)return false;

                return true
            },
            message:"密码验证失败"
        }
    }
},{versionKey:false});

let user=mongoose.model("user",userSchema);


user
    .create(
        {
            pwd:"12356789100"
        }
    )
    .then(data=>{
        console.log(data);})
    .catch(e=>{
        console.log(e);});
