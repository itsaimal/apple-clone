import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AppleIcon from '@material-ui/icons/Apple';

function Cards({}) {
    return (

        <div className="grid grid-cols-2 gap-4">


  {/* 1 */}
        <div className="w-full h-96 bg-white flex-row justify-center shadow-2xl" >

<h1 className="text-3xl font-bold text-gray-700 text-center">Its treat yourself season.</h1>
<h1 className=" text-blue-800 mt-1 text-center cursor-pointer font-medium hover:underline">Shop gifts<ArrowForwardIosIcon/></h1>
<img className=" mt-2 flex justify-center w-full h-72 object-contain" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/aos-landing-holiday-202012_FMT_WHH_GEO_US?wid=582&hei=578&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1607372153000"/>

        </div>

 {/* 2 */}
        <div className="w-full h-96 bg-white flex-row justify-center shadow-2xl" >

<h1 className="text-3xl font-bold text-gray-700 text-center">iPad Air</h1>
<h1 className="text-xl font-semibold text-gray-700 text-center">Powerful. Colorful. Wonderful.</h1>
<h1 className=" text-blue-800 mt-1 text-center cursor-pointer font-medium hover:underline">Shop gifts<ArrowForwardIosIcon/></h1>
<img className=" mt-2 flex justify-center w-full h-80 object-contain" src="https://news.siamphone.com/upload/news/nw46173/Apple%20iPad%20Air%204-10.jpg"/>

        </div>
 {/* 3 */}
        <div className="w-full h-96 bg-black flex-row justify-center shadow-2xl" >

<h1 className="text-xl font-bold text-white text-center"><AppleIcon className="mb-2"/>Watch</h1>
<h1 className="text-xs font-medium text-red-500 text-center">SERIES 6</h1>
<h1 className=" text-blue-800 mt-1 text-center cursor-pointer font-medium hover:underline">Shop gifts<ArrowForwardIosIcon/></h1>
<img className=" mt-2 flex justify-center w-full h-72 object-contain" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-6s-202009?wid=1200&hei=630&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1599936770000"/>

        </div>
 {/* 4 */}
        <div className="w-full h-96 bg-gray-50 flex-row justify-center shadow-2xl" >

<h1 className="text-xl font-bold text-gray-700 text-center mb-4">Bundle upto six Apple services.</h1>
<h1 className=" text-blue-800 mt-1 text-center cursor-pointer font-medium hover:underline">Shop gifts<ArrowForwardIosIcon/></h1>
<img className=" mt-2 flex justify-center w-full h-72 object-contain" src="https://www.apple.com/v/apple-one/c/images/meta/og__diu4z5hyr8ia_overview.png?202012140955"/>

        </div>
 {/* 5 */}
        <div className="w-full h-96 bg-gray-50 flex-row justify-center shadow-2xl" >

<h1 className="text-xl font-bold text-gray-800 text-center"><AppleIcon className="mb-2"/>Card</h1>
<h1 className="text-xl font-smeibold text-gray-800 text-center">Get 3% Daily Cash back on purchases from Apple.</h1>
<h1 className=" text-blue-800 mt-1 text-center cursor-pointer font-medium hover:underline">Shop gifts<ArrowForwardIosIcon/></h1>
<img className=" mt-2 flex justify-center w-full h-60 object-contain" src="https://www.rprna.com/wp-content/uploads/2020/09/apple-card-art-front-back-social-card.jpg"/>

        </div>
 {/* 6 */}
        <div className="w-full h-96  justify-center shadow-2xl" >


<img className="  flex justify-center w-full h-96 object-contain" src="https://9to5mac.com/wp-content/uploads/sites/6/2020/11/how-to-watch-charlie-brown-holiday-specials.jpeg?quality=82&strip=all"/>

        </div>





        </div>
    )
}

export default Cards
