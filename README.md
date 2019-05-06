# React Admin 后台管理系统

主要实现： 对不同权限的用户配有不同的路由。

主要技术：react, redux, redux-saga, react-router-dom等

## 账号密码

所有管理权限
账号： admin@office.com 
密码： 123456

dashboard、 产品管理
账号： sale@office.com
密码： 123456

dashboard、 hr管理
账号： hr@office.com
密码： 123456

## 操作流程

```
git clone ...
// 未安装需要安装包
npm install 或 yarn
yarn start
// 启用 express 服务
cd server/
// server下没安装的也要install下
npm install 或 yarn 
yarn start
```

此外nginx配置见下方

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
- redux, react-redux, redux-saga —— 状态管理
- react-router-dom —— 路由管理

```
yarn add antd axios redux react-redux redux-saga react-router-dom
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

**开发环境下**

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

**生产环境下**

将react项目使用 ```yarn build```打包，将打包后的文件放到server目录下的某一个文件夹，并在server下的app.js中配置。（这里我放到了server/public/build下）这时就可以在express 服务端口访问项目。

```
app.use(express.static(path.join(__dirname, 'public/build')));
```


3. 使用 redux react-redux redux-saga

```
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import saga from './sagas'
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
```

4. 使用 react-router-dom react-loadable(懒加载)

```
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import MyLoadable from '@/router/routeLoadle'
import App from '../App';
import NotFound from '@/pages/404/index';

const RouterApp = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" exact component={MyLoadable({loader: ()=>import('@/pages/login')})} />
        <Route path="/" exact render={() => <Redirect to="/main" />} />
        <Route path="/main" render={() =>
          <App></App>
        }>
        </Route>
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </HashRouter>
  );
}

export default RouterApp;
```
  注： 
  1. src/index.js 中此时用RouterApp替代App；
  2. RouterApp主要渲染的是与用户权限非相关路由；与用户路由相关联的在App.js中渲染；
  3. MyLoadable使用了react-loadable插件；

关于路由：
当进入App.js的时候，根据state先判断用户是否已经登陆，若没有登陆先查看cookie，验证用户信息，验证失败跳转到登陆页面；若无cookie直接登陆。用户登陆完成后，获取全部路由信息。用户信息中根据assets字段（存放的是用户有权限的路由id集合），找到对应用户权限的路由列表，渲染。由于是动态渲染路由，路由中的path字段，就是对应路由页面的位置，此处稍微注意。另：像一些路由后面动态传参的，如:id，在渲染的时候解析成$id。

> 本人仍是一名前端路上的小白，欢迎大家提出宝贵的意见。QQ交流： 1048021712。