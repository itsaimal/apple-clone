import React from 'react'
import {NavLink} from "react-router-dom"

function Cover5() {
    return (
        <div className=" md:flex justify-center">

            <div className="bg-gray-50 pl-24 pr-24 mr-4 mt-32 pt-24">
            <h1 className="text-center text-5xl mb-3 text-gray-900 font-semibold">Fitness+</h1>
                <h1 className="text-center text-2xl text-gray-900 ">A new fitness experience for everyone.</h1>
                <h1 className="text-center text-2xl text-gray-900 ">Powered by Apple Watch.</h1>
                <img className=" mt-36" src="https://www.apple.com/v/tv/home/aa/images/overview/fitness_plus__e8vmlr8vdpqq_medium.jpg"/>
            </div>


            <div>


<div className="relative top-56">
                <h1 className="text-center text-5xl mb-3 text-gray-900 font-semibold">Arcade</h1>
                <h1 className="text-center text-2xl text-gray-900 ">Get 3 months of Apple Arcade free when you</h1>
                <NavLink to="/market">
                <h1 className="text-center text-2xl text-gray-900">buy an Apple TV 4K.</h1></NavLink>
                </div>
        
                <img className="" src="https://www.apple.com/v/tv/home/aa/images/overview/appletv_arcade_half_tile__1lqr9r200bmm_large.jpg"/>
            </div>
            
        </div>
    )
}

export default Cover5
