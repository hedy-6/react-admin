import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { message } from 'antd';
import { FETCH_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '@/actions/ActionTypes'
import { setCookie } from '@/util/cookie'
import './login.less';

class Login extends Component {
    onLogin = (values) => {
        const { email, password } = values;
        this.props.login({
            url: '/users/login',
            method: 'post',
            data: {
                email,
                password
            }
        }).then((data) => {
            if (data.status === "OK") {
                this.props.loginSuccess(data.userInfo)
                setCookie({ email, password, token: password })
                this.props.history.push('/main/dashboard')
            } else {
                this.props.loginError(data)
                message.error(data.msg || '登录失败');
            }
        }).catch(error => {
            this.props.loginError(error)
            message.error(error.msg || '登录失败');
        });
    }
    render() {
        return (
            <div className="login">
                <div className="login-header">
                    <div className="login-header-logo">
                        后台管理系统
                    </div>
                </div>
                <div className="login-body">
                    <LoginForm onLogin={this.onLogin} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
    login: config => {
        return new Promise((resolve, reject) => {
            dispatch({ type: FETCH_REQUEST, payload: { config, resolve, reject } });
        })
    },
    loginSuccess: data => {
        dispatch({ type: LOGIN_SUCCESS, data })
    },
    loginError: error => {
        dispatch({ type: LOGIN_FAIL, error })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);
