import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card3.css'
export default function Card3() {
  return (
    <div className="card-container" id='card3-container'>

      <div className="card-title">
        <p>Target the right people with the right health<br></br> intervention at the right time</p>
      </div>

      <div className="card-Components">
        <span id="card3-content">
          <img src="Images/hra_image_1.png" alt="hra"></img>
        </span>

        <span>
          <h4>Collect the data you need to:</h4>
          <ul id="text">
            <li>Take a proactive approach in identifying and predicting risk factors for chronic conditions.</li>
            <li>Pinpoint and prioritize the programs and interventions that will best meet participants where they are in their health journey.</li>
            <li>Allocate next-step wellness program resources where they will have the most effect—while reducing health care costs and helping people live healthier lives.</li>
          </ul>
        </span>
      </div>


    </div>

  )
}
