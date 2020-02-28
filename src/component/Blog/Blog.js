import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import './style.css';
import { Link } from 'react-router-dom';

class Blog extends React.Component{

render() {
    return ( 
      <div>
        <Header /> 
        <div className="ProductAgreement article-wrapper">
            <section>
                <div className="container">
                    <div className="text-center m-bottom-50">
                        <h2 className="title font-size-32">Our Blog</h2>
                        <p className="title-desc">A directory of wonderful things.</p>
                        <p><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row m-bottom-30">
                        <div className="col-md-12 col-lg-8 order-sp-1">
                            <div className="row">
                                <div className="col-md-6 m-bottom-30">
                                    <div className="blog-inner">
                                        <p><img className="blog-image" src="assets/img/image/product_image1.png" alt="Blog Product" /></p>
                                        <div className="blog-inner-details">
                                            <h3 className="title-drop">Blog Title</h3>
                                            <div>
                                                <div className="delivery-date m-top-10 m-bottom-0">
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_date.png" alt="Calender" />
                                                    <span className="font-size-13 clr-common m-right-5">12 Dec, 2019 </span>
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_message.png" alt="Comment" />
                                                    <span className="font-size-13 clr-common">Video Game</span>
                                                </div>
                                            </div>
                                            <p className="p-top-10 blog-text-limit">Lorem psume has been made the globaly typicaly psume has been made the globaly typicaly psume has been made the globaly typicaly  psume has been made the globaly typicaly psume has been made the globaly typicaly psume has been made </p>
                                            <p className="p-top-20"><Link to={'blogdetails'} className="common-btn-rds">Read More</Link></p>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-md-6 m-bottom-30">
                                    <div className="blog-inner">
                                        <p><img className="blog-image" src="assets/img/image/product_image1.png" alt="Blog Product" /></p>
                                        <div className="blog-inner-details">
                                            <h3 className="title-drop">Blog Title</h3>
                                            <div>
                                                <div className="delivery-date m-top-10 m-bottom-0">
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_date.png" alt="Calender" />
                                                    <span className="font-size-13 clr-common m-right-5">12 Dec, 2019 </span>
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_message.png" alt="Comment" />
                                                    <span className="font-size-13 clr-common">Video Game</span>
                                                </div>
                                            </div>
                                            <p className="p-top-10 blog-text-limit">Lorem psume has been made the globaly typicaly psume has been made the globaly typicaly psume has been made the globaly typicaly  psume has been made the globaly typicaly psume has been made the globaly typicaly psume has been made </p>
                                            <p className="p-top-20"><Link to={'blogdetails'} className="common-btn-rds">Read More</Link></p>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-md-6 m-bottom-30">
                                    <div className="blog-inner">
                                        <p><img className="blog-image" src="assets/img/image/product_image1.png" alt="Blog Product" /></p>
                                        <div className="blog-inner-details">
                                            <h3 className="title-drop">Blog Title</h3>
                                            <div>
                                                <div className="delivery-date m-top-10 m-bottom-0">
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_date.png" alt="Calender" />
                                                    <span className="font-size-13 clr-common m-right-5">12 Dec, 2019 </span>
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_message.png" alt="Comment" />
                                                    <span className="font-size-13 clr-common">Video Game</span>
                                                </div>
                                            </div>
                                            <p className="p-top-10 blog-text-limit">Lorem psume has been made the globaly typicaly psume has been made the globaly typicaly psume has been made the globaly typicaly  psume has been made the globaly typicaly psume has been made the globaly typicaly psume has been made </p>
                                            <p className="p-top-20"><Link to={'blogdetails'} className="common-btn-rds">Read More</Link></p>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-md-6 m-bottom-30">
                                    <div className="blog-inner">
                                        <p><img className="blog-image" src="assets/img/image/product_image1.png" alt="Blog Product" /></p>
                                        <div className="blog-inner-details">
                                            <h3 className="title-drop">Blog Title</h3>
                                            <div>
                                                <div className="delivery-date m-top-10 m-bottom-0">
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_date.png" alt="Calender" />
                                                    <span className="font-size-13 clr-common m-right-5">12 Dec, 2019 </span>
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_message.png" alt="Comment" />
                                                    <span className="font-size-13 clr-common">Video Game</span>
                                                </div>
                                            </div>
                                            <p className="p-top-10 blog-text-limit">Lorem psume has been made the globaly typicaly psume has been made the globaly typicaly psume has been made the globaly typicaly  psume has been made the globaly typicaly psume has been made the globaly typicaly psume has been made </p>
                                            <p className="p-top-20"><Link to={'blogdetails'} className="common-btn-rds">Read More</Link></p>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-md-6 m-bottom-30">
                                    <div className="blog-inner">
                                        <p><img className="blog-image" src="assets/img/image/product_image1.png" alt="Blog Product" /></p>
                                        <div className="blog-inner-details">
                                            <h3 className="title-drop">Blog Title</h3>
                                            <div>
                                                <div className="delivery-date m-top-10 m-bottom-0">
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_date.png" alt="Calender" />
                                                    <span className="font-size-13 clr-common m-right-5">12 Dec, 2019 </span>
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_message.png" alt="Comment" />
                                                    <span className="font-size-13 clr-common">Video Game</span>
                                                </div>
                                            </div>
                                            <p className="p-top-10 blog-text-limit">Lorem psume has been made the globaly typicaly psume has been made the globaly typicaly psume has been made the globaly typicaly  psume has been made the globaly typicaly psume has been made the globaly typicaly psume has been made </p>
                                            <p className="p-top-20"><Link to={'blogdetails'} className="common-btn-rds">Read More</Link></p>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-md-6 m-bottom-30">
                                    <div className="blog-inner">
                                        <p><img className="blog-image" src="assets/img/image/product_image1.png" alt="Blog Product" /></p>
                                        <div className="blog-inner-details">
                                            <h3 className="title-drop">Blog Title</h3>
                                            <div>
                                                <div className="delivery-date m-top-10 m-bottom-0">
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_date.png" alt="Calender" />
                                                    <span className="font-size-13 clr-common m-right-5">12 Dec, 2019 </span>
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_message.png" alt="Comment" />
                                                    <span className="font-size-13 clr-common">Video Game</span>
                                                </div>
                                            </div>
                                            <p className="p-top-10 blog-text-limit">Lorem psume has been made the globaly typicaly psume has been made the globaly typicaly psume has been made the globaly typicaly  psume has been made the globaly typicaly psume has been made the globaly typicaly psume has been made </p>
                                            <p className="p-top-20"><Link to={'blogdetails'} className="common-btn-rds">Read More</Link></p>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 sp-category-aside">
                            <div className="box-shadow-outer p-0">
                                <div className="aside-check bdr-btm p-top-20 p-bottom-20">
                                    <div><input type="text" className="search-wrapper1 " placeholder="Search Category" /></div>
                                </div>
                                <div className="aside-check bdr-btm p-top-20 p-bottom-20">
                                    <h3 className="title-drop m-bottom-5">Category</h3>
                                    <ul className="cate-wrapper">
                                        <li><Link to={''}>News</Link> <span>10</span></li>
                                        <li className="active"><Link to={''}>Electronics Item</Link>  <span>3</span></li>
                                        <li><Link to={''}>Outdoor Item</Link>  <span>4</span></li>
                                        <li><Link to={''}>Part</Link> <span>36</span></li>
                                        <li><Link to={''}>Camera</Link> <span>50</span></li>
                                        <li><Link to={''}>Video Game</Link> <span>80</span></li>
                                        <li><Link to={''}>Home Item</Link> <span>67</span></li>
                                    </ul>
                                </div>
                                <div className="aside-check bdr-btm p-top-20 p-bottom-20">
                                    <h3 className="title-drop m-bottom-20">Recent Post</h3>
                                    <div className="custom-row m-bottom-20">
                                        <div className="item-img width-170">
                                            <img className="radius-8 img-res1" src="assets/img/image/product_image1.png" alt="Item" />
                                        </div> 
                                        <div className="item-details width-rem-170 p-top-0  align-items-center d-flex">
                                            <div>
                                                <h2 className="title-drop">Play station 2</h2>
                                                <div className="delivery-date m-top-10 m-bottom-0"> 
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_date.png" alt="Calender" /> 
                                                    <span  className="font-size-13 clr-common">12 Dec, 2019 </span>
                                                    <div>
                                                        <img className="imgWidth m-right-5" src="assets/img/icon/icon_message.png" alt="Comment" /> 
                                                        <span  className="font-size-13 clr-common">24 </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-row m-bottom-20">
                                        <div className="item-img width-170">
                                            <img className="radius-8 img-res1" src="assets/img/image/product_image1.png" alt="Item" />
                                        </div> 
                                        <div className="item-details width-rem-170 p-top-0  align-items-center d-flex">
                                            <div>
                                                <h2 className="title-drop">Play station 2</h2>
                                                <div className="delivery-date m-top-10 m-bottom-0"> 
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_date.png" alt="Calender" /> 
                                                    <span  className="font-size-13 clr-common">12 Dec, 2019 </span>
                                                    <div>
                                                        <img className="imgWidth m-right-5" src="assets/img/icon/icon_message.png" alt="Comment" /> 
                                                        <span  className="font-size-13 clr-common">24 </span>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-row m-bottom-20">
                                        <div className="item-img width-170">
                                            <img className="radius-8 img-res1" src="assets/img/image/product_image1.png" alt="Item" />
                                        </div> 
                                        <div className="item-details width-rem-170 p-top-0  align-items-center d-flex">
                                            <div>
                                                <h2 className="title-drop">Play station 2</h2>
                                                <div className="delivery-date m-top-10 m-bottom-0"> 
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_date.png" alt="Calender" /> 
                                                    <span  className="font-size-13 clr-common">12 Dec, 2019 </span>
                                                    <div>
                                                        <img className="imgWidth m-right-5" src="assets/img/icon/icon_message.png" alt="Comment" /> 
                                                        <span  className="font-size-13 clr-common">24 </span>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-row m-bottom-20">
                                        <div className="item-img width-170">
                                            <img className="radius-8 img-res1" src="assets/img/image/product_image1.png" alt="Item" />
                                        </div> 
                                        <div className="item-details width-rem-170 p-top-0  align-items-center d-flex">
                                            <div>
                                                <h2 className="title-drop">Play station 2</h2>
                                                <div className="delivery-date m-top-10 m-bottom-0"> 
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_date.png" alt="Calender" /> 
                                                    <span  className="font-size-13 clr-common">12 Dec, 2019 </span>
                                                    <div>
                                                        <img className="imgWidth m-right-5" src="assets/img/icon/icon_message.png" alt="Comment" /> 
                                                        <span  className="font-size-13 clr-common">24 </span>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-row m-bottom-20">
                                        <div className="item-img width-170">
                                            <img className="radius-8 img-res1" src="assets/img/image/product_image1.png" alt="Item" />
                                        </div> 
                                        <div className="item-details width-rem-170 p-top-0  align-items-center d-flex">
                                            <div>
                                                <h2 className="title-drop">Play station 2</h2>
                                                <div className="delivery-date m-top-10 m-bottom-0"> 
                                                    <img className="imgWidth m-right-5" src="assets/img/icon/icon_date.png" alt="Calender" /> 
                                                    <span  className="font-size-13 clr-common">12 Dec, 2019 </span>
                                                    <div>
                                                        <img className="imgWidth m-right-5" src="assets/img/icon/icon_message.png" alt="Comment" /> 
                                                        <span  className="font-size-13 clr-common">24 </span>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination-wrapper">
                        <ul className="pagination justify-content-end">
                          <li className="page-item"><Link className="page-link" to={'/'}>Previous</Link></li>
                          <li className="page-item"><Link className="page-link active" to={'/'}>1</Link></li>
                          <li className="page-item"><Link className="page-link" to={'/'}>2</Link></li>
                          <li className="page-item"><Link className="page-link" to={'/'}>3</Link></li>
                          <li className="page-item"><Link className="page-link" to={'/'}>Next</Link></li>
                        </ul>
                    </div>
                </div>
            </section>    
        </div>
        <Footer />
        </div>
  );
}
}
export default Blog;
