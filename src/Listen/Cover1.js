import React from 'react'
import music from "../video/music.mp4"

function Cover1() {
    return (
        <div className=" bg-black flex justify-center  ">
        <video autoPlay muted >

<source src={music} type="video/mp4"/>
</video>
</div>
    )
}

export default Cover1