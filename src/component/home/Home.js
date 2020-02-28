import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import './style.css';
import { Link } from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";

class Home extends React.Component{

responsive = {
    0: { 
        items: 1,
        itemsInSlide: 1 
    },
    767:  { 
        items: 2,
        itemsInSlide: 1 
    },
    991:  { 
        items: 2,
        itemsInSlide: 1 
    },
    1200:  { 
        items: 3,
        itemsInSlide: 1 
    },
}

render() {
  return ( 
  <div>
      
    <Header />
    <div className="Home">
        <section id="mainimg" className="" > 
        	<img src="assets/img/banner/bg_banner1.png" alt="Banner"/>
        	<div className="banner-desc">
        		<h2>All Products For Rent</h2>
				<form>
					<input type="text" placeholder="What you want to rent" />
				</form>
        	</div>
        </section>
        <section className="section">
            <div className="container">
                <div className="text-center">
            		<h2 className="title">Recently Listed Products</h2>
            		<p className="title-desc">Here are the latest rentals from our members. Check them out all.</p>
            		<p><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
                </div>
                <div className="wrapper-box">
                    <AliceCarousel 
                        dotsDisabled={true}
                        responsive={this.responsive}
                        autoPlayInterval={3000}
                        autoPlayDirection="rtl"
                        autoPlay={true}
                        fadeOutAnimation={true}
                        mouseTrackingEnabled={false}
                        playButtonEnabled={false}
                        disableAutoPlayOnAction={true}
                        onSlideChange={this.onSlideChange}
                        onSlideChanged={this.onSlideChanged}
                    >
                        <div className="product-list">
                                <p className="product-img"><img src="assets/img/image/img_byk.png" alt="BYK" /></p>
                                <ul className="rent-wrapper">
                                    <li><span>Daily</span>RS 1000</li>
                                    <li><span>Weekly</span>RS 2660</li>
                                    <li><span>Monthly</span>RS 5400</li>
                                </ul>
                                <div className="rent-details">
                                    <p><span>Bikes</span> starting at Rs 1000</p>
                                    <div className="btn-wrapper">
                                        <Link className="common-btn-rds" to={'/productlist'}>Rent Now </Link>
                                        <Link className="widh-list" to={'/'}><img src="assets/img/icon/icon_heart.png" alt="Wish List" /> </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="product-list">
                                <p className="product-img"><img src="assets/img/image/img_watch.png" alt="Watch" /></p>
                                <ul className="rent-wrapper">
                                    <li><span>Daily</span>RS 1000</li>
                                    <li><span>Weekly</span>RS 2660</li>
                                    <li><span>Monthly</span>RS 5400</li>
                                </ul>
                                <div className="rent-details">
                                    <p><span>Luxury watches</span> starting at Rs 700</p>
                                    <div className="btn-wrapper">
                                        <Link className="common-btn-rds" to={'/productlist'}>Rent Now </Link>
                                        <Link className="widh-list" to={'/'}><img src="assets/img/icon/icon_heart_active.png" alt="Wish List" /> </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="product-list">
                                <p className="product-img"><img src="assets/img/image/img_dron.png" alt="Dron" /></p>
                                <ul className="rent-wrapper">
                                    <li><span>Daily</span>RS 1000</li>
                                    <li><span>Weekly</span>RS 2660</li>
                                    <li><span>Monthly</span>RS 5400</li>
                                </ul>
                                <div className="rent-details">
                                    <p><span>Drone Cameras</span> starting at Rs 1000</p>
                                    <div className="btn-wrapper">
                                        <Link className="common-btn-rds" to={'/productlist'}>Rent Now </Link>
                                        <Link className="widh-list" to={'/'}><img src="assets/img/icon/icon_heart.png" alt="Wish List" /> </Link>
                                    </div>
                                </div>
                            </div>
                    </AliceCarousel>
                </div>
            </div>
        </section>
        <section className="total-product">
        	<div className="container">
        		<div className="row">
        			<div className="col-md-4">
        				<p><img src="assets/img/icon/icon_total_products.png" alt="Total Products" /></p>
        				<h4>Total Products Rented</h4>
        				<h3>10,000</h3>
        			</div>
        			<div className="col-md-4">
        				<p><img src="assets/img/icon/icon_total_owners.png" alt="Total Owners" /></p>
        				<h4>Total Owners</h4>
        				<h3>20,000</h3>
        			</div><div className="col-md-4">
        				<p><img src="assets/img/icon/icon_total_money.png" alt="Total Money" /></p>
        				<h4>Total Money Paid</h4>
        				<h3>60,000</h3>
        			</div>
        		</div>
        	</div>
        </section>	
        <section className="section">
        	<div className="text-center wrapper-title">
        		<h2 className="title">What is Rental marketplace?</h2>
        		<p className="title-desc">Here are the latest rentals from our members. Check them out all.</p>
        		<p><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
			</div>
			<div className="container m-top-30">
				<div className="col-sm-12 text-center">
					<p className="common-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
					<p className="common-text">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
				</div>
			</div>
        </section>
        <section className="section wrapper-tabs">
            <div className="container">
                <div className="wrapper-tabs-rds">
                    <Tabs id="controlled-tab-example" defaultActiveKey="owner">
                        <Tab eventKey="owner" title="For Owner">
                            <div id="searchRent">
                                <div className="row">  
                                    <div className="col-md-8">
                                        <div className="inner-tab-des">
                                            <h3 className="subTitle m-bottom-20">Search For Rent</h3>
                                            <p className="common-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimv ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros e</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="inner-tabs-img">
                                            <p className="tabs-img"><img src="assets/img/image/img_rent1.png" alt="Search Rent" /></p>
                                            <p className="tabs-icon"><img src="assets/img/image/img_rent_in1.png" alt="Search Rent" /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-top-100">
                                    <div className="col-md-4">
                                        <div className="inner-tabs-img">
                                            <p className="tabs-img"><img src="assets/img/image/img_rent2.png" alt="Search Rent" /></p>
                                            <p className="tabs-icon tabs-icon-right"><img src="assets/img/image/img_rent_in2.png" alt="Search Rent" /></p>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="inner-tab-des">
                                            <h3 className="subTitle m-bottom-20 text-right">Checkout</h3>
                                            <p className="common-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimv ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros e</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-top-100">
                                    <div className="col-md-8">
                                        <div className="inner-tab-des">
                                            <h3 className="subTitle m-bottom-20">Get Delivered</h3>
                                            <p className="common-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimv ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros e</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="inner-tabs-img">
                                            <p className="tabs-img"><img src="assets/img/image/img_rent3.png" alt="Search Rent" /></p>
                                            <p className="tabs-icon"><img src="assets/img/image/img_rent_in3.png" alt="Search Rent" /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="rent" title="For Rent">
                            <div id="checkOutRent">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="inner-tabs-img">
                                            <p className="tabs-img"><img src="assets/img/image/img_rent2.png" alt="Search Rent" /></p>
                                            <p className="tabs-icon tabs-icon-right"><img src="assets/img/image/img_rent_in2.png" alt="Search Rent" /></p>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="inner-tab-des">
                                            <h3 className="subTitle m-bottom-20 text-right">Checkout</h3>
                                            <p className="common-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimv ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros e</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-top-100">
                                    <div className="col-md-8">
                                        <div className="inner-tab-des">
                                            <h3 className="subTitle m-bottom-20">Get Delivered</h3>
                                            <p className="common-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimv ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros e</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="inner-tabs-img">
                                            <p className="tabs-img"><img src="assets/img/image/img_rent3.png" alt="Search Rent" /></p>
                                            <p className="tabs-icon"><img src="assets/img/image/img_rent_in3.png" alt="Search Rent" /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-top-100">  
                                    <div className="col-md-8">
                                        <div className="inner-tab-des">
                                            <h3 className="subTitle m-bottom-20">Search For Rent</h3>
                                            <p className="common-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enimv ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros e</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="inner-tabs-img">
                                            <p className="tabs-img"><img src="assets/img/image/img_rent1.png" alt="Search Rent" /></p>
                                            <p className="tabs-icon"><img src="assets/img/image/img_rent_in1.png" alt="Search Rent" /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </section>
        <section className="section p-top-50">
        	<div className="container">
        		<div className="row">
        			<div className="col-sm-12">
        				<p className="rental-img"><img src="assets/img/image/img_rental.png" alt="Rental Market" /></p>
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
export default Home;
