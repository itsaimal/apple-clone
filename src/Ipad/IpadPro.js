import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {NavLink} from "react-router-dom"

function IpadPro() {
    return (
        <div className="bg-indigo-50 w-full md:flex justify-center">

        <div>
        
                    <h1 className="text-yellow-600 text-xl font-semibold">New</h1>
                    <h1 className="font-bold mt-4 text-5xl text-black">iPad Pro</h1>
                    <h1 className="font-semibold  mt-4 text-2xl text-clack w-56" >The ultimate.</h1>
                    <h1 className="font-semibold  mt-4 text-2xl text-clack w-56" >iPad experience.</h1>
                    <h1 className="font-small  mt-4 text-md text-black">From $599</h1>

                    <NavLink to="/market">
                    <button className="bg-blue-600  mt-4 text-white w-24 h-8 rounded-2xl">Buy</button>
                  </NavLink>
        
                  
                    </div>
        
        
                 <img className="object-contain max-w-3xl h-96" src="https://cdn.mobilesyrup.com/wp-content/uploads/2020/03/ipad-pro-2020-header-scaled.jpg"/>   
                </div>
    )
}

export default IpadPro
