import React, { Component } from 'react';
import { Form, Input, Switch, Select, InputNumber, Button } from 'antd';

const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
}

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const ProductForm = Form.create({
    name: 'productForm',
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
})(class PrductFormContent extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(err, values)
            if (!err) {
                this.props.onSubmit(values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form
                {...formItemLayout}
                onSubmit={this.handleSubmit}
                style={{ maxWidth: '600px' }}
            >
                <Form.Item label="产品名称">
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: '请输入产品名称',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item label="产品状态">
                    {getFieldDecorator('status', {
                        valuePropName: "checked",
                        initialValue: false,
                        rules: [{
                            required: true, message: '请选择产品状态',
                        }],
                    })(
                        <Switch />
                    )}
                </Form.Item>
                <Form.Item label="产品单价">
                    {getFieldDecorator('price', {
                        rules: [{
                            required: true, message: '请输入产品单价',
                        }],
                    })(
                        <InputNumber min={1} max={10} />,
                    )}
                </Form.Item>
                <Form.Item label="产品库存">
                    {getFieldDecorator('inventory', {
                        rules: [{
                            required: true, message: '请输入产品库存',
                        }],
                    })(
                        <InputNumber min={1} max={10} />,
                    )}
                </Form.Item>
                <Form.Item label="产品分类">
                    {getFieldDecorator('categoryId', {
                        rules: [{
                            required: true, message: '请选择产品分类',
                        }],
                    })(
                        <Select>
                            <Option value={1}>油炸食品</Option>
                            <Option value={2}>健康饮品</Option>
                            <Option value={3}>糖果甜食</Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="备注信息">
                    {getFieldDecorator('description')(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        )
    }
})

export default ProductForm;