import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage() {
  //=== useParams ===
  // const parameter = useParams();
  // console.log(parameter); // {productId: '1'}
  //-- 1) parameter를 "string" 으로 받아 옴 => 숫자로 형변환 필요
  //-- 2) parameter를 "객체" 로 받아옴

  const { productId } = useParams();
  console.log(productId); // '1'
  console.log(productInfos); // [{}, {}, {}, ... ]

  //=== useNavigate ===
  const navigate = useNavigate();

  const targetProduct = productInfos[Number(productId) - 1]; // string - number 하면 숫자로 형변환되긴 함

  const { id, name, email, body } = targetProduct;

  return (
    <div>
      <h1>Product Detail Page</h1>

      {/* useNavigate 사용하기 */}
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로 가기 (목록 보기)
      </button>

      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </button>

      {/* 상품 상세페이지 */}
      <ul>
        <li>상품번호 : {id}</li>
        <li>상품명 : {name}</li>
        <li>판매자 : {email} </li>
        <li>상세설명 :{body} </li>
      </ul>
    </div>
  );
}
