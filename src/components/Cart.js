import { Clearcart } from "../utils/cartslice";
import Itemlistofmenu from "./Itemlistofmenu";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Cart=()=>{
  
const cartItems=useSelector((store)=>store.cart.items);

const dispatch= useDispatch();

const handleClearCart=()=>{
  dispatch(Clearcart());
}

    return(

        <div className="p-4 m-4 text-center ">
           
          <h1 className="font-bold text-2xl">cart</h1>
          <button className="cursor-pointer bg-red-500 text-white rounded-lg px-2 py-2 m-4 "
           onClick={handleClearCart}>clear cart</button>
           
        
        <div className="flex justify-center ">
            <Itemlistofmenu items={cartItems}/>
         </div>
        </div>
    
    )
};

export default Cart ;