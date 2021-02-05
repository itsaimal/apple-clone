import React from 'react'
import {NavLink} from "react-router-dom"

function Cover5() {
    return (
        <div className="md:flex justify-center pt-24 shadow-2xl">
            <div className="bg-gray-50 pt-28 pl-8 pr-8">
                <h1 className="text-3xl font-semibold text-center">Fitness+</h1>
                <h1 className="text-5xl font-semibold mb-8 ">Make your move.</h1>
                <p className="text-lg text-gray-700 font-medium max-w-sm text-center">A new fitness experience powered
by Apple Watch. Try world-class workouts on your iPhone, iPad, and Apple TV. And now you can get 3 months free when you buy an Apple Watch.7</p>
             
            </div>

            <img src="https://www.apple.com/v/watch/home/ag/images/overview/fitness/tile_fitness_plus__bu85qs3j0t7m_large.jpg"/>
            
        </div>
    )
}

export default Cover5
