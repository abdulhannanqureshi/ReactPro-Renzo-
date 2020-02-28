import React from 'react';
import { Link } from 'react-router-dom';
import classnames from "classnames";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

class HeaderLogin extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
        	prevScrollpos: window.pageYOffset,
	        visible: true,
	        scrollPage: true  
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        this.setState({scrollPage: !this.state.scrollPage})
    }
	
	componentDidMount() {
    	window.addEventListener("scroll", this.handleScroll);
  	}

  	//Remove the event listener when the component is unmount.
	componentWillUnmount() {
	    window.removeEventListener("scroll", this.handleScroll);
	}
	handleScroll = () => {
	    const { prevScrollpos } = this.state;

	    const currentScrollPos = window.pageYOffset;
	    const visible = prevScrollpos > currentScrollPos;

	    this.setState({
	      prevScrollpos: currentScrollPos,
	      visible
	    });
  	};

 render() {
  return (
   <header  id="header" className={classnames("header-login", {
          "header-fixed": !this.state.visible
        })}>
   
		<div id="headerIn" className="container-fluid">
			<div className="row clearfix">
				<div className="header-gnavi col-sm-6 col-8">
					<h1 id="headerLogo">
						<Link to={'/'}>
							<img src="assets/img/logo/img_logo.png" alt="Logo" />
						</Link>
					</h1>
					<nav id="gNavi">
						<ul>
							<li>
								<Link to='#'>Electronics</Link>
								<div className="navi-dropdown-wrapper">
									<div className="drop-flex">
										<div className="drop-item1">
											<h2 className="title-drop">Gadgets</h2>
											<ul>
												<li><Link to={'/'}> DSLR</Link> </li>
												<li><Link to={'/'}>Play Station</Link></li>
												<li><Link to={'/'}>Gaming PC</Link></li>
												<li><Link to={'/'}>Dron Cameras</Link></li>
												<li><Link to={'/'}>Macbook Pro</Link></li>
												<li><Link to={'/'}>40 Inch TV</Link></li>
											</ul>
										</div>
										<div className="drop-item1">
											<div className="m-bottom-20">
												<h2 className="title-drop">sound equipment</h2>
												<ul>
													<li><Link to={'/'}> collar Mic</Link> </li>
													<li><Link to={'/'}>Microphone</Link></li>
												</ul>
											</div>

											<h2 className="title-drop">sound equipment</h2>
											<ul>
												<li><Link to={'/'}> collar Mic</Link> </li>
												<li><Link to={'/'}>Microphone</Link></li>
											</ul>
										</div>
									</div>
								</div>
							</li>
							<li><Link to={'/'}>Outdoor</Link></li>
							<li><Link to={'/'}>Party</Link></li>
							<li><Link to={'/'}>Cameras</Link></li>
						</ul>
					</nav>
				</div>
				<div className="col-sm-6 col-4 align-self-center text-right">
					<p className="navbarToggle visibleTS">
						<img onClick={this.toggleMenu} src="assets/img/icon/icon_menu.png" alt="Menu" />
					</p>
					<div id="headerLinks">
						<form className="search-wrapper">
							<input className="search-field" type="text" placeholder="What you want to rent" />
						</form>
						<Link to={'/wishlist'}>
							<img src="assets/img/icon/icon_heart.png" alt="Heart" />
						</Link>
						<div className="custom-drop">
							<img src="assets/img/image/img_user.png" alt="user" />
							<DropdownButton title="Hi, John">
								<Dropdown.Item href="/profile">Profile</Dropdown.Item>
								<Dropdown.Item href="/">Logout</Dropdown.Item>
							</DropdownButton>
						</div>
						<Link to={'/postlisting'} className="common-btn">Post a listing</Link>
					</div>
				</div>	
			</div>
		</div>
		<div className={this.state.scrollPage ? '' : 'menuShow'}>
			<div className="navbarCollapse">
				<ul>
					<li>
						<Link to={'#'}>Electronics
						</Link>
						<div className="navi-dropdown-wrapper-sp">
							<div className="drop-flex">
								<div className="drop-item1">
									<h2 className="title-drop">Gadgets</h2>
									<ul>
										<li><Link to={'/'}> DSLR</Link> </li>
										<li><Link to={'/'}>Play Station</Link></li>
										<li><Link to={'/'}>Gaming PC</Link></li>
										<li><Link to={'/'}>Dron Cameras</Link></li>
										<li><Link to={'/'}>Macbook Pro</Link></li>
										<li><Link to={'/'}>40 Inch TV</Link></li>
									</ul>
								</div>
								<div className="drop-item1">
									<div className="m-bottom-20">
										<h2 className="title-drop">sound equipment</h2>
										<ul>
											<li><Link to={'/'}> collar Mic</Link> </li>
											<li><Link to={'/'}>Microphone</Link></li>
										</ul>
									</div>

									<h2 className="title-drop">sound equipment</h2>
									<ul>
										<li><Link to={'/'}>collar Mic</Link> </li>
										<li><Link to={'/'}>Microphone</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</li>
					<li><Link to={'/'}>Outdoor</Link></li>
					<li><Link to={'/'}>Party</Link></li>
					<li><Link to={'/'}>Cameras</Link></li>
				</ul>
				<ul className="menu-login">				
					<li><form className="search-wrapper">
							<input className="search-field" type="text" placeholder="What you want to rent" />
						</form></li> 
					<li><Link to={'/wishlist'}><img src="assets/img/icon/icon_heart.png" alt="Heart" /></Link></li>
					<li>
						<div className="custom-drop">
							<img src="assets/img/image/img_user.png" alt="user" />
							<DropdownButton title="Hi, John">
								<Dropdown.Item href="#">Profile</Dropdown.Item>
								<Dropdown.Item href="#">Logout</Dropdown.Item>
							</DropdownButton>
						</div>
					</li>
					<li><Link to={'/postlisting'} className="common-btn">Post a listing</Link></li>
				</ul>
			</div>
		</div>
	</header>
  );
}
}

export default HeaderLogin;
