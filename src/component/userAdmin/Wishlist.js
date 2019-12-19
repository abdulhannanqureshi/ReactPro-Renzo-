import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import AsideTab from './AsideTab';
import './style.css';
import { Link } from 'react-router-dom';

class Wishlist extends React.Component{


render() {
  return ( 
  <div>
    <Header />
    <div className="wishlist-wrapper article-wrapper">
        <section className="product-list-wrapper">
            <div className="">
                <div className="custom-row">
                    <div className="aside">
                        <AsideTab />
                    </div>
                    <div className="main p-left-40">
                        <div className="row relevent-pro cate-product-list">
                            <div className="col-sm-12">
                                <h2 className="title font-size-30">Wishlist</h2>
                                <p className="title-desc">Here are your wishlisted products</p>
                            </div>
                            <div className="col-md-12 col-lg-6 col-xl-4">
                                <div className="product-list">
                                    <div className="product-img only-img-slider">
                                        <label className="img-label">5km away</label>
                                        <ul className="rating-wrapper">
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                            </li>   
                                        </ul> 
                                        <div>
                                            <img src="assets/img/image/product_image1.png" alt="Watch" />
                                        </div>
                                    </div>
                                    <ul className="rent-wrapper">
                                        <li><span>Daily</span>RS 1000</li>
                                        <li><span>Weekly</span>RS 2660</li>
                                        <li><span>Monthly</span>RS 5400</li>
                                    </ul>
                                    <div className="rent-details">
                                        <p><span>Luxury watches</span> starting at Rs 700</p>
                                        <div className="btn-wrapper">
                                            <Link className="common-btn-rds" to={'/'}>RENT NOW </Link>
                                            <Link className="widh-list" to={'/'}><img src="assets/img/icon/icon_heart.png" alt="Wish List" /> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 col-xl-4">
                                <div className="product-list">
                                    <div className="product-img only-img-slider">
                                        <label className="img-label">5km away</label>
                                        <ul className="rating-wrapper">
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                            </li>   
                                        </ul> 
                                        <div>
                                            <img src="assets/img/image/product_image1.png" alt="Watch" />
                                        </div>
                                    </div>
                                    <ul className="rent-wrapper">
                                        <li><span>Daily</span>RS 1000</li>
                                        <li><span>Weekly</span>RS 2660</li>
                                        <li><span>Monthly</span>RS 5400</li>
                                    </ul>
                                    <div className="rent-details">
                                        <p><span>Luxury watches</span> starting at Rs 700</p>
                                        <div className="btn-wrapper">
                                            <Link className="common-btn-rds" to={'/'}>RENT NOW </Link>
                                            <Link className="widh-list" to={'/'}><img src="assets/img/icon/icon_heart.png" alt="Wish List" /> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 col-xl-4">
                                <div className="product-list">
                                    <div className="product-img only-img-slider">
                                        <label className="img-label">5km away</label>
                                        <ul className="rating-wrapper">
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                            </li>   
                                        </ul> 
                                        <div>
                                            <img src="assets/img/image/product_image1.png" alt="Watch" />
                                        </div>
                                    </div>
                                    <ul className="rent-wrapper">
                                        <li><span>Daily</span>RS 1000</li>
                                        <li><span>Weekly</span>RS 2660</li>
                                        <li><span>Monthly</span>RS 5400</li>
                                    </ul>
                                    <div className="rent-details">
                                        <p><span>Luxury watches</span> starting at Rs 700</p>
                                        <div className="btn-wrapper">
                                            <Link className="common-btn-rds" to={'/'}>RENT NOW </Link>
                                            <Link className="widh-list" to={'/'}><img src="assets/img/icon/icon_heart.png" alt="Wish List" /> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 col-xl-4">
                                <div className="product-list">
                                    <div className="product-img only-img-slider">
                                        <label className="img-label">5km away</label>
                                        <ul className="rating-wrapper">
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                            </li>   
                                        </ul> 
                                        <div>
                                            <img src="assets/img/image/product_image1.png" alt="Watch" />
                                        </div>
                                    </div>
                                    <ul className="rent-wrapper">
                                        <li><span>Daily</span>RS 1000</li>
                                        <li><span>Weekly</span>RS 2660</li>
                                        <li><span>Monthly</span>RS 5400</li>
                                    </ul>
                                    <div className="rent-details">
                                        <p><span>Luxury watches</span> starting at Rs 700</p>
                                        <div className="btn-wrapper">
                                            <Link className="common-btn-rds" to={'/'}>RENT NOW </Link>
                                            <Link className="widh-list" to={'/'}><img src="assets/img/icon/icon_heart.png" alt="Wish List" /> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 col-xl-4">
                                <div className="product-list">
                                    <div className="product-img only-img-slider">
                                        <label className="img-label">5km away</label>
                                        <ul className="rating-wrapper">
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                            </li>
                                            <li className="">
                                                <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                            </li>   
                                        </ul> 
                                        <div>
                                            <img src="assets/img/image/product_image1.png" alt="Watch" />
                                        </div>
                                    </div>
                                    <ul className="rent-wrapper">
                                        <li><span>Daily</span>RS 1000</li>
                                        <li><span>Weekly</span>RS 2660</li>
                                        <li><span>Monthly</span>RS 5400</li>
                                    </ul>
                                    <div className="rent-details">
                                        <p><span>Luxury watches</span> starting at Rs 700</p>
                                        <div className="btn-wrapper">
                                            <Link className="common-btn-rds" to={'/'}>RENT NOW </Link>
                                            <Link className="widh-list" to={'/'}><img src="assets/img/icon/icon_heart.png" alt="Wish List" /> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>  
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
export default Wishlist;
