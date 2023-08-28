const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

// 기본 주소
// localhost:PORT

//; GET /
// localhost:PORT/
router.get('/', controller.main);

//; GET /visitor
// localhost:PORT/visitor
router.get('/visitors', controller.getVisitors);

//; POST /visitor
// 프론트에서 요청이 왔을 때
router.post('/visitor', controller.postVisitor);

//; DELETE /visitor
router.delete('/visitor', controller.deleteVisitor);

module.exports = router;
