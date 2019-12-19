import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import AsideTab from './AsideTab';
import './style.css';

class ChangePassword extends React.Component{

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
                                <h2 className="title font-size-30">Change Password</h2>
                                <p className="title-desc">You can change your password here</p>
                                <p className="m-bottom-30"><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
                            </div>
                            <div className="col-sm-12 col-lg-10 col-xl-7">
                                <div className="form-wrapper-another">
                                    <form action="">
                                       <div className="form-group m-bottom-20">
                                            <label>Old Password</label>
                                            <input type="password" className="form-control" name="old-password" id="old-password" placeholder="********" autoComplete="" />
                                        </div>
                                        <div className="form-group m-bottom-20">
                                            <label>New Password</label>
                                            <input type="password" className="form-control" name="new-password" id="new-password" placeholder="********" autoComplete="" />
                                        </div>
                                        <div className="form-group m-bottom-20">
                                            <label>Confirm New Password</label>
                                            <input type="password" className="form-control" name="confirm-password" id="confirm-password" placeholder="********" autoComplete="" />
                                        </div>
                                        <div className="btn-wrapper-center m-top-60">
                                            <button type="submit" className="another-common-btn">Save</button>
                                            <button type="reset" className="another-common-btn">Cancle</button>
                                        </div>
                                    </form>
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
export default ChangePassword;
