import React from 'react'
import {NavLink} from "react-router-dom"

function Cover9() {
    return (
        <div className="flex justify-center mt-8 bg-gray-50">
            <div className="">

                <img src="https://www.apple.com/v/music/r/images/overview/homepod-mini/homepod__mjqu3izydl2m_large.jpg"/>

<h1 className="text-4xl font-semibold text-center">HomePod mini</h1>

                <div className="flex justify-center "> <NavLink to="/market">
                <button className="bg-blue-700 text-white rounded-3xl pl-4 pr-4 pt-2 pb-2 ">Buy</button></NavLink>
                </div>
                

            </div>
            
        </div>
    )
}

export default Cover9
