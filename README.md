# Taro-base

基于 Taro 封装的一套较为完整的工作流，可根据多套环境变量选择根据哪套构建不同的小程序

## 应用场景

其实是根据公司需求搭建的一个架子，公司打算一个项目产出两个小程序，也就是两套小程序功能一样，只是数据和文案不一样。所以改造了 Taro 原始的一些配置和结构

[x] 添加 husky 的工作流，以确保提交前的规范
[x] 封装 Taro 的 request
[x] 配置两个环境变量来区分字符串常量和接口，这样可以根据环境变量来编译不同的项目

## 目录结构：

```bash
.
├── config // Taro项目配置，添加了区分project环境变量和请求Url的配置文件
├── scripts // eslint和prettier的脚本
└── src
    ├── actions
    ├── assets
    ├── constants
    ├── locales // 常量文件，根据不同的环境变量来区分不同项目展示的文案
    ├── pages
    ├── reducers
    ├── services // 请求相关
    ├── store
    ├── styles // 样式相关
    └── utils // 工具类
```

## 使用方法

安装依赖:

// 全局安装Taro，安装项目依赖
> yarn global add @tarojs/cli
>
> yarn install

build 打包

> yarn build // 环境变量 APP_TYPE=project1,会请求生产环境的project1项目
>
> yarn build:c // 环境变量 APP_TYPE=project2,会请求生产环境的project2项目

dev 启动

> yarn dev // 环境变量 APP_TYPE=project1,会请求开发环境的project1项目
>
> yarn dev:c // 环境变量 APP_TYPE=project1,会请求开发环境的project2项目

## 提交规范

> git add .
>
> yarn commit // 使用统一的commit脚本来进行提交，更加规范和统一
>
> git push
