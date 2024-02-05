import React from 'react'
import "./Error.scss"
import erroAnamtion from "../../animation/error.json"
import { Player } from '@lottiefiles/react-lottie-player'
const Error = () => {
    return (
        <div className='Error'>
            <Player className='erroAnamtionProducts' src={erroAnamtion} autoplay loop />
        </div>
    )
}

export default Error