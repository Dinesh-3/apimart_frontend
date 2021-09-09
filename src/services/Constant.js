const API_ENDPOINT =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:5000/api/v1/'
		: 'https://apimart-api.herokuapp.com/api/v1/';

const FILE_UPLOAD_SIZE = 5;

export { API_ENDPOINT, FILE_UPLOAD_SIZE };