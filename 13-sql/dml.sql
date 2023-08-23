create table customer(
	custid CHAR(10) PRIMARY KEY NOT NULL,
    custname VARCHAR(10) NOT NULL,
    addr CHAR(10) NOT NULL,
    phone CHAR(11),
    birth DATE
);

desc customer;


-- ==== 외래키(FK) 제약조건 ======
-- 두 테이블 사이의 관계를 맺음
-- 다른 테이블의 기본키를 외래키로 연결
-- 기준 테이블: 기본키를 갖는 테이블 (customer)
-- 참조 테이블: 외래키가 있는 테이블 (orders)
-- 형식: foreign key (열_이름) references 기준_테이블(열_이름)
--                   create 테이블의 열 이름        customer 테이블의 열 이름

-- create table에서 custid2가 변경되면 
-- foreign key (custid2) references customer(custid)

-- on update cascade : 기준 테이블의 데이터가 변경되면, 참조 테이블의 데이터도 변경
-- on delete cascade : 기준 테이블의 데이터가 삭제되면, 참조 테이블의 데이터도 삭제 
create table orders (
	orderid int primary key auto_increment,  -- FK 외래키
    custid char(10) not null,
    prodname char(6) not null,
    price int not null,
    amount smallint not null,
    foreign key (custid) references customer(custid) on update cascade on delete cascade  
    );
    
desc orders;

-- [ 테이블 삭제 순서 ]
-- customer table, orders table이 customer.custid 를 기준으로 "관계" 맺음
-- customer table 존재하는 회원만 orders 테이블에 데이터를 추가할 수 있음
-- 만약에 orders 테이블이 있는데, customer 테이블을 삭제 (drop) 하면?
-- orders 테이블은 어떤 고객의 생일 정보를 알고 싶어도 customer 테이블 자체가 날라갔기 때문에 알 수 없음. 
-- pk-fk 연결된 테이블은 외래키가 설정된 테이블 !! (참조 테이블) 먼저 삭제 !!
-- (1) orders 테이블 삭제 -> (2) customer 테이블 삭제

-- apple 아이디를 갖는 고객을 customer 테이블에서 삭제한 후,
-- apple 주문 정보를 order 테이블에 추가하려고 할 때 에러 발생 => 왜?!
-- 기준 테이블에 custid = 'apple'인 회원은 존재하지 않음!
-- orders 테이블에서 apple 회원의 데이터는 추가될 수 없음!

-- ======== INSERT 추가 =========
insert into customer (custid, custname, addr, phone, birth)
	values ('lucky', '강해원', '미국 뉴욕', '01022223333', '2002-03-05');

insert into customer (addr, phone, birth, custid, custname) 
	values ('대한민국 부산', '01098765432', '2007-04-28', 'wow', '이지은');

-- 속성을 지정하지 않는다면, 컬럼이 지정된 순서대로 입력
insert into customer values ('happy', '최시은', '일본 오키나와', '01033331234', '1970-10-31');

-- 여러 튜플을 동시 추가
insert into customer values 
	('asdf', '강세희', '대한민국 부산', '01033331235', '2004-11-11'),
	('sdfg', '윤지성', '일본 도쿄', '01033331236', '1995-02-15'),
    ('dfgh', '이재은', '미국 뉴욕', '01033331237', '2004-06-07');
    
    
insert into customer values ('kiwi', '김키위', '대한민국 서울', '01012341234', '1990-03-17');
insert into customer values ('apple', '이사과', '대한민국 포항', '01012344321', '1992-06-17');
insert into orders values (NULL, 'kiwi', '프링글스', '3000', 5);
insert into orders values (NULL, 'apple', '프링글스', '3000', 1);
insert into orders values (NULL, 'kiwi', '홈런볼', '2000', 3);

-- AI 라서 NULL이라도 숫자 자동으로 들어감


-- ============= UPDATE 수정 ================
-- 이미 만들어진 테이블 안에서 수정 (alter과 구별할 것)
-- custid가 happy인 고객의 주소를 / 대한민국 서울로 변경
update customer set addr = '대한민국 서울' where custid = 'happy';




-- ============= DELETE 삭제 ================
-- custid가 happy인 사람의 정보를 테이블에서 삭제
delete from customer where custid = 'happy';

-- 고객 테이블에 'apple' 고객을 삭제했을 때,
-- 주문 테이블에서 'apple' 고객의 주문정보가 함께 삭제되는지 ? (on delete cascade)
delete from customer where custid = 'apple';
-- cascade 때문에 함께 삭제



-- ============= !!! SELECT 조회 !!! =============
select * from customer;
select * from orders;

-- 외래키가 존재하는 테이블을 삭제할때는 1701 에러메시지가 발생한다.
-- 어떻게든 내용을 지워야 할 경우에는 아래와 같이 외래키(Foreign key) 체크를 하지 않는다는 설정을 해주고 다시 원복을 해주는 방식으로 지울 수 있다.
set FOREIGN_KEY_CHECKS = 0;
set FOREIGN_KEY_CHECKS = 1;

truncate table customer;
truncate table orders;


INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('kiwi', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

-- 모든 고객의 아이디(custid)를 검색
select custid from customer;

-- 모든 고객의 아이디, 생년월일을 검색
select custid, birth from customer;

-- 모든 고객의 생년월일, 아이디를 검색 ==> 순서가 있음 !
select birth, custid from customer;

-- 동일 1 : 모든 고객의 아이디, 이름, 주소, 전화번호, 생년월일 검색
select custid, custname, addr, phone, birth from customer;
-- 동일 2 : * 와일드 카드 사용
select * from customer;

-- 고객 테이블에 있는 모든 주소 검색
select addr from customer;

-- 고객 테이블에 있는 모든 주소를 검색하되, 중복 제거
-- DISTINCT : 중복 제거
select distinct addr from customer;



-- ------------- WHERE 조건 ------------------
-- 1) 비교: =, <>, <, <=, >, >=
-- 2) 범위: BETWEEN
-- 3) 집합: IN, NOT IN
-- 4) 패턴: LIKE
-- 5) NULL: IS NULL, IS NOT NULL
-- 6) 복합조건: AND, OR, NOT

-- 1) 비교
-- 고객 이름이 강해린인 고객을 검색
select birth from customer where custname = '강해린';

-- 고객 이름이 강해린이 아닌 고객들의 생일 검색
select birth from customer where custname != '강해린';

-- 사전순으로 박민지보다 뒤에 위치한 고객의 모든 정보 검색
select * from customer where custname > '박민지';


-- 2) 범위
-- 1995년이상 2000년 이하 출생 고객 검색
-- (1) between 사용
select * from customer where birth between '1995-01-01' and '2000-12-31';
-- (2) and 사용
select * from customer where birth >= '1995-01-01' and birth <= '2000-12-31';



-- 3) 집합
-- 주소가 서울 혹은 런던인 고객 검색
select * from customer where addr in ('대한민국 서울', '영국 런던');
select * from customer where addr = '대한민국 서울' or addr = '영국 런던';

-- 주소가 서울 혹은 런던이 아닌 고객 검색
select * from customer where addr not in ('대한민국 서울', '영국 런던');



-- 4) 패턴
-- 주소가 '미국 로스앤젤레스'인 고객을 검색
select * from customer where addr like '미국 로스앤젤레스';

-- 주소에 '미국'이 포함되어 있는 고객 검색
-- %: 0개 이상 문자열
select * from customer where addr like '미국%';

-- 고객 이름 두번째 글자가 '지'인 고객 검색
-- _ : 임의의 하나의 문자
select * from customer where custname like '_지%';
-- 참고
select * from customer where custname like '_지';  -- 검색 결과 0 
-- 2글자 이면서 '지'로 끝나는 custname이 없기 때문

-- 고객 이름 세번째 글자가 '수'인 고객
select * from customer where custname like '__수%';
-- 참고
select * from customer where custname like '%수';  
-- 이름이 몇자든 마지막 글자가 '수'이면 다 선택됨


-- 6) 복합조건 (AND, OR, NOT)
-- 주소지가 대한민국이고, 2000년생 이후 출생 고객 검색
select * from customer where addr like '대한민국%' and birth >= '2000-01-01';

-- 주소지가 미국이거나 영국인 고객 검색
select * from customer where addr like '미국%' or addr like '영국%';

-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색
select * from customer where phone NOT LIKE '%_4';
-- 정확하게 하려면 _ 넣어야 함
-- ? 이해 안되었음..


-- enum 참고
