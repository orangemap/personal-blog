# 电子通行码 - Console前端项目

## 目录结构

```
├── build.sh (云编译使用的编译脚本)
├── client (Vue 项目)
│   ├── ...
│   └── dist (Vue 编译之后的目录)
├── default.conf.template（docker镜像使用的nginx配置文件）
├── dockerfile（docker配置文件，使用nginx基础镜像）
├── server (Egg 项目)
└── yunyi (云部署使用的脚本。注意：当第一次部署时，云主机找不到此目录，导致执行 bin/control stop 命令时报错)
```

## 本地打包镜像

```bash
# 进入项目根目录
$ sh build.sh
$ docker build -t ep-console:v1 .
```

## 本地启动docker容器

```bash
docker run -dp 80:80 -e BACKEND_URL="http://后端API地址/" ep-console:v1
```

## 项目背景

新冠疫情爆发以来，应急物资在运输过程中暴露出很多问题，车辆通行效率降低，对抗击疫情造成了不利影响。传统纸版通行证申领繁琐、查验难、功能单一、信息共享难、管理漏洞多、易仿造等问题，已经难以满足应急救援要求。
电子通行码具有在线取码、就近就便、码随事需、动态调整、一车一码、精准管理、一码多服，全国通行等优点，建设应急救援电子通行码已刻不容缓。

此项目 client 由 [Vue CLI3](https://cli.vuejs.org/guide/) 生成， server 端采用 [eggjs](https://eggjs.org/zh-cn/intro/) 框架。

## Development

```bash
$ npm i
$ npm run serve
$ npm run dev
```
