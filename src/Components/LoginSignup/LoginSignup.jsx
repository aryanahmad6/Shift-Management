import React, {useState} from 'react';
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
export const LoginSignup = () => {
 const [action,setAction] = useState("Login");

  return (
    <div className='container'>
    <div className="header">
      <div className="text">{action}</div>
      <div className="underline"></div>
    </div>
    <div className="inputs">
    {action==="Login"?<div></div>: <div className="input">
        <img src={user_icon} alt="" className="user" />
        <input type="text" placeholder="Name" />
      
      </div>}
     
      <div className="input">
        <img src={email_icon} alt="" className="email"/>
        <input type="email" placeholder="Email Id" />
      
      </div>
      <div className="input">
        <img src={password_icon} alt="" className="password" />
        <input type="password"placeholder="Password"/>
      </div>
      </div>
      {action==="sign up"?<div></div>:<div className="forgot-password">Lost password? <span>Click Here</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("sign up")}}>Sign Up</div>
        <div className={action==="sign up"?"submit gray":"submit"}onClick={()=>{setAction("login")}}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup;