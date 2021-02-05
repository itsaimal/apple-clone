import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {NavLink} from "react-router-dom"

function IpadMini() {
    return (
        <div className="bg-indigo-50 w-full  md:flex justify-center">


        <img className="object-contain max-w-3xl h-96" src="https://cdn-reichelt.de/bilder/web/xxl_ws/I200/APPLE_IPAD_MINI_5_01.png"/>  

  <div>
  
              <h1 className="text-yellow-600 text-xl font-semibold">New</h1>
             
              <h1 className="font-bold mt-4 text-5xl text-black">iPad </h1>
              <h1 className="font-semibold  mt-4 text-2xl text-black" >Delightfully capable.</h1>
              <h1 className="font-semibold  mt-4 text-2xl text-black" >Surprisingly affordable.</h1>
              <h1 className="font-small  mt-4 text-md text-black">From $1299</h1>

              <NavLink to="/market">
              <button className="bg-blue-600  mt-4 text-white w-24 h-8 rounded-2xl">Buy</button>
            </NavLink>
  
              </div>
  
  
          
          </div>
    )
}

export default IpadMini
