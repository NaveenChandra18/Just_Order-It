import Itemlistofmenu from "./Itemlistofmenu"
import { useState } from "react"

const Restrocategory = (data) => {
// console.log(data)

const [showItems,setshowItems]=useState(false);

const HandleClick=()=>{
  // setshowItems(true); //to make show items true which will show all items

  setshowItems(!showItems); // toggle feature-- if my show item is true make it false and if it is false make it true
};

  return (

    <div>
    {/* Accordion Header*/}
    
    <div className="w-7/12 m-auto p-6 shadow-lg  font-bold bg-emerald-50 ">
     
       <div className="flex justify-between bg-slate-200 mt-9 cursor-pointer p-6 shadow-lg" 
       onClick={HandleClick} >
       <span>{data.data?.title} ({data?.data?.itemCards?.length})</span> 
       <span>🔽</span>
       </div>

      {/* Accordion Body*/}
       
      <div className="flex justify-center font-thin  ">
       {showItems && <Itemlistofmenu key={data?.data?.itemCards.id} items={data?.data?.itemCards}/>}
       </div>


       </div>
    </div>
  )
}

export default Restrocategory
