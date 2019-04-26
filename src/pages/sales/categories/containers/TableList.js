import React, { Component } from 'react';
import { Table, Form, Row, Col, Input, Select, Switch, Button, message } from 'antd';
import http from '@/util/request'

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

const { Option } = Select

const SelectForm = Form.create({
    name: 'SelectForm'
})(
    class SelectFormContent extends Component {
        handleReset = () => {
            this.props.form.resetFields();
        }
        handleSearch = (e) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    this.props.handleSearch(values);
                }
            });
        }
        render() {
            const { getFieldDecorator } = this.props.form;
            return (
                <Form
                    className="products-search-form"
                    onSubmit={e => this.handleSearch(e)}
                    {...SelectFormCol}
                >
                    <Row gutter={24}>
                        <Col span={8}>
                            <Form.Item label="分类名称">
                                {getFieldDecorator(`name`)(
                                    <Input placeholder="请输入分类名称" />
                                )}
                            </Form.Item>
                        </Col>
                        <Col span={8} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">查询</Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                                重置
                        </Button>
                        </Col>
                    </Row>
                </Form>
            )
        }
    }
)

class TableList extends Component {
    state = {
        columns: [
            {
                title: '分类名称',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '备注',
                dataIndex: 'description',
                key: 'description'
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: (operation, record) => < div >
                    <Button type="primary" onClick={() => this.edit(record)}>Edit</Button>
                </div >
            },
        ],
        list: []
    }

    componentDidMount() {
        this.getList();
    }

    edit = (record) => {
        this.props.handelEditModel(record)
    }

    handleSearch = (values) => {
        this.getList(values);
    }

    getList = (params = {}) => {
        http({
            url: '/sales/categories/list',
            method: 'get',
            params: {
                ...params
            }
        }).then(res => {
            if (res.data && res.data.status === 'OK') {
                this.setState({
                    list: res.data.list
                })
            } else {
                message.error((res.data && res.data.msg) || '获取列表失败')
            }
        }).catch(error => {
            message.error(error.message || '获取列表失败')
        })
    }

    render() {
        return (
            <div>
                <SelectForm handleSearch={this.handleSearch} style={{ marginBottom: '20px' }} />
                <Table columns={this.state.columns} dataSource={this.state.list} rowKey="id" />
            </div>
        );
    }
}

export default TableList;