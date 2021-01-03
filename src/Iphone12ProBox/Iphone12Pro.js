import React from 'react'
import { Controller, Scene } from 'react-scrollmagic';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


function Iphone12Pro() {
    return (
        <div className="flex justify-center w-full" >
       
          
          <div className="bg-white w-full   "><div className="mt-56 ml-28">

              <img className="max-w-md  object-contain" src="https://techzone.com.pk/wp-content/uploads/2020/11/iphone-12-family-select-2020.jpeg"/>
              
              </div></div>
         
        <Controller className="w-full h-96">
        <div className="f-screen" />
        <Scene duration={300} pin={true}>
          <div className="bg-white w-full h-96">
              
      
        <div >
        
                    <h1 className="text-yellow-600 text-xl font-semibold">New</h1>
                    
                    <h1 className="font-bold  text-5xl text-gray-600">Buy iPhone 12 Pro</h1>
                   
                    <h1 className="font-small  mt-4 text-md text-gray-600">Get $100-$500 off when you trade in an iPhone7 or newer</h1>
                    <h1 className="font-medium  mt-4 text-md text-gray-700">Choose your model</h1>
                   
                    <button className="bg-white border-blue-700  border-2 w-96   mt-4 text-black  h-20 rounded-md hover:bg-gray-300">iPhone 12 Pro<br/><h1 className="text-xs font-light">6.1-inch display</h1></button>
                   
                    <button className="bg-white border-blue-700  border-2 w-96   mt-4 text-black  h-20 rounded-md hover:bg-gray-300">iPhone 12 Pro Maxi<br/><h1 className="text-xs font-light">6.7-inch display</h1></button>
                    

<div className="grid grid-cols-3 " >

                    <button className="bg-white border-gray-500 border-2 w-40   mt-4 text-gray-500  h-20 rounded-md hover:bg-gray-300">iPhone 12 mini<br/><h1 className="text-xs font-light ">6.1-inch display</h1></button>
                    <button className="bg-white border-gray-500 border-2 w-40   mt-4 text-gray-500  h-20 rounded-md hover:bg-gray-300">iPhone 12 mini<br/><h1 className="text-xs font-light ">6.1-inch display</h1></button>
                    <button className="bg-white border-gray-500 border-2 w-40   mt-4 text-gray-500  h-20 rounded-md hover:bg-gray-300">iPhone 12 mini<br/><h1 className="text-xs font-light ">6.1-inch display</h1></button>
                    <button className="bg-white border-gray-500 border-2 w-40   mt-4 text-gray-500  h-20 rounded-md hover:bg-gray-300">iPhone 12 mini<br/><h1 className="text-xs font-light ">6.1-inch display</h1></button>

                    </div>
        
                    <h1 className="text-blue-800 mt-4 mr-12 cursor-pointer  font-medium hover:underline">Learn more<ArrowForwardIosIcon/></h1>
                    </div>

                                        

                    
                    </div>
        </Scene>
        <div  />
      </Controller>
      </div>
    )
}

export default Iphone12Pro
