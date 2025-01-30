import React, { useContext } from "react";
import "./home3.css"
import {  FaArrowAltCircleDown, FaArrowDown, FaCalculator, FaCartPlus, FaClock, FaCode, FaCoins, FaHome, FaPause, FaPlay, FaPlayCircle, FaPuzzlePiece, FaPython, FaQuestion, FaQuestionCircle, FaReadme, FaRegArrowAltCircleDown, FaSoundcloud, FaSpeakerDeck, FaUser, FaVirus } from 'react-icons/fa';
import {  FaWebAwesome } from "react-icons/fa6";
import { Context } from "./app";
import { Context1 } from "./app1";


function Home3() {
    const {user,setPage,setCart }=useContext(Context);
    // const { username } = useContext(Context1);
    //  const { setCart, setPage } = useContext(Context1);
 const products = [
    { id: 1, image:"./ps.png", name: "DSA Using JS",Language:"English",price: 24 },
    { id: 2, image:"./ps2.png", name: "Functional Programming Using nodejs Tamil",Language:"Tamil", price: 38 },
    { id: 3, image:"./ps3.png", name: "100 days of Js With codekta",Language:"Tamil", price: 30 },
    { id: 4, image:"./ps4.png", name: "Java script Zero to hero",Language:"Malayalam" ,price: 30 },
    { id: 5, image:"./ps5.png", name: "Google Assistant Using  Nodemcu",Language:"English", price: 20 },
    { id: 6, image:"./ps6.png", name: "Node Package Manager", Language:"English",price: 10 },
    { id: 7, image:"./ps7.png", name: "React Native",Language:"Tamil", price: 48 },
    { id: 8, image:"./ps8.png", name: "React Js in Telugu",Language:"Telugu", price: 20 },
    { id: 9, image:"./ps9.png", name: "Programming with AI",Language:"English", price: 30 },
    
   ];
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to the cart array
    setPage("download"); // Redirect to Invoice Page
   };

    return (
        <div id="homebody2">
            <nav id="homenav2">
                <img src="./blulog.PNG" id="homelog" alt="logo"/>

                <div id="coin">
                                    <FaCoins size={20} color="black" />
                                    <h2 style={{marginLeft:"30px",marginTop:"-2px", color:"lightgreen"}}>2000</h2>
                
                                </div>
                
                                <FaQuestionCircle size={25} color="black" style={{marginLeft:"40px"}} />
                               {/* <a href="/"> <FaUser style={{color:'black',marginLeft:"70px"}} /></a> */}
                                <div id="context">
                                  <h3 style={{marginTop:"2px", fontSize:"20px"}}><FaUser style={{color:'black',marginLeft:"-7px"}} /> {user || "Guest" }</h3>
                                </div>
            
            </nav>
            <nav id="homehor2">
              <button onClick={()=>setPage("home")} id="navbtn"><FaPlayCircle size={30} /></button>
                                          <button onClick={()=>setPage("home2")} id="navbtn"><FaCode size={30} /></button>
                                          <button onClick={()=>setPage("home3")} id="navbtn"><FaCartPlus size={30} /></button>
                                          <button onClick={()=>setPage("home")} id="navbtn"><FaCalculator size={30} /></button>
                                          <button onClick={()=>setPage("leader")} id="navbtn"><FaWebAwesome size={30} /></button>
                                          <button onClick={()=>setPage("downoad")} id="navbtn"><FaArrowAltCircleDown size={30} /></button>
                                          {/* <button onClick={()=>setPage("home")} id="navbtn"><FaArrowDown size={30} /></button> */}
            {/* <a id="icon" href="/home"><FaPlayCircle size={30} style={{marginLeft:"30px",marginTop:"50px"}}/></a>
            <a id="icon" href="/home2"><FaCode size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a>
            <a id="icon" href="/product"><FaCartPlus size={30} style={{marginLeft:"30px",marginTop:"30px", color:"aquamarine"}}/></a>
            <a id="icon" href="/invoice1"><FaCalculator size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a>
            <a id="icon" href="/leader"><FaWebAwesome size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a>
            <a id="icon" href="/home"><FaReadme size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a>
            <a id="icon" href="/home"><FaRegArrowAltCircleDown size={30} style={{marginLeft:"30px",marginTop:"30px"}}/></a> */}
            </nav>  

            <div id="codebody2">
             <h1 style={{color:"white", marginTop:"90px",textAlign:"center"}}>Courses You Might Like</h1>
             
             </div>
  <div>

  <div id="containerstyle">
     {products.map((product) => (
      <div key={product.id} id="prdstyle">
        <img src={product.image} alt={product.name} id="imgstyle" />
       <h3>{product.name}</h3>
       <p>{product.Language}</p>
       <p><FaClock style={{color:''}} />{product.price} Hrs</p>
       <button onClick={() => handleAddToCart(product)} id="btnstyle">
        Download
       </button>
      </div>
     ))} 
    </div>
</div>
  </div>
    );
}


export default Home3;
