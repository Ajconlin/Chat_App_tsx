const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('server goin Up!!')
});

module.exports = router;