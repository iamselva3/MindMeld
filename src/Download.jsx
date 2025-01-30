import React, { useCallback, useContext, useMemo, useState } from "react";
import "./Download.css"
import {  FaArrowAltCircleDown, FaArrowDown, FaCalculator, FaCartPlus, FaClock, FaCode, FaCoins, FaHome, FaPause, FaPlay, FaPlayCircle, FaPuzzlePiece, FaPython, FaQuestion, FaQuestionCircle, FaReadme, FaRegArrowAltCircleDown, FaSoundcloud, FaSpeakerDeck, FaUser, FaVirus } from 'react-icons/fa';
import {  FaWebAwesome } from "react-icons/fa6";
import { Context } from "./app";
import Nav from "./nav";
// import { Context1 } from "./app1";


function Download() {
    // const {user,setPage}=useContext(Context);


    const { cart=[], setCart,user,setPage } = useContext(Context);
    const [removedItems, setRemovedItems] = useState([]);
  
    const handleRemove = useCallback((product, index) => {
      setCart((cart) => {
        const newCart = [...cart]; // Create a copy of the cart
        newCart.splice(index, 1); // Remove one item at the specified index
        return newCart;
      });
      
      setRemovedItems((items) => [product, ...items]);
    }, []);
  
    const handleUndo = useCallback(() => {
      if (removedItems.length > 0) {
        const lastRemoved = removedItems[0];
        setCart((cart) => [...cart, lastRemoved]);
        setRemovedItems((items) => items.slice(1));
      }
    }, [removedItems]);
   
    // Memoized total price calculation
    const totalPrice = useMemo(() => {
      return cart.reduce((sum, item) => sum + item.price, 0);
    }, [cart]);
  
  
    
    // const { username } = useContext(Context1);

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
                
                        
                        <h3 style={{marginTop:"2px", fontSize:"20px"}}><FaUser style={{color:'black',marginLeft:"-7px"}} /> {user || "Guest" }</h3>
                    </div>
            </nav>
            <nav id="homehor6">
            <button onClick={()=>setPage("home")} id="navbtn"><FaPlayCircle size={30} /></button>
            <button onClick={()=>setPage("home2")} id="navbtn"><FaCode size={30} /></button>
            <button onClick={()=>setPage("home3")} id="navbtn"><FaCartPlus size={30} /></button>
            <button onClick={()=>setPage("home")} id="navbtn"><FaCalculator size={30} /></button>
            <button onClick={()=>setPage("leader")} id="navbtn"><FaWebAwesome size={30} /></button>
            <button onClick={()=>setPage("download")} id="navbtn"><FaArrowAltCircleDown size={30} /></button>
            </nav>  
            {/* <Nav setPage={setPage} /> */}
            
            <div id="codebody6">
             <h1 style={{color:"white", marginTop:"50px",marginleft:"500px"}}>Download for You {user || "Guest"}</h1>
             <p style={{color:"gray", textAlign:"left"}}>
             </p>
             </div>

             <div style={containerStyle}>
      {/* <h2>{user || "Guest"}</h2> */}

      {cart.length > 0 ? (
        <div id="Card">
          <div id="incard">
            {cart.map((product, index) => (
              <div id="in3" key={index}>
                <h3>{product.name}</h3>
                <img src={product.image}></img>
                <p><FaClock size={0} style={{color:"#178582"}}/>{product.price}-Hrs</p>
                <button onClick={() => handleRemove(product, index)}>Remove</button>
              </div>
            ))}
          </div>
          <h3>Total Hours Remaining to watch<br></br><FaClock size={0} style={{color:"#178582"}}/><span>
          {totalPrice} -Hrs </span></h3>
        </div>
      ) : (
        <p>Your Download is empty!</p>
      )}
      {removedItems.length > 0 && (
        <button onClick={handleUndo} style={{ marginTop: "20px" }}>
          Undo Last Remove
        </button>
      )}
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

export default Download;