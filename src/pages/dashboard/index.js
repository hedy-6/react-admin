import React, { Component } from 'react';
import { message } from 'antd';
import NumberRow from './components/NumberRow';
import MainChart from './components/MainChart';
import TableList from './components/TableList'
import http from '@/util/request';
import './index.less'

class Dashboard extends Component {
    state = {
        data: {}
    }

    componentDidMount() {
        http({
            url: '/dashboard/info',
            method: 'get',
        }).then(res => {
            if (res.data && res.data.status === 'OK') {
                this.setState({
                    data: res.data.data
                })
            } else {
                message.error((res.data && res.data.msg) || '获取信息失败')
            }
        }).catch(error => {
            message.error(error.msg || '获取信息失败')
        })
    }

    render() {
        const { data } = this.state;
        return (
            <div className="dashboard">
                <NumberRow data={data.row1} />
                <MainChart data={data.row2} />
                <TableList />
            </div>
        );
    }
}

export default Dashboard;