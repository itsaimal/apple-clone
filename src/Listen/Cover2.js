import React,{useState,useEffect} from 'react'
import {NavLink} from "react-router-dom"
import ScrollToTop from "../ScrollToTop"


function Cover2() {
    const items = [
        {name:'Our Playlist Picks',to:'/'},
        {name:'Sweat It Out',to:'/sweat'},
        {name:'Daily Top 100',to:'/top'},
        {name:'Just Updated',to:'/update'},
        {name:'New Music',to:'/new'}
];

const [active, setActive] = useState(items[0].name);

const handleClick = (name) => {
   setActive(name)
}



const mapItems = items.map((item,index) => {

    const isItemSelected = active === item.name;

    return(
        <menu onClick={()=> handleClick(item.name)} className={`flex font-bold text-md cursor-pointer ${isItemSelected ? 'border-pink-400 border-b text-pink-500' : 'text-gray-400 border-gray-300 border-b'}    pr-5  `} key={index}><NavLink to={item.to}>
            {item.name}</NavLink>
        </menu>
    )

})



    return (
        <div className="flex justify-center">
          
            <h1 className="flex pt-3 ">{mapItems}</h1>
    
        </div>
    )
}

export default Cover2
