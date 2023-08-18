import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'black',
      borderBottom: '1px solid #333333',
      zIndex: 100
    }}>
      <div style={{
        width: '1270px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px'
      }}>
        <Link to="/" style={{ color: 'white' }}><img src="./images/logo.png" alt="Logo" style={{width:'74px',height:'30px'}}/></Link> 
        <div style={{ display: 'flex', gap: '20px' }}>    
          <Link to="#" style={{ color: 'white', cursor: 'pointer'}}>제품등록</Link>
          <Link to="#" style={{ color: 'white', cursor: 'pointer' }}>주문조회</Link>
          <Link to="#" style={{ color: 'white', cursor: 'pointer' }}>매장찾기</Link>
          <Link to="#" style={{ color: 'white', cursor: 'pointer' }}>액세서리 및 부품</Link>
          <Link to="#" style={{ color: 'white', cursor: 'pointer' }}>뉴스룸</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
