import React from 'react'
import {NavLink} from "react-router-dom"

function COver3() {
    return (
        <div className="bg-white md:flex justify-center">

            <div className="pt-20">
           
                <h1 className="text-gray-900 text-center mt-6 text-4xl font-semibold mb-4">Which Apple Watch is right for you?
</h1>
               

<div className="flex justify-center">
                <button className=" text-blue-700 font-semibold  mb-8 ">Compare all  models </button></div>

                <div className="grid md:grid-rows-1 md:grid-flow-col md:grid-col-4 sm:grid-col-2  sm:grid-rows-2">

                    {/* 1 */}
                    <div className="mr-20">
                        <img src="https://www.apple.com/v/watch/shared/compare/d/images/overview/compare_s6__evsi0wlzp4ya_large.jpg"/>

                        <h1 className="text-2xl font-semibold ">Apple Watch</h1>
                        <h1 className="text-2xl font-semibold ">Series 6</h1>
                        <h1 className="text-xl font-medium mb-2 ">From $399</h1>
                        <h1 className="mb-2 text-gray-700">44mm or 40mm case size”</h1>
                        <h1 className="mb-2 text-gray-700">Always-On Retina display</h1>
                        <h1 className="mb-2 text-gray-700">__</h1>
                        <h1 className="mb-2 text-gray-700">GPS + Cellular1</h1>
                        <h1 className="text-gray-700">Supports Family Setup5</h1>
                        <h1 className="mb-2 text-gray-700">(GPS + Cellular models)</h1>
                        <h1 className="mb-2 w-44 text-gray-700">Water resistant 50 meters6Buy</h1>
                        
                        <div className=""><NavLink to="/market">
                <button className="bg-blue-700 pl-5 pb-1 rounded-2xl pt-1 pr-5 text-white mt-8 mb-8">Buy</button></NavLink></div>



                    </div>
                    {/* 2 */}
                    <div className="mr-20">
                        <img src="https://www.apple.com/v/watch/shared/compare/d/images/overview/compare_se__crebhd9hhdea_large.jpg"/>

                        <h1 className="text-2xl font-semibold ">Apple Watch</h1>
                        <h1 className="text-2xl font-semibold ">SE</h1>
                        <h1 className="text-xl font-medium mb-2 ">From $279**</h1>
                        <h1 className="mb-2 text-gray-700">44mm or 40mm case size</h1>
                        <h1 className="mb-2 text-gray-700">Super Retina </h1>
                        <h1 className="mb-2 text-gray-700">XDR display3</h1>
                        <h1 className="mb-2 text-gray-700">5G cellular4</h1>
                        <h1 className="text-gray-700">Advanced dual‑camera system
</h1>
                        <h1 className="mb-2 text-gray-700">(Ultra Wide, Wide)</h1>
                        <h1 className="mb-2 max-w-xs text-gray-700">__</h1>
                        
                        <div className="">
                        <NavLink to="/market">
                <button className="bg-blue-700 pl-5 pb-1 rounded-2xl pt-1 pr-5 text-white mt-8 mb-8">Buy</button></NavLink></div>



                    </div>
                    {/* 3 */}
                    <div>
                        <img src="https://www.apple.com/v/watch/shared/compare/d/images/overview/compare_s3__clzj8ukygo5e_large.jpg"/>

                        <h1 className="text-2xl font-semibold ">Apple Watch</h1>
                        <h1 className="text-2xl font-semibold ">Series 3</h1>
                        <h1 className="text-xl font-medium mb-2 ">From $199</h1>
                        <h1 className="mb-2 text-gray-700">42mm or 38mm case size</h1>
                        <h1 className="mb-2 text-gray-700">Liquid Retina HD display3</h1>
                        <h1 className="mb-2 text-gray-700">4G LTE cellular4</h1>
                        <h1 className="mb-2 text-gray-700">A13 Bionic chip</h1>
                        <h1 className="text-gray-700">Dual-camera system</h1>
                        <h1 className="mb-2 text-gray-700">(Ultra Wide, Wide)</h1>
                        <h1 className="mb-2 max-w-xs text-gray-700">__</h1>
                        <h1 className=" w-56 text-gray-700">__</h1>
                        <div className="">
                        <NavLink to="/market">
                <button className="bg-blue-700 pl-5 pb-1 rounded-2xl pt-1 pr-5 text-white mt-8 mb-8">Buy</button></NavLink></div>


                    </div>
              

                </div>
             
            </div>
            
        </div>
    )
}

export default COver3
