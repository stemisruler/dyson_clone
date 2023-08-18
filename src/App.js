import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './css/reset.css';
import MainVisual from './components/MainVisual';
import Header from './components/Header';
import Nav from './components/Nav';
import Shop from './components/Shop'; 
import Home from './components/Home'; 
import Login from './components/Login'; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <MainVisual/>
      <Header/>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
