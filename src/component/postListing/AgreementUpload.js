import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import { Link } from 'react-router-dom';
import './style.css';

class AgreementUpload extends React.Component{

render() {
  return ( 
  <div>
    <Header />
    <div className="ProductAgreement article-wrapper m-bottom-60">
        <section className="product-agree-wrapper">
            <div className="container">
                <div className="text-center">
                    <h2 className="title font-size-32">Post a listing and earn</h2>
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
                        <h2 className="subTitle1 text-center font-size-26">Product Agreement</h2>
                        <div className="upload-document">
                            <img className="img-pdf" src="assets/img/icon/icon_pdf.png" alt="PDF Document" />
                            <button>Product Agreement</button>
                            <button className="delete-btn-rem"><img src="assets/img/icon/icon_delete.png" alt="Delete" /></button>
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
export default AgreementUpload;
