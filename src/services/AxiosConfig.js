import axios from 'axios';
import { getUserToken } from './AuthService';
import { logout } from './AuthService';
import { API_ENDPOINT } from './Constant';

axios.defaults.baseURL = API_ENDPOINT;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(function (config) {
  const userToken = getUserToken();
  if(userToken) {
    config.headers.Authorization = userToken;
  }
	return config;
});

axios.interceptors.response.use(
	function (response) {
		return Promise.resolve(response);
	},
	function (error) {
		if (error?.response?.data?.status === 401) logout();
		return Promise.reject(error);
	}
);

export default axios;
