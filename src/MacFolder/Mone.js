import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Mone() {
    return (
        <div className="bg-black w-full h-96 flex-col justify-center ">
            <img className=" w-full h-28 object-contain" src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-m1-chip-graphic_11102020_big.jpg.large.jpg"/>
            

            <div className="flex justify-center">

            <h1 className="text-gray-400 text-6xl text-center  mt-4 font-bold max-w-xl">Welcome to the future of Mac.</h1>
            </div>

            <h1 className="text-blue-800 text-3xl mt-6 mr-12 cursor-pointer text-center font-medium hover:underline ">Learn more about M1<ArrowForwardIosIcon/></h1>
        </div>
    )
}

export default Mone
