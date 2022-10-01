const getValue = require('../controller/evmos');
const express = require('express');
const router = express.Router();

router.route('/').get(getValue);

module.exports = router;