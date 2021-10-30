import axios from 'axios';
import { getUserToken } from './AuthService';
import { logout } from './AuthService';
import { API_ENDPOINT } from './Constant';

axios.defaults.baseURL = API_ENDPOINT;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.defaults.timeout = 60 * 1000  // ( 60 * seconds ) 1 mins
axios.defaults.timeoutErrorMessage = "Response timeout takes longer than 1 minutes"

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
		if (error?.response?.status === 403 || error?.response?.status === 401) logout();
		return Promise.reject(error);
	}
);

export default axios;
