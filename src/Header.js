import React from 'react'
import AppleIcon from '@material-ui/icons/Apple';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {NavLink} from "react-router-dom"

function Header() {
    return (
        <div className="flex bg-header w-full h-11 justify-center z-10 fixed">

            {/* center */}
            <div className="flex justify-center mt-2">
<NavLink to="/">
<AppleIcon className="mr-8 text-gray-300 cursor-pointer hover:text-white"/>
</NavLink>

<NavLink to="/mac">
<h1 className="mr-20 text-gray-300 cursor-pointer hover:text-white ">Mac</h1>
</NavLink>

<NavLink to="/ipad">
<h1 className="mr-20 text-gray-300 cursor-pointer hover:text-white" >iPad</h1>
</NavLink>

<h1 className="mr-20 text-gray-300 cursor-pointer hover:text-white">iPhone</h1>
<h1 className="mr-20 text-gray-300 cursor-pointer hover:text-white">Watch</h1>
<h1 className="mr-20 text-gray-300 cursor-pointer hover:text-white">TV</h1>
<h1 className="mr-20 text-gray-300 cursor-pointer hover:text-white">Music</h1>
<h1 className="mr-20 text-gray-300 cursor-pointer hover:text-white" >Support</h1>
<SearchIcon className="mr-8 text-gray-300 cursor-pointer hover:text-white"/>
<LocalMallIcon className="text-gray-300 cursor-pointer hover:text-white"/>


            </div>
            
        </div>
    )
}

export default Header
