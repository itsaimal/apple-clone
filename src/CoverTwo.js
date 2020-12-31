import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function CoverTwo() {
    return (
        <div className="bg-black w-full h-96 mt-14 ">



                <div className="bg-black w-full h-72 ">

                    <div className="relative top-12">

                    <h1 className="text-white text-5xl font-semibold text-center   ">iPhone 12 Pro</h1>
                    <h1 className="text-white text-2xl font-medium text-center   mt-3">It's a leap year. </h1>
                    <h1 className="text-gray-500 text-center mt-3 font-medium">From $49.12/mo.or $999 before trade-in.</h1>
                     <h1 className="text-gray-500 text-center font-medium" >   Buy directly from Apple with special carrier offers.
                    </h1>

                    <div className="flex justify-center mt-3">
            
                        <h1 className="text-blue-800 mr-12 cursor-pointer text-center font-medium hover:underline">Learn more<ArrowForwardIosIcon/></h1>
                        <h1 className="text-blue-800 text-center cursor-pointer font-medium hover:underline">Buy<ArrowForwardIosIcon/></h1>
                    </div>

                    </div>
                    </div>


                    
                <div className="bg-black flex justify-center">
                    <img className="w-full h-72 object-contain " src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg"/>
                </div>
            
        </div>
    )
}

export default CoverTwo
