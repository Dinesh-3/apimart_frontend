import axios from './AxiosConfig';
import { message } from 'antd';

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
    if(responseData.status === false) message.error(responseData.message);
		return responseData;
	} catch (error) {
    const content =  error.response?.data?.message || error.message || 'Internal Server Error, Please try again';
    message.error(content);
		return {
			status: false,
			message: content,
			status_code: error.response?.data?.status || 500,
		};
	}
};

export { HttpRequest };
