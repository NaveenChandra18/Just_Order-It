import { MENU_URL } from "../utils/constants";
import { useEffect,useState } from "react";


const useRestaurantmenu=(resId)=>{
    
const [resinfo , setresinfo]=useState(null);
 
useEffect(()=>{
fetchmenu()
},[])

const fetchmenu = async()=>{

     const response = await fetch(MENU_URL+resId);
     
     const json= await response.json();
     console.log(json)
     setresinfo(json.data) 
};

return resinfo;

}
export default useRestaurantmenu;