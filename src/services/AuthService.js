import history from '../services/history';

const logout = () => {
	localStorage.clear();
	history.push('/login');
};

const getUser = () => {
	const user = localStorage.getItem('user');
	if (user) {
		return true;
	} else {
		return false;
	}
};

const isUserExist = () => {
	const user = localStorage.getItem('user');
	if (user) {
		return true;
	} else {
		return false;
	}
};

const getUserToken = () => {
	const token = localStorage.getItem('token');
	if (token) {
		return token;
	} else {
		return false;
	}
};

export { logout, isUserExist, getUserToken, getUser };
