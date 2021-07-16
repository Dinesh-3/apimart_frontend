const copyToClipboard = async (text) => {
	await navigator.clipboard.writeText(text);
	alert('Link Copied');
};


export {copyToClipboard};