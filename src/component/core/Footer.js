import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	      is_visible: false
	    };
  	}


 	componentDidMount() {
 		var scrollComponent = this;
	    document.addEventListener("scroll", function(e) {
	      scrollComponent.toggleVisibility();
	    });
  	}

  	toggleVisibility() {
  		if (window.pageYOffset > 50) {
	    	this.setState({
	        	is_visible: true
	      	});
	    }
	    else {
	      	this.setState({
	        	is_visible: false
	      	});
	    }
  	}

  	scrollToTop() {
  		window.scrollTo({
	    	top: 0,
	      	behavior: "smooth"
	    });
  	}
	render() {
		const { is_visible } = this.state;
  	return (
    <footer className="footer">
    	<div className="inner-footer">
    		<div className="container">
	    		<div className="row">
		    		<div className="col-md-5">
		    			<div className="inner-foot-det">
		    				<h2 className="foot-title">Contact Us</h2>
			    			<a href="tel:+91 9019 029 029" className="phone-num" ><img src="assets/img/icon/icon_call.png" alt="Phone"/> +91 9019 029 029</a>
			    			<div className="location-wrapper">
			    				<div className="loca-icon"><img src="assets/img/icon/icon_location.png" alt="Location" /></div>
			    				<p>Enzyme Tech Park No-1604, 25th Main Road, 22nd Cross Road, 2nd Sector, HSR Layout, Bengaluru, Karnataka 560102</p>
							</div>
			    			<ul className="social-link">
			    				<li><Link to={'/'}><img src="assets/img/icon/icon_insta.png" alt="Instagram" /></Link></li>
			    				<li><Link to={'/'}><img src="assets/img/icon/icon_face.png" alt="Facebook" /></Link></li>
			    				<li><Link to={'/'}><img src="assets/img/icon/icon_link.png" alt="Linked In" /></Link></li>
			    				<li><Link to={'/'}><img src="assets/img/icon/icon_you.png" alt="You Tube" /></Link></li>
			    			</ul>
		    			</div>
		    		</div>
		    		<div className="col-md-3">
						<h2 className="foot-title">Quick links</h2>
						<ul className="footer-link">
							<li><Link to={'/about'}>About Us</Link></li>
							<li><Link to={'/blog'}>Blogs</Link></li>
							<li><Link to={'/contactus'}>Contact Us</Link></li>
							<li><Link to={'/faq'}>FAQs</Link></li>
							<li><Link to={'/'}>Privacy Policy</Link></li>
							<li><Link to={'/agreement'}>Terms & Conditions</Link></li>
						</ul>
		    		</div>
		    		<div className="col-md-4">
		    			<h2 className="foot-title">News Letter</h2>
		    			<p className="foot-text">Get Our Latest Update In Your Email. Subscribe now to get 20% off on any product.</p>
		    			<form>
		    				<div className="subscribe-wrapper">
		    					<input type="text" placeholder="Email ID" />
								<button type="submit">subscribe</button>
		    				</div>
		    			</form>   
		    		</div>
		    	</div>
	    	</div>
    	</div>
    	<div className="copyright">
    		©2019 Rental Marketplace. Copyrights Reserved by Quest Global Technologies.
    	</div>
    	<div>
	    	{is_visible && (
		    	<div className="pageTop" onClick={() => this.scrollToTop()}>
		    		<img src="assets/img/icon/icon_pagetop.png" alt="Page Top" />
		    	</div>
		    )}
	    </div>
    </footer>		
  );
 }
}

export default Footer;
