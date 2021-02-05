import React, {useState, useEffect} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from "react-router-dom";
import AppleIcon from '@material-ui/icons/Apple';

import { useStateValue } from "./StateProvider";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';



function SmHeader() {

    const [{ basket }, dispatch] = useStateValue();


    const menuItems = [{name:"Home", to:"/"},
        {name:"Mac", to:"/mac"},
        {name:"iPad", to:"/ipad"},
        {name:"iPhone", to:"/iphone"},
        {name:"Watch", to:"/watch"},
        {name:"Tv", to:"/tv"},
        {name:"Musict", to:"/music"},
        {name:"Market", to:"/market"}];

        const [selected,setSelected] = useState(menuItems[0])
        const [open, setOpen] = useState(false);
     
      

        const handleSelected = name => {
            setSelected(name);
        }

     
        


        const menuItemMap = menuItems.map((item,index) => {

            const isItemSelected = selected === item.name;

            return (
                <menu  onClick={()=> handleSelected(item.name)} key={index} className={`mr-7  mb-6 cursor-pointer ${isItemSelected ? 'text-lg font-bold text-white ' : 'text-gray-500 font-normal text-md'} hover:text-gray-800 `}>
                    <NavLink to={item.to}>
                    {item.name}</NavLink>

                </menu>
            )

        })



    return (
        <div className="sm:hidden w-full h-16  bg-header flex justify-center">
           <AppleIcon className="mr-20 ml-56 mt-3 text-gray-300 cursor-pointer hover:text-white"/>

           <NavLink to="/checkout">
<div className="text-gray-300 mt-3 ml-24">
            <ShoppingBasketIcon className="" />
            <span className=" header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
          </NavLink>


            <div className="sm:hidden ">

            <MenuIcon onClick={() => setOpen(!open)} className="absolute left-7 top-3 cursor-pointer" style={{fontSize:"2rem"}}/>
            <MenuOpenIcon onClick={() => setOpen(!open)} className="absolute left-7 top-3 cursor-pointer z-30" style={{fontSize:"2rem"}}/>
            </div>

            {/* head */}

            <div  className={` ${open? 'w-full h  bg-header absolute z-20 transition-all duration-500 ease-in-out transform' : 'transition-all duration-500 ease-in-out'}`}>
            <h1 className={` ${open? 'text-center pt-9 pl-6 transition-all duration-800 delay-200 ease-in-out': 'transition-all duration-800 ease-in-out hidden'}`}>{menuItemMap}</h1>
            </div>
            
        </div>
    )
}

export default SmHeader