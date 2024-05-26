
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import useRestaurantmenu from "../utils/useRestaurantmenu";

const Restromenu = () => {


  const {resId}= useParams();

  const resinfo =useRestaurantmenu(resId)



if (resinfo == null) return <Shimmer/>;


const { name, avgRating, costForTwoMessage, cuisines } = resinfo?.cards[2]?.card?.card?.info;


const {itemCards} = resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;


    return(
      <div className="menu">

        <h1>{name}</h1>
        <p>{avgRating}  -  {costForTwoMessage}</p>
        <h4>{cuisines.join(", ")}</h4>

        <h2>Menu</h2>
        <ul>

         
            {itemCards.map((item)=>(
              <li key={item.card.info.id}> {item.card.info.name} - {"Rs"}{item.card.info.price/100}</li>
              ))}
          
         
           
        </ul>

      </div>
    )
}

export default Restromenu;