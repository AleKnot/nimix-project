const express = require('express');
const router = express.Router();
const liveController = require('../controller/liveController')

/* GET login page. */
router.get('/live', liveController.live);


module.exports = router;
