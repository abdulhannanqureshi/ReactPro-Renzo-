import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Login extends React.Component {
render() {
  return (
    <div className="login-wrapper1">
        <div className="inner-part">
         	<div className="login-details">
         		<div>
         			<h2 className="title-login">LOGIN</h2>
					<div className="social-btn-wrapper">
						<Link className="facebook-btn" to={'/'}> Login with Facebook</Link>
						<Link className="google-btn" to={'/'}>Login with Google</Link>
					</div>
		         	<p className="or-wrapper"> <span></span> OR <span></span></p>
		         	<div className="form-wrapper">
		         		<form action="">
		         			<div className="form-group">
		         				<label>Email Address</label>
		         				<input type="email" className="form-control" name="email" id="email" placeholder="xyz@email.com" />
		         			</div>
		         			<div className="form-group m-bottom-20">
		         				<label>Password</label>
		         				<input type="password" className="form-control" name="password" id="password" placeholder="* * * * * * * *" />
		         			</div>
		         			<div className="forget-pass">
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
		         					<label>Remember Me</label>
		         				</div>
		         				<div className="forget-link">
		         					<Link to={'/forgotpassword'}>Forgot your password?</Link>	
		         				</div>
		         			</div>
		         			<div>
		         				<button type="submit" className="full-btn">Login</button>
		         			</div>
		         		</form>
		         		<p className="dont-account">Don't have a account? <Link to={'/Signup'}>Sign up.</Link>	</p>
		         	</div>
         		</div>
         	</div>
        </div>
        <div className="inner-part login-logo-wrapper">
        	<div className="login-logo-inner">
        		<p><Link to={'/'}><img src="assets/img/logo/img_logo.png" alt="Logo"/></Link></p>
	         	<h2>Welcome back! <br /> Please login to your account</h2>
        	</div>
        </div>
    </div> 
  );
}
}
export default Login;
