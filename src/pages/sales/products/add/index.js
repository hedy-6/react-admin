import React, { Component } from 'react';
import ProductForm from '../containers/ProductForm'

class AddProduct extends Component {
    state = {
        fieldsData: {}
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
                <ProductForm type="add" fieldsData={this.state.fieldsData} onChange={this.handleFormChange} onSubmit={this.submitForm} />
            </div>
        );
    }
}

export default AddProduct;