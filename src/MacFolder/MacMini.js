import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {NavLink} from "react-router-dom"


function MacMini() {
    return (
        <div className="bg-black w-full  md:flex justify-center">

        <div>
        
                    <h1 className="text-yellow-600 text-xl font-semibold">New</h1>
                    <h1 className="font-bold mt-4 text-5xl text-white">MacBook Mini</h1>
                    <h1 className="font-semibold  mt-4 text-2xl text-white" >New guts.More glory.</h1>
                    <h1 className="font-small  mt-4 text-md text-white">From $699</h1>
                    <NavLink to="/market">
                    <button className="bg-blue-600  mt-4 text-white w-24 h-8 rounded-2xl">Buy</button>
                  </NavLink>
        
                   
                    </div>
        
        
                 <img className="object-contain max-w-3xl h-96" src="https://www.apple.com/v/mac-mini/k/images/overview/hero__x8ruukomx2au_large_2x.jpg"/>   
                </div>
    )
}

export default MacMini
