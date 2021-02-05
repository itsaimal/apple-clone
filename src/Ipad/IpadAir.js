import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {NavLink} from "react-router-dom"

function IpadAir() {
    return (
        <div className="bg-gray-50 w-full  md:flex justify-center">

<div>

            <h1 className="text-yellow-600 text-xl font-semibold">New</h1>
            <h1 className="font-bold mt-4 text-5xl text-black">iPad Air</h1>
            <h1 className="font-semibold  mt-4 text-2xl text-clack w-56" >Power. Colorful. Wonderful.</h1>
            <h1 className="font-small  mt-4 text-md text-black">From $599</h1>
            <NavLink to="/market">
            <button className="bg-blue-600  mt-4 text-white w-24 h-8 rounded-2xl">Buy</button>
          </NavLink>

            </div>


         <img className="object-contain max-w-3xl h-96" src="https://images.macrumors.com/t/aRVCB9RAtQ0K0aFwBGlgp5l1d2o=/1960x/https://images.macrumors.com/article-new/2020/09/ipad-air-4-colors.jpg"/>   
        </div>
    )
}

export default IpadAir
