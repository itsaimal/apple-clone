import React from 'react'
import {NavLink} from "react-router-dom"

function Cover3() {
    return (
        <div className=" flex justify-center">

            <div className="bg-grad pl-72 pr-72 pt-16 pb-16">
                <h1 className="text-center text-3xl font-medium text-white">tv</h1>
                <h1 className="text-center text-7xl font-semibold text-white mb-8">
              
Cinematic in every sense.</h1>
<NavLink to="/market">
                <button className="bg-blue-700 rounded-3xl pt-2 pb-2 pl-4 pr-4 text-white mr-16 ml-72">Buy</button></NavLink>
              

                <div className="flex justify-center mt-10">
                    <img src="https://www.apple.com/v/tv/home/aa/images/overview/apple_tv_4k_remote__nuhoyzf08qaq_medium.png"/>
                </div>
                <h1 className="text-center text-xl text-white">

Get 1 year of Apple TV+ free when you buy an Apple TV 4K.1</h1>

            </div>
            
        </div>
    )
}

export default Cover3
