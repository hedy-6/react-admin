import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { Breadcrumb, Icon } from 'antd'
import { queryAncestors, pathMatchRegexp } from '@/util'

class BreadCrumb extends PureComponent {
    generateBreadcrumbs = paths => {
        return paths.map((item, key) => {
            const content = (
                <>
                    {item.icon ? (
                        <Icon type={item.icon} style={{ marginRight: 4 }} />
                    ) : null}
                    {item.title}
                </>
            )

            return (
                <Breadcrumb.Item key={key}>
                    {paths.length - 1 !== key ? (
                        <Link to={('/main' + (item.redirect ? item.redirect : item.path))}>{content}</Link>
                    ) : (
                            content
                        )}
                </Breadcrumb.Item>
            )
        })
    }
    render() {
        const { routes, location } = this.props
        // Find a route that matches the pathname.
        const currentRoute = routes.find(
            _ => _.path && pathMatchRegexp("/main" + _.path, location.pathname)
        )

        // Find the breadcrumb navigation of the current route match and all its ancestors.
        const paths = currentRoute
            ? queryAncestors(routes, currentRoute, 'breadcrumbParentId').reverse()
            : [
                routes[0],
                {
                    id: 404,
                    name: `Not Found`,
                },
            ]

        return (
            <Breadcrumb>
                {this.generateBreadcrumbs(paths)}
            </Breadcrumb>
        )
    }
}

const mapStateToProps = (state) => ({
    routes: state.routes
})

export default withRouter(connect(mapStateToProps)(BreadCrumb))
