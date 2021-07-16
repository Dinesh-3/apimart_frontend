import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import axios from "../../services/AxiosConfig";

const FileUpload = () => {
	const [fileList, setFileList] = useState([]);
	const [uploading, setUploading] = useState(false);

	const handleUpload = async () => {
		const formData = new FormData();
		formData.append('File', fileList[0]);
		setUploading(true);

    try {
      const response = await axios.post('/collection/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      message.success("File Uploaded Successfully")
    } catch (error) {
      message.error("Failed to Upload File")
    }
    setUploading(false);
		// You can use any AJAX library you like
		// request({
		// 	url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		// 	method: 'post',
		// 	processData: false,
		// 	data: formData,
		// 	success: () => {
		//     setFileList([]);
		//     setUploading(false);
		// 		message.success('upload successfully.');
		// 	},
		// 	error: () => {
		// 		setUploading(false);
		// 		message.error('upload failed.');
		// 	},
		// });
	};

	return (
		<>
			<Upload
				onRemove={(file) => {
					setFileList([]);
				}}
				beforeUpload={(file) => {
					const isLt2M = file.size / 1024 / 1024 < 10;
					if (!isLt2M) {
						message.error('Document must smaller than 10MB!');
						return isLt2M;
					}
					setFileList([file]);
					return false;
				}}
				fileList={fileList}
        maxCount={1}
        accept=".csv,.xlsx"
			>
				<Button icon={<UploadOutlined />}>Select File</Button>
			</Upload>
			<Button
				type='primary'
				onClick={handleUpload}
				disabled={fileList.length === 0}
				loading={uploading}
				style={{ marginTop: 16 }}
			>
				{uploading ? 'Uploading' : 'Start Upload'}
			</Button>
		</>
	);
};

export { FileUpload };
