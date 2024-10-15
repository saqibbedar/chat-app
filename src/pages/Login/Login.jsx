import './Login.css';
import assets from "../../assets/assets"
import { useState } from 'react';

const Login = () => {
  const [state, setState] = useState("Sign Up")
  return (
    <div className='login'>
      <img src={assets.logo_big} alt="logo" className='logo' />
      <form className="login-form">
        <h2>{state}</h2>
        {state === "Sign Up" && <input type="text" name="username" placeholder='username' className='form-input' required/>}
        <input type="email" name="email" placeholder='email' className='form-input' required/>
        <input type="password" name="password" placeholder='password' className='form-input' required />
        <button type="submit">{ state === "Sign Up" ? "Sign Up" : "Login" }</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
        { state === "Sign Up" ? <p className="login-toggle">Already have an account? <span onClick={()=>setState("Login")}>Login here</span></p> :
          <p className="login-toggle">Don't have an account? <span onClick={()=>setState("Sign Up")}>Click here</span></p>
          }
        </div>
      </form>
    </div>
  )
}

export default Login
