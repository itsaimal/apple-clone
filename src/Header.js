import React from 'react'
import AppleIcon from '@material-ui/icons/Apple';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
<<<<<<< Updated upstream
=======
import {NavLink} from "react-router-dom"
import { useStateValue } from "./StateProvider";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

>>>>>>> Stashed changes

function Header() {

    const [{ basket }, dispatch] = useStateValue();
    
    return (<div className="hidden md:block" >
      
        <div className=" flex bg-header w-full h-11 justify-center z-10 fixed">

            {/* center */}
<<<<<<< Updated upstream
            <div className="flex justify-center mt-2">
=======
            <div className=" flex justify-center mt-2">
<NavLink to="/">
>>>>>>> Stashed changes
<AppleIcon className="mr-8 text-gray-300 cursor-pointer hover:text-white"/>
<h1 className="mr-20 text-gray-300 cursor-pointer hover:text-white ">Mac</h1>
<h1 className="mr-20 text-gray-300 cursor-pointer hover:text-white" >iPad</h1>
<<<<<<< Updated upstream
=======
</NavLink>


<NavLink to="/iphone">
>>>>>>> Stashed changes
<h1 className="mr-20 text-gray-300 cursor-pointer hover:text-white">iPhone</h1>
</NavLink>

<NavLink to="/watch">
<h1 className="mr-20 text-gray-300 cursor-pointer hover:text-white">Watch</h1>
</NavLink>

<NavLink to="/tv">
<h1 className="mr-20 text-gray-300 cursor-pointer hover:text-white">TV</h1>
</NavLink>

<NavLink to="/music">
<h1 className="mr-20 text-gray-300 cursor-pointer hover:text-white">Music</h1>
</NavLink>

<NavLink to="/market">
<h1 className="mr-20 text-gray-300 cursor-pointer hover:text-white" >Market</h1>
</NavLink>


<NavLink to="/checkout">
<div className="text-gray-300">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
          </NavLink>


            </div>
            </div>
        </div>
    )
}

export default Header
