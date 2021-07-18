import { Table, Tag, Space, Popconfirm } from 'antd';
import { API_ENDPOINT } from '../../services/Constant';
import { copyToClipboard } from '../../services/helpers';

import "./ApiTable.css";

const ApiTable = (props) => {
  const { dataSource = [], deleteRecord, tableLoading = false } = props;
  
	const columns = [
		{
			title: <h6>No.</h6>,
			dataIndex: 'index',
			key: 'index',
			render: (data, record, index) => {
				return index + 1;
			},
		},
		{
			title: <h6>File Name</h6>,
			dataIndex: 'fileName',
			key: 'fileName',
			render: (text) => <a style={{ textTransform: 'capitalize' }}>{text}</a>,
		},
		{
			title: <h6>Endpoint</h6>,
			dataIndex: 'endpoint',
			key: 'endpoint',
			render: (text, record) => {
				return (
					<a
						href={`${API_ENDPOINT}collection/get/${record.user}/${record.fileName}`}
						target='_blank'
					>{`${record.user}/${record.fileName}`}</a>
				);
			},
		},
		{
			title: <h6>Action</h6>,
			key: 'action',
			render: (text, record) => (
				<div className='action-container'>
					<i
						className='bx bxs-copy bx-sm'
						style={{ color: 'black', cursor: 'pointer' }}
						onClick={() =>
							copyToClipboard(`${API_ENDPOINT}collection/get/${record.user}/${record.fileName}`)
						}
					></i>
					<Popconfirm
						title='Are you sure to Delete ？'
						okText='Yes'
						cancelText='No'
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
