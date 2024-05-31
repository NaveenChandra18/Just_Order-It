import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";


const Header = () => {

const [btnnameReact , setbtnnameReact] = useState("login"); 

const onlinestatus = useOnlinestatus();

   return (
    <div className="flex justify-between shadow-lg bg-slate-50  ">
        <div className="logocontainer">
           <img className="w-[150]" src={LOGO_URL}></img>
        </div>
  
        <div className="flex items-center text-lg">
             <ul className="flex px-4 ">
                <li className="px-6 ">Online status:{onlinestatus ? "🟢" : "🔴"}</li>
                <li className="px-6 "><Link to="/">🏘Home</Link></li>
                <li className="px-6 "><Link  to="/about">📋About Us</Link></li>
                <li className="px-6 "><Link  to="/contact">📞Contact Us</Link></li>
                <li className="px-6 "><Link  to="/grocery">🥦Grocery</Link></li>
                <li className="px-6 ">🛒Cart</li>
                <button
                 className="bg-blue-500 text-white px-5 ml-8 py-1 rounded-md " 
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