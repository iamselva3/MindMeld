

import React, { useContext, useState } from "react";
import { Context1,  } from "./app1";
function Login1() {
 const { setUsername, setPage } = useContext(Context1);
 const [input, setInput] = useState("");
 const [password,setpassword]=useState("");
 const handleLogin = () => {
  setUsername(input); // Save username in context
  setPage("home"); // Switch to Home page
 };
 return (
  <div style={containerStyle}>
   <h1>Login Page</h1>
   <input 
    type="text" 
    placeholder="Enter your username"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    style={inputStyle}
   />
    <input 
    type="text" 
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setpassword(e.target.value)}
    style={inputStyle}
   />
   <button onClick={handleLogin} style={buttonStyle}>Login</button>
  </div>
 ); 
}
// Styles
const containerStyle = {
   textAlign: 'center',
   marginTop: '50px'
  };
  const inputStyle = {
   padding: '10px',
   margin: '10px',
   fontSize: '16px'
  };
  const buttonStyle = {
   padding: '10px 20px',
   fontSize: '16px',
   cursor: 'pointer'
  };
  export default Login1;