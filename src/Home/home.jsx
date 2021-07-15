import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
// import { Link } from "react-router-dom";
// import { useHistory} from "react-router-dom";
// import axios from 'axios';
function Home() {

  const { logout } = useAuth();
  const handleLogout = (e) => {
    logout();
  };

	return (
		<div className='upload'>
			<nav class='navbar navbar-expand-lg navbar-light bg-light'>
				<div class='collapse navbar-collapse' id='navbarNav'>
					<ul class='navbar-nav'>
						<li class='nav-item active'>
							<button type='button' class='btn  btn-secondary' style={{ marginLeft: '530px' }}>
								<a href='#' style={{ textDecoration: 'none', color: 'white' }}>
									UPLOAD FILES
								</a>
							</button>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#' style={{ marginLeft: '400px' }}>
								Name
							</a>
						</li>
						<li class='nav-item'>
							<button type='button' class='btn btn-secondary' style={{ marginLeft: '30px' }} onClick={handleLogout}>
									LOG-OUT
							</button>
						</li>
					</ul>
				</div>
			</nav>
			<br />
			<div className='container'>
				<table class='table table-bordered'>
					<thead>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>File Name</th>
							<th scope='col'>Endpoint</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope='row'>1</th>
							<td>Mark</td>
							<td>
								<a href='#'>Otto</a>
							</td>
						</tr>
						<tr>
							<th scope='row'>2</th>
							<td>Jacob</td>
							<td>
								<a href='#'>Thornton</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Home;
