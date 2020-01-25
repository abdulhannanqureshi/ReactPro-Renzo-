import React from 'react';
import Header from '../core/Header';
import Footer from '../core/Footer';
import AsideTab from './AsideTab';
import { Link } from 'react-router-dom';
import './style.css';

class Message extends React.Component{

render() {
  return (  
  <div>
    <Header />
    <div className="wishlist-wrapper article-wrapper">
        <section className="product-list-wrapper">
            <div className="">
                <div className="custom-row">
                    <div className="aside">
                        <AsideTab />
                    </div>
                    <div className="main p-left-30">
                        <div className="row relevent-pro cate-product-list">
                            <div className="col-sm-12">
                                <h2 className="title font-size-30">My Messages</h2>
                                <p className="title-desc">View all your chats here.</p>
                                <p className="m-bottom-30"><img src="assets/img/icon/icon_title.png" alt="Icon Title" /></p>
                            </div>
                            <div className="col-sm-12 col-lg-12 col-xl-12">
                                <div className="custom-row chatWrapper">
                                    <div className="chat-user">
                                        <div className="chat-filter">
                                            <input type="text" placeholder="Search Chats" />
                                        </div>
                                        <ul className="each-user-wrapper">
                                            <li className="active">
                                                <Link to={'/'}>
                                                    <div className="each-user custom-row align-items-center">
                                                        <div className="each-user-img">
                                                            <img src="assets/img/image/img_user.png" alt="User" />
                                                        </div>
                                                        <div className="each-user-detail">
                                                            <div className="d-flex justify-content-between m-bottom-5">
                                                                <h2 className="small-title font-size-15">Alice Whitman</h2>
                                                                <span className="clr-gray font-size-14">11:25 am</span> 
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <p className="font-size-14">We can finalise for Rs 1000.</p>
                                                                <span className="cutome-badge">2</span> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/'}>
                                                    <div className="each-user custom-row align-items-center">
                                                        <div className="each-user-img">
                                                            <img src="assets/img/image/img_user.png" alt="User" />
                                                        </div>
                                                        <div className="each-user-detail">
                                                            <div className="d-flex justify-content-between m-bottom-5">
                                                                <h2 className="small-title font-size-15">Alice Whitman</h2>
                                                                <span className="clr-gray font-size-14">11:25 am</span> 
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <p className="font-size-14">We can finalise for Rs 1000.</p>
                                                                <span className="cutome-badge">2</span> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/'}>
                                                    <div className="each-user custom-row align-items-center">
                                                        <div className="each-user-img">
                                                            <img src="assets/img/image/img_user.png" alt="User" />
                                                        </div>
                                                        <div className="each-user-detail">
                                                            <div className="d-flex justify-content-between m-bottom-5">
                                                                <h2 className="small-title font-size-15">Alice Whitman</h2>
                                                                <span className="clr-gray font-size-14">11:25 am</span> 
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <p className="font-size-14">We can finalise for Rs 1000.</p>
                                                                <span className="cutome-badge">2</span> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/'}>
                                                    <div className="each-user custom-row align-items-center">
                                                        <div className="each-user-img">
                                                            <img src="assets/img/image/img_user.png" alt="User" />
                                                        </div>
                                                        <div className="each-user-detail">
                                                            <div className="d-flex justify-content-between m-bottom-5">
                                                                <h2 className="small-title font-size-15">Alice Whitman</h2>
                                                                <span className="clr-gray font-size-14">11:25 am</span> 
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <p className="font-size-14">We can finalise for Rs 1000.</p>
                                                                <span className="cutome-badge">2</span> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={'/'}>
                                                    <div className="each-user custom-row align-items-center">
                                                        <div className="each-user-img">
                                                            <img src="assets/img/image/img_user.png" alt="User" />
                                                        </div>
                                                        <div className="each-user-detail">
                                                            <div className="d-flex justify-content-between m-bottom-5">
                                                                <h2 className="small-title font-size-15">Alice Whitman</h2>
                                                                <span className="clr-gray font-size-14">11:25 am</span> 
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <p className="font-size-14">We can finalise for Rs 1000.</p>
                                                                <span className="cutome-badge">2</span> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="chat-details">
                                        <div className="chat-details-inner">
                                            <h2 className="subTitle font-size-20">Alice Whitman</h2>
                                            <div className="wrapper-other-chat">
                                                <div className="custom-row chat-dtls-wrapper">
                                                    <div className="chat-dtls-img">
                                                        <img src="assets/img/image/img_user.png" alt="User" />
                                                    </div>
                                                    <div className="chat-dtls">
                                                        <h3 className="small-title f-w-500 m-bottom-5">Alice Whitman</h3>
                                                        <p className="font-size-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                        <p className="text-right"><span className="clr-gray font-size-14">13 hours ago</span></p>
                                                    </div>
                                                </div>
                                                <div className="custom-row chat-dtls-wrapper">
                                                    <div className="chat-dtls-img">
                                                        <img src="assets/img/image/img_user.png" alt="User" />
                                                    </div>
                                                    <div className="chat-dtls">
                                                        <h3 className="small-title f-w-500 m-bottom-5">Alice Whitman</h3>
                                                        <p className="font-size-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                        <p className="text-right"><span className="clr-gray font-size-14">13 hours ago</span></p>
                                                    </div>
                                                </div>
                                                <div className="custom-row chat-dtls-wrapper">
                                                    <div className="chat-dtls-img">
                                                        <img src="assets/img/image/img_user.png" alt="User" />
                                                    </div>
                                                    <div className="chat-dtls">
                                                        <h3 className="small-title f-w-500 m-bottom-5">Alice Whitman</h3>
                                                        <p className="font-size-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                        <p className="text-right"><span className="clr-gray font-size-14">13 hours ago</span></p>
                                                    </div>
                                                </div>
                                                <div className="custom-row chat-dtls-wrapper">
                                                    <div className="chat-dtls-img">
                                                        <img src="assets/img/image/img_user.png" alt="User" />
                                                    </div>
                                                    <div className="chat-dtls">
                                                        <h3 className="small-title f-w-500 m-bottom-5">Alice Whitman</h3>
                                                        <p className="font-size-14">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                                        <p className="text-right"><span className="clr-gray font-size-14">13 hours ago</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="chat-box">
                                                <textarea name="" id="" cols="30" rows="3" placeholder="Write your reply here"></textarea>
                                                <p className="text-right m-top-10"><button type="" className="another-common-btn remove-bdr-rds btn-width-150">Send</button></p>
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
export default Message;
