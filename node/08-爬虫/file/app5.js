
const request=require("request");
const path=require("path");
const fs=require("fs");

//let url="https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&word=%E7%BE%8E%E5%A5%B3&pn="+num+30;
request({
        method:"GET",
        url:"https://image.baidu.com/search/index?tn=baiduimage&ie=gb18030&word=%C3%C0%C5%AE&fr=ala",
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
        }
    },(err,res,body)=>{
    let reg=/https:\/\/ss\d+\.bdstatic\.com[\/0-9a-z_=,&]+\.(jpg|png|webp|gif)/ig;
    let infoArr=body.match(reg);
    infoArr=[...new Set(infoArr)];
    //console.log(infoArr);
    //保存图片的操作
    infoArr.forEach((v,i)=>{
        //如果request只传入option的参数（或者直接填入url）
        //它返回一个可读流,直接通过pipeAPI写入到可写流
        request(v).pipe( fs.createWriteStream(path.join(__dirname,"baiduimg/"+i+".jpg")));
    });
});



/*function getImg(word){
    let URIWord=encodeURI(word)
    let data=""
    function start(page){
        let option={
            method:"GET",
            url:"",
            header:{

            }
        };
        request(option,(err,res,body)=>{
            let reg=/ /;
            let infoArr=body.match(reg);
            infoArr.forEach(v=>{
                data+=v+"\n";
            });
            start(page)
        });
    }

}*/



/*
    https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1147963229,1136658894&fm=26&gp=0.jpg

    https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2269257729,1601399207&fm=26&gp=0.jpg
    https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2269257729,1601399207&fm=26&gp=0.jpg
    https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1645911260,3216819356&fm=26&gp=0.jpg
    https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2863332825,2401393840&fm=26&gp=0.jpg

    https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=265557918,2160124378&fm=26&gp=0.jpg
    https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2269257729,1601399207&fm=26&gp=0.jpg
    https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=100137228,3525456276&fm=26&gp=0.jpg
    https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3351271634,3915117794&fm=200&gp=0.jpg

    reg=/https:\-/\/ss\d+\.bdstatic\.com\/[0-9a-z_=,&]+\.(jpg|png|webp|gif)/ig;
 */


/*
https://image.baidu.com/search/index?tn=baiduimage&ie=gb18030&word=%C3%C0%C5%AE&fr=ala
https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=result&fr=&sf=1&fmq=1554061352233_R&pv=&ic=&nc=1&z=&hd=&latest=&copyright=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&hs=2&word=%E7%BE%8E%E5%A5%B3


https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E7%BE%8E%E5%A5%B3&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word=%E7%BE%8E%E5%A5%B3&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=&fr=&expermode=&force=&cg=girl&pn=30&rn=30&gsm=1e&1554061184876=
https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E7%BE%8E%E5%A5%B3&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word=%E7%BE%8E%E5%A5%B3&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=&fr=&expermode=&force=&cg=girl&pn=120&rn=30&gsm=78&1554061261385=
https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=%E7%BE%8E%E5%A5%B3&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&hd=&latest=&copyright=&word=%E7%BE%8E%E5%A5%B3&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=&fr=&expermode=&force=&cg=girl&pn=210&rn=30&gsm=d2&1554061296122=

https://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&word=%E7%BE%8E%E5%A5%B3&pn=131
*/
