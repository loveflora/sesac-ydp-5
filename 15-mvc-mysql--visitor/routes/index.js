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

//; GET /visitor/:id
// getVisitor에 's' 안 붙였음 !
router.get('/visitor/:id', controller.getVisitor);
//_ GET /visitor?id=1
// 쿼리인 경우에는 router.get('/visitor', ... )

//; PATCH /visitor
router.patch('/visitor', controller.updateVisitor);

module.exports = router;
