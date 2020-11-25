import React from 'react';
import Menu from './components/Menu';
import Footer from "./components/Footer";
import Home from "./Home"
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BackToTop from "./BackToTop"

function App() {
  return (
    <div>
      <Menu></Menu>
      <Home></Home>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </div>
  );
}

export default App;
