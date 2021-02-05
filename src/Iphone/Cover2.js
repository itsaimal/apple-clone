import React from 'react'
import {NavLink} from "react-router-dom"

function Cover2() {
    return (
        <div className="bg-black md:flex justify-center">

        <div className="pt-20">
            <h1 className="text-gray-100 text-2xl text-center font-semibold">iPhone 12 Pro and iPhone 12 Pro Max</h1>
            <h1 className="text-gray-100 text-center mt-6 text-4xl font-bold">It’s a leap year.</h1>
            <h1 className="text-gray-100 text-center mt-4 text-xl font-medium">From $41.62/mo. or $999 before trade‑in2</h1>
            <div className="flex justify-center">
                <NavLink to="/market">
            <button className="bg-blue-700 pl-5 pb-1 rounded-2xl pt-1 pr-5 text-white mt-8 mb-8">Buy</button></NavLink></div>


            <img className="max-w-4xl" src="https://www.apple.com/v/iphone/home/at/images/overview/hero/iphone_12_pro__f7wokw1n4lm6_large.jpg"/>
        </div>
        
    </div>
    )
}

export default Cover2
