import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Signup extends React.Component {
render() {
  return (
    <div className="login-wrapper1 signup-wrapper">
        <div className="inner-part">
         	<div className="login-details">
         		<div>
         			<h2 className="title-login">Signup</h2>
					<div className="social-btn-wrapper">
						<Link className="facebook-btn" to={'/'}> Signup with Facebook</Link>
						<Link className="google-btn" to={'/'}>Signup with Google</Link>
					</div>
		         	<p className="or-wrapper"> <span></span> OR <span></span></p>
		         	<div className="form-wrapper">
		         		<form action="">
		         			<div className="form-group">
		         				<label>Full Name</label>
		         				<input type="text" className="form-control" name="fname" id="fname" placeholder="Your Name" />
		         			</div>
		         			<div className="form-group">
		         				<label>Email Address</label>
		         				<input type="email" className="form-control" name="email" id="email" placeholder="xyz@email.com" />
		         			</div>
		         			<div className="form-group m-bottom-20">
		         				<label>Password</label>
		         				<input type="password" className="form-control" name="password" id="password" placeholder="* * * * * * * *" />
		         			</div>
		         			<div className="form-group m-bottom-20">
		         				<label>Confirm Password</label>
		         				<input type="password" className="form-control" name="confirm-password" id="confirm-password" placeholder="* * * * * * * *" />
		         			</div>
		         			<div className="m-top-50">
		         				<button type="submit" className="full-btn">Signup</button>
		         			</div>
		         		</form>
		         		<div className="forget-pass">
	         				<div className="checkbox-wrapper">
	         					<p className="dont-account">By signing up, you agree to Renzo's <Link to={'/agreement'}>Terms & Condition & Privacy Policy</Link>	</p>
	         					
	         				</div>
	         				<div className="forget-link">
	         					<p className="dont-account remove-m-sp">Already have an account? <Link to={'/login'}>Login</Link>	</p>
	         				</div>
	         			</div>
		         		
		         	</div>
         		</div>
         	</div>
        </div>
        <div className="inner-part login-logo-wrapper">
        	<div className="login-logo-inner">
        		<p><Link to={'/'}><img src="assets/img/logo/img_logo.png" alt="Logo"/></Link></p>
	         	<h2>Welcome ! <br /> Please Signup to rent our products</h2>
        	</div>
        </div>
    </div> 
  );
}
}
export default Signup;
