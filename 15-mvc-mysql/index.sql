-- database 인코딩 재정의해서 생성
show databases;

-- emoji, 특수문자도 지원
-- https://sys970717.tistory.com/12
create database mvc character set utf8mb4 collate utf8mb4_unicode_ci;

use mvc;

desc visitor;
-- 테이블 구조 확인 

create table visitor(
	id int PRIMARY KEY NOT NULL,
    name VARCHAR(10) NOT NULL,
    comment mediumtext
);

insert into visitor values (1, '김나나', '안녕하세요'), (2, '김하하', '반갑습니다');

select * from visitor;

-- 외부에서 최상위 root 계정으로의 비밀번호 접근을 허용하지 않는다!
-- 즉, 새로운 사용자(user 계정)를 만들고 그 사용자로 접근을 해야 한다.

-- user라는 새로운 계정 (mysql 접속 가능한 계정) 생성
create user 'user'@'%' identified with mysql_native_password by '1234';

-- user 계정에 대해 모든 권한 부여 (=DCL 중에서 grant)
grant all privileges on *.* to 'user'@'%' with grant option;
-- *.* : 모든 데이터의 모든 데이터

-- mysql 캐시 새로고침
flush privileges;

show databases;
select * from mysql.server;

-- 참고) 계정 비번 변경
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234';

set global validate_password.policy=LOW;

SET GLOBAL validate_password.length = 4;