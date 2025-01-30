import React, { useContext, useEffect, useRef, useState } from "react";
import './Combo1.css';
import img1 from "./img1.jpg";
import img2 from "./pongal.png";
import img3 from "./img3.jpg";
import img4 from "./new.jpg";
import { FaArrowDown, FaArtstation, FaBlog, FaCalculator, FaCartPlus, FaCode, FaCoins, FaHome, FaPause, FaPlay, FaPlayCircle, FaPuzzlePiece, FaPython, FaQuestion, FaQuestionCircle, FaReadme, FaRegArrowAltCircleDown, FaSoundcloud, FaSpeakerDeck, FaUser, FaUsers, FaVirus } from 'react-icons/fa';
import { FaVirusCovid, FaWebAwesome } from "react-icons/fa6";
import { Context } from "./app";


function Combo1() {
    const {user,setPage,cart }=useContext(Context);

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
    
    // Handle enrollment toggle for a specific course
    // const toggleEnrollment = (courseId) => {
    //     setCourses(prevCourses => prevCourses.map(course => 
    //         course.id === courseId 
    //             ? {
    //                 ...course,
    //                 enrolled: !course.enrolled,
    //                 textColor: !course.enrolled ? "green" : "white"
    //             }
    //             : course
    //     ));
    // };

    return (
        <div id="homebodyco">
            <nav id="homenavco">
                <img src="./blulog.PNG" id="homelog" alt="logo"/>

                <div id="coinco">
                    <FaCoins size={20} color="black" />
                    <h2 style={{marginLeft:"30px",marginTop:"-2px", color:"lightgreen"}}>2000</h2>

                </div>

                <FaQuestionCircle size={25} color="black" style={{marginLeft:"40px"}} />

                <div id="contextco">

        
        <h3 style={{marginTop:"2px", fontSize:"20px"}}><FaUser style={{color:'black',marginLeft:"-7px"}} /> {user || "Guest" }</h3>
    </div>
            
            </nav>
            <nav id="homehorco">
                  <button onClick={()=>setPage("home")} id="navbtn"><FaPlayCircle size={30} /></button>
                  <button onClick={()=>setPage("home2")} id="navbtn"><FaCode size={30} /></button>
                <button onClick={()=>setPage("home3")} id="navbtn"><FaCartPlus size={30} /></button>
                <button onClick={()=>setPage("home")} id="navbtn"><FaCalculator size={30} /></button>
             <button onClick={()=>setPage("home")} id="navbtn"><FaWebAwesome size={30} /></button>
            {/* <button onClick={()=>setPage("home")} id="navbtn"><FaReadme size={30} /></button> */}
            <button onClick={()=>setPage("home")} id="navbtn"><FaRegArrowAltCircleDown size={30} /></button>
                            
            {/* <a id="icon" href="/"><FaPlayCircle size={30} style={{marginLeft:"30px",marginTop:"50px"}}/></a>
            <a id="icon" href="/home2"><FaCode size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a>
            <a id="icon" href="/product"><FaCartPlus size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a>
            <a id="icon" href="/home"><FaCalculator size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a>
            <a id="icon" href="/home"><FaWebAwesome size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a>
            <a id="icon" href="/home"><FaReadme size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a>
            <a id="icon" href="/home"><FaRegArrowAltCircleDown size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a> */}
            </nav> 

            <div className="carousel-containerco">
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
                <div id="coursedetailcl">
                <button id="btn1" onClick={()=>setPage("home")}><a><h2>My Courses</h2></a></button>
                    <button id="btn1"onClick={()=>setPage("home4")}><a><h2>Course Library</h2></a> </button>
                    <button id="btn1"onClick={()=>setPage("home5")}><a><h2>Combo</h2></a></button>
                   <button  id="btn1"onClick={()=>setPage("combo1")}> <a><h2 style={{color:"#178582"}}>Your Combo</h2></a></button>
                   <button  id="btn1"onClick={()=>setPage("home4")}> <a><h2>Webinars</h2></a></button> n

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
                
      {/* <h1> {user || "Guest"}</h1> */}
      
      {cart.length > 0 ? (
        <div id="contain1">
          <h2>Your Premium Courses</h2>
          <div >
            {cart.map((product, index) => (
              <div id="contain12" key={index}>
                <h3>{product.name}</h3>
                <img src={product.image}></img>
                <p>Price: ${product.price}</p>
              
              </div>
            ))}
          </div> 
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
            </div>        
       
    );
}

export default Combo1;


const containerStyle = {
    textAlign: 'center',
    marginTop: '50px'
  };