import React from 'react'
import IpadAir from './Ipad/IpadAir'
import IpadNav from './Ipad/IpadNav'
import IpadSp from './Ipad/IpadSp'
import IpadPro from './Ipad/IpadPro'
import IpadMini from './Ipad/IpadMini'


function Ipad() {
    return (
        <div>

            <IpadNav/>
            <IpadAir/>
            <IpadSp/>
            <IpadPro/>
            <IpadMini/>
            
        </div>
    )
}

export default Ipad
