import React from 'react'
import {NavLink} from "react-router-dom"

function Cover8() {
    return (
        <div className="flex justify-center mt-8">
            <div className="">

                <img src="https://www.apple.com/v/music/r/images/overview/airpods_max__fuggxifcqdim_large.png"/>
                <div className="flex justify-center mt-5">
                    <NavLink to="/market">
                <button className="bg-blue-700 text-white rounded-3xl pl-4 pr-4 pt-2 pb-2 ">Buy</button></NavLink>
                </div>

            </div>
            
        </div>
    )
}

export default Cover8
