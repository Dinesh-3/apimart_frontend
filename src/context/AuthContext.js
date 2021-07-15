import axios from 'axios';
import { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/Hooks';
import { HttpRequest } from '../services/HttpRequest';
import history from '../services/history';

const AuthContext = createContext({
	useUser: () => {},
	useToken: () => {},
	login: async () => {},
	logout: () => {},
});

export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = (props) => {
	const [user, setUser] = useLocalStorage('user');
	const [token, setToken] = useLocalStorage('token');

	useEffect(() => {
		const source = axios.CancelToken.source();

		const getUserDetailRequest = async () => {
			const requestObj = {
				path: '/user',
				method: 'GET'
			};
			const res = await HttpRequest(requestObj);

			if (res['status'] === true) setUser(res['data']);
		};
		getUserDetailRequest();
		return () => {
			source.cancel();
		};
	}, []);

	const login = async (form) => {
		const requestObject = {
			path: '/user/login',
			method: 'POST',
			body: form,
		};
		const res = await HttpRequest(requestObject);
		if (res['status'] === true) {
			setToken(res.data.token);
			setUser(res.data.user);
			history.push('/');
			return;
		}
    alert("Invalid credential Try again")
	};

	const logout = () => {
		setUser();
		setToken();
		localStorage.clear();
		history.push('/login');
	};

	const variables = {
		useUser: () => [user, setUser],
		useToken: () => [token, setToken],
		login,
		logout,
	};

	return <AuthContext.Provider value={variables}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
