import { message } from "antd";

const copyToClipboard = async (text) => {
	await navigator.clipboard.writeText(text);
  message.success("Link Copied")
};


export {copyToClipboard};