const routes = [
    {
        id: 1,
        icon: "dashboard",
        title: '仪表盘',
        path: '/dashboard',
    },
    {
        id: 2,
        icon: "bars",
        title: '业务管理',
        name: '',
        path: '/sales',
        redirect: '/sales/products'
    },
    {
        id: 21,
        menuParentId: 2,
        breadcrumbParentId: 2,
        icon: "appstore",
        title: '产品管理',
        name: '',
        path: '/sales/products',
    },
    {
        id: 211,
        menuParentId: 2,
        breadcrumbParentId: 21,
        hideInMenu: true,
        icon: "plus",
        title: '新建产品',
        name: '',
        path: '/sales/products/add',
    },
    {
        id: 212,
        menuParentId: 2,
        breadcrumbParentId: 21,
        hideInMenu: true,
        icon: "info",
        title: '产品详情',
        name: '',
        path: '/sales/products/detail/:id',
    },
    {
        id: 213,
        menuParentId: 2,
        breadcrumbParentId: 21,
        hideInMenu: true,
        icon: "edit",
        title: '修改产品',
        name: '',
        path: '/sales/products/edit/:id',
    },
    {
        id: 22,
        menuParentId: 2,
        breadcrumbParentId: 2,
        icon: "profile",
        title: '产品分类管理',
        name: '',
        path: '/sales/categories',
    },
    {
        id: 3,
        icon: "team",
        title: '人力管理',
        name: '',
        path: '/hr',
        redirect: '/hr/users'
    },
    {
        id: 31,
        menuParentId: 3,
        breadcrumbParentId: 3,
        icon: "",
        title: '人员管理',
        name: '',
        path: '/hr/users',
    },
]

module.exports = routes;