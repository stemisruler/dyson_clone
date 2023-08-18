import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="mainNav" style={{
      position: 'fixed',
      top: '55px',
      width: '100%',
      backgroundColor: 'black',
      zIndex: 90
    }}>
      <div style={{
        width: '1270px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px'
      }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: 'white' }}>제품</Link>
          <Link to="/shop" style={{ color: 'white' }}>카테고리별 제품</Link>
          <Link to="/login" style={{ color: 'white' }}>로그인</Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input type="text" placeholder="검색" style={{ color: 'white', backgroundColor: '#333', border: 'none', padding: '5px', marginTop:'2px'}} />
          <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><i className="fa fa-search"></i></button>
          <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><i className="fa fa-shopping-cart"></i></button>
        </div>
      </div>
    </nav>
  );
};


export default Nav;

