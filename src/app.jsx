import React, { useState } from "react";
import Login from "./login";

import Home from "./home";
import Home2 from "./home2";
import Nav from "./nav";
import Home3 from "./home3";
import Courselib from "./Courselib";
import Combo from "./Combo";
import Leader from "./Leader";
import Download from "./Download";
import Combo1 from "./Combo1";
import Admin from "./admin";
import Test from "./Test";
// Create Context
export const Context = React.createContext();
function App() {
     const [user, setuser ] = useState(""); // To store username
     const [page, setPage] = useState("login"); 
     const [cart, setCart] = useState([]);// To manage current page
     //  // To store all products added to the cart
     return (
      <Context.Provider value={{ user, setuser, setPage, cart, setCart }}>
          {/* <Nav setPage={setPage} /> */}
       {page == "login" ? <Login /> : ""}
       {page == "home" ? <Home setPage={setPage} /> : ""}
       {page == "home2" ? <Home2 /> : ""}
       {page == "home3" ? <Home3 /> : ""}
       {page == "home4" ? <Courselib setPage={setPage} /> : ""}
       {page == "home5" ? <Combo setPage={setPage}/> : ""}
       {page == "leader" ? <Leader /> : ""}
       {page == "download" ? <Download /> : ""}
       {page == "combo1" ? <Combo1 /> : ""}
       {page == "admin" ? <Admin /> : ""}
       {page == "test" ? <Test /> : ""}


      </Context.Provider>
     );
    }
    export default App;