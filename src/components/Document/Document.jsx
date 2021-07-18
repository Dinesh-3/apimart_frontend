import React from 'react';
import { PageHeader } from 'antd';
import history from '../../services/history';

import "./Document.css";

const Document = () => {
	return (
		<div className="doc-container">
			<PageHeader
				className='site-page-header'
				onBack={() => history.push("/")}
				title='Docs'
				subTitle=''
			></PageHeader>

		</div>
	);
};

export default Document;
