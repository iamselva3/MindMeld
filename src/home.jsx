import React, { useContext, useEffect, useRef, useState } from "react";
import './home.css';
import img1 from "./img1.jpg";
import img2 from "./pongal.png";
import img3 from "./img3.jpg";
import img4 from "./new.jpg";
import { FaArrowAltCircleDown, FaArrowDown, FaArtstation, FaBlog, FaCalculator, FaCartPlus, FaCode, FaCoins, FaHome, FaPause, FaPlay, FaPlayCircle, FaPuzzlePiece, FaPython, FaQuestion, FaQuestionCircle, FaReadme, FaRegArrowAltCircleDown, FaSoundcloud, FaSpeakerDeck, FaUser, FaVirus } from 'react-icons/fa';
import { FaVirusCovid, FaWebAwesome } from "react-icons/fa6";
import { Context } from "./app";
import Nav from "./nav";


function Home() {
    const {user,setPage }=useContext(Context);


    const [index, setindex] = useState(0);
    const images = [img1, img2, img3, img4];
    
   


    const caroselref = useRef(null);

    const Nextimg = () => {
        setindex((index + 1));
        if (index == images.length - 1) {
            setindex(0);
        }
    };

    useEffect(() => {
        const interval = setInterval(Nextimg, 2000);
    }, [index]);

    // Course data with enrollment states
    const [courses, setCourses] = useState([
        {
            id: 1,
            image: "./js1.PNG",
            title: "Javascript Zero to Hero",
            enrolled: false,
            textColor: "white"
        },
        {
            id: 2,
            image: "./js2.PNG",
            title: "Learn Python In Tamil",
            enrolled: false,
            textColor: "white"
        },
        {
            id: 3,
            image: "./js4.PNG",
            title: "Web Development",
            enrolled: false,
            textColor: "white"
        },
        {
            id: 4,
            image: "./js6.PNG",
            title: "Mastering AI and ML",
            enrolled: false,
            textColor: "white"
        },
        {
            id: 5,
            image: "./js3.PNG",
            title: "React JS QnA",
            enrolled: false,
            textColor: "white"
        },
        {
            id: 6,
            image: "./js7.PNG",
            title: "Learning ML with Python",
            enrolled: false,
            textColor: "white"
        }
    ]);

    // Handle enrollment toggle for a specific course
    const toggleEnrollment = (courseId) => {
        setCourses(prevCourses => prevCourses.map(course => 
            course.id === courseId 
                ? {
                    ...course,
                    enrolled: !course.enrolled,
                    textColor: !course.enrolled ? "green" : "white"
                }
                : course
        ));
    };

    return (
        <div id="homebody">
            <nav id="homenav">
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
            
            
            <nav id="homehor">
                <button onClick={()=>setPage("home")} id="navbtn"><FaPlayCircle size={30} /></button>
                            <button onClick={()=>setPage("home2")} id="navbtn"><FaCode size={30} /></button>
                            <button onClick={()=>setPage("home3")} id="navbtn"><FaCartPlus size={30} /></button>
                            <button onClick={()=>setPage("test")} id="navbtn"><FaCalculator size={30} /></button>
                            <button onClick={()=>setPage("leader")} id="navbtn"><FaWebAwesome size={30} /></button>
                            <button onClick={()=>setPage("download")} id="navbtn"><FaArrowAltCircleDown size={30} /></button>
            </nav> 

            <div className="carousel-container">
                <div
                    ref={caroselref}
                    style={{
                        width: '1000px',
                        height: '200px',
                        overflow: 'hidden',
                        color: 'white',
                        margin: 'auto',
                        marginLeft: '60px',
                        borderRadius: '10px'
                    }}
                >
                    <img
                        src={images[index]}
                        style={{
                            width: '1000px',
                            height: '200px',
                            overflow: 'hidden',
                            margin: 'auto',
                            borderRadius: '10px',
                            position: 'relative',
                        }}
                        alt={`Slide ${index + 1}`}
                    />
                </div>
                <div id="coursedetail">
                    
                    <button id="btn1" onClick={()=>setPage("home")}><a><h2 style={{color:"#178582"}}>My Courses</h2></a></button>
                    <button id="btn1"onClick={()=>setPage("home4")}><a><h2>Course Library</h2></a> </button>
                    <button id="btn1"onClick={()=>setPage("home4")}><a><h2>Combo</h2></a></button>
                   <button  id="btn1"onClick={()=>setPage("combo1")}> <a><h2>Free Library</h2></a></button>
                   <button  id="btn1"onClick={()=>setPage("home4")}> <a><h2>Webinars</h2></a></button> 

                    <input 
                        type="text" 
                        placeholder="Search anything" 
                        style={{
                            height: "30px",
                            width: "200px", 
                            marginLeft: "175px",
                            marginTop: "12px"
                        }}
                    />
                </div>
                <hr style={{width: "80vw", marginLeft: "60px"}}></hr>
                
                {courses.map(course => (
                    <div id="img" key={course.id}>
                        <img src={course.image} alt={course.title}/>
                        <h2 style={{ color: course.textColor }}>{course.title}</h2>
                        <h4>Buy a Course</h4>
                        <button
                            onClick={() => toggleEnrollment(course.id)}
                            style={{
                                padding: '5px 10px',
                                fontSize: '13px',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                backgroundColor: course.enrolled ? '#4CAF50' : '#178582'
                            }}>
                            {course.enrolled ? 'Enrolled' : 'Enroll'}
                        </button>
                    </div>
                ))}
            </div>        
        </div>
    );
}

export default Home;