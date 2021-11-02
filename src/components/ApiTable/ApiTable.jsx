import { Table, Tag, Space, Popconfirm, Select, Button, Col, message } from 'antd';
import { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../services/Constant';
import { copyToClipboard } from '../../services/helpers';
import { DownloadOutlined } from "@ant-design/icons";
import fileDownload from "../../services/fileDownload";

import axios from "../../services/AxiosConfig";

import "./ApiTable.css";

const ApiTable = (props) => {
  const { dataSource = [], deleteRecord, tableLoading = false } = props;
  
  const [fileTypes, setFileTypes] = useState({});
  const [loading, setLoading] = useState({});

  useEffect(() => {
    const types = {};
    for (let index = 0; index < dataSource.length; index++) {
			const element = dataSource[index];
      types[index] = "csv";
		}
    setFileTypes(types)
  }, [dataSource]);


  const handleFileDownload = async (index, fileName) => {

		setLoading((prev) => ({ ...prev, [index]: true }));
    try {
      const response = await axios.get(`/collection/download/${fileName}`, { responseType: "blob", params: {} });
      fileDownload(response.data, `${fileName}.${fileTypes[index]}`);
      
    } catch (error) {
      message.error(error.response?.message);
    }
		setLoading((prev) => ({ ...prev, [index]: false }));
	};

	const columns = [
		{
			title: <h6>No.</h6>,
			dataIndex: "index",
			key: "index",
			render: (data, record, index) => {
				return index + 1;
			},
		},
		{
			title: <h6>File Name</h6>,
			dataIndex: "fileName",
			key: "fileName",
			render: (text) => <a style={{ textTransform: "capitalize" }}>{text}</a>,
		},
		{
			title: <h6>Endpoint</h6>,
			dataIndex: "endpoint",
			key: "endpoint",
			render: (text, record) => {
				return (
					<a
						href={`${API_ENDPOINT}collection/get/${record.user}/${record.fileName}`}
						target="_blank"
					>{`${record.user}/${record.fileName}`}</a>
				);
			},
		},
		{
			title: <h6>Action</h6>,
			key: "action",
			render: (text, record, index) => (
				<div className="action-container">
					<i
						className="bx bxs-copy bx-sm"
						style={{ color: "black", cursor: "pointer" }}
						onClick={() =>
							copyToClipboard(`${API_ENDPOINT}collection/get/${record.user}/${record.fileName}`)
						}
					></i>
					<Col>
						<Select
							defaultValue="csv"
							value={fileTypes[index]}
							style={{ width: 120 }}
							onChange={(type) => setFileTypes((prev) => ({ ...prev, [index]: type }))}
						>
							<Select.Option value="csv">CSV</Select.Option>
							<Select.Option value="xls">XLS</Select.Option>
							<Select.Option value="xlsx">XLSX</Select.Option>
							<Select.Option value="" disabled>
								coming soon
							</Select.Option>
						</Select>
						<Button
							name="openApi"
							type="primary"
							icon={<DownloadOutlined />}
							onClick={(e) => handleFileDownload(index, record.fileName)}
							// size={"large"}
							loading={loading[index]}
							style={{ marginLeft: "1rem" }}
						></Button>
					</Col>
					<Popconfirm
						title="Are you sure to Delete ？"
						okText="Yes"
						cancelText="No"
						onConfirm={() => deleteRecord(record)}
					>
						<a>Delete</a>
					</Popconfirm>
				</div>
			),
		},
	];

	return <Table loading={tableLoading}  columns={columns} dataSource={dataSource} />;
};

export default ApiTable;
