const API_ENDPOINT =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:5000/api/v1/'
		: 'https://apimart-api.herokuapp.com/api/v1/';

const FILE_UPLOAD_SIZE = 5;

const SUPPORTED_TYPES = [
	{ name: 'CSV', value: 'csv' },
	{ name: 'XLS', value: 'xls' },
	{ name: 'XLSX', value: 'xlsx' },
	{ name: 'JSON', value: 'json' },
];

export { API_ENDPOINT, FILE_UPLOAD_SIZE, SUPPORTED_TYPES };