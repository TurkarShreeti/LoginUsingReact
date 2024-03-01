
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './LoginSignup.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
// import Home from "../Home/Home";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry,setAllEntry] = useState([]);
  const history = useHistory();




  const submitForm =(e) => {
    e.preventDefault();
    console.log('Form Submittes');
    const newEntry = {email:email, password:password,name:name || 'N/A'};
    setAllEntry([...allEntry,newEntry]);
    console.log([...allEntry,newEntry]);

    history.push("/Home");
  
  }

  return (
    
    <form className='container' onSubmit={submitForm} >
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder='Email Id'
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder='Password'
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="forgot-password">
          lost Password? <span>Click here!</span>
        </div>
      )}

      <div className="submit-container">
        <button
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        
        >
          SignUp
        </button>
        <button
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
          
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginSignup;
