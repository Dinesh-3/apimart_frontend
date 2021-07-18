import { Upload, Button, message, Space, Form } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import axios from "../../services/AxiosConfig";

import "./UploadFile.css";

const FileUpload = (props) => {
  const { setTableForUpload } = props;
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
      if(response.data.status == false) return message.error(response.data.message);
      const record = response.data.data || [];
      setTableForUpload(record);
      message.success("File Uploaded Successfully")
    } catch (error) {
      message.error("Failed to Upload File")
    } finally {
      setFileList([]);
      setUploading(false);
    }
	};

	return (
		<div className='upload-container'>
			<Space size={15} style={{alignItems: "flex-start"}}>
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
					accept='.csv,.xlsx,.xls'
				>
					<Button icon={<UploadOutlined />}>Select File</Button>
				</Upload>
				<Button
					type='primary'
					onClick={handleUpload}
					disabled={fileList.length === 0}
					loading={uploading}
				>
					{uploading ? 'Uploading' : 'Start Upload'}
				</Button>
			</Space>
		</div>
	);
};

export { FileUpload };
