

const request=require("request");
const fs=require("fs");
const path=require("path");


let word=encodeURI("潭州教育")//将汉字装换为URIe编码

//向发起请求
/*

*/
request({
    method:"GET",       //请求方式 GET,POST
    url:"https://search.jd.com/Search?keyword="+word+"&enc=utf-8",   //目标路径

    //在发起请求的时候，尽量将自己伪装成浏览器
    headers:{
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
    }
},(err,res,body)=>{           //回调的三个参数
    //console.log(body);            //body请求结果

    /*
    //img12.360buyimg.com/n7/jfs/t17497/81/1996154111/168609/c2bc56c1/5ae164eaN9a0e58ad.jpg
    //img14.360buyimg.com/n7/jfs/t1/14358/18/8778/187876/5c78c3cbEb1bc7b1d/b4e7a0b91cabaf8c.jpg
    //img13.360buyimg.com/n7/jfs/t16660/163/1999956673/150039/c20dcc91/5ae28270N22c8fdc9.jpg
    */

    //img数字.360buyimg.com/n7/jfs/[0-9a-z\/].jpg

    let reg=/\/\/img\d+\.360buyimg\.com\/n7\/jfs\/t1[0-9a-z\/]+\.jpg/ig;

    let data="";
    let infoArr=body.match(reg);
    infoArr.forEach(v=>{
        data +=v+"\n";
    });
    fs.writeFile("text/img.txt",data,(err)=>{if(err)throw err});
});