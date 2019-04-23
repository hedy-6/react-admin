// 非main路由渲染
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import MyLoadable from '@/router/routeLoadle'
import App from '@/App';
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