
const user=require("../model/user");

module.exports=function (req,res) {
    console.log(req.body);

    //统一信息格式，返回给前端
    /*
        code:
            0:表示失败
            1：表示成功

     */
    let resData={
        code:0,
        msg:"注册失败"
    };

    //先验证用户名是否已经注册占用了
    user.findOne({username:req.body.username})
        //检测是否已经有对应的数据
        .then((data)=>{
            //console.log(data);
            //如果数据已经存在
            if (data){
                res.send({
                    code:0,
                    msg:"用户名已存在!"
                });
            }else {
                //如果不存在用户名,添加到数据库
                user.create(req.body)
                    .then(()=>{
                        res.send({code:1, msg:"注册成功"});
                    })
                    .catch(()=>{
                        res.send({code:0, msg:"服务器异常，请重试"});
                    })
            }
        })
        .catch(()=>{
            res.send({code:0, msg:"服务器异常，请重试"});
        });
};