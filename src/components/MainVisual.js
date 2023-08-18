import React from 'react'

const MainVisual = () => {
  return (
    <div style={{ position: 'relative', marginTop: '95px' }}>
      <img src="images/mainVisual.jpg" alt="Main Visual" className="mainVisual" />
      <div className='textContainer' style={{
        position: 'absolute',
        left: '18%',
        top: '23%',
        textAlign: 'left'
      }}>
        <h1 style={{ color: 'white', fontSize: '4rem' }}>다이슨의 상품</h1>
        <h2 style={{ color: 'white', fontSize: '2rem' }}>다양한 혜택과 함께 다이슨의 기술력에 전율하세요.</h2>
      </div>
    </div>
  )
}

export default MainVisual
