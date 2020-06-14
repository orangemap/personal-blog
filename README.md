# 个人博客

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



此项目 client 由 [Vue CLI3](https://cli.vuejs.org/guide/) 生成， server 端采用 [eggjs](https://eggjs.org/zh-cn/intro/) 框架。

## Development

```bash
$ npm i
$ npm run serve
$ npm run dev
```
