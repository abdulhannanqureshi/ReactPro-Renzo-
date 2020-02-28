import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import { Link } from 'react-router-dom';
import './style.css';

class BlogDetails extends React.Component{

render() {
  return ( 
  <div>
    <Header />
    <div className="ProductAgreement article-wrapper">
        <section className="product-agree-wrapper">
            <div className="container">
                <div className="text-center m-bottom-50">
                    <h2 className="title font-size-32">PS2 Device</h2>
                    <p className="title-desc">Lorem Ipsume made been moging</p>
                    <p><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
                </div>
                <div className="row">
                    <div className="col-sm-12 m-bottom-40">
                        <div className="blog-img">
                            <img className="blog-img-inner height-blog-img" src="assets/img/image/product_image2.png" alt="Blog" />
                            <div className="datepicker-wrapper align-items-center blog-detail-wrapper">
                                <div className="blog-date">
                                    <span>Date: Dec, 15 2020</span> / <span>Category: PS2</span>
                                </div> 
                                <div>
                                    <ul className="social-link">
                                        <li>
                                            <Link to={'/'}>
                                                <img src="assets/img/icon/icon_insta.png" alt="Instagram" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>
                                                <img src="assets/img/icon/icon_face.png" alt="facebook" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={'/'}>
                                                <img src="assets/img/icon/icon_you.png" alt="You Tube" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 m-bottom-50">
                        <div className="m-bottom-30">
                            <h3 className="title-drop m-bottom-10">Description</h3>
                            <p className="font-size-15">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                        </div>
                        <div className="m-bottom-30">
                            <h3 className="title-drop m-bottom-10">Confidentiality</h3>
                            <p className="font-size-15">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                        </div>
                        <div className="m-bottom-30">
                            <h3 className="title-drop m-bottom-10">Cancellation</h3>
                            <p className="font-size-15">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                        </div>
                        <div>
                            <h3 className="title-drop m-bottom-10">Acceptance of terms</h3>
                            <p className="font-size-15">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
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
export default BlogDetails;
