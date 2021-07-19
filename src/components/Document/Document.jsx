import React from 'react';
import { Button, Col, PageHeader, Row } from 'antd';
import history from '../../services/history';
import axios from '../../services/AxiosConfig';

import "./Document.css";
import fileDownload from '../../services/fileDownload';
import { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';

import "./Document.css";

const Document = () => {

  const [isLoading, setIsLoading] = useState({openApi: false, postman: false});

  const handleFileDownload = async (key, filePath, fileName) => {
    setIsLoading(prev => ({...prev, [key]: true }));
    const response = await axios.get(`/docs/${filePath}`, { responseType: "blob" });
    fileDownload(response.data, fileName);
    setIsLoading((prev) => ({ ...prev, [key]: false }));

  }


	return (
		<div>
			<PageHeader
				className="site-page-header"
				onBack={() => history.push("/")}
				title="Docs"
				subTitle=""
			></PageHeader>
			<div className="docs-container">
				<Row>
					<Col xs={{ span: 5, offset: 1 }}>
						<h5>Open API specification</h5>
					</Col>
					<Col xs={{ span: 5, offset: 1 }}>
						<Button
							name="openApi"
							type="primary"
							icon={<DownloadOutlined />}
							onClick={(e) => handleFileDownload(e.target.name, "open-api", "openApi.yml")}
							// size={"large"}
							loading={isLoading.openApi}
						>
							Download
						</Button>
					</Col>
				</Row>
				<Row>
					<Col xs={{ span: 5, offset: 1 }}>
						<h5>Postman Collection</h5>
					</Col>
					<Col xs={{ span: 5, offset: 1 }}>
						<Button
							name="postman"
							type="primary"
							icon={<DownloadOutlined />}
							onClick={(e) =>
								handleFileDownload(e.target.name, "postman-collection", "postmanCollection.json")
							}
							// size={"large"}
							loading={isLoading.postman}
						>
							Download
						</Button>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default Document;
