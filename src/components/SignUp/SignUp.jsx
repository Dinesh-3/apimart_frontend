import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

import './Signup.css';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { HttpRequest } from '../../services/HttpRequest';
import history from '../../services/history';
import { Link } from 'react-router-dom';

const Signup = () => {
	const [isLoading, setIsLoading] = useState(false);

	const onFinish = async (values) => {
    
		setIsLoading(true);
		const requestObj = {
			method: 'POST',
			path: '/user/signup',
			body: values,
		};
		const response = await HttpRequest(requestObj);
		setIsLoading(false);
		if (response.status === false) return;
    message.success(response.message);
		history.push('/login');
	};

	return (
		<Card className='form-container'>
			<Form name='normal_login' className='signup-form' onFinish={onFinish}>
				<Form.Item
					name='name'
					rules={[
						{
							pattern: '^[a-zA-Z0-9]{5,}$',
							message: 'Minimum 5 characters',
						},
						{
							required: true,
							message: 'Please Enter Company Name!',
						},
					]}
				>
					<Input
						prefix={<UserOutlined className='site-form-item-icon' />}
						size='large'
						placeholder='Username'
					/>
				</Form.Item>
				<Form.Item
					name='email'
					rules={[
						{
							type: 'email',
							message: 'The input is not valid E-mail!',
						},
						{
							required: true,
							message: 'Please input your E-mail!',
						},
					]}
				>
					<Input
						prefix={<MailOutlined className='site-form-item-icon' />}
						size='large'
						placeholder='Email'
					/>
				</Form.Item>
				<Form.Item
					name='password'
					rules={[
						{
							required: true,
							message: 'Please input your Password!',
						},
						{
							pattern: '^.{5,}',
							message: 'Minimum 5 characters required',
						},
					]}
				>
					<Input.Password size='large'  prefix={<LockOutlined className='site-form-item-icon' />} />
				</Form.Item>
				{/* <Form.Item>
					<Form.Item name='remember' valuePropName='checked' noStyle>
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<a className='login-form-forgot' href=''>
						Forgot password
					</a>
				</Form.Item> */}

				<Form.Item>
					<Button
						loading={isLoading}
						type='primary'
						htmlType='submit'
						className='login-form-button'
					>
						Signup
					</Button>
				</Form.Item>
        <div>
          Already have an account ? <Link to="/login"> Login</Link>
        </div>
			</Form>
		</Card>
	);
};

export default Signup;
