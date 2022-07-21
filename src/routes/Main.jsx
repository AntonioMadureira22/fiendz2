import React from 'react'
import { Link } from 'react-router-dom';

//stylesheet
import "../components/css/Front.css"

//image import
import enter from "../components/images/store4.png"


const Main = () => {
    return (
        <div className='front'>
            <div className='enter-pg'>
                <Link to="/Inside">
                    <img classname='outside' src={enter} alt='enter page' width="1000px" height="1000px"/>
                </Link>
            </div>
        </div>
    )
}

export default Main