import React from 'react';
import { Link } from 'react-router-dom';

//) 변수 가져오기
// import { productInfos } from './ProductList';

export default function ProductItem({ product }) {
  console.log(product);
  // console.log(productInfos);

  return (
    <div>
      <Link to={`/products/${product.id}`}>
        <ul>
          <li>상품명: {product.name}</li>
          <br />
          <li>상세설명: {product.body}</li>
          <hr />
        </ul>
      </Link>
    </div>
  );
}
