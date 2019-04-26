var express = require('express');
var router = express.Router();
var products = require('../datas/sales');

router.get('/products/list', function (req, res, next) {
    try {
        res.json({
            status: 'OK',
            list: products
        })
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.get('/product/detail', function (req, res, next) {
    let id = req.query.id;
    let data = products.find(item => String(item.id) === String(id));
    try {
        res.json({
            status: 'OK',
            data: data
        })
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = router;
