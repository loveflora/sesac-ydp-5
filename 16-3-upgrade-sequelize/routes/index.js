const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

//] TODO: 라우터 정의
// localhost:PORT/  기본 주소

router.get('/', controller.index);

module.exports = router;
