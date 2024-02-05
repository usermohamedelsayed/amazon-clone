import React from 'react'
import "./Lodding.scss"
import loddingAnamtion from "../../animation/lodding.json"
import { Player } from '@lottiefiles/react-lottie-player'
const Lodding = () => {
    return (
        <div className='Lodding'>
            <Player className="loddingAnamtionProducts" src={loddingAnamtion} autoplay loop />
        </div>
    )
}

export default Lodding