import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import AsideTab from './AsideTab';
import './style.css';
import { Link } from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class Order extends React.Component{

render() {
  return ( 
  <div>
    <Header />
    <div className="wishlist-wrapper article-wrapper">
        <section className="product-list-wrapper">
            <div className="container">
                <div className="custom-row">
                    <div className="aside">
                        <AsideTab />
                    </div>
                    <div className="main p-left-40">
                        <div className="row relevent-pro cate-product-list">
                            <div className="col-sm-12">
                                <h2 className="title font-size-30">Rented</h2>
                                <p className="title-desc">Items rented and items owned.</p>
                                <p className="m-bottom-30"><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
                            </div>
                        </div>
                        <div className="wrapper-tabs-rds tab-my-order">
                            <Tabs id="controlled-tab-example" defaultActiveKey="itemsRented">
                                <Tab eventKey="itemsRented" title="Items Rented">
                                    <div className="row order-wrapper">
                                        <div className="col-sm-6 col-lg-6 col-xl-6">
                                            <div className="my-order">
                                                <p className="delivery-date"><span>Delivered</span> on 30 Nov, 2019 | 11:00 am</p>
                                                <div className="custom-row">
                                                    <div className="product-img item-img">
                                                        <ul className="rating-wrapper">
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                                            </li>
                                                        </ul>
                                                        <div className="item-img-inner">
                                                            <img src="assets/img/image/product_image1.png" alt="Items" />
                                                        </div>
                                                    </div>
                                                    <div className="item-details">
                                                        <h2 className="itemTitle">Gaming PS2</h2>
                                                        <h3 className="itemPrice">RS 700 / Day</h3>
                                                        <p className="orderNum">Order no.: 1125380</p>
                                                        <p className="sp-center"><Link to={'orderdetails'} className="common-btn-rds">Order Details</Link> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6 col-xl-6">
                                            <div className="my-order">
                                                <p className="delivery-date"><span>Delivered</span> on 30 Nov, 2019 | 11:00 am</p>
                                                <div className="custom-row">
                                                    <div className="product-img item-img">
                                                        <ul className="rating-wrapper">
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                                            </li>
                                                        </ul>
                                                        <div className="item-img-inner">
                                                            <img src="assets/img/image/product_image1.png" alt="Items" />
                                                        </div>
                                                    </div>
                                                    <div className="item-details">
                                                        <h2 className="itemTitle">Gaming PS2</h2>
                                                        <h3 className="itemPrice">RS 700 / Day</h3>
                                                        <p className="orderNum">Order no.: 1125380</p>
                                                        <p className="sp-center"><Link to={'orderdetails'} className="common-btn-rds">Order Details</Link> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6 col-xl-6">
                                            <div className="my-order">
                                                <p className="delivery-date"><span>Delivered</span> on 30 Nov, 2019 | 11:00 am</p>
                                                <div className="custom-row">
                                                    <div className="product-img item-img">
                                                        <ul className="rating-wrapper">
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                                            </li>
                                                        </ul>
                                                        <div className="item-img-inner">
                                                            <img src="assets/img/image/product_image1.png" alt="Items" />
                                                        </div>
                                                    </div>
                                                    <div className="item-details">
                                                        <h2 className="itemTitle">Gaming PS2</h2>
                                                        <h3 className="itemPrice">RS 700 / Day</h3>
                                                        <p className="orderNum">Order no.: 1125380</p>
                                                        <p className="sp-center"><Link to={'orderdetails'} className="common-btn-rds">Order Details</Link> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6 col-xl-6">
                                            <div className="my-order">
                                                <p className="delivery-date"><span>Delivered</span> on 30 Nov, 2019 | 11:00 am</p>
                                                <div className="custom-row">
                                                    <div className="product-img item-img">
                                                        <ul className="rating-wrapper">
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                                            </li>
                                                        </ul>
                                                        <div className="item-img-inner">
                                                            <img src="assets/img/image/product_image1.png" alt="Items" />
                                                        </div>
                                                    </div>
                                                    <div className="item-details">
                                                        <h2 className="itemTitle">Gaming PS2</h2>
                                                        <h3 className="itemPrice">RS 700 / Day</h3>
                                                        <p className="orderNum">Order no.: 1125380</p>
                                                        <p className="sp-center"><Link to={'orderdetails'} className="common-btn-rds">Order Details</Link> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6 col-xl-6">
                                            <div className="my-order">
                                                <p className="delivery-date"><span>Delivered</span> on 30 Nov, 2019 | 11:00 am</p>
                                                <div className="custom-row">
                                                    <div className="product-img item-img">
                                                        <ul className="rating-wrapper">
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                                            </li>
                                                        </ul>
                                                        <div className="item-img-inner">
                                                            <img src="assets/img/image/product_image1.png" alt="Items" />
                                                        </div>
                                                    </div>
                                                    <div className="item-details">
                                                        <h2 className="itemTitle">Gaming PS2</h2>
                                                        <h3 className="itemPrice">RS 700 / Day</h3>
                                                        <p className="orderNum">Order no.: 1125380</p>
                                                        <p className="sp-center"><Link to={'orderdetails'} className="common-btn-rds">Order Details</Link> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="itemsOwned" title="Items Owned">
                                    <div className="row order-wrapper">
                                        <div className="col-sm-6 col-lg-6 col-xl-6">
                                            <div className="my-order">
                                                <p className="delivery-date"><span>Delivered</span> on 30 Nov, 2019 | 11:00 am</p>
                                                <div className="custom-row">
                                                    <div className="product-img item-img">
                                                        <ul className="rating-wrapper">
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                                            </li>
                                                        </ul>
                                                        <div className="item-img-inner">
                                                            <img src="assets/img/image/product_image1.png" alt="Items" />
                                                        </div>
                                                    </div>
                                                    <div className="item-details">
                                                        <h2 className="itemTitle">Gaming PS2</h2>
                                                        <h3 className="itemPrice">RS 700 / Day</h3>
                                                        <p className="orderNum">Order no.: 1125380</p>
                                                        <p className="sp-center"><Link to={'orderdetails'} className="common-btn-rds">Order Details</Link> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6 col-xl-6">
                                            <div className="my-order">
                                                <p className="delivery-date"><span>Delivered</span> on 30 Nov, 2019 | 11:00 am</p>
                                                <div className="custom-row">
                                                    <div className="product-img item-img">
                                                        <ul className="rating-wrapper">
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                                            </li>
                                                        </ul>
                                                        <div className="item-img-inner">
                                                            <img src="assets/img/image/product_image1.png" alt="Items" />
                                                        </div>
                                                    </div>
                                                    <div className="item-details">
                                                        <h2 className="itemTitle">Gaming PS2</h2>
                                                        <h3 className="itemPrice">RS 700 / Day</h3>
                                                        <p className="orderNum">Order no.: 1125380</p>
                                                        <p className="sp-center"><Link to={'orderdetails'} className="common-btn-rds">Order Details</Link> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6 col-xl-6">
                                            <div className="my-order">
                                                <p className="delivery-date"><span>Delivered</span> on 30 Nov, 2019 | 11:00 am</p>
                                                <div className="custom-row">
                                                    <div className="product-img item-img">
                                                        <ul className="rating-wrapper">
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                                            </li>
                                                        </ul>
                                                        <div className="item-img-inner">
                                                            <img src="assets/img/image/product_image1.png" alt="Items" />
                                                        </div>
                                                    </div>
                                                    <div className="item-details">
                                                        <h2 className="itemTitle">Gaming PS2</h2>
                                                        <h3 className="itemPrice">RS 700 / Day</h3>
                                                        <p className="orderNum">Order no.: 1125380</p>
                                                        <p className="sp-center"><Link to={'orderdetails'} className="common-btn-rds">Order Details</Link> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6 col-xl-6">
                                            <div className="my-order">
                                                <p className="delivery-date"><span>Delivered</span> on 30 Nov, 2019 | 11:00 am</p>
                                                <div className="custom-row">
                                                    <div className="product-img item-img">
                                                        <ul className="rating-wrapper">
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                                            </li>
                                                        </ul>
                                                        <div className="item-img-inner">
                                                            <img src="assets/img/image/product_image1.png" alt="Items" />
                                                        </div>
                                                    </div>
                                                    <div className="item-details">
                                                        <h2 className="itemTitle">Gaming PS2</h2>
                                                        <h3 className="itemPrice">RS 700 / Day</h3>
                                                        <p className="orderNum">Order no.: 1125380</p>
                                                        <p className="sp-center"><Link to={'orderdetails'} className="common-btn-rds">Order Details</Link> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-6 col-xl-6">
                                            <div className="my-order">
                                                <p className="delivery-date"><span>Delivered</span> on 30 Nov, 2019 | 11:00 am</p>
                                                <div className="custom-row">
                                                    <div className="product-img item-img">
                                                        <ul className="rating-wrapper">
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                                            </li>
                                                            <li>
                                                                <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                                            </li>
                                                        </ul>
                                                        <div className="item-img-inner">
                                                            <img src="assets/img/image/product_image1.png" alt="Items" />
                                                        </div>
                                                    </div>
                                                    <div className="item-details">
                                                        <h2 className="itemTitle">Gaming PS2</h2>
                                                        <h3 className="itemPrice">RS 700 / Day</h3>
                                                        <p className="orderNum">Order no.: 1125380</p>
                                                        <p className="sp-center"><Link to={'orderdetails'} className="common-btn-rds">Order Details</Link> </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
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
export default Order;
