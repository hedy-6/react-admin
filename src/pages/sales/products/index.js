import React, { Component } from 'react';
import { Table, Form, Row, Col, Input, Select, Switch, Button, message } from 'antd';
import http from '@/util/request'

const { Option } = Select;

const SelectForm = Form.create({
    name: 'productsSelectForm'
})(props => {
    const { getFieldDecorator } = props.form;
    const handleReset = () => {
        props.form.resetFields();
    }
    const handleSearch = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                props.handleSearch(values);
            }
        });
    }
    const SelectFormCol = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        }
    }
    return (
        <Form
            className="products-search-form"
            onSubmit={e => handleSearch(e)}
            {...SelectFormCol}
        >
            <Row gutter={24}>
                <Col span={8}>
                    <Form.Item label="产品名称">
                        {getFieldDecorator(`name`)(
                            <Input placeholder="请输入产品名称" />
                        )}
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="产品分类">
                        {getFieldDecorator(`category`)(
                            <Select>
                                <Option value={1}>油炸食品</Option>
                                <Option value={2}>健康饮品</Option>
                                <Option value={3}>糖果甜食</Option>
                            </Select>
                        )}
                    </Form.Item>
                </Col>
                <Col span={8} style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit">查询</Button>
                    <Button style={{ marginLeft: 8 }} onClick={handleReset}>
                        重置
                    </Button>
                </Col>
            </Row>
        </Form>
    )
})

class Products extends Component {
    state = {
        columns: [
            {
                title: '产品名称',
                dataIndex: 'name',
                key: 'name',
                render: (name, record) => <a href="javascript:;" onClick={() => this.turnUrl('detail', record)}>{name}</a>
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render: status => <Switch disabled={true} checked={status}></Switch>,
                filters: [{
                    text: '可用',
                    value: true
                },
                {
                    text: '不可用',
                    value: false
                }],
                onFilter: (value, record) => record.status === value,
            },
            {
                title: '单价',
                dataIndex: 'price',
                key: 'price',
                sorter: (a, b) => a.price - b.price,
            },
            {
                title: '库存',
                dataIndex: 'inventory',
                key: 'inventory',
                sorter: (a, b) => a.inventory - b.inventory,
            },
            {
                title: '分类',
                dataIndex: 'category',
                key: 'category',
            },
            {
                title: '描述',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: (operation, record) => < div >
                    <Button type="primary" onClick={() => this.turnUrl('edit', record)}>Edit</Button>
                </div >
            },
        ],
        data: []
    }

    turnUrl = (type, record) => {
        let url = type === "add" ? `${this.props.location.pathname}/${type}` : `${this.props.location.pathname}/${type}/${record.id}`
        this.props.history.push(url)
    }

    componentDidMount() {
        this.getList();
    }

    handleSearch = (values) => {
        this.getList(values);
    }

    getList = (params) => {
        http({
            url: '/sales/products/list',
            method: 'get',
            params: {
                ...params
            }
        }).then(res => {
            if (res.data && res.data.status === 'OK') {
                this.setState({
                    data: res.data.list
                })
            } else {
                message.error((res.data && res.data.msg) || '获取列表数据失败')
            }
        }).catch(error => {
            message.error(error.message || '获取列表数据失败')
        })
    }

    render() {
        const { columns, data } = this.state;
        return (
            <div>
                <div style={{ marginBottom: '20px' }}>
                    <Button type="primary" icon="plus" onClick={() => this.turnUrl('add')}>新增</Button>
                </div>
                <SelectForm
                    handleSearch={this.handleSearch}
                    style={{ marginBottom: '20px' }}
                />
                <Table columns={columns} dataSource={data} rowKey="id" />
            </div>
        );
    }
}

export default Form.create({ name: 'selectForm' })(Products);