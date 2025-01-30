import React from "react";
import './signup.css'

function Signup(){
    return(
        <div id="signup">
        <img src="./instruction.jpg" id="signuppic"></img>

        <div id="signin">
            <h1>Sign Up</h1>
            <label>Email</label><br></br>
            <input
            style={{height:"25px", width:"30vw"}}
            type="text"
            placeholder="Enter your Email"
            >
                
            </input><br></br>
            <label>Name</label><br></br>
            <input
            style={{height:"25px", width:"30vw"}}
            type="text"
            placeholder="Enter your Name"
            >
                
            </input><br></br>
            <label>Create Password</label><br></br>
            <input
            style={{height:"25px",width:"30vw"}}
            type="password"
            placeholder="Enter Your password"
            ></input><br></br>
             <label>Re-Enter Password</label><br></br>
            <input
            style={{height:"25px",width:"30vw"}}
            type="password"
            placeholder="Enter Your password"
            ></input><br></br>

<button style={{height:"40px",width:"30.6vw",marginTop:"10px", backgroundColor:""}}>Sign Up</button>

            <hr style={{width:"400px",marginTop:"30px"}}></hr>
            <h3>Or Sign Up with</h3>
         <div style={{display:"inline-block"}}>

            <a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Fpli%3D1&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S690987510%3A1736166226880405&ddm=1"><img src="./goo.jpg" style={{height:"30px", width:"45px", marginTop:"0px"}}></img></a>
            <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyIiOiIiLCJteCI6IjIifQ%3D%3D%22%7D"><img src="./twitter.jpg" style={{height:"30px", width:"40px", marginTop:"-1000px"}}></img></a>
            <a href="https://www.facebook.com/login/"><img src="./facebook.png" style={{height:"30px", width:"50px"}}></img></a>
         </div>
         </div>
        </div>
    );
}

export default Signup;


