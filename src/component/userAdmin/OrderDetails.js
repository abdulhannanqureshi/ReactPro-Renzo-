import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import AsideTab from './AsideTab';
import './style.css';

class OrderDetails extends React.Component{

render() {
  return ( 
  <div>
    <Header />
    <div className="wishlist-wrapper article-wrapper">
        <section className="product-list-wrapper">
            <div className="container">
                <div className="custom-row">
                    <div className="aside">
                        <AsideTab />
                    </div>
                    <div className="main p-left-40">
                        <div className="row relevent-pro cate-product-list">
                            <div className="col-sm-12">
                                <h2 className="title font-size-30">Item Details</h2>
                                <p className="title-desc">Items rented and items owned.</p>
                                <p className="m-bottom-30"><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
                            </div>
                        </div>
                        <div className="wrapper-tabs-rds tab-my-order">
                            <div className="tab-content">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-12 col-xl-12">
                                        <div className="item-owned-wrapper">
                                            <div className="item-owned-img">
                                                <div className="product-img">
                                                    <ul className="rating-wrapper">
                                                        <li>
                                                            <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                        </li>
                                                        <li>
                                                            <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                        </li>
                                                        <li>
                                                            <img src="assets/img/icon/icon_star_full.png" alt="star" />
                                                        </li>
                                                        <li>
                                                            <img src="assets/img/icon/icon_star_half.png" alt="star" />
                                                        </li>
                                                        <li>
                                                            <img src="assets/img/icon/icon_star_empty.png" alt="star" />
                                                        </li>
                                                    </ul>
                                                    <img src="assets/img/image/product_image1.png" alt="Items" />
                                                </div>
                                            </div>
                                            <div className="item-owned-details">
                                                <table className="order-table-wrapper">
                                                    <tbody>
                                                        <tr>
                                                            <th className="width-150">Placed On</th>
                                                            <td>: 22 Jun 2019</td>
                                                            <td className="text-right">
                                                                <span className="clr-rioja">Delivered</span>  1
                                                                on 30 Nov, 2019 | 
                                                                <span> 11:00 am</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className="width-150">Order No</th>
                                                            <td>: 1113028</td>
                                                        </tr>
                                                        <tr>
                                                            <th className="width-150">Price Details</th>
                                                            <th>: MRP</th>
                                                            <td>: 700.00</td>
                                                        </tr>
                                                        <tr>
                                                            <th></th>
                                                            <th className="p-left-8"> GST</th>
                                                            <td>: 80.00</td>
                                                        </tr>
                                                        <tr>
                                                            <th></th>
                                                            <th className="p-left-8"> Item Discount</th>
                                                            <td>: (-)0.00</td>
                                                        </tr>
                                                        <tr>
                                                            <th></th>
                                                            <th className="p-left-8"> Netbanking</th>
                                                            <td>: 780</td>
                                                        </tr>
                                                        <tr>
                                                            <th></th>
                                                            <th className="p-left-8"> Total</th>
                                                            <td>: 780</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="table-wrapper">
                                                    <table className="order-table-wrapper">
                                                        <tbody>
                                                            <tr>
                                                                <th className="width-150">Shipping Address </th>
                                                                <td>: John <br/>
                                                                    <span className="p-left-8">
                                                                    105 jairampur colony <br/> 
                                                                    </span>
                                                                    <span className="p-left-8">Indore G.P.O., , Indore, - 452001 
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="table-wrapper bdr-bottom-tbl">
                                                    <table className="order-table-wrapper">
                                                        <tbody>
                                                            <tr>
                                                                <th className="width-150">Payment Mode </th>
                                                                <td>: Net Banking</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
        
         
    </div>
    <Footer />
  </div>
  );
}
}
export default OrderDetails;
