import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import AsideTab from './AsideTab';
import './style.css';

class BankDetails extends React.Component{
    constructor(props) {
        super();
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.keyPressFunc = this.keyPressFunc.bind(this); 
    }
    keyPressFunc(e) {
        if(e.which === 8) {
            var val = this.state.value;
            console.log("keyup",val);
            if(val.length === 3 || val.length === 8 || val.length === 16) {
                val = val.slice(0, val.length-1);
                console.log(val)
                this.setState({value: val})
            }
        }
    }
    handleChange(e) {
        var val = e.target.value;
        console.log('called', val)
        if (val.length === 2) {
            val += '-';
        }
        else if (val.length === 7) {
            val += '-';
        }
        else if (val.length === 15) {
            val += '-';
        }
        this.setState({
            value: val
        });
    }
render() {
    const {value} = this.state;
    const placeholder = '03-1925-8085905-30';
  return ( 
  <div>
    <Header />
    <div className="wishlist-wrapper article-wrapper">
        <section className="product-list-wrapper">
            <div className="container">
                <div className="custom-row">
                    <div className="aside">
                        <AsideTab />
                    </div>
                    <div className="main bank-details">
                        <form>
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
                                            <input type="text" className="form-control" 
                                                placeholder={placeholder}
                                                maxLength="18" 
                                                value={value} 
                                                onChange={this.handleChange} 
                                                onKeyDown={this.keyPressFunc} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-6 col-xl-6">
                                        <div className="form-group m-bottom-20">
                                            <label>Upload Bank Statement</label>
                                            <div className="browse-field">
                                                <p>Upload Bank Statement</p>
                                                <button>Upload</button>
                                                <input type="file" className="form-control hide-field" name="bank-state" id="bank-state" placeholder="Upload Bank Statement" autoComplete="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="btn-wrapper-center m-top-40">
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
export default BankDetails;
