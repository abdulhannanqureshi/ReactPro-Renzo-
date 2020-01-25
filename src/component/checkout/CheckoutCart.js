import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import { Link } from 'react-router-dom';
import './style.css';

class CheckoutCart extends React.Component{

render() {
  return ( 
  <div>
    <Header />
    <div className="ProductAgreement article-wrapper">
        <section className="product-agree-wrapper">
            <div className="container">
                <div className="row product-step-wrapper">
                    <div className="col-sm-4">
                        <Link to="{'/'}" className="step-btn active">Cart</Link>    
                    </div>
                    <div className="col-sm-4 text-center ">
                        <Link to="{'/'}" className="step-btn">Shipping Information</Link>    
                    </div>
                    <div className="col-sm-4 text-right">
                        <Link to="{'/'}" className="step-btn">Payment</Link>    
                    </div>
                    <div className="bdr-step"></div>
                </div>
            </div>
            <div className="container-fluid container-padding m-bottom-100"> 
                <div className="form-wrapper cartWrapper">
                    <form action="">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="box-shadow-outer">
                                    <div className="custom-row">
                                        <div className="item-img width-300">
                                            <img className="radius-8 img-res1" src="assets/img/image/product_image1.png" alt="Item" />
                                        </div> 
                                        <div className="item-details width-rem-300 p-top-0  align-items-center d-flex">
                                            <div className="width-full">
                                                <ul className="rating-wrapper">
                                                    <li><img src="assets/img/icon/icon_star_full.png" alt="star" /></li>
                                                    <li><img src="assets/img/icon/icon_star_full.png" alt="star" /></li>
                                                    <li><img src="assets/img/icon/icon_star_full.png" alt="star" /></li>
                                                    <li><img src="assets/img/icon/icon_star_half.png" alt="star" /></li>
                                                    <li><img src="assets/img/icon/icon_star_empty.png" alt="star" /></li> 
                                                </ul>
                                                <div className="custom-row align-items-center justify-content-between">
                                                    <h2 className="subTitle text-uppercase ">Play station 2</h2>
                                                    <span className="title-drop f-w-bold">Rs 1000/Week</span>
                                                </div>
                                                <div className="delivery-date m-top-10 m-bottom-0"> 
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_date.png" alt="Calender" /> 
                                                    <span  className="clr-common">12 Dec, 2019 - 19 Dec, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box-shadow-outer p-0 summaryHeight">
                                    <div className="aside-check bdr-btm p-top-20 p-bottom-20">
                                        <h3 className="title-drop m-bottom-5">Summary</h3>
                                        <p className="sp-font-14">The total cost includes delivery fee and taxes</p>
                                    </div>
                                    <div className="aside-check bdr-btm p-top-20 p-bottom-20">
                                        <table className="common-tbl ">
                                            <tbody>
                                                <tr>
                                                    <td>Sub Total</td>
                                                    <td className="text-right">RS 1000</td>
                                                </tr>
                                                <tr>
                                                    <td>Discount</td>
                                                    <td className="text-right">-</td>
                                                </tr>
                                                <tr>
                                                    <td>Delivery Fee</td>
                                                    <td className="f-w-600 text-right">FREE</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="aside-check p-top-20 p-bottom-20">
                                        <table className="common-tbl">
                                            <tbody>
                                                <tr>
                                                    <td className="f-w-600">Total</td>
                                                    <td className="f-w-600 text-right">RS 1000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="aside-check p-top-20 p-bottom-0">
                                    <Link to={'/'} className="full-btn text-center">Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
        </section>     
    </div>
    <Footer />
  </div>
  );
}   
}
export default CheckoutCart;
