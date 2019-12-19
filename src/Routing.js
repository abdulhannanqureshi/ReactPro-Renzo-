import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/home/Home'; 
import About from './component/about/About'; 
import Login from './component/auth/Login'; 
import Signup from './component/auth/Signup'; 
import Resetpassword from './component/auth/Resetpassword'; 
import Forgotpassword from './component/auth/Forgotpassword'; 
import ProductDetails from './component/product/ProductDetails'; 
import ProductList from './component/product/ProductList'; 
import Wishlist from './component/userAdmin/Wishlist'; 
import ChangePassword from './component/userAdmin/ChangePassword'; 
import BankDetails from './component/userAdmin/BankDetails'; 
import Profile from './component/userAdmin/Profile'; 
import Order from './component/userAdmin/Order'; 
import Item from './component/userAdmin/Item'; 
import ProductAgreement from './component/postListing/ProductAgreement'; 
import AgreementUpload from './component/postListing/AgreementUpload'; 
import PostListing from './component/postListing/PostListing'; 
import ProductSummary from './component/postListing/ProductSummary'; 
import ProductSubmitted from './component/postListing/ProductSubmitted'; 


class Routing extends React.Component {
render() {
  return (
    <Router>
    	<div>
	    	<Route exact path="/" component={Home} />
	    	<Route path="/about" component={About} />
	    	<Route path="/login" component={Login} />
	    	<Route path="/signup" component={Signup} />
	    	<Route path="/resetpassword" component={Resetpassword} />
	    	<Route path="/forgotpassword" component={Forgotpassword} />
	    	<Route path="/productdetails" component={ProductDetails} />
	    	<Route path="/productlist" component={ProductList} />
	    	<Route path="/wishlist" component={Wishlist} />
	    	<Route path="/changepassword" component={ChangePassword} />
	    	<Route path="/bankdetails" component={BankDetails} />
	    	<Route path="/profile" component={Profile} />
	    	<Route path="/order" component={Order} />
	    	<Route path="/item" component={Item} />
	    	<Route path="/productagreement" component={ProductAgreement} />
	    	<Route path="/agreementupload" component={AgreementUpload} />
	    	<Route path="/postlisting" component={PostListing} />
	    	<Route path="/productsummary" component={ProductSummary} />
	    	<Route path="/productsubmitted" component={ProductSubmitted} />
	    </div>
	</Router> 
  );
}
}

export default Routing;