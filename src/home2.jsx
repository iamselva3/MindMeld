import React, { useContext, useEffect, useState } from "react";
import "./home2.css"
import {  FaArrowAltCircleDown, FaArrowDown, FaCalculator, FaCartPlus, FaCode, FaCoins, FaHome, FaPause, FaPlay, FaPlayCircle, FaPuzzlePiece, FaPython, FaQuestion, FaQuestionCircle, FaReadme, FaRegArrowAltCircleDown, FaSoundcloud, FaSpeakerDeck, FaUser, FaVirus } from 'react-icons/fa';
import {  FaWebAwesome } from "react-icons/fa6";
import { Context } from "./app";
import Nav from "./nav";
// import { Context1 } from "./app1";


function Home2() {
    const {user,setPage}=useContext(Context);
    

    const [courses, setCourses] = useState([]);

    const fetchCourses = () => {
        fetch("http://universities.hipolabs.com/search?country=United%20States")
            .then((response) => response.json())
            .then((data) => {
                setCourses(data.slice(0, 5)); // Get only 5 universities
            })
            .catch((error) => console.error("Error fetching courses:", error));
    };

    useEffect(() => {
        fetchCourses(); // Fetch courses on component mount
    }, []);
    
    // const { username } = useContext(Context1);

    return (
        <div id="homebody1">
            <nav id="homenav1">
                <img src="./blulog.PNG" id="homelog" alt="logo"/>
                 <div id="coin">
                                    <FaCoins size={20} color="black" />
                                    <h2 style={{marginLeft:"30px",marginTop:"-2px", color:"lightgreen"}}>2000</h2>
                
                                </div>
                
                                <FaQuestionCircle size={25} color="black" style={{marginLeft:"40px"}} />
                
                                <div id="context">
                
                        
                        <h3 style={{marginTop:"2px", fontSize:"20px"}}><FaUser style={{color:'black',marginLeft:"-7px"}} /> {user || "Guest" }</h3>
                    </div>
            
            </nav>
            <nav id="homehor1">
            <button onClick={()=>setPage("home")} id="navbtn"><FaPlayCircle size={30} /></button>
            <button onClick={()=>setPage("home2")} id="navbtn"><FaCode size={30} /></button>
            <button onClick={()=>setPage("home3")} id="navbtn"><FaCartPlus size={30} /></button>
            <button onClick={()=>setPage("home")} id="navbtn"><FaCalculator size={30} /></button>
            <button onClick={()=>setPage("leader")} id="navbtn"><FaWebAwesome size={30} /></button>
            <button onClick={()=>setPage("download")} id="navbtn"><FaArrowAltCircleDown size={30} /></button>
            {/* <button onClick={()=>setPage("home")} id="navbtn"><FaArrowDown size={30} /></button> */}
            {/* <button id="icon1" onClick={()=>setPage("home")}><FaPlayCircle size={30} style={{marginLeft:"30px",marginTop:"50px"}}/></button>
            <a id="icon1" href="/home2"><FaCode size={30} style={{marginLeft:"30px",marginTop:"30px", color:"aquamarine"}}/></a>
            <a id="icon1" href="/product"><FaCartPlus size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a>
            <a id="icon1" href="/invoice1"><FaCalculator size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a>
            <a id="icon1" href="/leader"><FaWebAwesome size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a>
            <a id="icon1" href="/home"><FaReadme size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a>
            <a id="icon1" href="/home"><FaRegArrowAltCircleDown size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a> */}
            </nav>  
            {/* <Nav setPage={setPage} /> */}
            
            <div id="codebody">
             <h1 style={{color:"white", marginTop:"50px"}}>Welcome to Codeketa</h1>
             <p style={{color:"gray", textAlign:"left"}}>
             Learn Web development skills by a series of tasks. 
             WebKata is the Front-end practice platform which hosts a series of tasks on Web Development skills like HTML, CSS, and Javascript. 
             This cloud based module will enable you to practice Front-end skills without 
             any need to setup local environment.
             </p>
             </div>
             <div style={{textAlign:"center"}}>
             <h1>Universities Offering Free Courses</h1>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>
                        <a href={course.web_pages[0]} target="_blank" rel="noopener noreferrer">
                            {course.name}
                        </a>
                    </li>
                ))}
            </ul>
            <button onClick={fetchCourses}>Refresh Courses</button>

        </div>

             {/* <h3 style={{marginTop:"2px", fontSize:"20px"}}><FaUser style={{color:'black',marginLeft:"-7px"}} /> {user || "Guest" }</h3> */}
        </div>

    );
}

const containerStyle = {
    textAlign: 'center',
    marginTop: '50px'
   }; 
   const container={
    textalign:'center',
    marginTop:'50px'
 }
 const img={
    width:"100px",
    height:"100px"
 }

export default Home2;