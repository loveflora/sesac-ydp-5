import React from 'react';
import { useParams } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage() {
  //=== user Params ===
  // const parameter = useParams();
  // console.log(parameter); // {productId: '1'}
  //-- 1) parameter를 "string" 으로 받아 옴 => 숫자로 형변환 필요
  //-- 2) parameter를 "객체" 로 받아옴

  const { productId } = useParams();
  console.log(productId); // '1'
  console.log(productInfos); // [{}, {}, {}, ... ]

  const { name, email, body } = productInfos[Number(productId) - 1];

  return (
    <div>
      <h1>Product Detail Page</h1>
      <ul>
        {/* {productInfos.filter((product, idx) => product.id === idx)} */}
        <li>상품번호 : {productId}</li>
        <li>상품명 : {name}</li>
        <li>판매자 : {email} </li>
        <li>상세설명 :{body} </li>
      </ul>
    </div>
  );
}
