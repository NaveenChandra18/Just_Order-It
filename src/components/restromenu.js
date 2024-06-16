
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import Restrocategory from "./Restrocategory";
const Restromenu = () => {


  const {resId}= useParams();

  const resinfo =useRestaurantmenu(resId)



if (resinfo == null) return <Shimmer/>;


const { name, avgRating, costForTwoMessage, cuisines } = resinfo?.cards[2]?.card?.card?.info;


// const {itemCards} = resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


// console.log(resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards)


const categories = resinfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  (c)=>
    c.card?.card?.["@type"]== 
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);


// console.log(categories);



    return(
      <div className="text-center my-6">

        <h1 className=" text-2xl font-bold py-2">{name}</h1>
        <h4 className="font-bold text-lg font-thin">{cuisines.join(", ")}</h4>
        <p className="text-md font-bold">{avgRating}⭐  -  {costForTwoMessage}</p>
     
      {/* categories accordion */}

      {categories.map((category,index)=>(<Restrocategory key={category.card.card?.id || index} data={category?.card?.card} />))}

      </div>
    )
}

export default Restromenu;