import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import "./Download.css"
import {  FaArrowAltCircleDown, FaArrowDown, FaCalculator, FaCartPlus, FaClock, FaCode, FaCoins, FaHome, FaPause, FaPlay, FaPlayCircle, FaPuzzlePiece, FaPython, FaQuestion, FaQuestionCircle, FaReadme, FaRegArrowAltCircleDown, FaSoundcloud, FaSpeakerDeck, FaUser, FaVirus } from 'react-icons/fa';
import {  FaWebAwesome } from "react-icons/fa6";
import { Context } from "./app";
import Nav from "./nav";
// import { Context1 } from "./app1";


function Test() {
    const {user,setPage}=useContext(Context);
    const c=["oops","Keywords"];
    const [color,setcolor]=useState("");
    const [color1,setcolor1]=useState("");

    useEffect(()=>{

        const divElement = document.getElementById("div1");
        if (divElement) {
            if (color && c.includes(color.toLowerCase())) {
                divElement.style.backgroundColor = "green";
            } else {
                divElement.style.backgroundColor = "#0A1828";
            }
        };
        
        const divElement1 = document.getElementById("div2");
        if (divElement1) {
            if (color1 && c.includes(color1.toLowerCase())) {
                divElement1.style.backgroundColor = "green";
            } else {
                divElement1.style.backgroundColor = "#0A1828";
            }
        };
    }, [color]);



    

    
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
                
                        
                        <h3 style={{marginTop:"2px", fontSize:"20px"}}><FaUser style={{color:'black',marginLeft:"-7px"}} /> { user || "user" }</h3>
                    
                    
                    </div>
            </nav>
            <nav id="homehor">
                            <button onClick={()=>setPage("home")} id="navbtn"><FaPlayCircle size={30} /></button>
                                        <button onClick={()=>setPage("home2")} id="navbtn"><FaCode size={30} /></button>
                                        <button onClick={()=>setPage("home3")} id="navbtn"><FaCartPlus size={30} /></button>
                                        <button onClick={()=>setPage("home")} id="navbtn"><FaCalculator size={30} /></button>
                                        <button onClick={()=>setPage("leader")} id="navbtn"><FaWebAwesome size={30} /></button>
                                        <button onClick={()=>setPage("download")} id="navbtn"><FaArrowAltCircleDown size={30} /></button>
                        </nav>
            
            {/* <Nav setPage={setPage} /> */}
            
            <div id="codebody6">

                <h1>Web Marathon</h1>
             {/* <h1 style={{color:"white", marginTop:"50px",marginleft:"500px"}}>Download for You {user || "Guest"}</h1> */}
             </div>

            
             <div id="div1" style={{ backgroundColor: c.includes(color?.toLowerCase()) ? color : "#0A1828", padding: "20px",marginLeft:"100px" }}>
    <h1>Which type of JavaScript language is ___

</h1>
    <input
        type="text"
        value={color}
        onChange={(e) => setcolor(e.target.value)}
    />
</div>
<div id="div2" style={{ backgroundColor: c.includes(color1?.toLowerCase()) ? color : "#0A1828", padding: "20px",marginLeft:"100px" }}>
    <h1> The "function" and " var" are known as:</h1>
    <input
        type="text"
        value={color1}
        onChange={(e) => setcolor1(e.target.value)}
    />
</div>
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

export default Test;