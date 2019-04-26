import React, { Component } from 'react';
import { Modal, Form, Row, Col, Input, Select, Switch, Button, message } from 'antd';
import TableList from './containers/TableList'

const ModelForm = Form.create({
    name: 'modelForm',
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        let fieldsData = props.fieldsData;
        let obj = {};
        Object.keys(fieldsData).forEach(key => {
            obj[key] = Form.createFormField({
                ...fieldsData[key],
                value: fieldsData[key].value
            })
        })
        return obj
    },
    onValuesChange(_, values) {
        // console.log(values);
    },
})(
    class ModelFormContent extends Component {
        handleCreate = (e) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                console.log(err, values)
                if (!err) {
                    this.props.onCreate(values);
                    this.props.form.resetFields();
                }
            });
        }
        render() {
            const { visible, form, onCancel } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="编辑分类"
                    okText="Create"
                    onCancel={onCancel}
                    onOk={this.handleCreate}
                >
                    <Form>
                        <Form.Item label="分类名称">
                            {getFieldDecorator('name', {
                                rules: [{ required: true, message: '请输入分类名称!' }],
                            })(
                                <Input />
                            )}
                        </Form.Item>
                        <Form.Item label="备注信息">
                            {getFieldDecorator('description')(
                                <Input />
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            )
        }
    }
)

class Categories extends Component {
    state = {
        visible: false,
        modelType: '',
        fieldsData: {}
    };

    showModal = (type, data) => {
        if (type === "edit" && data) {
            let newData = {};
            Object.keys(data).forEach(key => newData[key] = { value: data[key] })
            this.setState({
                modelType: "edit",
                fieldsData: {
                    ...newData
                },
                visible: true,
            })
        } else {
            this.setState({
                modelType: type,
                visible: true,
            })
        }
    }

    handleFormChange = (changedFields) => {
        this.setState(({ fieldsData }) => ({
            fieldsData: { ...fieldsData, ...changedFields },
        }));
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        })
    }

    handleCreate = (values) => {
        console.log(values);
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div>
                <div style={{ marginBottom: '20px' }}>
                    <Button type="primary" icon="plus" onClick={() => this.showModal('add')}>新增</Button>
                </div>
                <TableList handelEditModel={(record) => this.showModal('edit', record)} />
                <ModelForm
                    visible={this.state.visible}
                    type={this.state.modelType}
                    fieldsData={this.state.fieldsData}
                    onChange={this.handleFormChange}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                >
                </ModelForm>
            </div>
        );
    }
}

export default Categories;