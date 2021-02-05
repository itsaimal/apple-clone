import React from 'react'
import {NavLink} from "react-router-dom"

function Cover4() {
    return (
        <div className=" md:flex justify-center mt-10 ">

            <div className="bg-white  mt-7 shadow-2xl pl-28 pr-28">
            <h1 className="text-gray-900 text-center mt-6 text-5xl font-bold">Valentine’s Day gifts for what they love.</h1>
          

{/* card */}
                <div className="flex justify-center">
                    {/* 1 */}
                    <div className="mr-16 bg-gray-100 rounded-2xl">
                    <h1 className="pt-5 ml-5 text-3xl">For lovers of</h1>
                    <h1 className="mb-6 font-semibold text-purple-500 ml-5 text-3xl">photography.</h1>
                        <img className="w-96 pr-6" src="https://www.apple.com/v/iphone/home/at/images/overview/vday-2021/family_iphone_photography__d8mtw3b59i82_medium.jpg"/>
                    </div>
{/* 2 */}
                    <div className="ml-16 bg-gray-100 rounded-2xl flex">
                        <div>
                    <h1 className="pt-5 ml-5 text-3xl">For lovers </h1>
                    <h1 className=" ml-5 text-3xl">of <strong className="text-red-600">music</strong>.</h1></div>
                        <img className="w-96" src="https://www.apple.com/v/iphone/home/at/images/overview/vday-2021/family_iphone_music__em3j273pyv0i_medium.jpg"/>
                        
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Cover4
