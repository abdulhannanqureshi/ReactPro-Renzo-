import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import './style.css';
// import { Link } from 'react-router-dom';

class About extends React.Component{

render() {
  return ( 
  <div>
      
    <Header />
    <div className="About">
        <h2 className="title p-top-100 text-center p-bottom-100">About</h2>
    </div>
    <Footer />
  </div>
  );
}
}
export default About;
