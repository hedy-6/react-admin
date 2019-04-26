import React, { Component } from 'react';
import { message } from 'antd';
import http from '@/util/request';
import ProductForm from '../../containers/ProductForm';

class EditProduct extends Component {
    state = {
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
                let newData = {};
                Object.keys(data).forEach(key => newData[key] = { value: data[key] })
                this.setState({
                    fieldsData: {
                        ...newData
                    }
                })
            } else {
                message.error((res.data && res.data.msg) || '获取详情失败')
            }
        }).catch(error => {
            message.error(error.message || '获取详情失败')
        })
    }

    handleFormChange = (changedFields) => {
        this.setState(({ fieldsData }) => ({
            fieldsData: { ...fieldsData, ...changedFields },
        }));
    }

    submitForm = (values) => {
        console.log('Received values of form: ', values);
    }

    render() {
        return (
            <div>
                <ProductForm type="edit" fieldsData={this.state.fieldsData} onChange={this.handleFormChange} onSubmit={this.submitForm} />
            </div>
        );
    }
}

export default EditProduct;