import React, { Component } from "react";
import { Layout, Icon, Divider, Dropdown, Avatar, Menu } from "antd";
import SideBar from '../sidebar/index';
import Bread from '../bread';
import './index.less';

const { Header, Content, Footer, Sider } = Layout;
class PageLayout extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  onBreakpoint = (broken) => {
    this.setState({
      collapsed: broken
    })
  }

  render() {
    const { userInfo = {} } = this.props;
    return (
      <Layout className="pageLayout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          breakpoint="lg"
          onBreakpoint={this.onBreakpoint}
        >
          <SideBar collapsed={this.state.collapsed} />
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div style={{ float: 'right', padding: '0 24px' }}>
              <Dropdown overlay={
                <Menu mode="horizontal">
                  <Menu.Item onClick={this.props.logout}>退出</Menu.Item>
                </Menu>
              }>
                <div>
                  欢迎您～，{userInfo.name}
                  <Avatar style={{ marginLeft: 8 }} src={userInfo.avatar} />
                  <Icon type="down" />
                </div>
              </Dropdown>
            </div>
          </Header>
          <Content style={{ margin: "24px 16px 0", minHeight: 'auto' }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <div style={{ marginBottom: '20px' }}>
                <Bread />
              </div>
              <Divider />
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout >
    );
  }
}

export default PageLayout;
