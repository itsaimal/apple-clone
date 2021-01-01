import React from 'react'
import Iphone12 from "./Iphone12Box/Iphone12"
import Para12 from './Iphone12Box/Para12'
import WhatBox from './Iphone12Box/WhatBox'
import Slider from "./Iphone12Box/Slider"
import MagSafe from './Iphone12Box/MagSafe'
import Footer from "./Footer"

function IphoneBox() {
    return (
        <div >
            <Iphone12/>
            <WhatBox/>
            <Para12/>
            <Slider/>
            <MagSafe/>
            <Footer/>
            
        </div>
    )
}

export default IphoneBox
