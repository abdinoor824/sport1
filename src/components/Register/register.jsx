import React from "react";
import "./Register.css";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors,setErrors] =useState(false);
const navigate = useNavigate()
const handleRegister = () => {
  setIsLoading(true);

  setTimeout(() => {
 
    setIsLoading(false);
  }, 3000); // Simulate a 2-second delay
};

  const handleSubmit= async (e)=>{
    e.preventDefault();
    setErrors(false)
  try{
    const res = await axios.post("https://sport1-api.onrender.com/api/user/register",{
      username,
      email,
      password
    });
  
    res.data && window.location.replace("/login");
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
              onChange={(e)=>setPassword(e.target.value)}
              required />
              <button onClick={handleRegister} disabled={isLoading}>
      {isLoading ? 'Registering...' : 'Register'}
    </button>
            {errors &&<span style={{color:"red",marginTop:"10px"}}>something went wrong. please try again</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
