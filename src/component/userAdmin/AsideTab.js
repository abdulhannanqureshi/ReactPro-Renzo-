import React from 'react';
import { NavLink } from 'react-router-dom';

class AsideTab extends React.Component{


render() {
  return ( 
  <div className="aside-tab-wrapper">
    <section>
        <div>
             <ul>
                <li>
                    <NavLink activeClassName="active"  to={'/profile'}> 
                        <img src="assets/img/icon/icon_user1.png" alt="User" />  My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active"  to={'/wishlist'}>
                        <img src="assets/img/icon/icon_heart1.png" alt="Heart" /> My Wishlist
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active"  to={'/item'}>
                        <img src="assets/img/icon/icon_cube.png" alt="Item" /> Listing Posted 
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active"  to={'/order'}>
                        <img src="assets/img/icon/icon_cart.png" alt="Cart" /> Rented
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active"  to={'/bankdetails'}> 
                       <img src="assets/img/icon/icon_bank.png" alt="Bank Details" /> Bank Details
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active"  to={'/changepassword'}> 
                        <img src="assets/img/icon/icon_pass.png" alt="Change password " /> Change Password
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active"  to={'/message'}> 
                        <img src="assets/img/icon/icon_message.png" alt="Message " /> My Messages
                    </NavLink>
                </li>
            </ul>
        </div>
    </section>   
  </div>
  );
}
}
export default AsideTab;
