import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import { Link } from 'react-router-dom';
import './style.css';

class PaymentFailed extends React.Component{

render() {
  return ( 
  <div>
    <Header />
    <div className="PaymentFailed article-wrapper">
        <section className="">
            <div className="text-center wrapper-title">
                <h2 className="title">sorry! payment failed</h2>
                <p className="title-desc">Post a listing that you want to give on rent.</p>
                <p><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
            </div>
            <div className="payment-sms">
                <p><img className="img-payment" src="assets/img/image/img_payment.png" alt="Payment" /></p>
                <p className="common-text2">Payment failed. </p>
                <p className="common-text2">Please try again later.</p>
                <div className="text-center m-top-30">
                    <Link to={'/'} className="another-common-btn btn-increase-width1">TRY AGAIN</Link>
                </div>
            </div>
        </section>    
    </div>
    <Footer />
  </div>
  );
}   
}
export default PaymentFailed;
