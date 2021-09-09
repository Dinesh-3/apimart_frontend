import Icon from '@ant-design/icons/lib/components/Icon';
import {Button, message, Row, Upload, Form, Select, Typography} from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { FileUpload } from '../UploadFile/UploadFile';
import { useAuth } from '../../context/AuthContext';
import { API_ENDPOINT } from '../../services/Constant';
import { copyToClipboard } from '../../services/helpers';
import { HttpRequest } from '../../services/HttpRequest';

import "./home.css";
import Navbar from '../Navbar/Navbar';
import ApiTable from '../ApiTable/ApiTable';
const { Item } = Form;
const {Option} = Select;

const {Text, Title} = Typography;

function Home() {

  const [table, setTable] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);

  useEffect(() => {
    const getTableRequest = async () => {
      setTableLoading(true);
      const requestObj = {
				path: '/collection',
				method: 'GET',
			};

      const response = await HttpRequest(requestObj);

      if(response.status === true) setTable(response.data);
      
      setTableLoading(false);
    }
    getTableRequest();
  }, [])

  const setTableForUpload = (record) => {
    setTable(prev => ([...prev, record]));
  }

  const deleteRecord = async (record) => {
    setTableLoading(true);
		const requestObj = {
			path: `/collection/${record.fileName}`,
			method: 'DELETE',
		};

		const response = await HttpRequest(requestObj);
    setTableLoading(false);
		if (!response.status) return message.error(response.message);
    setTable((prev) => prev.filter((item) => item.fileName !== record.fileName));
    message.success(response.message);
	};

	return (
		<Fragment>
			<Navbar />
			<div className='home-container'>
				<FileUpload setTableForUpload={setTableForUpload} />
				<ApiTable tableLoading={tableLoading} dataSource={table} deleteRecord={deleteRecord} />
			</div>
		</Fragment>
	);
}

export default Home;
