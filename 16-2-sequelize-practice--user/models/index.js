"use strict";

//-- sequelize 모듈 호출해서 Sequelize 변수에 저장
const Sequelize = require("sequelize");

//-- config.json 파일 불러와서 development 환경의 db에 저장
// config : db 접근 가능한 설정 값 저장
const config = require(__dirname + "/../config/config.json")["development"];
console.log(">>>>", config);
// const config = require(__dirname + '/../config/config.json')[env];

//-- 빈 db 객체 생성
const db = {};

//-- Sequelize 객체 생성해서 sequelize 변수에 저장
const sequelize = new Sequelize(
  config.database, // codingon
  config.username, // user
  config.password, // 1234
  config, // { }
);

//-- db = { sequelize: sequelize, Sequelize: Sequelize}
// sequelize : db 정보
// Sequelize : 모듈
db.sequelize = sequelize;
db.Sequelize = Sequelize;

//; models/ 폴더에 정의되는 model(테이블)은 db 객체에 저장
// db = { sequelize, Sequelize }
// db = { sequelize, Sequelize, Visitor: 모델(테이블)}
db.User = require("./User")(sequelize, Sequelize);
// (Sequelize, DataTypes)
// => return model;

//-- db 객체를 내보냄 (모듈화 내보냄. 다른 곳에서 db 객체 사용)
module.exports = db;
