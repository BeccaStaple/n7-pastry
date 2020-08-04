import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router} from 'react-router-dom';

import Header from "./PageComponents/Header";
import HomeNavBar from "./PageComponents/NavBar";
import Footer from "./PageComponents/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <HomeNavBar/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
