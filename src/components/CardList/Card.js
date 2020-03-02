import React from 'react'
import './CardStyle.css'

const Card = ({src, altDesc}) =>{
    return(
        <div className='wrapper'>
            <img src={src} alt={altDesc} className='wrapper'/>
        </div>
    )
}
export default Card