import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

import "./Login.css";
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const { login } = useAuth();
  const [ isLoading, setIsLoading ] = useState(false);

	const onFinish = async (values) => {
    setIsLoading(true);
		console.log('Received values of form: ', values);
    await login(values);
    setIsLoading(false)
	};

	return (
		<Card className='form-container'>
			<Form name='normal_login' className='login-form' onFinish={onFinish}>
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
					<Input prefix={<MailOutlined />} placeholder='Email' size='large' />
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
					<Input.Password prefix={<LockOutlined className='site-form-item-icon' size='large' />} />
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
						Log in
					</Button>
				</Form.Item>
				<div>
          Don't have an account ? 
					<Link to='/signup'> Signup</Link>
				</div>
			</Form>
		</Card>
	);
};

export default Login;
