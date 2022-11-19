import React from "react";
import "./Login.css";
import background from './images/bg-01.jpg';
import facebookicon from './images/facebook.png';
import twittericon from './images/twitter.png';
import { Helmet } from 'react-helmet'

function LoginForm() {
  return (
    <>
      <Helmet>
        <title>Login Form</title>
      </Helmet>
      <div className="mainformdiv">
        <div className="picdiv"><img src={background} alt="this is background" /></div>
        <div className="formdiv">
          <div className="heading">
            Login to continue
          </div>
          <form className="loginform">
            <input className="email" type="email" placeholder="Email" />
            <input className="password" type="password" placeholder="Password" />
            <div className="checkBoxAndForgetPass">
              <div className="checkbox">
                <input type="checkbox" /><span>Remember Me</span>
              </div>
              <div className="forgotpass">Forgot Password?</div>
            </div>
            <div className="button">LOGIN</div>
            <div className="signup">
              or sign up using
            </div>
            <div className="icon">
              <img src={facebookicon} alt="" />
              <img src={twittericon} alt="" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm