
const mongoose=require("mongoose"),
      Schema=mongoose.Schema;

let userSchema=new Schema({
    username:{
        type:String,
        required:true,
        match:/^[\d_a-z\u4e00-\u9fa5]{2,15}$/i
    },
    password:{
        type:String,
        required:true,
        match:/[\da-z_,@#$%^&*()+\[\]\-=\.<>?\\/]{6,18}/
    }
});

//密码加密 中间件

userSchema.pre("save",function (next) {


    next()
})

//建表
module.exports=mongoose.model("user",userSchema);