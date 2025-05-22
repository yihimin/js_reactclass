import { useParams } from 'react-router-dom';

const productData = {
  books: {
    101: { name: '리액트 입문', price: 18000 },
    102: { name: '자바스크립트 입문', price: 22000 },
  },
  electronics: {
    201: { name: '마우스', price: 25000 },
    202: { name: '키보드', price: 55000 },
  },
};

export default function Product() {
  const { category, id } = useParams();
  const product = productData[category]?.[id];

  return (
    <div>
      <h2>상품 상세 정보</h2>
      <p>카테고리 : {category}</p>
      <p>상품 ID : {id}</p>

      {product ? (
        <div>
          <p>상품 이름 : {product.name}</p>
          <p>상품 가격 : {product.price}</p>
        </div>
      ) : (
        <p style={{ color: 'red' }}>해당 상품을 찾을 수 없습니다.</p>
      )}
    </div>
  );
}
