var express = require('express');
var router = express.Router();
var request = require('request');
var data = require('../datas/dashboard');

router.get('/info', function (req, res, next) {
    try {
        res.json({
            status: 'OK',
            data: data
        })
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.get('/weather', function (req, res, next) {
    try {
        request({
            url: 'https://www.tianqiapi.com/api',
            method: 'get',
            headers: {
                'Content-Type': 'text/json',
            },
            params: {
                ...req.query
            }
        }, function (error, response, body) {
            if (error) {
                res.status(500).send({ error: error.message });
            } else {
                res.json({
                    status: 'OK',
                    data: JSON.parse(body)
                })
            }
        })
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
})

module.exports = router;
