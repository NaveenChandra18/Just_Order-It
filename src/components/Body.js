import Restcard from "./Restcard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Body = () =>{

//(const) state variable -super powerful react variable
const [listofrestro , setListofrestro]=useState([]);  //for restaurants card

const [filtersearch , setfiltersearch]=useState([]);  

const [searchtext , setsearchtext]=useState(""); //for search display

     


useEffect(() => {
  fetchdata();
}, []);



const fetchdata = async()=>
{
 const datafetch = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.7040592&lng=77.10249019999999");
 
 const json = await datafetch.json();

 setListofrestro(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
 setfiltersearch(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);

 console.log(json);
};

const onlinestatus = useOnlinestatus();

if (onlinestatus==false)
  return(

<h1>oops! something went wrong.looks like you are offline</h1>

);
return listofrestro.length==0?(
  <Shimmer />

): //else

(
    <div className="body">
      <div className="filter">
       <div className="search">
         <input type="text"
           className="search-box"
           value={searchtext}
           onChange={(e)=>{
             setsearchtext(e.target.value)
           }}

           
        />

        <button 
        onClick={()=>{
          
          // filter the restaurant card
          const filterfind= listofrestro.filter(
            (rest)=>rest.info.name.toLowerCase().includes(searchtext.toLowerCase()) 
          );
          setfiltersearch(filterfind);
          
        
        }}
        >Search</button> 
      </div>


        <div className="btn">
        <button className="top-rated-restro"
        onClick={()=>{
         
          const filterlist=listofrestro.filter(
            (reslocation)=> reslocation.info.avgRating >  4.5
          
          );
          setfiltersearch(filterlist);
        }}>
          
          top rated restaurant</button>
       </div>
       </div>




       <div className="rest-container">
  
         {
  
            filtersearch.map((restaurant) => (
      <Link key ={restaurant.info.id} to={"/restroinfo/"+restaurant.info.id}> <Restcard restData={restaurant}/></Link>
         
         ))}
  
       </div>
    </div>
);
};  


  export default Body;