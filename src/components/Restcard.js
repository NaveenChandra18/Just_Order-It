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
      <div className="restcard">
        <img 
        className="meghana" 
      alt="restro" 
      src={CDN_URL+ cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
  
        
      </div>
      );
  };

  export default Restcard;


  
