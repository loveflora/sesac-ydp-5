//; TODO: User 모델 정의
const User = (Sequelize, DataTypes) => {
  const model = Sequelize.define(
    'user',
    {
      // model의 column 정의

      // id int not null primary key auto_increment
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      // pw VARCHAR(255) NOT NULL
      pw: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      // name VARCHAR(15) NOT NULL,
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },

      // userid VARCHAR(15) NOT NULL,
      userid: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
    },
    {
      tableName: 'user', // 실제 db 테이블명
      freezeTableName: true, // 테이블명 고정 (모델 이름 테이블로 바꿀 때 복수형으로 바뀜)
      //  timestamps: true, // true : createdAt, updatedAt 컬럼 자동 생성 --> 일대일 매칭 안됨
      timestamps: false,
    }
  );

  return model;
};

module.exports = User;
