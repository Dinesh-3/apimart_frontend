import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

// import ForgotPassword from "./customer/Pages/ForgotPassword/ForgotPassword";
// import ResetPassword from "./customer/Pages/ResetPassword/ResetPassword";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
          
            
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={ SignUp } />
            {/* <Route path="/ForgotPassword" component={ForgotPassword} />
            <Route path="/ResetPassword" component={ResetPassword} />
             */}
            <Redirect to="/"></Redirect>
          </Switch>
    </Router>
    </div>
  );
}

export default App;
