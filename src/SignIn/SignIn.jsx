import React, { useState } from "react";
import classes from './SignIn.module.css';
import { Link, useHistory} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function SignIn() {
  
    const [form, setForm] = useState({
        email: "",
        password: "",
      });

      let history = useHistory();
      const { login } = useAuth();

      const onChangeHandler = (e) => {
        setForm(prev => ({...prev, [e.target.name]: e.target.value}))
      };
    
      const onSubmitHandler = async (e) => {
        e.preventDefault();
        await login(form);
        setForm({
					email: '',
					password: '',
				});        
      }
    
  return (
    <div className={classes.SignIn}>
     
      <div className={classes.SignIn_Box}>
            <form onSubmit={onSubmitHandler}>
              <h1 className={classes.title_SU} style={{color:"black"}}>LOGIN</h1>
              <br></br>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={onChangeHandler}
              /><br></br>

              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={onChangeHandler}
              /><br></br>

              <input type="submit" value="SUBMIT" />
              <br></br><br></br>
              <div className={classes.bottomLinkWrapper}>
              <Link to="/ForgotPassword" className={classes.BottomLinks} style={{color:"black"}}>
                Forgot Password ?
              </Link>
              <br></br>
              <Link to="/signup" className={classes.BottomLinks} style={{color:"black"}}>
                New User ?
              </Link>
            </div>
            </form>
        </div>
    </div>
  );
}

export default SignIn;
