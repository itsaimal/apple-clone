import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function SliderPro() {
    return (
        <div className="w-full h-96">
        <Slide>
          <div className="w-full h-96">
           <img className="w-full h-96" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-gallery-1?wid=1069&hei=407&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604612540000"/>
          </div>
          <div className="w-full h-96">
           <img className="w-full h-96" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-gallery-2?wid=1069&hei=407&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604612541000"/>
          </div>
          <div className="w-full h-96">
           <img className="w-full h-96" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-gallery-3?wid=1069&hei=407&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604612541000"/>
          </div>
          <div className="w-full h-96">
           <img className="w-full h-96" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-gallery-4?wid=1069&hei=407&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1601493562000"/>
          </div>
          <div className="w-full h-96">
           <img className="w-full h-96" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-gallery-5_GEO_US?wid=1069&hei=407&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1601508337000"/>
          </div>
        </Slide>
      </div>
    )
}

export default SliderPro
