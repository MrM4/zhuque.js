

/*
    在Linux(centos）里面安装npm   yum install npm -y  (可以在任意目录安装)

    检测npm版本号    npm -v

    通过npm安装n模块（n模块的作用是node的版本管理器）
        npm i n -g

    检测 n模块是否安装成功（会显示很大一段n命令）
        n --help

    通过 n命令 来安装各个版本的node

        n stable    安装稳定版本
        n latest    安装最先的版本

        n+enter     切换安装的版本

     安装或者切换之后需要关闭一下xshell,才能通过 node -v 查看版本


   在服务端运行node项目
    ——在本地测试好
    ——把项目文件通过ftp上传到服务器，注意不要上传 node_modules 因为内容太多上传太慢
    可以在node服务器用npm i命令安装依赖
    ——在服务器安装组里添加安全组规则，开放端口
    ——借用公网ip,

 */

/*
    linux 的复制/粘贴    ctrl+ins/shift+ins

 */