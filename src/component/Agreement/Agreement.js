import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';

class Agreement extends React.Component{

render() {
  return ( 
  <div>
    <Header />
    <div className="ProductAgreement article-wrapper">
        <section className="product-agree-wrapper">
            <div className="container">
                <div className="text-center">
                    <h2 className="title font-size-32">Renzo Terms & Conditions</h2>
                    <p className="title-desc">Post a listing that you want to give on rent.</p>
                    <p><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
                </div>
                <div className="row m-top-60 m-bottom-70">
                    <div className="col-sm-12">
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
                                <label>I agree to terms & condition</label>
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
export default Agreement;
