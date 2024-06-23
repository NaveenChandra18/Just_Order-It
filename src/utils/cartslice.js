import { createSlice } from "@reduxjs/toolkit";

 const cartslice= createSlice({
    name:"cart",
    initialState:{
        items:[],
    },

    reducers:{
        Additem:(state,action)=>{
            state.items.push(action.payload);
        }, 

        Removeitem:(state)=>{
            state.items.pop(action.payload);
        },

        Clearcart:(state)=>{
            state.items=[];
        }
    }
 })

 export default cartslice.reducer; //exporting reducers
 export const{Additem,Removeitem,Clearcart} = cartslice.actions; //exporting actions