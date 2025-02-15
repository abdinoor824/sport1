import React from "react";
import "./Register.css";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors,setErrors] =useState(false);
const navigate = useNavigate()

  const handleSubmit= async (e)=>{
    e.preventDefault();
    setErrors(false)
  try{
    const res = await axios.post("https://sport1-api.onrender.com/api/user/register",{
      username,
      email,
      password
    });
    res.data && navigate("/login");
  }catch(err){
   setErrors(true)
  }
}



  return (
    <div className="form-page" onSubmit={handleSubmit}>
      <div className="form-container">
        <h1>Register</h1>
        <div>
          <form className="register-form">
            <label htmlFor="username">username</label>
            <input
             type="text" 
             id="username" 
             name="username" 
             onChange={(e)=>setUsername(e.target.value)}
             
             required />
            <label htmlFor="email">email</label>
            <input 
            type="email"
             id="email"
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
              required />
            <label htmlFor="password">password</label>
            <input
             type="password" 
             id="password"
              name="password"
              placeholder="enter you password"
              onChange={(e)=>setPassword(e.target.value)}
              required />
            <button type="submit">Register</button>
            {errors &&<span style={{color:"red",marginTop:"10px"}}>something went wrong. please try again</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
