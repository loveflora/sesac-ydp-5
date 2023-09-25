-- 데이터베이스 목록 확인
SHOW databases;


create database codingon default character set utf8 collate utf8_general_ci;      -- 한국어로 인코딩


-- codingon 데이터베이스 선택
USE codingon;

-- codingon 데이터베이스의 테이블 목록 확인
SHOW tables;

-- 이미 user 테이블이 있다면 기존 테이블 지움
DROP TABLE IF EXISTS user;

-- TODO: user 데이터베이스 생성
CREATE TABLE user (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	userid VARCHAR(20) NOT NULL,
    name VARCHAR(10) NOT NULL,
    pw VARCHAR(20) NOT NULL
);


-- user 데이블 데이터 추가
INSERT INTO user (userid, name, pw) VALUES ('sean', 'sean', '1234');
INSERT INTO user (userid, name, pw) VALUES ('test', 'test', '1234');
INSERT INTO user (userid, name, pw) VALUES ('apple', 'apple', '1234');
INSERT INTO user (userid, name, pw) VALUES ('hello', 'hello', '1234');

-- user 테이블 구조 보기
DESC user; 

-- user 테이블 데이터 조회
SELECT * FROM user;

-- user라는 새로운 계정 (mysql 접속 가능한 계정) 생성
create user 'user'@'%' identified with mysql_native_password by '1234';

grant all privileges on *.* to 'user'@'%' with grant option;
-- *.* : 모든 데이터의 모든 데이터

-- mysql 캐시 새로고침
flush privileges;

select * from mysql.server;

-- 참고) 계정 비번 변경
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

set global validate_password.policy=LOW;

SET GLOBAL validate_password.length = 4;

-- 계정 삭제
delete from mysql.user where User ='user';
delete from mysql.db where User ='user';
flush privileges;