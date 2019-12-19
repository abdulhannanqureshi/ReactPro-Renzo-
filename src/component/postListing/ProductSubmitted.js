import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import { Link } from 'react-router-dom';
import './style.css';

class ProductSubmitted extends React.Component{

render() {
  return ( 
  <div>
    <Header />
    <div className="ProductAgreement article-wrapper">
        <section className="product-agree-wrapper">
            <div className="custome-container container">
                <div className="text-center m-bottom-60">
                    <h2 className="title font-size-32">yay! your product has been submitted</h2>
                    <p className="title-desc">Here’s what happens next.</p>
                    <p><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
                </div>
                <div className="row information-review dashed-img-1">
                    <div className="col-md-3 succes-img1">
                        <img src="assets/img/image/img_success1.png" alt="Information Review" />
                    </div>
                    <div className="col-md-9">
                        <div className="m-top-40">
                            <h3 className="title-drop m-bottom-10">information review</h3>
                            <p className="small-common-text">Team renzo will review your details and check if this meets our guidelines. This process takes 3 working days.</p>
                        </div>
                    </div>
                </div>
                <div className="row information-review dashed-img-2">
                    <div className="col-md-9 sp-order">
                        <div className="m-top-40">
                            <h3 className="title-drop m-bottom-10">ITEM GETS APPROVED</h3>
                            <p className="small-common-text">Your item is now eligible to go on Orders You will be able to access the items and pricing frorn My Items Tab</p>
                        </div>
                    </div>
                    <div className="col-md-3 succes-img1">
                        <img src="assets/img/image/img_success2.png" alt="ITEM GETS APPROVED" />
                    </div>
                </div>
                <div className="row information-review  dashed-img-3">
                    <div className="col-md-3 succes-img1">
                        <img src="assets/img/image/img_success3.png" alt="RECEIVE ORDERS" />
                    </div>
                    <div className="col-md-9">
                        <div className="m-top-40">
                            <h3 className="title-drop m-bottom-10">RECEIVE ORDERS</h3>
                            <p className="small-common-text">You will be notified via SMS & email each time your item is booked. Renzo will pickup your items a day prior to the order date.</p>
                        </div>
                    </div>
                </div>
                <div className="row information-review">
                    <div className="col-md-9 sp-order">
                        <div className="m-top-40">
                            <h3 className="title-drop m-bottom-10">Get paid</h3>
                            <p className="small-common-text">Your payments will be credited to your registered bank account on a monthly basis. You can track your orders via your personalised orders dashboard on the Renzo Website.</p>
                        </div>
                    </div>
                    <div className="col-md-3 succes-img1">
                        <img src="assets/img/image/img_success4.png" alt="Get paid" />
                    </div>
                </div>
            </div> 
        </section>     
    </div>
    <Footer />
  </div>
  );
}   
}
export default ProductSubmitted;
