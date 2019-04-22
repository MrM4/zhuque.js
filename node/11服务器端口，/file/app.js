

/*
    http传输默认端口（80） 访问不用带端口号
        现在服务器安全组策略中设置开放80端口

    http协议 默认端口(443)

 */

/*

    进程守护    pm2
        服务端安装pm2包   根目录安装 npm i pm2 -g

        测试是否成功      pm2 -v

        代替node启动服务  pm2 start app.js    (后面可以跟上很多参数)

        停止服务         pm2 stop app.js

        展示当前pm2所管理的服务信息     pm2 list

        取消管理服务      pm2 kill    停止并取消服务，在列表中消失

 */

/*
    https

 */