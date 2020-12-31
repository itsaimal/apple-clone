import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function MacAir() {
    return (
        <div className="bg-black w-full h-96 flex justify-center">

<div>

            <h1 className="text-yellow-600 text-xl font-semibold">New</h1>
            <h1 className="font-bold mt-4 text-5xl text-white">MacBook Air</h1>
            <h1 className="font-semibold  mt-4 text-2xl text-white" >Power. It's in the Air.</h1>
            <h1 className="font-small  mt-4 text-md text-white">From $999</h1>
            <button className="bg-blue-600  mt-4 text-white w-24 h-8 rounded-2xl">Buy</button>
          

            <h1 className="text-blue-800 mt-4 mr-12 cursor-pointer  font-medium hover:underline">Learn more<ArrowForwardIosIcon/></h1>
            </div>


         <img className="object-contain max-w-3xl h-96" src="https://www.apple.com/v/macbook-air/i/images/overview/hero_endframe__ea0qze85eyi6_large_2x.jpg"/>   
        </div>
    )
}

export default MacAir
