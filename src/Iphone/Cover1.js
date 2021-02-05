import React from 'react'
import {NavLink} from "react-router-dom"

function Cover1() {
    return (
        <div className="bg-gray-100 md:flex justify-center">

            <div className="pt-20">
                <h1 className="text-gray-800 text-2xl text-center font-semibold">iPhone 12 and iPhone 12 mini</h1>
                <h1 className="text-gray-900 text-center mt-6 text-4xl font-bold">Blast past fast.</h1>
                <h1 className="text-gray-700 text-center mt-4 text-xl font-medium">From $29.12/mo. or $699 before trade‑in1</h1>
                <div className="flex justify-center">
                <button className="bg-blue-700 pl-5 pb-1 rounded-2xl pt-1 pr-5 text-white mt-8 mb-8">Buy</button></div>


                <img className="max-w-4xl" src="https://www.apple.com/v/iphone/home/at/images/overview/hero/iphone_12__d51ddqcc7oqe_medium.jpg"/>
            </div>
            
        </div>
    )
}

export default Cover1
