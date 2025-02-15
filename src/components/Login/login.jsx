import React from 'react';
import "./login.css"
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import { useState } from "react";
import axios from "axios"



const Login = () => {

const [username, setUsername] = useState("");
 
  const [password, setPassword] = useState("");
  const [errors,setErrors] =useState(false);
  const handleSubmit= async (e)=>{
    e.preventDefault();
    setErrors(false)
  try{
    const res = await axios.post("https://sport1-api.onrender.com/api/user/login",{
      username,
      
      password
    });
  
    res.data && navigate("/login");
    }catch(err){
   setErrors(true)
  }
}




    return (
        <div>
            <Navbar />
        <div  className="form-page" onSubmit={handleSubmit}>
                    <div className="form-container">
      <h1>Login</h1>
      <div>
      <form className="login-form">
       <label htmlFor='username' >username</label>
       <input 
       type="text" 
        id='username' 
        name='username'
        placeholder='enter your user name'
onChange={(e)=>setUsername(e.target.value)}
         required/>
       <label htmlFor="password">password</label>
       <input type="password" 
       id='password'
        name='password' 
        placeholder='enter your password'
        onChange={(e)=>setPassword(e.target.value)}
        required/>
       <button type="submit">login</button>
       {errors &&<span style={{color:"red",marginTop:"10px"}}>something went wrong</span>}
       <button className="signup-btn">
       <Link className="link" to="/register" >Not having an account sign up</Link>
       </button>
      </form>
      </div>
      </div>
    </div>
    </div>
    );
};
export default Login;
