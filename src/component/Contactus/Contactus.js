import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import { Link } from 'react-router-dom';
import './style.css';

class Contactus extends React.Component{

render() {
  return ( 
  <div>
    <Header />
    <div className="ProductAgreement article-wrapper">
        <section className="product-agree-wrapper">
            <div className="container-fluid container-padding m-bottom-100"> 
                <div className="form-wrapper">
                    <div className="text-center m-bottom-80">
                        <h2 className="title font-size-32">Get in touch with us</h2>
                        <p className="title-desc">We’d love to hear from you.</p>
                        <p><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
                    </div>
                    <form action="">
                        <div className="row">
                            <div className="col-md-12 sp-m-b-30 col-lg-6 col-xl-8">
                                <div className="box-shadow-outer">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Full Name</label>
                                                <input type="text" className="form-control" name="f-name" id="f-name" placeholder="Enter Full Name" />
                                            </div> 
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Email ID</label>
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Enter Your Email ID" />
                                            </div>
                                        </div> 
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Message</label>
                                                <textarea name="" id="" cols="30" rows="10" placeholder="Type Your Message Here"></textarea>    
                                            </div>
                                        </div> 
                                        <div className="col-md-12 text-center p-bottom-20">
                                            <Link to={'/'} className="another-common-btn btn-increase-width1">Submit</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 col-xl-4">
                                <div className="contact-inner">
                                    <div className="custom-row m-bottom-70">
                                        <div className="width-120">
                                            <img class="icon-contact" src="assets/img/image/img_call.png" alt="Call" />
                                        </div>
                                        <div className="width-rem-120 d-flex align-items-center"> 
                                            <div>
                                                <h2 className="small-title">Have any question</h2>
                                                <p>0731 242 2349</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-row m-bottom-70">
                                        <div className="width-120">
                                            <img class="icon-contact" src="assets/img/image/img_location.png" alt="Location" />
                                        </div>
                                        <div className="width-rem-120 d-flex align-items-center"> 
                                            <div>
                                                <h2 className="small-title">65/3/2, Bhagirathpura,</h2>
                                                <p>Indore, Madhya Pradesh 452003</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-row">
                                        <div className="width-120">
                                            <img class="icon-contact" src="assets/img/image/img_email.png" alt="Email" />
                                        </div>
                                        <div className="width-rem-120 d-flex align-items-center"> 
                                            <div>
                                                <h2 className="small-title">Send your mail at</h2>
                                                <p>renzo@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
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
export default Contactus;
