const products = [
    {
        id: 1,
        name: '德芙巧克力',
        status: false,
        price: 6,
        inventory: 24,
        categoryId: 3,
        category: '糖果甜食',
        description: '德芙巧克力，纵享丝滑～'
    },
    {
        id: 2,
        name: '小浣熊',
        status: true,
        price: 2,
        inventory: 48,
        category: '油炸食品',
        categoryId: 1,
        description: '丢掉粉包，环保美味～'
    },
    {
        id: 3,
        name: '蒙牛牛奶',
        status: true,
        price: 2,
        inventory: 10,
        category: '健康饮品',
        categoryId: 2,
        description: '补充营养'
    },
]

const categories = [
    {
        id: 1,
        name: '油炸食品',
        description: '方便面，薯片等'
    },
    {
        id: 2,
        name: '健康饮品',
        description: '牛奶，果汁等'

    },
    {
        id: 3,
        name: '糖果甜食',
        description: '糖果，巧克力'
    },
]

module.exports = { products, categories };