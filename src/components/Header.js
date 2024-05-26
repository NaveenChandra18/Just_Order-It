import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";


const Header = () => {

const [btnnameReact , setbtnnameReact] = useState("login"); 

const onlinestatus = useOnlinestatus();

   return (
    <div className="header">
        <div className="logocontainer">
           <img className="logo" src={LOGO_URL}></img>
        </div>
  
        <div className="navitems">
             <ul>
                <li>Online status:{onlinestatus ? "🟢" : "🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link  to="/about">About</Link></li>
                <li><Link  to="/contact">Contact Us</Link></li>
                <li><Link  to="/grocery">Grocery</Link></li>
                <li>Cart</li>
                <button
                 className="bttn"
                 onClick={()=>{
                  btnnameReact=="login"
                  
                
                  ?setbtnnameReact("logout")
                  :setbtnnameReact("login");
                  
                 }}>
                  {btnnameReact}
                 </button>
                 
             </ul>
             
        </div>
    </div>
  );
};

  export default Header;