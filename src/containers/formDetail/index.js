import React, { Component } from 'react';
import { Row, Col } from 'antd'
import './formDetail.less'

class FormDetail extends Component {

    render() {
        const { columns, data } = this.props;
        return (
            <div style={{ maxWidth: '600px' }}>
                {
                    columns.map(item =>
                        <Row key={item.key} className="formDetail-row">
                            <Col xs={24} sm={8} className="formDetail-row-label">
                                <label>{item.title}：</label>
                            </Col>
                            <Col xs={24} sm={16} className="formDetail-row-content">
                                {
                                    item.render ? item.render(data[item.dataIndex], item) : <label>{data[item.dataIndex]}</label>
                                }
                            </Col>
                        </Row>
                    )
                }
            </div>
        );
    }
}

export default FormDetail;