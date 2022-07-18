import React from 'react'

//stylesheet
import "../components/css/Main.css"

//image import
import enter from "../components/images/store4.png"


const Main = () => {
    return (
        <div className='Main'>
            <div className='image-container1'>
                <img classname="enter" src={enter} alt='enter page' />
            </div>
        </div>
    )
}

export default Main