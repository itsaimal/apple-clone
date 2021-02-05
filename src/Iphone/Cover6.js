import React from 'react'
import {NavLink} from "react-router-dom"

function Cover6() {
    return (
        <div className=" md:flex justify-center mt-10 ">

        <div className="bg-white pl-5 pr-8 pt-8 shadow-2xl ">
            <h1 className="text-gray-700 text-center mt-6 text-3xl font-medium">Special Carrier Offers at Apple</h1>
        <h1 className="text-gray-800 text-center  text-6xl font-semibold">Get the newest iPhone for an</h1>
        <h1 className="text-gray-800 text-center  text-6xl font-semibold">unbelievable price.</h1>
        

{/* card */}
            <div className="flex justify-center mt-24">
                {/* 1 */}
                <div className="  rounded-2xl mr-4">
               
               
                    <img className=" ml-24 w-44 object-contain " src="https://www.apple.com/v/iphone/home/at/images/overview/retail/logo_att__ed1ga849ia2q_large.jpg"/>
                    <h1 className="pt-3 ml-5 text-3xl text-gray-700 text-center">Pay as low as $0/mo.</h1>
                    <h1 className="pt-2 ml-5 text-3xl w-96 text-gray-700 text-center">over 30 mo. after trade‑in and AT&T bill credits.5.</h1>
                </div>
{/* 2 */}
                <div className=" rounded-2xl mr-4 ">
                    
                
                    <img className="ml-24 w-56 object-contain" src="https://www.apple.com/v/iphone/home/at/images/overview/retail/logo_t_mobile_sprint__d4na32o1efe6_large.jpg"/>
                    <h1 className="pt-5 ml-5 text-3xl text-center text-gray-700">Get an additional $100</h1>
                    <h1 className="pt-3 ml-5 text-3xl text-center text-gray-700">trade-in credit from</h1>
                    <h1 className="pt-3 ml-5 text-3xl w-96 text-center text-gray-700">T‑Mobile/Sprint.6</h1>
                    
                </div>
                {/* 3 */}
                <div className=" rounded-2xl ">
                    
                
                    <img className="ml-36 w-36 object-contain" src="https://www.apple.com/v/iphone/home/at/images/overview/retail/logo_verizon__dbckzbil9tyu_large.jpg"/>
                    <h1 className="pt-5 ml-5 text-3xl text-center text-gray-700">Pay as low as $11.95/mo.</h1>
                    <h1 className="pt-2 ml-5 text-3xl text-center text-gray-700">over 24 mo. after trade‑in and</h1>
                    <h1 className="pt-2 ml-5 text-3xl w-96 text-center text-gray-700">Verizon bill credits.7</h1>
                    
                </div>

            </div>

            <div className="flex justify-center mt-10">
            <NavLink to="/market">
            <button className=" text-blue-700 text-4xl mt-7  mb-8 mr-72 ">Buy iPhone 12 </button></NavLink>

            <NavLink to="/market">
            <button className=" text-blue-700 text-4xl mt-7  mb-8 ">Buy iPhone 12 pro </button></NavLink></div>

        </div>
        
    </div>
    )
}

export default Cover6
