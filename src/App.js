import React from "react";
import './App.css';
import 'antd/dist/antd.css';

import {
  Switch,
  Route,
  Redirect,
  Router
} from "react-router-dom";

import AuthProvider from "./context/AuthContext";
import history from "./services/history";

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/home";
import { PrivateRoute } from "./services/ProtectedRoute";
// import ForgotPassword from "./customer/Pages/ForgotPassword/ForgotPassword";
// import ResetPassword from "./customer/Pages/ResetPassword/ResetPassword";

function App() {
  return (
		<AuthProvider>
			<Router history={history}>
				<Switch>
					<PrivateRoute path='/' exact component={Home} />
					<Route path='/signup' exact component={SignUp} />
					<Route path='/login' exact component={Login} />
					{/* <Route path="/ForgotPassword" component={ForgotPassword} />
            <Route path="/ResetPassword" component={ResetPassword} />
             */}
					{/* <Redirect to='/'></Redirect> */}
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;
