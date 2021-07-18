import React, { Component, useState } from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { Drawer, Button } from 'antd';

import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [ current, setCurrent ] = useState('mail');
  const [ visible, setVisible ] = useState(false);

	const showDrawer = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

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
						<Button className='barsMenu' type='primary' onClick={() => showDrawer()}>
							<span className='barsBtn'></span>
						</Button>
						<Drawer
							title='Basic Drawer'
							placement='right'
							closable={false}
							onClose={() => onClose()}
							visible={visible}
						>
							<LeftMenu />
							<RightMenu />
						</Drawer>
					</div>
				</nav>
			</div>
		);
}

export default Navbar;
