import React from 'react'
import AppleIcon from '@material-ui/icons/Apple';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function CoverThree() {
    return (
        <div className="bg-gray-100 w-full h-96">

            <div className="flex justify-center mt-6">

            <AppleIcon className="mt-2"/>
            <h1 className="text-4xl">Fitness +</h1>

            </div>

            <div className="">


<h1 className="text-gray-500 text-center mt-3 font-medium">From $49.12/mo.or $999 before trade-in.</h1>
 <h1 className="text-gray-500 text-center font-medium" >   Buy directly from Apple with special carrier offers.
</h1>

<div className="flex justify-center mt-3">

    <h1 className="text-blue-800 mr-12 cursor-pointer text-center font-medium hover:underline">Learn more<ArrowForwardIosIcon/></h1>
    <h1 className="text-blue-800 text-center cursor-pointer font-medium hover:underline">Buy<ArrowForwardIosIcon/></h1>
</div>

</div>

<img className="w-full h-96 object-contain" src="https://149367133.v2.pressablecdn.com/wp-content/uploads/2020/09/gadgetmatch-apple-fitness-plus-20200915-02.jpg"/>
            
        </div>
    )
}

export default CoverThree
