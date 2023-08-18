import React, { useState } from 'react';
import ProductList from './ProductList';

const CATEGORIES = ['전체', '악세사리', '공기청정기', '청소기', '헤어용', '조명'];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div style={{
      width: '1270px',
      margin: 'auto',
      padding: '10px'
    }}>
      <h1>카테고리별로 볼 수 있는 Shop 페이지입니다.</h1>
      <div style={{
        marginTop: '20px',
        marginBottom: '10px',
        display: 'flex'
      }}>
        {CATEGORIES.map((category) => (
          <button
            onClick={() => handleCategoryClick(category)}
            style={{
              backgroundColor: selectedCategory === category ? '#f0f0f0' : 'white',
              color: 'black',
              padding: '10px',
              border: '1px solid black',
              marginRight: '10px',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div style={{ borderTop: '1px solid #D1D1D1', marginBottom: '20px', }}></div>
      <ProductList selectedCategory={selectedCategory} />
    </div>
  );
}

export default Shop;
