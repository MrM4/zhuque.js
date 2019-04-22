
const request=require("request");
const path=require("path");
const fs=require("fs");

let i=0;
function start(word,num){
    if(!word){
        word="美女"
    }
    let URIWord=encodeURI(word);
    let option={
        method:"GET",
        url:"https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&word="+URIWord+"&pn="+num,
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
        }
    };

/*
    在访问百度图片页面的时候，使用http和https
 */
    request(option,(err,res,body)=>{
        if (num>60)return;
        let reg=/https:\/\/ss\d+\.bdstatic\.com[\/0-9a-z_=,&]+\.(jpg|png|webp|gif)/ig;
        let infoArr=body.match(reg);
        infoArr=[...new Set(infoArr)];
        if (!infoArr)return;
        infoArr.forEach((v)=>{
            //console.log(v);
            request(v).pipe( fs.createWriteStream(path.join(__dirname,"baidu/"+i+".jpg")));
            i++;
        });
        num+=30;
        start(word,num);
    })
}
start("设计",0)
