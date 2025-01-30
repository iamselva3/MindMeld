import React, { useContext, useEffect, useRef, useState } from "react";
import './Combo.css';
import img1 from "./img1.jpg";
import img2 from "./pongal.png";
import img3 from "./img3.jpg";
import img4 from "./new.jpg";
import { FaArrowDown, FaArtstation, FaBlog, FaCalculator, FaCartPlus, FaCode, FaCoins, FaHome, FaPause, FaPlay, FaPlayCircle, FaPuzzlePiece, FaPython, FaQuestion, FaQuestionCircle, FaReadme, FaRegArrowAltCircleDown, FaSoundcloud, FaSpeakerDeck, FaUser, FaUsers, FaVirus } from 'react-icons/fa';
import { FaVirusCovid, FaWebAwesome } from "react-icons/fa6";
import { Context } from "./app";


function Combo() {
    const {user,setPage,setCart}=useContext(Context);

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
    // const [courses, setCourses] = useState([
    //     {
    //         id: 1,
    //         image: "./pr1.jpg",
    //         title: "Data Science for Students",
    //         num:"2500 Enrolled",
    //         enrolled: false,
    //         dis:"Rs.499(17.05%)",
    //         textColor: "white"
    //     },
    //     {
    //         id: 2,
    //         image: "./pr2.jpg",
    //         title: "IoT Engineers Bundle",
    //         num:"1569 Enrolled",
    //         enrolled: false,
    //         dis:"Rs.200(19.05%)",
    //         textColor: "white"
    //     },
    //     {
    //         id: 3,
    //         image: "./pr3.jpeg",
    //         title: "Learn English Through Tamil-PRO",
    //         num:"980 Enrolled",
    //         enrolled: false,
    //         dis:"Rs.499(17.0%)",
    //         textColor: "white"
    //     },
    //     {
    //         id: 4,
    //         image: "./pr4.jpg",
    //         title: "Microsoft Azure Security- Bundle",
    //         num:"6700 Enrolled",
    //         enrolled: false,
    //         dis:"Rs.500(16.05%)",
    //         textColor: "white"
    //     },
    //     {
    //         id: 5,
    //         image: "./pr5.jpg",
    //         title: "Premium Pass",
    //         num:"4500 Enrolled",
    //         enrolled: false,
    //         dis:"Rs.800(50.05%)",
    //         textColor: "white"
    //     },
    //     {
    //         id: 6,
    //         image: "./pr6.jpg",
    //         title: "Cyber Security Bundle",
    //         num:"900 Enrolled",
    //         enrolled: false,
    //         dis:"Rs.1000(45.89%)",
    //         textColor: "white"
    //     },
    //     {
    //         id: 7,
    //         image: "./pr1.jpg",
    //         title: "React JS QnA",
    //         num:"1.5L Enrolled",
    //         enrolled: false,
    //         dis:"Rs.600(8.90%)",
    //         textColor: "white"
    //     },
    //     {
    //         id: 8,
    //         image: "./pr7.jpeg",
    //         title: "DSA for programmers",
    //         num:"8900 Enrolled",
    //         enrolled: false,
    //         dis:"Rs.800(8.05%)",
    //         textColor: "white"
    //     },
    //     {
    //         id: 9,
    //         image: "./pr8.jpeg",
    //         title: "Data Engineering Bundle",
    //         num:"999 Enrolled",
    //         enrolled: false,
    //         dis:"Rs.700(26.5%)",
    //         textColor: "white"
    //     },
    // ]);

    // // Handle enrollment toggle for a specific course
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
    
//  const { setCart, setPage,username } = useContext(Context);
 const products = [
  { id: 1, image:"./pr1.jpg", name: "Data Science for Students", price: 100 },
  { id: 2, image:"./pr4.jpg", name: "IoT Engineers Bundle Premium pass", price: 200 },
  { id: 3, image:"./pr3.jpeg", name: "Learn English Through Tamil-PRO", price: 300 },
  { id: 4, image:"./pr4.jpg", name: "Microsoft Azure Security- Bundle", price: 300 },
  { id: 5, image:"./pr5.jpg", name: "Premium Pass", price: 300 },
  { id: 6, image:"./pr6.jpg", name: "Cyber Security Bundle", price: 300 },
  { id: 7, image:"./pr7.jpeg", name: "Cyber Security Bundle", price: 300 },
  { id: 8, image:"./pr8.jpeg", name: "Cyber Security Bundle", price: 300 },
//   { id: 9, image:"./pr9.jpeg", name: "Cyber Security Bundle", price: 300 },

 ];
const handleAddToCart = (product) => {
  setCart((prevCart) => [...prevCart, product]); // Add product to the cart array
  setPage("combo1"); // Redirect to Invoice Page
 };

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
                <button onClick={()=>setPage("home4")} id="navbtn"><FaCalculator size={30} /></button>
             <button onClick={()=>setPage("leader")} id="navbtn"><FaWebAwesome size={30} /></button>
            {/* <button onClick={()=>setPage("home")} id="navbtn"><FaReadme size={30} /></button> */}
            <button onClick={()=>setPage("download")} id="navbtn"><FaRegArrowAltCircleDown size={30} /></button>
                            
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
                    <button id="btn1"onClick={()=>setPage("home5")}><a><h2 style={{color:"#178582"}}>Combo</h2></a></button>
                   <button  id="btn1"onClick={()=>setPage("combo1")}> <a><h2>Free Library</h2></a></button>
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
<div style={{marginLeft:"-50px"}}>
                <div style={containerStyle}>
     
     {products.map((product) => (
      <div key={product.id} style={productStyle}>
        <img src={product.image} alt={product.name} style={imagestyle} />
       <h3>{product.name}</h3>
       <p>Price: ${product.price}</p>
       <button onClick={() => handleAddToCart(product)} id="btnstyle3">
        Enroll Course
       </button>
      </div>
     ))} 
    </div>
    </div>           
                {/* {courses.map(course => (
                    <div id="img" key={course.id}>
                        <img src={course.image} alt={course.title}/>
                        <h2 style={{ color: course.textColor }}>{course.title}</h2>
                        <h4><FaUsers style={{color:"#178582"}} /> {course.num}</h4>
                        <button
                            onClick={() => toggleEnrollment(course.id)}
                            style={{
                                padding: '5px 10px',
                                fontSize: '13px',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                backgroundColor: course.enrolled ? '#4CAF50' : 'red'
                            }}>
                            {course.enrolled ? 'Enrolled' : 'Premium'}
                        </button>
                        <div style={{height:"20px",backgroundColor:"#b3b545",marginTop:"18px", color:"black"}}>
                            <p>You have {course.dis}</p>
                        </div>
                    </div>
                ))} */}
            </div>        
        </div>
    );
}


const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    color:'white'
   };
   const productStyle = {
      border: '1px solid #ccc',
      padding: '30px',
      margin: '10px',
      width: '200px',
      display: 'inline-block'
     };
    
     const imagestyle={
       
       height:"110px",
       objectFit:"cover",
       marginButtom:"10px",
       maxHeight:"150px"
     }

export default Combo;