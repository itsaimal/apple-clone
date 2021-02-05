import React from 'react'
import {NavLink} from "react-router-dom"

function Cover3() {
    return (
        <div className="bg-white md:flex justify-center">

            <div className="pt-20">
           
                <h1 className="text-gray-900 text-center mt-6 text-4xl font-semibold mb-4">Which iPhone is right for you?
</h1>
               

<div className="flex justify-center">
                <button className=" text-blue-700  mb-8 ">Compare all iPhone models </button></div>

                <div className="grid md:grid-rows-1 md:grid-flow-col md:grid-col-4 sm:grid-col-2  sm:grid-rows-2">

                    {/* 1 */}
                    <div>
                        <img src="https://www.apple.com/v/iphone/home/at/images/overview/compare/compare_iphone_12_pro__gmn3556ju3am_large.jpg"/>

                        <h1 className="text-2xl font-semibold ">iPhone 12 Pro</h1>
                        <h1 className="text-xl font-medium mb-2 ">From $999</h1>
                        <h1 className="mb-2">6.1” or 6.7”</h1>
                        <h1 className="mb-2">Super Retina XDR display3</h1>
                        <h1 className="mb-2">5G cellular4</h1>
                        <h1 className="mb-2">A14 Bionic chip</h1>
                        <h1 className="">Pro camera system</h1>
                        <h1 className="mb-2">(Ultra Wide, Wide, Telephoto)</h1>
                        <h1 className="mb-2 w-44">LiDAR Scanner for Night mode portraits and next‑level AR</h1>
                        <h1 className=" w-56">Compatible with MagSafe accessories</h1>
                        <div className="">
                            <NavLink to="/market">
                <button className="bg-blue-700 pl-5 pb-1 rounded-2xl pt-1 pr-5 text-white mt-8 mb-8">Buy</button></NavLink></div>



                    </div>
                    {/* 2 */}
                    <div>
                        <img src="https://www.apple.com/v/iphone/home/at/images/overview/compare/compare_iphone_12__btq63lk8td7m_large.jpg"/>

                        <h1 className="text-2xl font-semibold ">iPhone 12 </h1>
                        <h1 className="text-xl font-medium mb-2 ">From $699**</h1>
                        <h1 className="mb-2">5.4” or 6.1”</h1>
                        <h1 className="mb-2">Super Retina </h1>
                        <h1 className="mb-2">XDR display3</h1>
                        <h1 className="mb-2">5G cellular4</h1>
                        <h1 className="">Advanced dual‑camera system
</h1>
                        <h1 className="mb-2">(Ultra Wide, Wide)</h1>
                        <h1 className="mb-2 max-w-xs">__</h1>
                        <h1 className=" w-56">Compatible with MagSafe accessories</h1>
                        <div className="">
                        <NavLink to="/market">
                <button className="bg-blue-700 pl-5 pb-1 rounded-2xl pt-1 pr-5 text-white mt-8 mb-8">Buy</button></NavLink></div>



                    </div>
                    {/* 3 */}
                    <div>
                        <img src="https://www.apple.com/v/iphone/home/at/images/overview/compare/compare_iphone_11__bzjboswm5hbm_large.jpg"/>

                        <h1 className="text-2xl font-semibold ">iPhone 11</h1>
                        <h1 className="text-xl font-medium mb-2 ">From $599</h1>
                        <h1 className="mb-2">6.1”</h1>
                        <h1 className="mb-2">Liquid Retina HD display3</h1>
                        <h1 className="mb-2">4G LTE cellular4</h1>
                        <h1 className="mb-2">A13 Bionic chip</h1>
                        <h1 className="">Dual-camera system</h1>
                        <h1 className="mb-2">(Ultra Wide, Wide)</h1>
                        <h1 className="mb-2 max-w-xs">__</h1>
                        <h1 className=" w-56">__</h1>
                        <div className="">
                        <NavLink to="/market">
                <button className="bg-blue-700 pl-5 pb-1 rounded-2xl pt-1 pr-5 text-white mt-8 mb-8">Buy</button></NavLink></div>


                    </div>
                    {/* 4 */}
                    <div>
                        <img src="https://www.apple.com/v/iphone/home/at/images/overview/compare/compare_iphone_se__1uyg4tzyd4ya_large.jpg"/>

                        <h1 className="text-2xl font-semibold ">iPhone se</h1>
                        <h1 className="text-xl font-medium mb-2 ">From $399</h1>
                        <h1 className="mb-2">4.7</h1>
                        <h1 className="mb-2">Retina HD display</h1>
                        <h1 className="mb-2">4G cellular4</h1>
                        <h1 className="mb-2">A13 Bionic chip</h1>
                        <h1 className="">Single-camera system</h1>
                        <h1 className="mb-2">( Wide)</h1>
                        <h1 className="mb-2 max-w-xs">__</h1>
                        <h1 className=" w-56">__</h1>
                        <div className="">
                        <NavLink to="/market">
                <button className="bg-blue-700 pl-5 pb-1 rounded-2xl pt-1 pr-5 text-white mt-8 mb-8">Buy</button></NavLink></div>



                    </div>

                </div>
             
            </div>
            
        </div>
    )
}

export default Cover3
