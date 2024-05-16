import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./Error";




const Applayout = () => ( 
   <div className="app">

    <Header />
    <Outlet/>

   </div>
   
);
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
}
] ,
errorElement:<Error/>
},

])
)



 
const root=ReactDOM.createRoot(document.getElementById("main"));
root.render(<RouterProvider  router = {approuter}/>);