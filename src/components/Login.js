import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{
      width: '400px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      marginTop:'2rem',
      marginBottom:'2rem'
    }}>
      <h1>로그인 하십시오</h1>
      <form onSubmit={handleSubmit} autocomplete="off">
        <div style={{ margin: '10px 0' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Username:</label>
          <input type="text" name="username" style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }} />
        </div>
        <div style={{ margin: '10px 0' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
          <input type="password" name="password" style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }} />
        </div>
        <input type="submit" value="로그인" style={{
          backgroundColor: '#007BFF',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer'
        }} />
      </form>
      <Link to="/Shop" style={{ textDecoration: 'none' }}>
          <button style={{
            backgroundColor: '#28A745',
            color: 'white',
            padding: '10px 20px',
            marginTop :'5px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer'
          }}>카테고리별 제품 페이지로 이동</button>
        </Link>
    </div>
  );
}

export default Login;
