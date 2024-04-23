import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from '../../assets/home.svg';
import Arrow from '../../assets/arrow.svg';
function HomeScreenLayout() {
  const location = useLocation();
  const path_array = location.pathname;
  const route=path_array.split("/");
  console.log(path_array);
  return (
    <div>
      <Navbar />
      <div className="flex flex-1 flex-row justify-start items-center my-10">
        <img src={Home} className="aspect-square w-5 "></img>
        
          {route.map((item,index) => {
          let add=item;
          add=add.charAt(0).toUpperCase()+add.substring(1).toLowerCase();
          if(index==route.length-1)  
          return(
            <span key={index} className="text-[#06286E] font-semibold">{` ${add.split("-").join(' ')} `}</span>
          )
         else 
          return(
            
        <span key={index} className="text-[#696671]">{` ${add.split("-").join(' ')} `}
        <img src={Arrow} className="inline mx-2"></img>
        </span>
          
          )
        }
        )
          }
        
      </div>
      <Outlet />
    </div>
  );
}

export default HomeScreenLayout;
