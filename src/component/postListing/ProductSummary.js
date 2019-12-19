import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import { Link } from 'react-router-dom';
import './style.css';

class ProductSummary extends React.Component{

render() {
  return ( 
  <div>
    <Header />
    <div className="ProductAgreement article-wrapper">
        <section className="product-agree-wrapper">
            <div className="container">
                <div className="text-center">
                    <h2 className="title font-size-32">Summary of your product</h2>
                    <p className="title-desc">Post a listing that you want to give on rent.</p>
                    <p><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
                </div>
                <div className="row product-step-wrapper">
                    <div className="col-sm-4">
                        <Link to="{'/'}" className="step-btn active">About your product</Link>    
                    </div>
                    <div className="col-sm-4 text-center ">
                        <Link to="{'/'}" className="step-btn active">Agreement</Link>    
                    </div>
                    <div className="col-sm-4 text-right">
                        <Link to="{'/'}" className="step-btn active">Review Form</Link>    
                    </div>
                    <div className="bdr-step"></div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-7">
                        <div className="field-row summ-prod-image">
                            <div className="small-images-list">
                                <ul>
                                    <li><img src="assets/img/image/img_dslr_small1.png" alt="DSLR" /></li>
                                    <li><img src="assets/img/image/img_dslr_small2.png" alt="DSLR" /></li>
                                    <li><img src="assets/img/image/img_dslr_small3.png" alt="DSLR" /></li>
                                </ul>
                            </div>
                            <div className="big-image1">
                                <img src="assets/img/image/img_dslr_big.png" alt="DSLR" />
                            </div>
                        </div>
                    </div>  
                    <div className="col-md-12 col-lg-5">
                        <div className="product-details">
                            <div className="field-row">
                                <div className="field-col-2">
                                    <div className="product-text-group">
                                        <span>product category</span>
                                        <p>Cameras</p>
                                    </div> 
                                </div>
                                <div className="field-col-2">
                                    <div className="product-text-group text-right">
                                        <div className="text-left d-inline-block">
                                            <span>product Name</span>
                                            <p>Canon DSLR - 700D</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div className="rang-wrapper">
                                <span className="summary-label">Rental Price</span>
                                <div>
                                    <input type="range" min="1" max="100"  className="rangeSlider" id="myRange" />
                                </div>
                                <ul className="week-amount">
                                    <li>
                                        <p>Daily</p>
                                        <span>Rs 800</span>
                                    </li>
                                    <li><p>Weekly</p><span>Rs 1200</span></li>
                                    <li><p>Monthly</p><span>Rs 3000</span></li>
                                </ul>
                            </div>
                            <div className="field-row m-bottom-30">
                                <div className="field-col-pur-3">
                                    <div className="product-text-group">
                                        <span>Street</span>
                                        <p>Palasia</p>
                                    </div> 
                                </div>
                                <div className="field-col-pur-3">
                                    <div className="product-text-group text-center">
                                        <div className="text-left d-inline-block">
                                            <span>Suburb</span>
                                            <p>Indore</p>
                                        </div>
                                    </div> 
                                </div>
                                <div className="field-col-pur-3">
                                    <div className="product-text-group text-right">
                                        <div className="text-left d-inline-block">
                                            <span>Region</span>
                                            <p>Indore</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div>
                                <div className="product-text-group">
                                    <span>product description</span>
                                    <p className="font-size-14">Lorem ipsume is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="text-center agree-check">
                            <div className="checkbox-wrapper m-bottom-20">
                                <span className="custome-checkbox">
                                    <span className="input-check">
                                        <input type="checkbox" />
                                        <span className="right-checkbox">
                                            <img src="assets/img/icon/icon_tick.png" alt="Icon Right" />
                                        </span>
                                    </span>
                                    <span className="box-checkbox"></span>
                                </span>
                                <label>I hereby confirm that above provided information is true and correct.</label>
                            </div>
                            <Link to={'/'} className="another-common-btn btn-increase-width">Add Product</Link>
                        </div>
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
export default ProductSummary;
