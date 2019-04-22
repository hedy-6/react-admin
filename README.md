# React Admin 后台管理系统

主要实现： 对不同权限的用户配有不同的路由。

主要技术：react, redux, redux-saga, react-router-dom等

## 具体介绍

### 1、基础配置部分

1. 使用 create-react-app 创建一个 react 项目；

```
npx create-react-app [appName]
```

2. 弹出配置文件

```
yarn eject
```

3. 安装一些需要的包

- antd —— UI框架；
- axios —— 请求；
- redux, redux-saga —— 状态管理
- react-router-dom —— 路由管理

```
yarn add antd axios redux redux-saga react-router-dom
```

4. 按需引用antd

```
yarn add babel-plugin-import
```

在package.json中配置

```
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
          "style": "css"
        }
      ]
    ]
  }
```

此处还有其他配置方式，可自行百度。

5. 配置less

```
yarn add less less-loader
```

在 webpack.config.js 模仿sass配置

```
const lessRegex = /\.(less)$/;
const lessModuleRegex = /\.module\.(less)$/;

...
{
    test: lessRegex,
    exclude: sassModuleRegex,
    use: getStyleLoaders(
    {
        importLoaders: 2,
        sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
    },
    'less-loader'
    ),
    sideEffects: true,
},
{
    test: lessModuleRegex,
    use: getStyleLoaders(
    {
        importLoaders: 2,
        sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
        modules: true,
        getLocalIdent: getCSSModuleLocalIdent,
    },
    'less-loader'
    ),
},
...

```

### 2、基础逻辑部分

1. 封装axios请求，代码参见```src/util/request.js```

2. 使用express搭建一个简单的node服务器

在当前项目目录下：

```
mkdir server
cd server
npm init
(...一系列配置)
npm install express --save
```

也可以使用Express 应用程序生成器快速创建一个应用的骨架。

```
npm install express-generator -g
express --view=pug server
```

这里我在本地做了一个nginx代理，例如react项目启动端口是3000，express后台项目端口是8000，访问的时候访问端口9000，配置如下

```
server {
  listen 9000;
  server_name localhost;
  location /api/ {
          proxy_pass http://localhost:8000/;
  }
  location / {
          proxy_pass http://localhost:3000/;
  }
}
```
