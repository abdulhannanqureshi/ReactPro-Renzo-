import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import { Link } from 'react-router-dom';
import './style.css';

class OrderSuccess extends React.Component{

render() {
  return ( 
  <div>
    <Header />
    <div className="PaymentFailed article-wrapper">
        <section className="">
            <div className="text-center wrapper-title">
                <h2 className="title">thanks for placing order!</h2>
                <p className="title-desc">Post a listing that you want to give on rent.</p>
                <p><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
            </div>
            <div className="payment-sms">
                <p><img className="img-payment" src="assets/img/image/img_orderSuccess.png" alt="Payment" /></p>
                <p className="common-text2">Your order number is 215253.</p>
                <p className="common-text2">We’ve sent a confirmation email with order details</p>
                <p className="common-text2">and a link to track its progress.</p>
                <div className="text-center m-top-30">
                    <Link to={'/'} className="another-common-btn btn-increase-width1">Continue Shopping</Link>
                </div>
            </div>
        </section>    
    </div>
    <Footer />
  </div>
  );
}   
}
export default OrderSuccess;
