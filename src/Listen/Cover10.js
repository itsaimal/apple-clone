import React from 'react'
import {NavLink} from "react-router-dom"

function Cover10() {
    return (
        <div className="flex justify-center">
             <div className="bg-black pl-24 pr-24 mr-4 mt-32 pt-24">
            <h1 className="text-center text-5xl mb-3 text-white font-semibold">AirPods Pro</h1>
                <h1 className="text-center text-2xl text-white ">Magic like you’ve</h1>
                <h1 className="text-center text-2xl text-white ">never heard.</h1>
                <div className="flex justify-center mt-4 "> <NavLink to="/market">
                <button className="bg-blue-700 text-white rounded-3xl pl-4 pr-4 pt-2 pb-2 ">Buy</button></NavLink>
                </div>
                
                <img className=" mt-48" src="https://www.apple.com/v/music/r/images/overview/airpods_pro__ekx2tfj01uwm_large.jpg"/>

            </div>


            <div className="bg-gray-50 pl-24 pr-24 mr-4 mt-32 pt-24">
            <h1 className="text-center text-5xl mb-3 text-gray-900 font-semibold">AirPods </h1>
                <h1 className="text-center text-2xl text-gray-900 ">More magical</h1>
                <h1 className="text-center text-2xl text-gray-900 ">than ever.</h1>
                <div className="flex justify-center mt-5">
                <NavLink to="/market">
                <button className="bg-blue-700 text-white rounded-3xl pl-4 pr-4 pt-2 pb-2 ">Buy</button></NavLink>
                </div>
                <img className=" mt-24" src="https://www.apple.com/v/music/r/images/overview/airpods__bec4fz5llegi_large.jpg"/>
            </div>
            
        </div>
    )
}

export default Cover10
