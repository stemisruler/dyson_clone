import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '20px',
      fontSize: '12px',
      lineHeight: '1.5',
      marginTop:'1rem'
    }}>
      <div style={{
        width: '1200px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <p>© Dyson 2023</p>
        <p>다이슨코리아 유한회사 대표이사: 한지훈 서울특별시 강남구 테헤란로 142, 아크플레이스 17층 06236</p>
        <p>사업자등록번호 811-81-00675 통신판매번호 2017-서울강남-04029 사업자정보확인</p>
        <p>고객센터: 080-300-4253(수신자 부담) /1588-4253 (운영시간: 월-금 오전 9시-오후 6시) 이메일: help@kr.dyson.com</p>
        <p>호스팅 제공자 아마존웹서비스</p>
      </div>
    </footer>
  );
};

export default Footer;
