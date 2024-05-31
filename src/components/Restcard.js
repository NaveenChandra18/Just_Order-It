import { CDN_URL } from "../utils/constants";


const Restcard= (props) => {
    const {restData} = props;
  
    const{
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo
    } = restData?.info;
  
    const{
      deliveryTime,
    } = restData?.info.sla;
  
  
      return(
      <div className="m-4  p-5 w-[230px] rounded-lg bg-slate-200 text-center h-[500px] shadow-lg hover:bg-slate-300 transition transform ease-in-out duration-500  hover:scale-105">
        <img 
        className="rounded-lg w-[200px] h-[200px] " 
      alt="restro" 
      src={CDN_URL+ cloudinaryImageId}/>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
  
        
      </div>
      );
  };

  export default Restcard;


  
