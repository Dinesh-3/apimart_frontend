import React, { useState } from "react";
import classes from './SignIn.module.css';
import { Link, useHistory} from "react-router-dom";

import axios from 'axios';

function SignIn() {
    const [signinDetails, setsigninDetails] = useState({
        email: "",
        password: "",
      });

      let history = useHistory();

      const onChangeHandler = (e) => {
        let user = signinDetails;
        user[e.target.name] = e.target.value;
        setsigninDetails(user);
      };
    
      const onSubmitHandler = async (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api/v1/user/login`,  signinDetails )
      .then(res => {
        console.log(res);
        
        // if(res.data.validation==="true")
        // {
        //   console.log(res.data.validation);
        //   localStorage.setItem('userDetails', JSON.stringify(res.data));
        //   history.push('/profile')
          
        // }
      })
        return;        
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
              <Link to="/SignUp" className={classes.BottomLinks} style={{color:"black"}}>
                New User ?
              </Link>
            </div>
            </form>
        </div>
    </div>
  );
}

export default SignIn;
