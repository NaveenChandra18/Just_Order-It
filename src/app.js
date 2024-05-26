import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter , RouterProvider  , Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./Error";
import Restromenu from "./components/restromenu";

const Grocery =lazy(()=>import("./components/grocery"))


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
},
{
   path:"restroinfo/:resId",
   element:<Restromenu/>
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

