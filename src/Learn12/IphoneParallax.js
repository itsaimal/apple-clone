import React from 'react'
import {Parallax} from "react-parallax"
import llax from "../Image/parallax.png"




function IphoneParallax() {
    return (
    <div className="flex justify-between bg-indigo-50">

        <div className="ml-96 max-w-3xl  bg-indigo-50 ">
            <Parallax bgImage={llax} strength={200}>
                <div className="w-56 h-56 object-contain mt-20 mr-36">

                </div>
 </Parallax>
            </div>

            <div className=" w-full bg-indigo-50">
               
<h1 className="text-center text-yellow-700 mt-36 font-bold text-xl">New</h1>
<h1 className="text-center  font-bold text-5xl">iPhone 12</h1>
            </div>

        </div>
    )
}

export default IphoneParallax
