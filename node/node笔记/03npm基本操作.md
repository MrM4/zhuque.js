# npm    

 		node package manager

### 	n pm基本操作

##### 	进入项目目录  

​			**npm初始化**   **npm init  -y** /npm init	生成一个package.json文件  **不能删除**

##### 	安装需要的package

​			**npm install express(包名)**   参数	安装完成后会保存在 node-modules文件夹中

​			node-modules文件夹分享项目时可以删除，项目上线时不可以删除

​			参数分类		--save /  -S	在当前目录安装（生产环境需要的包）项目上线以后还需要依赖的

​								     -g	全局安装

​							--dev / -D         在当前目录安装（开发环境需要的包）开发过程中依赖，项目上线后就										不用了

##### 	安装淘宝镜像cnpm	

​			npm  i  cnpm   -g  	cnpm可以代替npm使用，但是不能混用

##### 	卸载uninstall						

​			npm  uninstall   express   -S	卸载时要带上安装时的参数

#####       更新   update    

​			npm  update  express  @版本号      -S	一般不会跨大版本更新

#####       上传publish

​		首先登陆  npm login

​		npm  publishi	上传	上传超过24小时后永久不能删除

​     删除包unpublish   --force

​		npm  unpublish --force

​    npm list   展示当前安装的包



### git和github





