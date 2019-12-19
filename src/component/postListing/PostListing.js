import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import { Link } from 'react-router-dom';
import './style.css';

class PostListing extends React.Component{

render() {
  return ( 
  <div>
    <Header />
    <div className="ProductAgreement article-wrapper">
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
                        <Link to="{'/'}" className="step-btn">Agreement</Link>    
                    </div>
                    <div className="col-sm-4 text-right">
                        <Link to="{'/'}" className="step-btn">Review Form</Link>    
                    </div>
                    <div className="bdr-step"></div>
                </div>
                <div className="form-wrapper">
                    <form action="">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Product Category</label>
                                    <select defaultValue={'default'}  name="product-cate" id="product-cate" className="form-control">
                                        <option value='default'>Select Product Category</option>
                                        <option value="Category 1">Category 1</option>
                                        <option value='Category 2'>Category 2</option>
                                    </select>
                                </div>  
                                <div className="form-group">
                                    <label>Product Name</label>
                                    <input type="text" className="form-control" name="product-name" id="product-name" placeholder="Precise Name is Always Better" />
                                </div> 
                                <div className="form-group">
                                    <label>Product Description</label>
                                    <textarea name="product-des" id="product-des" cols="30" rows="5" placeholder="Enter Product Description"></textarea>
                                </div>  
                            </div> 
                            <div className="col-md-6">
                                 <div className="form-group">
                                    <label>Rental Price</label>
                                    <div className="field-row">
                                        <div className="field-col-3">
                                            <input type="text" className="form-control" name="daily" id="daily" placeholder="Daily" />
                                        </div>
                                        <div className="field-col-3">
                                            <input type="text" className="form-control" name="weekly" id="weekly" placeholder="Weekly" />
                                        </div>
                                        <div className="field-col-3">
                                            <input type="text" className="form-control" name="monthly" id="monthly" placeholder="Monthly" />
                                        </div>
                                    </div>
                                </div> 
                                <div className="form-group">
                                    <label>Street</label>
                                    <input type="text" className="form-control" name="street" id="street" placeholder="Enter Street" />
                                </div> 
                                <div className="form-group">
                                    <label>SUBURB</label>
                                    <input type="text" className="form-control" name="suburb" id="suburb" placeholder="Enter Suburb Area" />
                                </div> 
                                <div className="form-group">
                                    <label>Region</label>
                                    <input type="text" className="form-control" name="region" id="region" placeholder="Enter Region" />
                                </div> 
                            </div>
                            <div className="col-sm-12 m-bottom-30">
                                <div className="form-group">
                                    <label>Product Images</label>
                                    <div className="browese-full">
                                        <h3 className="dragTitle">Drag & drop files here</h3>
                                        <p className="dragOr">or</p>
                                        <p><Link to={'/'} className="common-btn-rds">BROWSE FILES</Link></p>
                                        <p className="browse-text">Prepare images before uploading. Upload image larger than 355px. <br/> Max number of images is 5. Max image size is 2 MB.</p>
                                        <input type="file" />
                                    </div>
                                </div> 
                            </div>    
                            <div className="col-sm-12 m-bottom-30">
                                <div className="text-center m-bottom-30">
                                    <Link to={'/'} className="another-common-btn btn-increase-width">NEXT STEP ---> Agreement</Link>
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
export default PostListing;
