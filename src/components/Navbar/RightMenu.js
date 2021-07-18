import React from 'react';
import { Menu, Grid, Button, Popconfirm } from 'antd';
import { useAuth } from '../../context/AuthContext';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const RightMenu = () => {
	const { md } = useBreakpoint();
	const { logout, useUser } = useAuth();
	const [user, setUser] = useUser();

	const handleLogout = (e) => {
		logout();
	};

	return (
		<Menu mode={md ? 'horizontal' : 'inline'}>
			<Popconfirm
				title='Are you sure to Logout？'
				okText='Yes'
				cancelText='No'
				onConfirm={handleLogout}
			>
				<Button>
					Logout
				</Button>
			</Popconfirm>
			{/* <Menu.Item key='app'>
				<a href=''>Signup</a>
			</Menu.Item> */}
		</Menu>
	);
};

export default RightMenu;
