const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.send('router');
})

router.post('/registration', (req, res) => {
    console.log(req, req.body);
    res.send(req.body);
})

module.exports = router;