'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//] TODO: 모델 모듈 불러오기
//-- 3개의 모델
// 1) 선수
const Player = require('./Player')(sequelize, Sequelize);
// 2) 프로필
const Profile = require('./Profile')(sequelize, Sequelize);
// 3) 팀
const Team = require('./Team')(sequelize, Sequelize);

//] TODO: 관계 형성
//; 1) Team : Profile = 1 : 1
//-- 한 선수 당 하나의 프로필을 가짐
//) hasOne: 한 모델이 다른 모델을 가리키는 1:1 관계를 설정하는 데 사용
//) belongsTo: 다른 모델이 한 모델을 가리키는 1:1(1:다) 관계를 설정하는 데 사용
Player.hasOne(Profile, {
  foreignKey: 'player_id',
  sourceKey: 'player_id',
  //) 연쇄 삭제/수정
  // 선수 하나 사라지면 --> 프로필도 사라짐
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Profile.belongsTo(Player, { foreignKey: 'player_id', targetKey: 'player_id' });

//; 2) Team : Player = 1 : N
//-- 한 팀에는 여러 선수가 존재
// 한 팀은 여러 선수를 가짐
Team.hasMany(Player, { foreignKey: 'team_id', sourceKey: 'team_id' });
Player.belongsTo(Team, { foreignKey: 'team_id', targetKey: 'team_id' });

//] TODO: 관계 정의한 모델들을 db 객체에 저장
db.Player = Player;
db.Profile = Profile;
db.Team = Team;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
