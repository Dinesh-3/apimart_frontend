import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		return getSavedValue(key, initialValue);
	});

	useEffect(() => {
		if (!value) return localStorage.removeItem(key);

		if (typeof value === 'object') return localStorage.setItem(key, JSON.stringify(value));

		return localStorage.setItem(key, value);
	}, [key, value]);

	return [value, setValue];
};

const getSavedValue = (key, initialValue) => {
	if (initialValue instanceof Function) return initialValue();

	if (key === 'user') return JSON.parse(localStorage.getItem(key));

	return localStorage.getItem(key);
};


export { useLocalStorage };
