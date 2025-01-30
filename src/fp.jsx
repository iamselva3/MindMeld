import React from "react";
import './fb.css'

function Forgot(){
    return(
       <>
       <div id="forgot-page"> 
        <img src="./bluelogo.PNG" id="bluelogo"></img>
        
        <div id="inpu">
        <h2 className="text-customwhite">FORGOT PASSWORD?</h2>
        <input
            style={{height:"25px", width:"30vw"}}
            type="text"
            placeholder="Enter your Email"
            ></input>
            <p style={{fontSize:"15px"}}>We'll send a link to reset your password</p>
            <button style={{height:"40px",width:"30.6vw",marginTop:"10px", backgroundColor:""}}>Send a Mail</button>
            <p style={{fontSize:"15px"}}>Ahh..Now i Remember my Password <a href="/" style={{color:"green", textDecoration:"none"}}> login</a></p>
            </div>
            <img src="./art-forgot-password.png" id="fbpic"></img>
       </div>

       </>
    );
}

export default Forgot;