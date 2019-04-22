

const request=require("request");
const Path=require("path");
const fs=require("fs");


function run(pn,rn,word,path){
    request({
        method:"GET",
        url:"https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord="+word+"&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=-1&z=&ic=&hd=&latest=&copyright=&word="+word+"&s=&se=&tab=&width=&height=&face=0&istype=2&qc=&nc=1&fr=&expermode=&force=&cg=star&pn="+pn+"&rn="+rn,
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
        }
    },(err,res,body)=>{
        let data=JSON.parse(body).data;
        data.pop(); //数组方法，移除最后一项
        data.forEach((v,i)=>{
            let date=new Date().getTime();
            date=date.toString(30);
            v=v.thumbURL;
            console.log(v);
            request(v).pipe(fs.createWriteStream(Path.join(path,date+i+".jpg")));
        });
    });
}

/*
    options:关键词，
    path:保存路径，
    num:数量 最大限制499
*/

module.exports=function({word,path,num=30}){
    if (num<0)return;

    let URIWord=encodeURI(word);
    let pn=0,rn=0,max;


    path=path||Path.join(__dirname,"../"+word);
    try {fs.mkdirSync(Path.join(path));}catch ( e ) {console.log(e);}

    max=Math.floor(num/60);
    num=Math.min(num,499);
    for (let i=0;i<=max;i++){
        pn=i*60;
        rn=Math.min(num,(i+1)*60);
        run(pn,rn,URIWord,path);
    }

};