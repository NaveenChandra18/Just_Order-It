// creating a store container which have different slices

import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cartslice";

const appstore=configureStore({    //store contain slices

    reducer:        //main reducer
    { 
       cart:cartReducers    //slice reducer
    }

});


export default appstore;
