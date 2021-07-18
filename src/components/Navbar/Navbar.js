import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { Drawer, Button } from 'antd';

import "./Navbar.css";
import { Link } from 'react-router-dom';

class Navbar extends Component {
	state = {
		current: 'mail',
		visible: false,
	};
	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<div className="menuBar">
				<nav className='nav-container'>
					<div className='logo'>
						<Link to='/'>ApiMart</Link>
					</div>
					<div className='menuCon'>
						<div className='leftMenu'>
							<LeftMenu />
						</div>
						<div className='rightMenu'>
							<RightMenu />
						</div>
						<Button className='barsMenu' type='primary' onClick={this.showDrawer}>
							<span className='barsBtn'></span>
						</Button>
						<Drawer
							title='Basic Drawer'
							placement='right'
							closable={false}
							onClose={this.onClose}
							visible={this.state.visible}
						>
							<LeftMenu />
							<RightMenu />
						</Drawer>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
