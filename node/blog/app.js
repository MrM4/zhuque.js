
const
    express=require("express"),
    mongoose=require("mongoose");


//启动数据库
    mongoose
        .connect("mongodb://localhost:27017/blog",{useNewUrlParser:true})
        .then(()=>{
            console.log("数据库连接成功");})
        .catch(()=>{
            console.log("数据库连接失败");})

//创建app
let app=express();
app.listen(9527);

//默认中间件
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));

//设置模板引擎
app.set("view engine","ejs");


//监听路由
app.get("/",(req,res)=>{
    res.render("index")
});

app.get("/reg",(req,res)=>{
   res.render("reg")
});

app.post("/reg",require("./routers/reg.js"));

//app.post("/repeat",require("./routers/repeat"));