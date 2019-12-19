import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import { Link } from 'react-router-dom';
import './style.css';

class ProductAgreement extends React.Component{

render() {
  return ( 
  <div>
    <Header />
    <div className="ProductAgreement article-wrapper">
        <section className="product-agree-wrapper">
            <div className="container">
                <div className="text-center">
                    <h2 className="title font-size-32">Agreement for posting a listing</h2>
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
                        <Link to="{'/'}" className="step-btn">Review Form</Link>    
                    </div>
                    <div className="bdr-step"></div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="subTitle1 text-center font-size-26 m-bottom-40">Product Agreement</h2>
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
                        <div className="agree-check">
                            <div className="checkbox-wrapper">
                                <span className="custome-checkbox">
                                    <span className="input-check">
                                        <input type="checkbox" />
                                        <span className="right-checkbox">
                                            <img src="assets/img/icon/icon_tick.png" alt="Icon Right" />
                                        </span>
                                    </span>
                                    <span className="box-checkbox"></span>
                                </span>
                                <label>Yes, I agree to use this agreement.</label>
                            </div>
                        </div>
                        <div className="title-drop text-center">
                            <span className="text-underline">OR</span>
                        </div>
                        <div className="custome-upload text-center upload-mrg">
                            <input type="file" />    
                            <div className="title-drop">
                                <span className="text-underline">Upload new agreement</span>
                            </div>
                        </div>
                        <div className="text-center m-bottom-30">
                            <Link to={'/'} className="another-common-btn btn-increase-width">NEXT STEP --> REVIEW</Link>
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
export default ProductAgreement;
