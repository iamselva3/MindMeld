import React, { useContext, useState } from "react";
import './login.css'
import { Context } from "./app";
import Nav from "./nav";



function Login(){

     const [password,setpassword]=useState('');

    const {setuser,setPage}=useContext(Context);

    const [input,setinput]=useState("");
    const handllogin=()=>{
        
            if (input === "Admin" && password === "Admin") {
                setPage("admin"); // Navigate to the admin page
            } else {
                setuser(input);
                setPage("home");
            }
        
    };

   


    return(
    <div id="login-page">
        
        <img src="./public/Mindmeld.PNG" id="loginlogo"></img>
        
        <div id="login">
            <h1>Login </h1>
            <h3>Don't Have An Account? <br></br><a href="/signup" style={{color:"green", textDecoration:"none"}}> Sign up</a></h3>
            <h3>Login With</h3>
            <center>
         <div style={{display:"inline-block"}}>

            <a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Fpli%3D1&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S690987510%3A1736166226880405&ddm=1"><img src="./goo.jpg" style={{height:"30px", width:"45px", marginLeft:"-70px", marginTop:"0px"}}></img></a>
            <a href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyIiOiIiLCJteCI6IjIifQ%3D%3D%22%7D"><img src="./twitter.jpg" style={{height:"30px", width:"40px", marginLeft:"30px", marginTop:"-1000px"}}></img></a>
            <a href="https://www.facebook.com/login/"><img src="./facebook.png" style={{height:"30px", width:"50px", marginLeft:"30px"}}></img></a>
         </div>
            </center>
            {/* <a><button style={{height:"40px",width:"30.6vw",marginTop:"10px", backgroundColor:""}}>
            Sign in with <span style={{color:"red", fontSize:"15px"}}>Go<span style={{color:"blue"}}>o</span><span style={{color:"#fcbf07"}}>gl</span><span style={{color:"green"}}>e</span></span> </button> */}
            <hr style={{width:"390px", marginTop:"10px"}}></hr>

            <h3>Login With Username</h3>
            <div id="input">
            <label>Username</label><br></br>
            <input
            style={{height:"25px", width:"30vw"}}
            type="text"
            placeholder="Enter your Username"
            value={input}
            onChange={(e)=>setinput(e.target.value)}
            >
            </input><br></br>
            <label>Password</label><br></br>
            <input
            style={{height:"25px",width:"30vw"}}
            type="password"
            placeholder="Enter Your password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            ></input><br></br>

           <span style={{fontSize:"small"}}> <a href="/fp" style={{color:"white"}}>Forgot password?</a></span>
            <button onClick={handllogin} style={{height:"40px",width:"30.6vw",marginTop:"10px", backgroundColor:""}}>Login</button>
            </div>
            

        </div>
        </div>
    );
}

export default Login;