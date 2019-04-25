import React from 'react';
import { Row, Col, Card } from 'antd';

const numberCardSpan = {
    xs: 24,
    sm: 12,
    md: 8,
    lg: 6,
}

const NumberRow = (props) => {
    const { data = {} } = props
    return (
        <Row className="dashboard-row" gutter={24}>
            <Col className="dashboard-numberCol" {...numberCardSpan}>
                <Card className="dashboard-numberCol-card">
                    <div className="dashboard-numberCol-card-icon">
                        <img src="./assets/image/dashboard/icon_biaoqian.svg" alt="" />
                    </div>
                    <div className="dashboard-numberCol-card-content">
                        <h2>标签</h2>
                        <h3>{data.a}</h3>
                    </div>
                </Card>
            </Col>
            <Col className="dashboard-numberCol" {...numberCardSpan}>
                <Card className="dashboard-numberCol-card">
                    <div className="dashboard-numberCol-card-icon">
                        <img src="./assets/image/dashboard/icon_diqiuyi.svg" alt="" />
                    </div>
                    <div className="dashboard-numberCol-card-content">
                        <h2>浏览</h2>
                        <h3>{data.b}</h3>
                    </div>
                </Card>
            </Col>
            <Col className="dashboard-numberCol" {...numberCardSpan}>
                <Card className="dashboard-numberCol-card">
                    <div className="dashboard-numberCol-card-icon">
                        <img src="./assets/image/dashboard/icon_jiaoyou.svg" alt="" />
                    </div>
                    <div className="dashboard-numberCol-card-content">
                        <h2>人员</h2>
                        <h3>{data.c}</h3>
                    </div>
                </Card>
            </Col>
            <Col className="dashboard-numberCol" {...numberCardSpan}>
                <Card className="dashboard-numberCol-card">
                    <div className="dashboard-numberCol-card-icon">
                        <img src="./assets/image/dashboard/icon_pinglun.svg" alt="" />
                    </div>
                    <div className="dashboard-numberCol-card-content">
                        <h2>消息</h2>
                        <h3>{data.d}</h3>
                    </div>
                </Card>
            </Col>
        </Row>
    );
}

export default NumberRow;