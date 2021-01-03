import React from 'react'
import {Parallax} from "react-parallax"
import Black from "../Image/black pro.jpg"

function IphoneProParallax() {
    return (
        <div className="bg-black">
        <div className="ml-96 max-w-3xl  bg-black ">
            <Parallax bgImage={Black} strength={200}>
                <div className="w-56  h-56 object-contain mt-96 mr-36">

                </div>
 </Parallax>
            </div>
            </div>
    )
}

export default IphoneProParallax
