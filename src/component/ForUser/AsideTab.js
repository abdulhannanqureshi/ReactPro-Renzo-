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
                    <NavLink activeClassName="active"  to={'/'}>Renting</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}> Delivery</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}> Post a Listing</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}> Payments</NavLink>
                </li>
                <li>
                    <NavLink to={'/'}> Cancellations</NavLink>
                </li>
            </ul>
        </div>
    </section>   
  </div>
  );
}
}
export default AsideTab;
