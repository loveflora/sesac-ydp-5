const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

//] TODO: 라우터 정의
// localhost:PORT/  기본 주소

router.get('/', controller.index);

//; GET /players ---> 전체 선수 조회
router.get('/players', controller.getPlayers);

//; GET /players/:player_id ---> 특정 선수 조회
router.get('/players/:player_id', controller.getPlayer);

//; POST /players ---> 선수 추가
router.post('/players', controller.postPlayer);

//; PATCH /players/:player_id/team ---> 특정 선수의 소속 팀 변경
router.patch('/players/:player_id/team', controller.patchPlayer);

module.exports = router;
