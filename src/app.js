import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/contact";
import Header from "./components/Header";
import Restromenu from "./components/restromenu";
import Error from "./Error";
import Usercontext from "./utils/Usercontext";
import appstore from "./utils/appstore";
import { Provider } from "react-redux";
import Cart from "./components/cart";

const Grocery =lazy(()=>import("./components/grocery"))


const Applayout = () =>
   {
      const [username,setuserName]=useState();

      useEffect(()=>{
         //api for fetching username
         const data={
            name:"naveen uniyal"
         }

         setuserName(data.name);
      },[]);
   
   return ( 
   <div className="app">
    <Provider store={appstore}>
    <Usercontext.Provider value={{loggedInUser:username,setuserName}}>
    <Header /> 
    <Outlet/>
    </Usercontext.Provider>
    </Provider>
   </div>
   
   
);
};
const approuter =(createBrowserRouter
([
{
path : "/",   //home
element:<Applayout/>,  
children:[
{
  path:"/",
  element:<Body/>
},
{
path : "/about",  //about
element:<About/>
},
{
   path : "/contact",  //contact
   element:<Contact/>
},
{
   path:"restroinfo/:resId",
   element:<Restromenu/>
},
{
   path:"/cart",
   element:<Cart />
},
{
   path:"/grocery",
   element:<Suspense fallback={<h1>loading........</h1>}><Grocery/></Suspense>
}
] ,
errorElement:<Error/>
},

])
)



 
const root=ReactDOM.createRoot(document.getElementById("main"));
root.render(<RouterProvider  router = {approuter}/>);