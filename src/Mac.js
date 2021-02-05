import React from 'react'
import MacAir from './MacFolder/MacAir'
import MacMini from './MacFolder/MacMini'

import MacPro from './MacFolder/MacPro'
import Mone from "./MacFolder/Mone"
import WhichMac from './MacFolder/WhichMac'
import WhichMacTwo from './MacFolder/WhichMacTwo'
import Footer from "./Footer"

function Mac() {
    return (
        <div>
          
            <Mone/>
            <MacAir/>
            <MacPro/>
            <MacMini/>
            <WhichMac/>
            <WhichMacTwo/>
            <Footer/>
            
        </div>
    )
}

export default Mac
