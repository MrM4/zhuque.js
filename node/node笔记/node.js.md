# node.js 

## 1.认识

### nodejs是什么

​	基于chrome v8引擎的解析javaScript的运行环境					nodejs底层是C

​	编写node采用JavaScript代码，实际node在处理各种I/O操作，		js是弱类型，单线程

​	nodejs  **处理高并发请求** ，有优势，

​	I/O密集型	nodejs更适合，请求较多时，不会让请求挂起

​	CPU密集型

​	服务器请求不大，nodejs可以承担后端语言作用

​	请求大时，可作为分发请求的作用然后发送给后端语言



### 常用黑窗口命令    cmd  powershell.exe

​	node  -v，npm -v (包管理器) 版本测试

​	**cd**	cd ../返回上层目录

​		     cd  ./desktop/	进入dektop目录

​		     cd  ./+tab	切换目录

​	

​	**dir**      展示当前目录下的文件和文件夹

​	**ls**	 展示当前目录下的文件和文件夹（linux命令）



​	**cls**	清屏

​	**clear**    清屏(linux命令)	ctrl+l  (光标置顶)	



​	**del**  ./1.txt	删除文件

​	**rm -rf/**	删除所有目录

### node命令

​	nodejs 没有运行javaScript的 DOM和 BOM.

​	在文件目录下执行 **node +文件名** 运行 文件

​	node环境下的顶层对象是 **global**

​	在文件目录下只**输入node**回车，进入REPL(交互式解析器)，类似于浏览器的调试  **ctrl+C**两次退出



​	

## 2.node.js模块系统

​		模块：原生模块 / 第三方模块（通常来自npm安装），自己编写模块

​		模块之间相互配合完成整体需求

​		**模块缓存**

​	

###  导入模块API	

##### 	**require()**;函数

​		通过require引入其他文件  **require("./1.js")**; 引入自己写的文件必须从 . /开始，同一目录也不能直接写文件名。

​		在nodejs里面，每一个单独的js文件都是一个模块。在某个模块里引入其他模块的时候，相当于是在局部作用于运行了其他模块的代码。

##### 	exports默认是个对象

​		require引入的是模块的返回值 module.exports

​			exports和module.exports是引用关系。（任意一方的属性变化都会引起另一方的属性变化）

​	

### 原生模块path , url  , querystring

##### 	path	

​		const path=require("path");	导入原生模块；名字通常保持一致

​			path.join("a","c")=>a/c				__dirname	当前文件目录

​												__filename



​		path.resolve("a","b","c");	从根目录出发		/b=>根目录+/b

​		path.relative(“”,"")		相对路径

​		path.parse("/a/b/c");	解析路径的根，路径，base, 扩展名，name,

![](G:\node\path.png)

![](G:\node\path2.png)

##### 	url

​		const url=require("url").URL;		URL类

​			let x=new URL("https")		解析路径

​			url实例化的对象下边有很多继承方法

![](G:\node\url.png)

##### 	querystring

​		const querystring=require("querystring");	

​			querystring.parse("")			解析search路径

​			querystring.stringify("")		    拼接

![](G:\node\querystring.png)

​		

### fs模块		文件系统模块

#### 对文件的操作

##### 			读取文件内容

​		const fs=require("fs");	

​			fs.readFile("../text/1.txt","",utf-8",(err,data)=>{if(err)throw err })	异步API	读取文件内容

​			fs.readFileSync("filepath","utf-8");						    同步API



![](G:\node\read.png)

##### 			写入文件内容

​			fs.writeFile(“filePath”,"内容",[option],()=>{});

​				option是一个对象｛encoding:"utf-8",flag:"a"｝flag表示写入方式，文件系统标识

​				fs.appendFile();也是写入文件

​			fs.writeFileSync("")	写入文件的同步方法

​		写同步代码时捕捉错误  try{ }catch(err){throw err};

![](G:\node\write.png)

##### 		删除文件unlink

​		fs.unlink("path",()=>{})	异步API

​		fs.unlinkSync("path")	同步API



![](G:\node\unlink.png)



#### 对文件夹的操作

##### 	读取文件夹的目录

​	fs.readdir(fp,options,(err.info)=>{console.log(info)})		

​	fs.readdirSync()

##### 	重命名和移动

​	fs.rename(oldPath,newPah,()=>{})

##### 	删除文件夹

​	fs.rmdir(fp,()=>{})		only删除空文件夹

##### 	stat类

​	fs.stat(fp,(err,stat)=>{console.log(stats)})		stat文件夹信息，创建时间，最后打开时间

​	stats.isDirectory()	判断是否是文件夹

​	stats.isFile		判断是不是文件

![](G:\node\stat.png)











​		

​	

​		

​	