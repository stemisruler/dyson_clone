import React from 'react';
import product from './ProductData';
import '../css/ProductList.css';

const ProductList = ({ selectedCategory = '전체' }) => {
  const filterProducts = () => {
    if (selectedCategory === '전체' || !selectedCategory) {
      return product;
    }
    return product.filter((item) => item.title.includes(selectedCategory));
  };

  return (
    <div className="product-list-container">
      {filterProducts().map((item, index) => (
        <div key={item._id} className="product-item">
          <img src={`${process.env.PUBLIC_URL}/images/${item.img}`} alt={item.title} />
          <p>{item.title}</p>
          <p>{item.price}원</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
