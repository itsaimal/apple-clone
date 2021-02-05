import React from 'react'
import {NavLink} from "react-router-dom"

function Cover2() {
    return (
        <div className="md:flex justify-center pt-16 ">
            <div className="flex justify-center bg-gray-50  pl-16 pr-16 shadow-2xl">



<div className="bg-gray-50 mr-24 pt-56">
    <h1 className="text-black font-semibold text-2xl text-center">WATCH</h1>
    <h1 className="text-red-700 text-center text-xs font-medium mb-8">SE</h1>
    <h1 className="text-4xl font-bold text-black text-center">Heavy on features.</h1>
    <h1 className="text-4xl font-bold text-black text-center">Light on price.</h1>
    <h1 className="text-2xl font-medium text-gray-700 text-center">From $279</h1>
    <NavLink to="/market">
    <button className="bg-blue-700 pt-2 pb-2 pl-4 pr-4 rounded-3xl text-white mr-8 ml-8 mt-10">Buy</button></NavLink>
   
</div>

<img className="  " src="https://www.apple.com/v/watch/home/ag/images/overview/se/tile-watch-se__knji2d25x8qe_large.jpg"/>
            </div>
            
        </div>
    )
}

export default Cover2
