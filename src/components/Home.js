import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';

function Home() {
  return (
    <div style={{
      width: '1270px',
      margin: 'auto',
      padding: '10px'
    }}>
      <h1>전체 상품 보는 곳입니다. 환영합니다.</h1>
      <div style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button style={{
            backgroundColor: '#007BFF',
            color: 'white',
            padding: '10px 20px',
            margin: '5px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer'
          }}>로그인 페이지로 이동</button>
        </Link>
        <Link to="/Shop" style={{ textDecoration: 'none' }}>
          <button style={{
            backgroundColor: '#28A745',
            color: 'white',
            padding: '10px 20px',
            margin: '5px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer'
          }}>카테고리별 제품 페이지로 이동</button>
        </Link>
      </div>

      <ProductList />
    </div>
  );
}

export default Home;
