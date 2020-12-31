import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function MacPro() {
    return (
        <div className="bg-black w-full h-96 flex justify-center">


              <img className="object-contain max-w-3xl h-96" src="https://www.apple.com/v/macbook-pro-13/f/images/meta/macbook-pro-13_overview__bcsyunk73i2a_og.jpg?202012150136"/>  

        <div>
        
                    <h1 className="text-yellow-600 text-xl font-semibold">New</h1>
                    <h1 className="font-small  mt-4 text-md text-white">13-inch model</h1>
                    <h1 className="font-bold mt-4 text-5xl text-white">MacBook Pro</h1>
                    <h1 className="font-semibold  mt-4 text-2xl text-white" >All systems Pro.</h1>
                    <h1 className="font-small  mt-4 text-md text-white">From $1299</h1>
                    <button className="bg-blue-600  mt-4 text-white w-24 h-8 rounded-2xl">Buy</button>
                  
        
                    <h1 className="text-blue-800 mt-4 mr-12 cursor-pointer  font-medium hover:underline">Learn more<ArrowForwardIosIcon/></h1>
                    </div>
        
        
                
                </div>
            )
        }


export default MacPro