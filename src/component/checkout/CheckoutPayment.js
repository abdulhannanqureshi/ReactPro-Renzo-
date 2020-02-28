import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import { Link } from 'react-router-dom';
import './style.css';

class CheckoutPayment extends React.Component{
    constructor(props){
       super(props);
       this.state = {
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth()
       }  
    }
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
                        <Link to="{'/'}" className="step-btn active">Shipping Information</Link>    
                    </div>
                    <div className="col-sm-4 text-right">
                        <Link to="{'/'}" className="step-btn active">Payment</Link>    
                    </div>
                    <div className="bdr-step"></div>
                </div>
            </div>
            <div className="container m-bottom-100"> 
                <div className="form-wrapper">
                    <form action="">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="box-shadow-outer">
                                    <div className="row height-full">
                                        <div className="col-md-6">
                                            <div className="aside-tab-wrapper another-aside-tab">
                                                <ul>
                                                    <li><Link to={'/'} className="active" >Credit Card/Debit Card</Link></li>
                                                    <li><Link to={'/'}>Net Banking</Link></li>
                                                    <li><Link to={'/'}>Cash on Delivery</Link></li>
                                                    <li><Link to={'/'}>Wallets</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h2 className="title-drop m-bottom-30">Credit Card/Debit Card</h2>
                                            <div className="form-group">
                                                <label>Card Number</label>
                                                <input type="text" className="form-control" name="card-number" id="card-number" placeholder="Enter Card Number" />
                                            </div> 
                                            <div className="form-group">
                                                <label>Name On Card</label>
                                                <input type="text" className="form-control" name="card-name" id="card-name" placeholder="Enter Name On Card" />
                                            </div>
                                            <div className="row"> 
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label>Expiry</label>
                                                        <input type="month" className="form-control" name="expiry" id="expiry" defaultValue={this.state.currentYear+"-"+ this.state.currentMonth + 1} /> 
                                                    </div>        
                                                </div>    
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label>CVV</label>
                                                        <input type="number" className="form-control" name="cvv" id="cvv" placeholder="Last 3 Digits printed at the Back of Card" /> 
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box-shadow-outer p-0">
                                    <div className="aside-check bdr-btm">
                                        <div className="custom-row">
                                            <div className="item-img width-120">
                                                <img className="radius-8 img-res1" src="assets/img/image/product_image1.png" alt="Item" />
                                            </div> 
                                            <div className="item-details width-rem-120 p-top-0  align-items-center d-flex">
                                                <div>
                                                    <ul className="rating-wrapper small-rating">
                                                        <li><img src="assets/img/icon/icon_star_full.png" alt="star" /></li>
                                                        <li><img src="assets/img/icon/icon_star_full.png" alt="star" /></li>
                                                        <li><img src="assets/img/icon/icon_star_full.png" alt="star" /></li>
                                                        <li><img src="assets/img/icon/icon_star_half.png" alt="star" /></li>
                                                        <li><img src="assets/img/icon/icon_star_empty.png" alt="star" /></li> 
                                                    </ul>
                                                    <h2 className="title-drop">Play station 2</h2>
                                                    <div className="delivery-date m-top-10 m-bottom-0"> 
                                                        <img className="imgWidth m-right-5" src="assets/img/icon/icon_date.png" alt="Calender" /> 
                                                        <span  className="font-size-13 clr-common">12 Dec, 2019 - 19 Dec, 2019</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <div className="aside-check bdr-btm p-top-20 p-bottom-20">
                                        <table className="common-tbl">
                                            <tbody>
                                                <tr>
                                                    <td className="f-w-600">Total</td>
                                                    <td className="f-w-600 text-right">RS 1000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="aside-check p-top-20 p-bottom-20">
                                        <h3 className="title-drop m-bottom-5">Deliver to</h3>
                                        <p className="sp-font-14">47 Harvey Ave. <br/> Memphis, TN 38106</p>
                                    </div>
                                </div>
                                <div className="aside-check p-top-20 p-bottom-0">
                                    <Link to={'/'} className="full-btn text-center">Pay Now</Link>
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
export default CheckoutPayment;
