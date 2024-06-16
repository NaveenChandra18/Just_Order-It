import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { Additem } from "../utils/cartslice";


const Itemlistofmenu =({items})=>{
 // console.log(items)

const dispatch = useDispatch();                             // action ={ payload:item}
const handleclick=(item)=>{
   //we will dispatch an action
   dispatch(Additem(item))

}
    return(
        <div>
          
          {items.map((item)=>(
            <div key={item.card.info.id} className=" w-[730px] shadow-lg m-6 p-4 h-[300px] bg-slate-200 text-left flex justify-between">
                
             <div className="flex flex-col justify-between w-[480px]">
             <div className="font-bold">
                    <span>⭕{item.card.info.name}</span>
                </div>

                <div className="font-mono">
                   <span>-₹{item.card.info.finalPrice/100 || item.card.info.price/100 || item.card.info.defaultPrice/100} </span>
                </div>

                <div >
                  <h2>⭐{item.card.info.ratings.aggregatedRating.rating || "no ratings"} ({item.card.info.ratings.aggregatedRating.ratingCount})</h2>
                </div>


                <div className="w-[480px] mb-[40px] ">
                <span>{item.card.info.description}</span>
                </div>
                
                

                
                  
             </div>
               <div className="flex justify-center mt-12 mr-6 ">
                        <img className="w-36 h-40 rounded-lg flex relative" src={CDN_URL + item.card.info.imageId} alt="Item Image" />
                        <button className=" flex absolute bg-white text-black py-2 rounded-lg mt-44 px-4  border border-black hover:bg-black hover:text-white"
                        onClick={()=>handleclick(item)}>Add+</button>
               </div>
                    
            </div>
          ))}
        

        
        </div>
    );
};


export default Itemlistofmenu;

