import axios from './AxiosConfig';

const HttpRequest = async ({ path = '', body = {}, query, headers = {}, method = 'GET' }) => {
	try {
		const response = await axios.request({
			method: method,
			url: `${path}${query ? '?' + query : ''}`,
			data: body,
			headers: {
				'Content-Type': 'application/json',
				...headers,
			},
		});
		const responseData = response['data'];
		return responseData;
	} catch (error) {
		return {
			status: false,
			message: error.response?.data?.message || 'Internal Server Error, Please try again',
			status_code: error.response?.data?.status || 500,
		};
	}
};

export { HttpRequest };
