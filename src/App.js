import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { message } from 'antd';
import MyLoadable from '@/router/routeLoadle'
import { getCookie, setCookie, clearCookie } from '@/util/cookie'
import { FETCH_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, INIT_ROUTES, LOGIN_OUT } from '@/actions/ActionTypes'
import { getOwnRoute } from './util';
import Layout from '@/containers/layout'

const renderRoute = (route) => {
  if (route.children) {
    return route.children.map(routeChild => renderRoute(routeChild))
  }
  let componentPath = route.path.replace(/:/, "$")
  return <Route key={route.id} path={`/main${route.path}`} component={MyLoadable({ loader: () => import(`@/pages${componentPath}`) })} exact />
}
class App extends Component {

  componentDidMount() {
    if (this.props.user.isLogin) {
      this.getRoutes();
      return;
    }
    const email = getCookie('email');
    const password = getCookie('password');
    if (email && password) {
      this.props.fetchRequest({
        url: '/users/info',
        method: 'get',
        params: {
          email,
          password
        }
      }).then(data => {
        if (data.status === 'OK') {
          this.props.loginSuccess(data.userInfo)
          setCookie({ email, password })
          this.getRoutes();
        } else {
          this.props.loginError(data)
          message.error(data.msg || '获取用户信息失败');
          this.props.history.push('/login')
        }
      }).catch(error => {
        console.log(error);
        this.props.loginError(error)
        message.error(error.msg || '获取用户信息失败');
        this.props.history.push('/login')
      })
    } else {
      this.props.history.push('/login')
    }
  }

  getRoutes = () => {
    this.props.fetchRequest({
      url: '/config/routes',
      method: 'get',
    }).then(data => {
      console.log(data)
      if (data.status === 'OK') {
        let ownRoutes = getOwnRoute(data.routes, this.props.user.data.assets);
        this.props.initRoutes(ownRoutes);
      } else {
        message.error((data && data.msg) || '获取菜单失败')
      }
    }).catch(error => {
      console.log(error)
      message.error(error.msg || '获取菜单失败')
    })
  }

  handelLogout = () => {
    clearCookie();
    this.props.logout();
    this.props.history.push('/login')
  }

  render() {
    const { routes, user = {} } = this.props;
    return (
      <div className="App">
        <Layout userInfo={user.data} logout={this.handelLogout}>
          <Switch>
            {
              routes.map(route => renderRoute(route))
            }
            <Redirect to="/main/dashboard" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    routes: state.routes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchRequest: config => {
    return new Promise((resolve, reject) => {
      dispatch({ type: FETCH_REQUEST, payload: { config, resolve, reject } });
    })
  },
  loginSuccess: data => {
    dispatch({ type: LOGIN_SUCCESS, data })
  },
  loginError: error => {
    dispatch({ type: LOGIN_FAIL, error })
  },
  initRoutes: routes => {
    dispatch({ type: INIT_ROUTES, routes })
  },
  logout: () => {
    dispatch({ type: LOGIN_OUT })
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
