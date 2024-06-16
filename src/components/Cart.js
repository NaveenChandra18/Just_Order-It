import Itemlistofmenu from "./Itemlistofmenu";
import { useSelector } from "react-redux";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items);
    return(
        <div  className="text-center"> 
           
          <h1>cart</h1>
           
          <div>
            <Itemlistofmenu items={cartItems}/>
          </div>
        </div>
    
    )
};

export default Cart ;