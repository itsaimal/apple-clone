import React from 'react'
import Iphone12Pro from './Iphone12ProBox/Iphone12Pro'
import WhatBox from './Iphone12Box/WhatBox'
import Para12 from './Iphone12Box/Para12'
import MagSafe from './Iphone12Box/MagSafe'
import Footer from "./Footer"
import SliderPro from './Iphone12ProBox/SliderPro'

function IphoneProBox() {
    return (
        <div>
            <Iphone12Pro/>
            <WhatBox/>
            <Para12/>
            <SliderPro/>
            <MagSafe/>

            <Footer/>
            
        </div>
    )
}

export default IphoneProBox
