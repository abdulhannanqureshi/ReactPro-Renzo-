import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import './style.css';
import { Link } from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Modal from 'react-bootstrap/Modal'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class ProductDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            deliveryDate: '',
            pickupDate: '',
            rangeValue: 3
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleChangeDelivery = date => {
        this.setState({
            deliveryDate: date
        });
    };
    handleChangePickup = date => {
        this.setState({
            pickupDate: date
        });
    };
    handleShow(){
       this.setState({
            show: true
       });
    }
    handleClose(){
        this.setState({
            show: false
       });
    }
    responsive = {
        0: { 
            items: 1,
            itemsInSlide: 1 
        }
    }
    handleChange(event, index) {
        const { rangeValue } = this.state;
        this.setState({ rangeValue: event.target.value});
    }
render() {
    const { value } = this.state;
    const { label } = this.props;
  return ( 
  <div>
    <Header />
    <div className="Product">
        <section className="">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="breadcrumb-wrapper">
                            <ul>
                                <li><Link to={'/'}>Home /</Link></li>
                                <li><Link to={'/'}>electronics /</Link></li>
                                <li><Link to={'/'}>gadgets /</Link></li>
                                <li><Link to={'/'}>Play station /</Link></li>
                                <li>ps4</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="warpper-product-slider">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-7">
                        <div className="product-img1 only-img-slider slider-wrapper1">
                            <AliceCarousel 
                                dotsDisabled={true}
                                responsive={this.responsive}
                                autoPlayInterval={3000}
                                autoPlayDirection="rtl"
                                autoPlay={false}
                                fadeOutAnimation={true}
                                mouseTrackingEnabled={false}
                                playButtonEnabled={false}
                                disableAutoPlayOnAction={true}
                                onSlideChange={this.onSlideChange}
                                onSlideChanged={this.onSlideChanged}
                            >
                                <div>
                                    <img className="product-details-img" src="assets/img/image/product_image1.png" alt="Play Station" />
                                </div>
                                <div>
                                    <img className="product-details-img" src="assets/img/image/product_image2.png" alt="Play Station" />
                                </div>
                                <div>
                                    <img className="product-details-img" src="assets/img/image/product_image3.jpg" alt="Play Station" />
                                </div>
                                <div>
                                    <img className="product-details-img" src="assets/img/image/product_image4.jpg" alt="Play Station" />
                                </div>
                            </AliceCarousel>
                        </div>
                    </div>  
                    <div className="col-md-12 col-lg-5">
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
                        <div className="product-details">
                            <h2 className="subTitle1 with-wishlist">Play station 2 <span><img src="assets/img/icon/icon_heart.png" alt="Wish List" /></span></h2>
                            <div className="rang-wrapper">
                                <div>
                                    <input type="range"
                                      min={0}
                                      max={2}
                                      step={1}
                                      value={value}
                                      onChange={this.handleChange.bind(this)} 
                                      className="rangeSlider" id="myRange" />
                                </div>
                                <ul className="week-amount">
                                    <li><p>Daily</p></li>
                                    <li><p>Weekly</p></li>
                                    <li><p>Monthly</p></li>
                                </ul>
                            </div>
                            <ul className="amount-wrapper">
                                <li>Amount</li>
                                <li>Rs 1000</li>
                            </ul>
                        </div>
                        <div className="checkability">
                            <h3>Check Availability</h3>
                            <div className="datepicker-wrapper">
                                <DatePicker
                                    selected={this.state.deliveryDate === '' ? null : this.state.deliveryDate}
                                    onChange={this.handleChangeDelivery}
                                     placeholderText="Delivery Date"
                                  />
                                <DatePicker
                                    selected={this.state.pickupDate === '' ? null : this.state.pickupDate}
                                    onChange={this.handleChangePickup}
                                     placeholderText="Pickup Date"
                                  />
                            </div> 
                            <p className="product-not-sms m-bottom-50">*Sorry! The product is not available for these dates.</p>
                            <p><button className="common-btn-rds" onClick={this.handleShow}>Rent Now</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="">
            <div className="container">
                <div>
                    <div className="product-tabs-wrapper">
                        <Tabs id="controlled-tab-example" defaultActiveKey="productDesc">
                            <Tab eventKey="productDesc" title="Product Description">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="common-text1 m-bottom-20">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                                        </p>
                                        <p className="common-text1">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took .
                                        </p>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="ratings" title="Ratings & Reviews">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h3 className="small-title">Average rating</h3>
                                        <ul className="rating-wrapper big-rating">
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
                                        <span>3.5(9 reviews)</span>
                                    </div>
                                </div>
                                <div className="row rating-sub-wrapper">
                                    <div className="col-sm-12 m-bottom-30">
                                        <h3 className="small-title">Add a review</h3>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <label className="rat-label">Your Rating</label>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="review-text">
                                            <label className="rat-label">Your Review</label>
                                            <textarea cols="30" rows="4" placeholder="Type a review for the product..."></textarea> 
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-4 sp-right">
                                        <Link className="common-btn-rds rat-btn-m" to={'/'}>Submit </Link>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="all-review">
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
                                            <h4 className="small-title f-w-500">Amazing</h4>
                                            <span className="rat-tagline m-bottom-10">By Kamlesh Soni on 26 April, 2019</span>
                                            <p className="small-common-text">I had really great experience with Renzo and their products. They have such a huge variety of products with amazing quality.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="all-review">
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
                                            <h4 className="small-title f-w-500">Amazing</h4>
                                            <span className="rat-tagline m-bottom-10">By Kamlesh Soni on 26 April, 2019</span>
                                            <p className="small-common-text">I had really great experience with Renzo and their products. They have such a huge variety of products with amazing quality.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="all-review">
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
                                            <h4 className="small-title f-w-500">Amazing</h4>
                                            <span className="rat-tagline m-bottom-10">By Kamlesh Soni on 26 April, 2019</span>
                                            <p className="small-common-text">I had really great experience with Renzo and their products. They have such a huge variety of products with amazing quality.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="all-review">
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
                                            <h4 className="small-title f-w-500">Amazing</h4>
                                            <span className="rat-tagline m-bottom-10">By Kamlesh Soni on 26 April, 2019</span>
                                            <p className="small-common-text">I had really great experience with Renzo and their products. They have such a huge variety of products with amazing quality.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="all-review">
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
                                            <h4 className="small-title f-w-500">Amazing</h4>
                                            <span className="rat-tagline m-bottom-10">By Kamlesh Soni on 26 April, 2019</span>
                                            <p className="small-common-text">I had really great experience with Renzo and their products. They have such a huge variety of products with amazing quality.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="all-review">
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
                                            <h4 className="small-title f-w-500">Amazing</h4>
                                            <span className="rat-tagline m-bottom-10">By Kamlesh Soni on 26 April, 2019</span>
                                            <p className="small-common-text">I had really great experience with Renzo and their products. They have such a huge variety of products with amazing quality.</p>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="questions" title="Questions & Answers">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="question-field">
                                            <label className="small-common-text">Have a question?</label>
                                            <input type="text" placeholder="Ask Here" />
                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper-ques">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4 col-lg-4">
                                            <div className="inner-ques small-common-text">
                                                <div>Question :</div>
                                                <div>We can connect to our tv?</div>
                                            </div>
                                            <div className="inner-ques small-common-text">
                                                <div>Answer :</div>
                                                <div>Yes Sir <br/>
                                                    <span className="rat-tagline m-bottom-10">By Kamlesh Soni on 26 April, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4">
                                            <div className="inner-ques small-common-text">
                                                <div>Question :</div>
                                                <div>We can connect to our tv?</div>
                                            </div>
                                            <div className="inner-ques small-common-text">
                                                <div>Answer :</div>
                                                <div>Yes Sir <br/>
                                                    <span className="rat-tagline m-bottom-10">By Kamlesh Soni on 26 April, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4">
                                            <div className="inner-ques small-common-text">
                                                <div>Question :</div>
                                                <div>We can connect to our tv?</div>
                                            </div>
                                            <div className="inner-ques small-common-text">
                                                <div>Answer :</div>
                                                <div>Yes Sir <br/>
                                                    <span className="rat-tagline m-bottom-10">By Kamlesh Soni on 26 April, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4">
                                            <div className="inner-ques small-common-text">
                                                <div>Question :</div>
                                                <div>We can connect to our tv?</div>
                                            </div>
                                            <div className="inner-ques small-common-text">
                                                <div>Answer :</div>
                                                <div>Yes Sir <br/>
                                                    <span className="rat-tagline m-bottom-10">By Kamlesh Soni on 26 April, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4">
                                            <div className="inner-ques small-common-text">
                                                <div>Question :</div>
                                                <div>We can connect to our tv?</div>
                                            </div>
                                            <div className="inner-ques small-common-text">
                                                <div>Answer :</div>
                                                <div>Yes Sir <br/>
                                                    <span className="rat-tagline m-bottom-10">By Kamlesh Soni on 26 April, 2019</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4 col-lg-4">
                                            <div className="inner-ques small-common-text">
                                                <div>Question :</div>
                                                <div>We can connect to our tv?</div>
                                            </div>
                                            <div className="inner-ques small-common-text">
                                                <div>Answer :</div>
                                                <div>Yes Sir <br/>
                                                    <span className="rat-tagline m-bottom-10">By Kamlesh Soni on 26 April, 2019</span>
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
        </section>
        <section className="section relevent-pro">
            <div className="container">
                <h2 className="title">Similar Products</h2>
                <p className="title-desc">Essentials add tiny details to your product enhancing its overall experience</p>
                <div className="wrapper-box1 m-top-60">
                    <div className="row">
                        <div className="col-md-6 col-xl-4">
                            <div className="product-list">
                                <div className="product-img only-img-slider">
                                    <AliceCarousel 
                                        dotsDisabled={true}
                                        responsive={this.responsive}
                                        autoPlayInterval={3000}
                                        autoPlayDirection="rtl"
                                        autoPlay={false}
                                        fadeOutAnimation={true}
                                        mouseTrackingEnabled={false}
                                        playButtonEnabled={false}
                                        disableAutoPlayOnAction={true}
                                        onSlideChange={this.onSlideChange}
                                        onSlideChanged={this.onSlideChanged}
                                    >
                                        <div>
                                            <img src="assets/img/image/product_image1.png" alt="Watch" />
                                        </div>
                                        <div>
                                            <img src="assets/img/image/product_image2.png" alt="Product" />
                                        </div>
                                        <div>
                                            <img src="assets/img/image/product_image3.jpg" alt="Product" />
                                        </div>
                                        <div>
                                            <img src="assets/img/image/product_image4.jpg" alt="Product" />
                                        </div>
                                    </AliceCarousel>
                                </div>
                                <ul className="rent-wrapper">
                                    <li><span>Daily</span>RS 1000</li>
                                    <li><span>Weekly</span>RS 2660</li>
                                    <li><span>Monthly</span>RS 5400</li>
                                </ul>
                                <div className="rent-details">
                                    <p><span>Luxury watches</span> starting at Rs 700</p>
                                    <div className="btn-wrapper">
                                        <Link className="common-btn-rds" to={'/'}>Rent Now </Link>
                                        <Link className="widh-list" to={'/'}><img src="assets/img/icon/icon_heart.png" alt="Wish List" /> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="product-list">
                                <div className="product-img only-img-slider">
                                    <AliceCarousel 
                                        dotsDisabled={true}
                                        responsive={this.responsive}
                                        autoPlayInterval={3000}
                                        autoPlayDirection="rtl"
                                        autoPlay={false}
                                        fadeOutAnimation={true}
                                        mouseTrackingEnabled={false}
                                        playButtonEnabled={false}
                                        disableAutoPlayOnAction={true}
                                        onSlideChange={this.onSlideChange}
                                        onSlideChanged={this.onSlideChanged}
                                    >
                                        <div>
                                            <img src="assets/img/image/product_image1.png" alt="Watch" />
                                        </div>
                                        <div>
                                            <img src="assets/img/image/product_image2.png" alt="Product" />
                                        </div>
                                        <div>
                                            <img src="assets/img/image/product_image3.jpg" alt="Product" />
                                        </div>
                                        <div>
                                            <img src="assets/img/image/product_image4.jpg" alt="Product" />
                                        </div>
                                    </AliceCarousel>
                                </div>
                                <ul className="rent-wrapper">
                                    <li><span>Daily</span>RS 1000</li>
                                    <li><span>Weekly</span>RS 2660</li>
                                    <li><span>Monthly</span>RS 5400</li>
                                </ul>
                                <div className="rent-details">
                                    <p><span>Luxury watches</span> starting at Rs 700</p>
                                    <div className="btn-wrapper">
                                        <Link className="common-btn-rds" to={'/'}>Rent Now </Link>
                                        <Link className="widh-list" to={'/'}><img src="assets/img/icon/icon_heart_active.png" alt="Wish List" /> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="product-list">
                                <div className="product-img only-img-slider">
                                    <AliceCarousel 
                                        dotsDisabled={true}
                                        responsive={this.responsive}
                                        autoPlayInterval={3000}
                                        autoPlayDirection="rtl"
                                        autoPlay={false}
                                        fadeOutAnimation={true}
                                        mouseTrackingEnabled={false}
                                        playButtonEnabled={false}
                                        disableAutoPlayOnAction={true}
                                        onSlideChange={this.onSlideChange}
                                        onSlideChanged={this.onSlideChanged}
                                    >
                                        <div>
                                            <img src="assets/img/image/product_image1.png" alt="Watch" />
                                        </div>
                                        <div>
                                            <img src="assets/img/image/product_image2.png" alt="Product" />
                                        </div>
                                        <div>
                                            <img src="assets/img/image/product_image3.jpg" alt="Product" />
                                        </div>
                                        <div>
                                            <img src="assets/img/image/product_image4.jpg" alt="Product" />
                                        </div>
                                    </AliceCarousel>
                                </div>
                                <ul className="rent-wrapper">
                                    <li><span>Daily</span>RS 1000</li>
                                    <li><span>Weekly</span>RS 2660</li>
                                    <li><span>Monthly</span>RS 5400</li>
                                </ul>
                                <div className="rent-details">
                                    <p><span>Luxury watches</span> starting at Rs 700</p>
                                    <div className="btn-wrapper">
                                        <Link className="common-btn-rds" to={'/'}>Rent Now </Link>
                                        <Link className="widh-list" to={'/'}><img src="assets/img/icon/icon_heart_active.png" alt="Wish List" /> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </section>  
        <div className="">
            <Modal className="modal-wrapper" size="lg" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title> 
                        <div className="text-center">
                            <h2 className="title font-size-28 font-w-600">SEND A MESSAGE</h2>
                            <p className="title-desc font-size-16">You can track your messages in My Messages section in your account.</p>
                            <p><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
                        </div>
                  </Modal.Title>
                </Modal.Header> 
                <Modal.Body>  
                    <div className="form-wrapper m-top-10">
                        <form action="">
                           <div className="form-group m-bottom-20">
                                <label>WRITE YOUR MESSAGE HERE</label>
                                <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder="Type a Message"></textarea>
                            </div>
                            <div className="text-center">
                                <Link to={'/'} className="another-common-btn btn-increase-width">Send Message</Link>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    </div>
    <Footer />
  </div>
  );
}
}
export default ProductDetails;
