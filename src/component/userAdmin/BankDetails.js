import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import AsideTab from './AsideTab';
import './style.css';

class BankDetails extends React.Component{

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
                    <div className="main bank-details">
                        <form action="">
                            <div className="row relevent-pro cate-product-list">
                                <div className="col-sm-12">
                                    <h2 className="title font-size-30">Bank Details</h2>
                                    <p className="title-desc">Update your bank details here</p>
                                    <p className="m-bottom-30"><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
                                </div>
                            </div>
                            <div className="form-wrapper-another">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-6 col-xl-6">
                                        <div className="form-group m-bottom-20">
                                            <label>Account Holder Name</label>
                                            <input type="text" className="form-control" name="acc-holder" id="acc-holder" placeholder="John Doe" autoComplete="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6 col-xl-6">
                                        <div className="form-group m-bottom-20">
                                            <label>Account Number</label>
                                            <input type="number" className="form-control" name="acc-num" id="acc-num" placeholder="125487985632" autoComplete="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6 col-xl-6">
                                        <div className="form-group m-bottom-20">
                                            <label>IFSC Code</label>
                                            <input type="text" className="form-control" name="ifsc-code" id="ifsc-code" placeholder="KKBK0041" autoComplete="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6 col-xl-6">
                                        <div className="form-group m-bottom-20">
                                            <label>Bank Name</label>
                                            <input type="text" className="form-control" name="bank-name" id="bank-name" placeholder="Kotak Mahindra Bank" autoComplete="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6 col-xl-6">
                                        <div className="form-group m-bottom-20">
                                            <label>Bank Address</label>
                                            <input type="text" className="form-control" name="bank-address" id="bank-address" placeholder="M.G. Road" autoComplete="" />
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
                                            <button type="reset" className="another-common-btn">Cancle</button>
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
export default BankDetails;
