import React from 'react';
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from "./pages/Home/Home"
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BackToTop from "./components/BackToTop"

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </div>
  );
}

export default App;
