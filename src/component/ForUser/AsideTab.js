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
                    <NavLink activeClassName="active"  to={'/faq'}>Renting</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={'/faqdelivery'}> Delivery</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={'/faqpost'}> Post a Listing</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={'/faqpayments'}> Payments</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={'/faqcancellations'}> Cancellations</NavLink>
                </li>
            </ul>
        </div>
    </section>   
  </div>
  );
}
}
export default AsideTab;
