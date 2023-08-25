-- ========= JOIN =========
select * from customer;
select * from orders;
select * from customer, orders;

-- customer, order 테이블 행 개수 구하기
select count(*) from customer;  -- 9
select count(*) from orders;    -- 19
select count(*) from customer, orders;  -- 171 = 9 * 19 (의미없는 조인)
-- => cross 조인

-- where 절을 이용해 조인 조건 추가
-- 테이블명.속성 : 테이블명의 속성

/*. 1) 
SELECT 속성이름, ...
	FROM 테이블A, 테이블B
	WHERE 조인조건 [AND 검색조건];
*/

/*  2)
SELECT 속성이름, ...
	FROM 테이블A INNER JOIN 테이블B ON 조인조건
	[WHERE 검색조건];
*/

-- 1) 
select * from customer, orders
	where customer.custid = orders.custid;
    
-- 2) 
select * from customer inner join orders
	on customer.custid = orders.custid;
-- 1)과 2) 동일

select * from customer, orders
	where customer.custid = orders.custid
    order by customer.custname;	

-- custid가 일치하는 것만 조회 --> Inner Join

-- >> "고객 이름"과 고객이 주문한 "상품명", "상품가격" 조회
-- 고객 이름 : customer
-- 상품명, 상품가격 : orders
-- 1)
select custname, prodname, price from customer, orders
	where customer.custid = orders.custid;
-- 2)
select custname, prodname, price from customer inner join orders
	on customer.custid = orders.custid;
-- 1)과 2) 동일
-- * 테이블 둘다 가진 속성명일 경우, 'customer.' 사용
--   고유한 속성명이라면, 바로 속성명 사용

-- 고객 이름 별로 주한 제품 총 구매액을, 고객 별로 (오름차순)정렬
select custname, sum(price * amount) as 'total_price'
	from customer, orders
    where customer.custid = orders.custid
    group by custname
    order by custname;
    
-- inner join 사용
select custname, sum(price * amount) as 'total_price'
	from customer inner join orders
    on customer.custid = orders.custid
    group by custname
    order by custname;
    
    
    