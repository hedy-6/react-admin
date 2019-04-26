import React, { Component } from 'react';
import { Switch, message } from 'antd';
import http from '@/util/request';
import FormDetail from '@/containers/formDetail'

class DetailProduct extends Component {
    state = {
        columns: [
            {
                title: '产品名称',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '产品状态',
                dataIndex: 'status',
                key: 'status',
                render: (status, data) => {
                    return <Switch disabled checked={status}></Switch>
                }
            },
            {
                title: '产品单价',
                dataIndex: 'price',
                key: 'price'
            },
            {
                title: '产品库存',
                dataIndex: 'inventory',
                key: 'inventory'
            },
            {
                title: '产品分类',
                dataIndex: 'category',
                key: 'category',
            },
            {
                title: '备注信息',
                dataIndex: 'description',
                key: 'description'
            },
        ],
        fieldsData: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        http({
            url: '/sales/product/detail',
            method: 'get',
            params: {
                id: id
            }
        }).then(res => {
            if (res.data && res.data.status === 'OK') {
                let data = res.data.data;
                this.setState({
                    fieldsData: data
                })
            } else {
                message.error((res.data && res.data.msg) || '获取详情失败')
            }
        }).catch(error => {
            message.error(error.message || '获取详情失败')
        })
    }

    render() {
        return (
            <div>
                <FormDetail columns={this.state.columns} data={this.state.fieldsData} />
            </div>
        );
    }
}

export default DetailProduct;