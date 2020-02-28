import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Resetpassword extends React.Component {
render() {
  return (
    <div className="login-wrapper1 forgot-wrapper">
        <div className="inner-part">
         	<div className="login-details">
         		<div>
         			<h2 className="title-login">Reset password </h2>
					<div className="form-wrapper">
		         		<form action="">
		         			<div className="form-group m-bottom-20">
		         				<label>Password</label>
		         				<input type="password" className="form-control" name="password" id="password" placeholder="* * * * * * * *" />
		         			</div>
		         			<div className="form-group m-bottom-20">
		         				<label>Confirm Password</label>
		         				<input type="password" className="form-control" name="confirm-password" id="confirm-password" placeholder="* * * * * * * *" />
		         			</div>
		         			<div className="m-top-40">
		         				<button type="submit" className="full-btn">Submit</button>
		         			</div>
		         		</form>
		         	</div>
         		</div>
         	</div>
        </div>
        <div className="inner-part login-logo-wrapper">
        	<div className="login-logo-inner">
        		<p><Link to={'/'}><img src="assets/img/logo/img_logo.png" alt="Logo"/></Link></p>
	         	<h2>Reset your password? <br />  Set a New One</h2>
        	</div>
        </div>
    </div> 
  );
}
}
export default Resetpassword;
