import Icon from '@ant-design/icons/lib/components/Icon';
import {Button, message, Row, Upload, Form, Select, Typography} from 'antd';
import React, { useEffect, useState } from 'react';
import { FileUpload } from '../UploadFile/UploadFile';
import { useAuth } from '../../context/AuthContext';
import { API_ENDPOINT } from '../../services/Constant';
import { copyToClipboard } from '../../services/helpers';
import { HttpRequest } from '../../services/HttpRequest';

import "./home.css";
const { Item } = Form;
const {Option} = Select;

const {Text, Title} = Typography;

function Home() {
  const { logout, useUser } = useAuth();
  const [user, setUser] = useUser();
  const [table, setTable] = useState([{fileName: "", user: ""}]);
  const [fileLoading, setFileLoading] = useState(false);
  const [file, setFile] = useState();

  useEffect(() => {
    const getTableRequest = async () => {
      const requestObj = {
				path: '/collection/get',
				method: 'GET',
			};

      const response = await HttpRequest(requestObj);
      if(response.status === true) {
        setTable(response.data);
      }
    }
    getTableRequest();
  }, [])


  const handleLogout = (e) => {
    logout();
  };

	return (
		<div className='upload'>
			<nav class='navbar navbar-expand-lg navbar-light bg-light'>
				<div class='collapse navbar-collapse' id='navbarNav'>
					<ul class='navbar-nav'>
						<li class='nav-item active'>
							<button type='button' class='btn  btn-secondary' style={{marginLeft: '530px'}}>
								Available API's
							</button>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#' style={{marginLeft: '400px'}}>
								{user.name}
							</a>
						</li>
						<li class='nav-item'>
							<button
								type='button'
								class='btn btn-secondary'
								style={{marginLeft: '30px'}}
								onClick={handleLogout}
							>
								LOG-OUT
							</button>
						</li>
					</ul>
				</div>
			</nav>
			<br />
      <FileUpload />
			<div className='container'>
				<table class='table table-bordered'>
					<thead>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>File Name</th>
							<th scope='col'>Endpoint</th>
							<th scope='col'>Copy Link</th>
						</tr>
					</thead>
					<tbody>
						{table.map((item, index) => (
							<tr>
								<th scope='row'>{index + 1}</th>
								<td>{item.fileName}</td>
								<td>
									<a
										href={`${API_ENDPOINT}collection/${item.user}/${item.fileName}`}
										target='_blank'
									>{`${item.user}/${item.fileName}`}</a>
								</td>
								<td>
									<i
										class='bx bxs-copy bx-sm'
										style={{color: 'black', cursor: 'pointer'}}
										onClick={() =>
											copyToClipboard(`${API_ENDPOINT}collection/${item.user}/${item.fileName}`)
										}
									></i>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Home;