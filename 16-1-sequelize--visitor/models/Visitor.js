//=== Visitor 모델 정의 ===

// * "database 의 table" 과 "sequelize 의 model" 이 대응되어야 함.
// * 모델 = 테이블 구조
// * sequelize를 사용할 때는 모델을 정의해야함.
// * sequelize-cli가 자동으로 만들어준 models/ 폴더 안에 모델 파일을 정의
// visitor라는 테이블을 사용 중이니 이 테이블에 연결할 visitor 모델을 만들어보자!

const Visitor = (Sequelize, DataTypes) => {
  // Sequelize : models/index.js 에서 sequelize
  // DataTypes
  const model = Sequelize.define(
    "visitor",
    {
      // model의 column 정의

      // id int PRIMARY KEY NOT NULL auto_increment,
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // name VARCHAR(10) NOT NULL,
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      // comment mediumtext
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor", // 실제 db 테이블명
      freezeTableName: true, // 테이블명 고정 (모델 이름 테이블로 바꿀 때 복수형으로 바뀜)
      //  timestamps: true, // true : createdAt, updatedAt 컬럼 자동 생성 --> 일대일 매칭 안됨
      timestamps: false,
    },
  );

  return model;
};

module.exports = Visitor;
