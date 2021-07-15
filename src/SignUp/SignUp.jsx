import React, { useState } from "react";
import classes from './SignUp.module.css';
import { Link } from "react-router-dom";

import { HttpRequest } from "../services/HttpRequest";
import history from "../services/history";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    let user = form;
    user[e.target.name] = e.target.value;
    setForm(user);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const requestObj = {
			path: '/user/signup',
			method: 'POST',
			body: form,
		};

    const response = await HttpRequest(requestObj);

    if(response.data === true) history.push('/login');
    setForm({
			name: '',
			email: '',
			password: '',
		});   
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
              <Link to="/login" className={classes.BottomLinks} style={{color:"black"}}>
                Have an account ?
              </Link>
            </div>
            </form>
        </div>
    </div>
    );
  }
  
  export default SignUp;