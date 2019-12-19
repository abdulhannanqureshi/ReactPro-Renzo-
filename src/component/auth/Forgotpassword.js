import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Forgotpassword extends React.Component {
render() {
  return (
    <div className="login-wrapper1 forgot-wrapper">
        <div className="inner-part">
         	<div className="login-details">
         		<div>
         			<h2 className="title-login">Forgot password </h2>
					<div className="form-wrapper">
		         		<form action="">
		         			<div className="form-group">
		         				<label>Email Address</label>
		         				<input type="email" className="form-control" name="email" id="email" placeholder="xyz@email.com" />
		         			</div>
		         			<div className="m-top-40">
		         				<button type="submit" className="full-btn">Continue</button>
		         			</div>
		         		</form>
		         	</div>
         		</div>
         	</div>
        </div>
        <div className="inner-part login-logo-wrapper">
        	<div className="login-logo-inner">
        		<p><Link to={'/'}><img src="assets/img/logo/img_logo.png" alt="Logo"/></Link></p>
	         	<h2>Forgot your password? <br /> Enter your email address to get back <br /> On track </h2>
        	</div>
        </div>
    </div> 
  );
}
}
export default Forgotpassword;
