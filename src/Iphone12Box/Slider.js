import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
    'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery1-2020?wid=1069&hei=407&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1601602934000',
    'images/slide_3.jpg',
    'images/slide_4.jpg'
  ];

function Slider() {
    return (
        <div className="w-full h-96">
        <Slide>
          <div className="w-full h-96">
           <img className="w-full h-96" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery1-2020?wid=1069&hei=407&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1601602934000"/>
          </div>
          <div className="w-full h-96">
           <img className="w-full h-96" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery2-2020?wid=1069&hei=407&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1602042833000"/>
          </div>
          <div className="w-full h-96">
           <img className="w-full h-96" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery3-2020?wid=1069&hei=407&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1601398907000"/>
          </div>
          <div className="w-full h-96">
           <img className="w-full h-96" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery4-2020_GEO_US?wid=1069&hei=407&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1601500111000"/>
          </div>
          <div className="w-full h-96">
           <img className="w-full h-96" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-gallery5-2020_GEO_US?wid=1069&hei=407&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1601502562000"/>
          </div>
        </Slide>
      </div>
    )
}

export default Slider
