import React from 'react'
import {NavLink} from "react-router-dom"

function Cover1() {
    return (
        <div className="md:flex justify-center pt-16 ">
            <div className="flex justify-center bg-black  pl-28 pr-28 shadow-2xl">
<img className="w-96 pt-12 pb-12 pl-20" src="https://www.apple.com/v/watch/home/ag/images/overview/series-6/tile_watch_s6__bbw92knen8mq_medium.jpg"/>


<div className="bg-black ml-20 pr-56 pt-12 mt-20">
    <h1 className="text-white font-semibold text-2xl text-center">WATCH</h1>
    <h1 className="text-red-700 text-center text-xs font-medium mb-8">SERIES</h1>
    <h1 className="text-4xl font-bold text-white text-center">The future of health</h1>
    <h1 className="text-4xl font-bold text-white text-center">is on your wrist.</h1>
    <h1 className="text-2xl font-medium text-white text-center">From $399</h1>
<NavLink to="/market">
    <button className="bg-blue-700 pt-2 pb-2 pl-4 pr-4 rounded-3xl text-white mr-8 ml-8 mt-10">Buy</button></NavLink>
 
</div>
            </div>
            
        </div>
    )
}

export default Cover1
