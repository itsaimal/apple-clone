import React from 'react'
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import AirplayIcon from '@material-ui/icons/Airplay';
import CompareIcon from '@material-ui/icons/Compare';
import MinimizeIcon from '@material-ui/icons/Minimize';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import HeadsetIcon from '@material-ui/icons/Headset';

function MacNav() {
    return (
        <div className="w-full h-56 macNav flex justify-center text-3xl">

<LaptopWindowsIcon  className="text-white mr-20 mt-5 "/>
<LaptopWindowsIcon className="text-white  mr-20 mt-5"/>
<LaptopWindowsIcon className="text-white  mr-20 mt-5"/>
<AirplayIcon className="text-white  mr-20 mt-5 "/>
<AirplayIcon className="text-white  mr-20 mt-5"/>
<CompareIcon className="text-white  mr-20 mt-5 "/>
<MinimizeIcon className="text-white  mr-20 mt-5"/>
<DesktopMacIcon className="text-white  mr-20 mt-5"/>
<HeadsetIcon className="text-white  mr-20 mt-5"/>
            
        </div>
    )
}

export default MacNav
