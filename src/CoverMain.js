import React from 'react'
import logo from "./Image/iphon12.png"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function CoverMain() {
    return (
        <div className="bg-blue-500 w-full  relative top-11">
            {/* top */}
            <div className="w-full h-10 bg-gray-200 flex justify-center">
                <h1 className="mt-2 text-sm text-gray-600"><a className="text-blue-600 cursor-pointer hover:underline">Shop online</a> and get Specialist help, free no-contact delivery, and more.Get in-stock items with Apple Pickup or 2-hour delivery, available in most metros</h1>
                </div>
                {/* center */}

                <div className="bg-gray-100 w-full h-72 ">

                    <div className="relative top-12">

                    <h1 className="text-gray-900 text-5xl font-semibold text-center   ">iPhone 12</h1>
                    <h1 className="text-gray-900 text-2xl font-medium text-center   mt-3">Blast past fast. </h1>
                    <h1 className="text-gray-500 text-center mt-3 font-medium">From $29.12/mo.or $699 before trade-in.</h1>
                     <h1 className="text-gray-500 text-center font-medium" >   Buy directly from Apple with special carrier offers.
                    </h1>

                    <div className="flex justify-center mt-3">
            
                        <h1 className="text-blue-800 mr-12 cursor-pointer text-center font-medium hover:underline">Learn more<ArrowForwardIosIcon/></h1>
                        <h1 className="text-blue-800 text-center cursor-pointer font-medium hover:underline">Buy<ArrowForwardIosIcon/></h1>
                    </div>

                    </div>

                </div>


                {/* bottom */}

                <div className="bg-gray-100 flex justify-center">
                    <img src={logo}/>
                </div>

            
            
        </div>
    )
}

export default CoverMain
