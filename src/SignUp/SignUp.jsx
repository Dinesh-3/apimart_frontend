import React, { useState } from "react";
import classes from './SignUp.module.css';
import { Link, useHistory} from "react-router-dom";

import axios from 'axios';

function SignUp() {
  const [signupDetails, setsignupDetails] = useState({
    name: "",
    email: "",
    password: "",
    
    

  });
  
  let history = useHistory();

  const onChangeHandler = (e) => {
    let user = signupDetails;
    user[e.target.name] = e.target.value;
    setsignupDetails(user);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/api/v1/user/signup`, signupDetails )
      .then(res => {
        console.log(res);
       
        if(res.data.status===true)
        {
          history.push('/SignIn')
        }
        // else
        // {
        //   alert("Account exist with this email.");
        // }
      })
    return;        
  }
    return (
      <div className={classes.SignUp}>
      
      <div className={classes.SignUp_Box}>
            <form onSubmit={onSubmitHandler}>
              <h1 className={classes.title_SU} style={{color:"black"}}>SIGN UP</h1>
              <br></br>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={onChangeHandler}
              /><br></br>

              <input
                type="email"
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
              <Link to="/SignIn" className={classes.BottomLinks} style={{color:"black"}}>
                Have an account ?
              </Link>
            </div>
            </form>
        </div>
    </div>
    );
  }
  
  export default SignUp;