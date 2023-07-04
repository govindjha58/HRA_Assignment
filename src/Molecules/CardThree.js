import React from 'react'
import Button from '../Atoms/Button'
import './CardThree.css'
export default function CardThree() {
    return (

        <div className="card-container" id='askMeCard'>
            <span>
                <h3 className="card-title1">ASK THE EXPERT</h3>
            </span>
            
            <span>
            <p className="card-text1">Bridge Health is the longest-serving and most experienced company in <br></br> The Health Risk Assessment industry</p>
            </span>
            <div className="button-container">
                <Button text="TRY NOW" />
            </div>
        </div>
    )
}
