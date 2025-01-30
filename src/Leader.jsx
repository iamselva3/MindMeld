import React, { useContext, useState } from "react";
import "./Leader.css"
import {  FaArrowAltCircleDown, FaCalculator, FaCartPlus, FaCode, FaCoins, FaHome, FaPause, FaPlay, FaPlayCircle, FaPuzzlePiece, FaPython, FaQuestion, FaQuestionCircle, FaReadme, FaRegArrowAltCircleDown, FaSoundcloud, FaSpeakerDeck, FaUser, FaVirus } from 'react-icons/fa';
import {  FaWebAwesome } from "react-icons/fa6";
import { Context } from "./app";
import { Context1 } from "./app1";


function Leader() {
    const {user,setPage}=useContext(Context);
    // const { username } = useContext(Context1);
    //  const { setCart, setPage } = useContext(Context1);
    const [selectedName, setSelectedName] = useState("");
    const [newName, setNewName] = useState("");
    const [newCoins, setNewCoins] = useState("");
    const [selectedRow, setSelectedRow] = useState(null);
    
    // Function to handle row selection
    const handleRowClick = (row, name, coins) => {
        setSelectedName(name);
        setNewName(name);
        setNewCoins(coins);
        setSelectedRow(row);
    };
    
    // Function to update leaderboard row
    const handleUpdate = () => {
        if (selectedRow) {
            selectedRow.querySelector(".name").textContent = newName;
            selectedRow.querySelector(".coins").textContent = newCoins;
        }
        setSelectedName("");
        setNewName("");
        setNewCoins("");
        setSelectedRow(null);
    };
    
    // Function to delete leaderboard row
    const handleDelete = () => {
        if (selectedRow) {
            selectedRow.remove();
            setSelectedName("");
            setNewName("");
            setNewCoins("");
            setSelectedRow(null);
        }
    };
    
 
    return (
        <div id="homebodylr">
            <nav id="homenavlr">
                <img src="./blulog.PNG" id="homeloglr" alt="logo"/>

                <div id="coinlr">
                                    <FaCoins size={20} color="black" />
                                    <h2 style={{marginLeft:"30px",marginTop:"-2px", color:"lightgreen"}}>2000</h2>
                
                                </div>
                
                                 <div id="coin">
                                                    <FaCoins size={20} color="black" />
                                                    <h2 style={{marginLeft:"30px",marginTop:"-2px", color:"lightgreen"}}>2000</h2>
                                
                                                </div>
                                
                                                <FaQuestionCircle size={25} color="black" style={{marginLeft:"40px"}} />
                                
                                                <div id="context">
                                
                                        
                                        <h3 style={{marginTop:"2px", fontSize:"20px"}}><FaUser style={{color:'black',marginLeft:"-7px"}} /> {user || "Guest" }</h3>
                                    </div>
            
            </nav>
            <nav id="homehorlr">
              <button onClick={()=>setPage("home")} id="navbtn"><FaPlayCircle size={30} /></button>
                        <button onClick={()=>setPage("home2")} id="navbtn"><FaCode size={30} /></button>
                        <button onClick={()=>setPage("home3")} id="navbtn"><FaCartPlus size={30} /></button>
                        <button onClick={()=>setPage("home")} id="navbtn"><FaCalculator size={30} /></button>
                        <button onClick={()=>setPage("leader")} id="navbtn"><FaWebAwesome size={30} /></button>
                        <button onClick={()=>setPage("download")} id="navbtn"><FaArrowAltCircleDown size={30} /></button>
            </nav>  

            <div id="codebodylr">
                <div id="pps1">
            <img src="./pps1.jpg" id="pps"></img><br></br>
            <FaCoins /><p style={{marginLeft:"25px",marginTop:"-20px"}}>65000</p>
            <p style={{marginTop:"-15px"}}>1. Joseph</p>
            </div>
            <div id="pps2">
            <img src="./pps1.jpg" id="pps"></img><br></br>
            <FaCoins /><p style={{marginLeft:"25px",marginTop:"-20px"}}>50000</p>
            <p style={{marginTop:"-15px"}}>2.Donald Trump</p>
            </div>

            <div id="pps3">
            <img src="./pps1.jpg" id="pps"></img><br></br>
            <FaCoins /><p style={{marginLeft:"25px",marginTop:"-20px"}}>50000</p>
            <p style={{marginTop:"-15px"}}>3.Modi</p>
            </div>
</div>
<div class="table-container">
  <table class="custom-table">
    <thead>
      <tr>
        <th>Rank</th>
        <th>Profile</th>
        <th>Meldcoins</th>
      </tr>
    </thead>
    <tbody>
  <tr onClick={(e) => handleRowClick(e.currentTarget, "Yamini", 47180)}>
    <td>4</td>
    <td>
      <div class="profile">
        <img src="ppr2.jpeg" alt="Avatar" class="avatar" />
        <div>
          <p class="name">Yamini</p>
          <p class="details">Mangayarkarasi College of Arts & Science for Women,Madurai</p>
        </div>
      </div>
    </td>
    <td class="coins">47180</td>
  </tr>
  <tr onClick={(e) => handleRowClick(e.currentTarget, "Selva", 45530)}>
    <td>5</td>
    <td>
      <div class="profile">
        <img src="prr.png" alt="Avatar" class="avatar" />
        <div>
          <p class="name">Selva</p>
          <p class="details">KAHE,Coimbatore</p>
        </div>
      </div>
    </td>
    <td class="coins">45530</td>
  </tr>
  <tr onClick={(e) => handleRowClick(e.currentTarget, "Aswin", 45290)}>
    <td>6</td>
    <td>
      <div class="profile">
        <img src="prr.png" alt="Avatar" class="avatar" />
        <div>
          <p class="name">Aswin</p>
          <p class="details">American College,Madurai</p>
        </div>
      </div>
    </td>
    <td class="coins">45290</td>
  </tr>
  <tr onClick={(e) => handleRowClick(e.currentTarget, "siva", 44920)}>
    <td>7</td>
    <td>
      <div class="profile">
        <img src="prr.png" alt="Avatar" class="avatar" />
        <div>
          <p class="name">Siva</p>
          <p class="details">Rathinam Technologies,Coimbatore</p>
        </div>
      </div>
    </td>
    <td class="coins">44920</td>
  </tr>
  <tr onClick={(e) => handleRowClick(e.currentTarget, "Harshath", 44900)}>
    <td>8</td>
    <td>
      <div class="profile">
        <img src="ppr2.jpeg" alt="Avatar" class="avatar" />
        <div>
          <p class="name">Harshath</p>
          <p class="details">Kindy Anna University,Chennai</p>
        </div>
      </div>
    </td>
    <td class="coins">44900</td>
  </tr>
     <tr onClick={(e) => handleRowClick(e.currentTarget, "Muthu", 48900)}>
    <td>9</td>
    <td>
      <div class="profile">
        <img src="ppr2.jpeg" alt="Avatar" class="avatar" />
        <div>
          <p class="name">Muthu</p>
          <p class="details">Kalasalingam University,Krishnan Kovil</p>
        </div>
      </div>
    </td>
    <td class="coins">48900</td>
  </tr>
  <tr onClick={(e) => handleRowClick(e.currentTarget, "Nandha", 47000)}>
    <td>10</td>
    <td>
      <div class="profile">
        <img src="ppr2.jpeg" alt="Avatar" class="avatar" />
        <div>
          <p class="name">Nandha</p>
          <p class="details">Madras University,Chennai</p>
        </div>
      </div>
    </td>
    <td class="coins">4700</td>
  </tr>
    </tbody>
  </table>
</div>
<div id="leaderboard-actions">
  <h3 style={{ color: "white" }}>Modify Leaderboard</h3>

  <label style={{ color: "white" }}>Selected Name:</label>
  <input 
    type="text" 
    value={selectedName} 
    readOnly
    style={{ marginRight: "10px", padding: "5px", backgroundColor: "#ddd" }}
  />

  <label style={{ color: "white" }}>New Name:</label>
  <input 
    type="text" 
    placeholder="Enter new name" 
    value={newName} 
    onChange={(e) => setNewName(e.target.value)} 
    style={{ marginRight: "10px", padding: "5px" }}
  />

  <label style={{ color: "white" }}>New Coins:</label>
  <input 
    type="number" 
    placeholder="Enter new coins" 
    value={newCoins} 
    onChange={(e) => setNewCoins(e.target.value)} 
    style={{ marginRight: "10px", padding: "5px" }}
  />

  <br /><br />

  <button 
    onClick={handleUpdate} 
    style={{ padding: "10px 20px", backgroundColor: "#178582", borderRadius: "15px", color: "white", marginRight: "10px",border:'#178582' }}>
    Update
  </button>

  <button 
    onClick={handleDelete} 
    style={{ padding: "10px 20px", backgroundColor: "red", borderRadius: "15px", color: "white",border:'red' }}>
    Delete
  </button>
</div>



  </div>
    );
}


export default Leader;
