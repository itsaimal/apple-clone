import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Cover6() {
    return (
        <div className="pt-28 shadow-2xl">

            <div className="pt-8">
            <h1 className="text-center text-3xl font-semibold ">Apple Watch Studio</h1>
            <h1 className="text-center text-5xl font-semibold">Any case. Any band.</h1>
            <h1 className="text-center text-5xl font-semibold mb-8">Any style you want.</h1>
            </div>

            <div className="bg-white  ">
                  <Slide className="bg-white">
          <div className="each-slide flex justify-center">
           <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYA22_VW_PF?wid=500&hei=500&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1599014986000"/>
          </div>
          <div className="each-slide flex justify-center">
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYA22_VW_PF?wid=500&hei=500&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1599014986000"/>
          </div>
          <div className="each-slide flex justify-center">
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MYA02_VW_PF?wid=500&hei=500&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1599014964000"/>
          </div>
          <div className="each-slide flex justify-center">
          <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MY9Y2_VW_PF?wid=500&hei=500&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1599014963000"/>
          </div>
        </Slide></div>
<div className="flex justify-center">
        <img className="relative z-20 bottom-96  transform   -translate-y-32" src="https://www.apple.com/v/watch/shared/configure/e/images/store/cto/watch/watch-cto-case__dm8sxecyffma_large.png"/></div>
        </div>
    )
}

export default Cover6
