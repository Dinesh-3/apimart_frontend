import React from 'react';
import { PageHeader } from 'react-bootstrap';

const Document = () => {
	return (
		<div>
			<PageHeader
				className='site-page-header'
				onBack={() => window.history.back()}
				title='Docs'
				subTitle=''
			></PageHeader>
		</div>
	);
};

export default Document;
