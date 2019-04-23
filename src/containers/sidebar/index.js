import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { arrayToTree, queryAncestors } from '@/util'
import { Map, List, is } from "immutable";
import SiderLogo from "@/components/sider-logo";
class SideBar extends Component {
    state = {
        selectedKeys: [],
        openKeys: [],
    }

    openChange = (openKeys) => {
        // 展开的时候，把其他菜单收起，本菜单展开
        const { routes } = this.props
        const rootSubmenuKeys = routes.filter(_ => !_.menuParentId).map(_ => String(_.id))
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        ) // 最新的展开菜单
        let newOpenKeys = openKeys
        if (rootSubmenuKeys.indexOf(latestOpenKey) !== -1) {
            newOpenKeys = latestOpenKey ? [latestOpenKey] : []
        }
        this.setState({
            openKeys: newOpenKeys,
        })
    }

    handleSelect = ({ item, key, selectedKeys }) => {
        this.setState({
            selectedKeys
        })
    }

    componentDidUpdate(prevProps) {
        if ((!is(List(prevProps.routes), List(this.props.routes))) || (!is(Map(prevProps.location), Map(this.props.location)))) {
            const { routes, location } = this.props;
            const currentMenu = routes.find(
                item => {
                    return ("/main" + item.path) === location.pathname
                }
            )
            const selectedKeys = currentMenu
                ? queryAncestors(routes, currentMenu, 'menuParentId').map(_ => String(_.id))
                : []
            const openKeys = selectedKeys.filter(item => item.id !== currentMenu.id)
            this.setState({
                selectedKeys,
                openKeys
            })
        }
    }


    render() {
        const { routes, collapsed } = this.props;
        const menuProps = collapsed
            ? {}
            : {
                openKeys: this.state.openKeys,
            }

        let menuRoutes = arrayToTree(routes, 'id', 'menuParentId');
        const renderMenu = (routes) => routes.map(route =>
            route.children ? (<Menu.SubMenu key={route.id} title={
                <Fragment>
                    {route.icon && <Icon type={route.icon} />}
                    <span>{route.title}</span>
                </Fragment>
            }>
                {renderMenu(route.children)}
            </Menu.SubMenu>) : (!route.hideInMenu ? (<Menu.Item key={route.id}>
                <NavLink to={('/main' + route.path) || '#'}>
                    {route.icon && <Icon type={route.icon} />}
                    <span className="nav-text">{route.title}</span>
                </NavLink>
            </Menu.Item>) : null))

        return (
            <>
                <div className="logo">
                    <SiderLogo collapsed={collapsed} />
                </div>
                <Menu
                    inlineCollapsed={collapsed}
                    theme="dark"
                    mode="inline"
                    selectedKeys={this.state.selectedKeys}
                    onSelect={this.handleSelect}
                    onOpenChange={this.openChange}
                    {...menuProps}
                >
                    {renderMenu(menuRoutes)}
                </Menu>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    routes: state.routes
})

const mapDispatchToProps = {

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBar));