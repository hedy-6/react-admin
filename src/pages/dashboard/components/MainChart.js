import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { Row, Col, message, } from 'antd';
import { Map, is } from "immutable";
import http from "@/util/request";

class MainChart extends Component {
    state = {
        weather: {},
        option: {
            legend: {},
            tooltip: {},
            dataset: {
                source: []
            },
            xAxis: { type: 'category' },
            yAxis: {},
            series: [
                { type: 'bar' },
                { type: 'bar' },
                { type: 'bar' }
            ]
        }
    }

    componentDidMount() {
        http({
            url: '/dashboard/weather',
            method: 'get',
            params: {
                version: 'v1',
                city: '北京'
            }
        }).then(res => {
            if (res.data && res.data.status === 'OK') {
                this.setState({
                    weather: res.data.data
                })
            } else {
                message.error((res.data && res.data.msg) || '获取天气失败')
            }
        }
        ).catch(error => {
            message.error(error.message || '获取天气失败')
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (!is(Map(prevProps.data), Map(this.props.data))) {
            console.log(this.props.data)
            this.setState({
                option: {
                    ...this.state.option,
                    dataset: {
                        source: this.props.data
                    }
                }
            })
        }
    }


    render() {
        const { option, weather } = this.state;
        const currentDayWeather = weather.data ? weather.data[0] : {};
        return (
            <Row className="dashboard-row" type="flex" gutter={24} align="middle">
                <Col sm={24} md={12} lg={18}>
                    <ReactEcharts option={option} />
                </Col>
                <Col sm={24} md={12} lg={6}>
                    <div className="weather-wrap">
                        <div className="weather-head">
                            <div className="weather-head-left">{weather.city}</div>
                            <div className="weather-head-right">
                                <p>{currentDayWeather.tem}</p>
                                <p>{currentDayWeather.tem1}/{currentDayWeather.tem2}</p>
                            </div>
                        </div>
                        <p>
                            <span>
                                {
                                    currentDayWeather.win && currentDayWeather.win.map((item, index) => <span key={index}>
                                        {item}&nbsp;
                                </span>)
                                }
                            </span>
                            <span>{currentDayWeather.win_speed}</span>
                        </p>
                        <p>空气质量：{currentDayWeather.air} {currentDayWeather.air_level}</p>
                        <p>相对湿度：{currentDayWeather.humidity}</p>
                        <p className="weather-tips">{currentDayWeather.air_tips}</p>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default MainChart;