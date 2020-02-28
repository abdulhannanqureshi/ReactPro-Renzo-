import React from 'react';
import HeaderLogin from '../core/HeaderLogin';
import Footer from '../core/Footer';
import AsideTab from './AsideTab';
import './style.css';

class Profile extends React.Component{

render() { 
  return ( 
  <div>
    <HeaderLogin />
    <div className="wishlist-wrapper article-wrapper">
        <section className="product-list-wrapper">
            <div className="container">
                <div className="custom-row">
                    <div className="aside">
                        <AsideTab />
                    </div>
                    <div className="main bank-details">
                        <form action="">
                            <div className="row relevent-pro cate-product-list">
                                <div className="col-sm-12">
                                    <div className="getVerified datepicker-wrapper">
                                        <div>
                                            <h2 className="title font-size-30">Personal Information</h2>
                                            <p className="title-desc">Update your information here</p>
                                            <p className="m-bottom-30"><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
                                        </div>
                                        <div className="sp-right">
                                            <button className="another-common-btn small-btn">Get Verified</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-wrapper-another">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6 col-xl-6">
                                        <div className="form-group m-bottom-20">
                                            <label>Full Name</label>
                                            <input type="text" className="form-control" name="full-name" id="full-name" placeholder="John Doe" autoComplete="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6 col-xl-6">
                                        <div className="form-group m-bottom-20">
                                            <label>Gender</label>
                                            <select defaultValue={'default'}  name="gender" id="gender" className="form-control">
                                                
                                                <option value='select'>Select Gender</option>
                                                <option value="default">Male</option>
                                                <option value='Female'>Female</option>
                                            </select>
                                        </div> 
                                    </div>
                                    <div className="col-sm-6 col-lg-6 col-xl-6">
                                        <div className="form-group m-bottom-20">
                                            <label>Email Address</label>
                                            <input type="email" className="form-control" name="email-address" id="email-address" placeholder="xyz@gmail.com" autoComplete="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6 col-xl-6">
                                        <div className="form-group m-bottom-20">
                                            <label>Phone Number</label>
                                            <input type="number" className="form-control" name="phone-number" id="phone-number" placeholder="+91-9822147258" autoComplete="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6 col-xl-6">
                                        <div className="form-group m-bottom-20">
                                            <label>Address</label>
                                            <input type="text" className="form-control" name="address" id="address" placeholder="1/2 Palasiya, Indore (M.P)" autoComplete="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6 col-xl-6">
                                        <div className="form-group m-bottom-20">
                                            <label>Zip Code</label>
                                            <input type="number" className="form-control" name="zip-code" id="zip-code" placeholder="452002" autoComplete="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="btn-wrapper-center m-top-60">
                                            <button type="submit" className="another-common-btn">Save</button>
                                            <button type="reset" className="another-common-btn">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
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
export default Profile;
