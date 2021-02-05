import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {NavLink} from "react-router-dom"

function IpadSp() {
    return (
        <div className="bg-indigo-50 w-full h-96 flex justify-center">


        <img className="object-contain max-w-3xl h-96" src="https://www.pakmobizone.pk/wp-content/uploads/2020/10/xApple-iPad-8th-Gen-10.2-inch-2020-6-1.jpg.pagespeed.ic.plWZMFCFRV.jpg"/>  

  <div>
  
              <h1 className="text-yellow-600 text-xl font-semibold">New</h1>
             
              <h1 className="font-bold mt-4 text-5xl text-black">MacBook Pro</h1>
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

export default IpadSp
