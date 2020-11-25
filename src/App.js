import React from 'react';
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import DichVu from "./pages/DichVu/DichVu";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BackToTop from "./components/BackToTop"

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/sevices">
          <DichVu />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </Router>
  );
}

export default App;
