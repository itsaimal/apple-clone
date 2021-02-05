import React from 'react'
import apple from "../video/apple.mp4"

function Cover1() {
    return (
        <div className=" bg-black md:flex justify-center">
        <video autoPlay muted >

<source src={apple} type="video/mp4"/>
</video>
</div>
    )
}

export default Cover1
