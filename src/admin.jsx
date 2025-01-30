import React, { useCallback, useContext, useMemo, useState } from "react";
import "./Download.css"
import {  FaArrowAltCircleDown, FaArrowDown, FaCalculator, FaCartPlus, FaClock, FaCode, FaCoins, FaHome, FaPause, FaPlay, FaPlayCircle, FaPuzzlePiece, FaPython, FaQuestion, FaQuestionCircle, FaReadme, FaRegArrowAltCircleDown, FaSoundcloud, FaSpeakerDeck, FaUser, FaVirus } from 'react-icons/fa';
import {  FaWebAwesome } from "react-icons/fa6";
import { Context } from "./app";
import Nav from "./nav";
// import { Context1 } from "./app1";


function Admin() {
    // const {user,setPage}=useContext(Context);


    
    return (
        <div id="homebody6">
            <nav id="homenav6">
                <img src="./blulog.PNG" id="homelog" alt="logo"/>
                 <div id="coin">
                                    <FaCoins size={20} color="black" />
                                    <h2 style={{marginLeft:"30px",marginTop:"-2px", color:"lightgreen"}}>2000</h2>
                
                                </div>
                
                                <FaQuestionCircle size={25} color="black" style={{marginLeft:"40px"}} />
                
                                <div id="context">
                
                        
                        <h3 style={{marginTop:"2px", fontSize:"20px"}}><FaUser style={{color:'black',marginLeft:"-7px"}} /> { "Admin" }</h3>
                    </div>
            </nav>
            
            {/* <Nav setPage={setPage} /> */}
            
            <div id="codebody6">
             {/* <h1 style={{color:"white", marginTop:"50px",marginleft:"500px"}}>Download for You {user || "Guest"}</h1> */}
             </div>
             <center>
             <h1>Hi Admin</h1>
             </center>

             {/* <h3 style={{marginTop:"2px", fontSize:"20px"}}><FaUser style={{color:'black',marginLeft:"-7px"}} /> {user || "Guest" }</h3> */}
        </div>
    );
}

const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    marginLeft:'40px'
   }; 
   const container={
    textalign:'center',
    marginTop:'50px'
 }
 const img={
    width:"100px",
    height:"100px"
 }

export default Admin;