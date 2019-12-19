import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import './style.css';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'
import Collapsible from 'react-collapsible';
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";

class ProductList extends React.Component{

    responsive = {
        0: { 
            items: 1,
            itemsInSlide: 1 
        }
    }

render() {
  return ( 
  <div>
    <Header />
    <div className="Product">
        <section>
            <div className="container-fluid container-padding product-offer-wrapper">
                <div className="row">
                    <div className="col-md-4">
                        <div className="product-offer">
                            <div className="pro-img">
                                <img src="assets/img/icon/icon_rent.png" alt="Rent Icon"/>
                            </div>
                            <div className="product-det">
                                <h3 className="small-title">RENT</h3>
                                <p className="product-det-text">Browse & order <br/> online.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-offer">
                            <div className="pro-img">
                                <img src="assets/img/icon/icon_own.png" alt="Own Icon"/>
                            </div>
                            <div className="product-det">
                                <h3 className="small-title">OWn</h3>
                                <p className="product-det-text">Own the item for <br/>a day, a week or <br/>a month.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product-offer">
                            <div className="pro-img">
                                <img src="assets/img/icon/icon_return.png" alt="Return Icon"/>
                            </div>
                            <div className="product-det">
                                <h3 className="small-title">Return</h3>
                                <p className="product-det-text">Free, easy pickup <br/>at your convinient <br/>time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="product-list-wrapper">
            <div className="container-fluid container-padding">
                <div className="row">
                    <div className="aside aside-product-list">
                        <h3 className="filter-title"><img src="assets/img/icon/icon_filter.png" alt="Icon Filter"/> Filters</h3>
                        <div className="category-wrapper">
                            <Collapsible trigger="Category">
                                <Collapsible className="remove-mrg" openedClassName="remove-mrg" trigger="Gadgets">
                                    <ul className="categeory-item">
                                        <li><input type="checkbox" /> DSLRs</li>
                                        <li><input type="checkbox" /> Play Station</li>
                                        <li><input type="checkbox" /> Gaming PC</li>
                                        <li><input type="checkbox" /> Drone Cameras</li>
                                        <li><input type="checkbox" /> Macbook Pro</li>
                                        <li><input type="checkbox" /> 40 inch TV</li>
                                    </ul>
                                </Collapsible>
                                <Collapsible trigger="Sound equipment">
                                    <ul className="categeory-item">
                                        <li><input type="checkbox" /> Collar Mic</li>
                                        <li><input type="checkbox" /> Microphone</li>
                                    </ul>
                                </Collapsible>
                            </Collapsible>
                        </div>
                        <div className="category-wrapper">
                            <Collapsible trigger="rental tenure">
                                <div className="rang-wrapper">
                                    <div>
                                        <input type="range" min="1" max="100"  className="rangeSlider" id="myRange" />
                                    </div>
                                    <ul className="week-amount">
                                        <li><p>Daily</p></li>
                                        <li><p>Weekly</p></li>
                                        <li><p>Monthly</p></li>
                                    </ul>
                                </div>
                            </Collapsible>
                        </div>
                        <div className="category-wrapper">
                            <Collapsible trigger="Availability">
                                <ul className="categeory-item">
                                    <li><input type="checkbox" /> Availability 1</li>
                                    <li><input type="checkbox" /> Availability 2</li>
                                    <li><input type="checkbox" /> Availability 3</li>
                                    <li><input type="checkbox" /> Availability 4</li>
                                    <li><input type="checkbox" /> Availability 5</li>
                                </ul>
                            </Collapsible>
                            <ul className="categeory-item out-item-cate">
                                <li><input type="checkbox" /> Out of stock</li>
                            </ul>
                        </div>
                        <div className="category-wrapper">
                            <Collapsible trigger="Location">
                                <ul className="categeory-item p-bottom-0">
                                    <li><input type="checkbox" /> Location 1</li>
                                    <li><input type="checkbox" /> Location 2</li>
                                    <li><input type="checkbox" /> Location 3</li>
                                </ul>
                            </Collapsible>
                            <input type="text" placeholder="Search City" className="search-field infilter-search" /> 
                        </div>
                        <div className="category-wrapper">
                            <Collapsible trigger="Distance">
                                <div className="rang-wrapper only-range">
                                    <div className="">
                                        <input type="range" min="1" max="100"  className="rangeSlider" id="myRange" />
                                    </div>
                                </div>
                            </Collapsible>
                        </div>
                    </div>
                    <div className="main">
                        <div className="row m-bottom-20">
                            <div className="col-md-7 col-lg-9">
                                <div className="breadcrumb-wrapper">
                                    <ul>
                                        <li><Link to={'/'}>Home /</Link></li>
                                        <li>Electronics</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-3">
                                <div className="text-right custom-dropdown">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="" id="sort-by">
                                            <img src="assets/img/icon/icon_drop.png" alt="Icon Dropdown"/> sort by
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Popular</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Price : High to low</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Price : Low to high</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className="row relevent-pro cate-product-list">
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
export default ProductList;
