# React Admin 后台管理系统

主要实现： 对不同权限的用户配有不同的路由。

主要技术：react, redux, redux-saga, react-router-dom等

## 具体介绍

### 1、创建 react 应用

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