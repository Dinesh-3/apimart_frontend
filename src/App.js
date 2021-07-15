import React from "react";
import './App.css';
import {
  Switch,
  Route,
  Redirect,
  Router
} from "react-router-dom";

import AuthProvider from "./context/AuthContext";
import history from "./services/history";

import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Home from "./Home/home";
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
					<Route path='/login' exact component={SignIn} />
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
