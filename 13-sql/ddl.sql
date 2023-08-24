-- 데이터베이스 : 데이터의 집합
-- DBMS : 데이터베이스를 운영/관리하는 프로그램 (ex. MySQL)
-- 테이블 : 하나 이상의 열과 행으로 구성된 데이터베이스의 최소 단위
-- SQL : RDBMS에서 사용되는 언어 (데이터베이스를 구축/관리/활용하기 위한 언어)
-- 참고 ! SQL은 대소문자를 구별하지 않음, 순서 중요하지 않음
-- 가독성을 위해 키워드는 대문자로 작성 (관례)
-- ex. CREATE DATABASE sesac

-- 실행
-- cmd + enter

-- DDL(Data Definition Language)
-- 데이터베이스, 테이블 정의하는 언어

-- [Database 관련 명령어]
-- 1. Database 생성
create database sesac default character set utf8 collate utf8_general_ci;      -- 한국어로 인코딩
-- ';' 세미콜론 마지막에 항상 붙여야 함

-- 2. Database 목록 조회
show databases;

-- 3. Database 사용 선언 (꼭 기억 !!!)
use sesac;

-- 4. Database 삭제
drop database sesac;

-- [Table 관련 명령어]
-- 1. 테이블 생성
-- >> 제약조건 ("옵션")
-- > NOT NULL : NULL 허용 X
-- > AUTO_INCREMENT (AI) : 자동 숫자 증가, 테이블에 데이터 추가할 때마다 자동으로 숫자 증가
-- > PRIMARY KEY : 기본키 (중복값 허용 X, NULL 허용 X) ===> 하나의 테이블당 하나만 !
-- > DEFAULT 기본값 : 특정 속성의 기본 값을 설정 
-- > UNIQUE : 중복 허용 X, NULL 허용 O ===> 하나의 테이블당 여러개 가능 !

create table product(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);


-- 2. 테이블 목록 확인
-- 현재 사용 중인 데이터베이스의 모든 테이블 조회
show tables;

-- 3. 테이블 구조 확인
-- 좀더 자세하게 알려줌
-- 테이블의 컬럼 정보 (자료형, 타입, NULL 여부, 	KEY, DEFAULT ...)
desc product;

-- 4. 테이블 삭제
-- drop : 테이블 존재 자체를 없앰
drop table product;

-- truncate : 테이블 구조만 남겨놓고 모든 행 삭제
truncate table product;


-- 5. 테이블 정의 수정
-- 이미 테이블을 만들었고, 테이블에 데이터가 추가되었을 때
-- 컬럼 정보가 바뀌어야 하는 경우 사용
-- 많이 사용하진 않음

-- 5-1. 컬럼 추가
alter table product add new_column date;

-- 5-2. 컬럼 수정
alter table product modify new_column int;
alter table product change new_column new_column2 int;   -- 컬럼명 변경

-- 5-3. 컬럼 삭제
alter table product drop new_column2;


-- 실습
create table member(
	id VARCHAR(20) PRIMARY KEY NOT NULL,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT "x"
);

desc member;

create table user (
	id VARCHAR(10) PRIMARY KEY NOT NULL,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender enum('F','M','') default '',
    birthday date not null,
    age int(3) not null default 0
);

desc user;


insert into user values
	('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33),
	('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31),
	('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53),
	('hanjo', 'jk48fn4', '한조', 'M', '1994-01-31', 33),
	('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47),
	('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22),
	('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);
    
    

select * from user;



SELECT * FROM USER;

SELECT * FROM USER ORDER BY BIRTHDAY ASC;
SELECT * FROM USER WHERE GENDER = 'M' ORDER BY NAME DESC;


SELECT ID, NAME FROM USER WHERE BIRTHDAY LIKE '199%';

SELECT * FROM USER WHERE BIRTHDAY LIKE '%-06-%' ORDER BY BIRTHDAY ASC;

SELECT * FROM USER WHERE GENDER = 'M' AND BIRTHDAY LIKE '197%';

SELECT *FROM USER ORDER BY AGE DESC LIMIT 3;

SELECT * FROM USER WHERE AGE BETWEEN 25 AND 50;

UPDATE USER SET PW = '12345678' WHERE ID = 'hong1234';
select * from user where pw = '12345678';

DELETE FROM USER WHERE ID = 'jungkrat';


-- 확인용
        
DROP TABLE MEMBER;
DESC MEMBER;
DESC USER;
