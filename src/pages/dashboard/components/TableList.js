import React from 'react';
import { Row, Col, List, Avatar, Table, Tag } from 'antd';

const TableList = () => {
    const list = [
        {
            title: '这里是列表第一条title',
            description: '这里是列表第一条description',
        },
        {
            title: '这里是列表第二条title',
            description: '这里是列表第二条description',
        },
        {
            title: '这里是列表第三条title',
            description: '这里是列表第三条description',
        },
        {
            title: '这里是列表第4条title',
            description: '这里是列表第4条description',
        },
        {
            title: '这里是列表第五条title',
            description: '这里是列表第5条description',
        },
        {
            title: '这里是列表第六条title',
            description: '这里是列表第6条description',
        },
    ]

    const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
                })}
            </span>
        ),
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="javascript:;">Detail</a>
            </span>
        ),
    }];

    const data = [{
        id: 1,
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    }, {
        id: 2,
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    }, {
        id: 3,
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    }];
    return (
        <div>
            <Row gutter={24}>
                <Col sm={24} md={12}>
                    <Table key="id" columns={columns} dataSource={data} style={{ height: '300px', overflow: 'auto' }} />
                </Col>
                <Col sm={24} md={12}>
                    <List
                        itemLayout="horizontal"
                        dataSource={list}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<a href="#">{item.title}</a>}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                        style={{ height: '300px', overflow: 'auto' }}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default TableList;