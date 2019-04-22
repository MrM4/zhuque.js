

const request=require("request");
const fs=require("fs");


//let word =encodeURI("潭州教育")//将汉字装换为URIe编码

function getImg(word,path){
    let data="";
    let URIWord=encodeURI(word);

    (function start(page){
        let option = {
            method: "GET",
            url: "https://search.jd.com/Search?keyword="+URIWord+"&enc=utf-8&qrst=1&rt=1&stop=1&vt=2&page="+page,
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
            }
        };
        request(option,(err,res,body) => {
            if (err){
                write();
                return;
            }
            let reg = /\/\/img\d+\.360buyimg\.com\/n7\/jfs\/t1[0-9a-z\/]+\.jpg/gi;
            let infoArr = body.match(reg);
            if (!infoArr){
                write();
                return;
            }
            infoArr.forEach(v => {
                data += v + "\n";
            });
            start(page+2);
        });
    })(1);

    function write(){
        fs.writeFile( path,data,(err)=>{if(err)throw err});
    }
};

module.exports=getImg;


//向发起请求

/*
     https://search.jd.com/Search?keyword=潭州教育&enc=utf-8
    "https://search.jd.com/Search?keyword="+word+"&enc=utf-8&page=11&s=151&click=0"
*/
/*
request({
    method:"GET",       //请求方式 GET,POST
    url:"https://search.jd.com/Search?keyword="+word+"&enc=utf-8",   //目标路径

    //在发起请求的时候，尽量将自己伪装成浏览器
    headers:{
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
    }
},(err,res,body)=>{

    let reg=/\/\/img\d+\.360buyimg\.com\/n7\/jfs\/t1[0-9a-z\/]+\.jpg/ig;

    let data="";
    let infoArr=body.match(reg);
    infoArr.forEach(v=>{
        data +=v+"\n";
    });
    fs.writeFile("text/img.txt",data,(err)=>{if(err)throw err});
});
*/
