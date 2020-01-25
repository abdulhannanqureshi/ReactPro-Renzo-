import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import { Link } from 'react-router-dom';
import './style.css';

class ErrorSms extends React.Component{

render() {
  return ( 
  <div>
    <Header />
    <div className="ErrorPage">
        <section className="error-sms">
            <p><img className="img-payment" src="assets/img/image/img_error.png" alt="Error" /></p>
            <div className="text-center">
                <Link to={'/'} className="another-common-btn drk-btn">Go to Home</Link>
            </div>
        </section>    
    </div>
    <Footer />
  </div>
  );
}   
}
export default ErrorSms;
