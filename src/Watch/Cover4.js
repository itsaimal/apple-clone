import React from 'react'
import {NavLink} from "react-router-dom"

function Cover4() {
    return (
        <div className=" md:flex justify-center mt-10 ">

        <div className="bg-gray-100  mt-7 shadow-2xl pl-28 pr-28">
        <h1 className="text-gray-900 text-center mt-6 text-5xl font-bold">Valentine’s Day gifts for what they love.</h1>
        <div className="flex justify-center">
          </div>

{/* card */}
            <div className="flex justify-center">
                {/* 1 */}
                <div className="mr-16 bg-white rounded-2xl">
                <h1 className="pt-5 ml-5 text-3xl">For lovers of</h1>
                <h1 className="mb-6 font-semibold text-green-600 ml-5 text-3xl">health.</h1>
                    <img className="object-contain pr-24 pl-10" src="https://www.apple.com/v/watch/home/ag/images/overview/vday-2021/family_watch_health__do3b1ct74hyu_medium.jpg"/>
                </div>
{/* 2 */}
                <div className="ml-16 bg-white rounded-2xl  pl-24 pr-10">
                    <div>
                <h1 className="pt-5 ml-5 text-3xl">For lovers </h1>
                <h1 className=" ml-5 text-3xl">of <strong className="text-red-600">music</strong>.</h1></div>
                    <img className="object-contain" src="https://www.apple.com/v/watch/home/ag/images/overview/vday-2021/family_watch_music__dmfi4ul8u8qe_medium.jpg"/>
                    
                </div>

            </div>

        </div>
        
    </div>
    )
}

export default Cover4
