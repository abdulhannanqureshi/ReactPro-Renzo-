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
import Message from './component/userAdmin/Message'; 
import BankDetails from './component/userAdmin/BankDetails'; 
import Profile from './component/userAdmin/Profile'; 
import Order from './component/userAdmin/Order'; 
import OrderDetails from './component/userAdmin/OrderDetails'; 
import Item from './component/userAdmin/Item'; 
import ProductAgreement from './component/postListing/ProductAgreement'; 
import AgreementUpload from './component/postListing/AgreementUpload'; 
import PostListing from './component/postListing/PostListing'; 
import ProductSummary from './component/postListing/ProductSummary'; 
import ProductSubmitted from './component/postListing/ProductSubmitted'; 
import ShippingInfo from './component/checkout/ShippingInfo'; 
import CheckoutPayment from './component/checkout/CheckoutPayment'; 
import CheckoutCart from './component/checkout/CheckoutCart'; 
import PaymentFailed from './component/PaymentStatus/PaymentFailed'; 
import OrderSuccess from './component/PaymentStatus/OrderSuccess'; 
import ErrorSms from './component/PaymentStatus/ErrorSms'; 
import Agreement from './component/Agreement/Agreement'; 
import Contactus from './component/Contactus/Contactus'; 
import Faq from './component/ForUser/Faq'; 
import FaqDelivery from './component/ForUser/FaqDelivery'; 
import FaqPost from './component/ForUser/FaqPost'; 
import FaqPayments from './component/ForUser/FaqPayments'; 
import FaqCancellations from './component/ForUser/FaqCancellations'; 
import Blog from './component/Blog/Blog'; 
import BlogDetails from './component/Blog/BlogDetails'; 
  

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
	    	<Route path="/orderdetails" component={OrderDetails} />
	    	<Route path="/item" component={Item} />
	    	<Route path="/productagreement" component={ProductAgreement} />
	    	<Route path="/agreementupload" component={AgreementUpload} />
	    	<Route path="/postlisting" component={PostListing} />
	    	<Route path="/productsummary" component={ProductSummary} />
	    	<Route path="/productsubmitted" component={ProductSubmitted} />
	    	<Route path="/shippinginfo" component={ShippingInfo} />
	    	<Route path="/checkoutpayment" component={CheckoutPayment} />
	    	<Route path="/checkoutcart" component={CheckoutCart} />
	    	<Route path="/paymentfailed" component={PaymentFailed} />
	    	<Route path="/ordersuccess" component={OrderSuccess} />
	    	<Route path="/error" component={ErrorSms} />
	    	<Route path="/agreement" component={Agreement} />
	    	<Route path="/contactus" component={Contactus} />
	    	<Route path="/message" component={Message} />
	    	<Route path="/faq" component={Faq} />
	    	<Route path="/faqdelivery" component={FaqDelivery} />
	    	<Route path="/faqpost" component={FaqPost} />
	    	<Route path="/faqpayments" component={FaqPayments} />
	    	<Route path="/faqcancellations" component={FaqCancellations} />
	    	<Route path="/blog" component={Blog} />
	    	<Route path="/blogdetails" component={BlogDetails} />
	    </div> 
	</Router> 
  );
}
}

export default Routing;