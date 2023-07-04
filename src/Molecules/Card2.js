import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../Atoms/Button';
import './Card2.css'
export default function Card2() {
    return (
        <div className="card-container" id="card2-container">

                <div id="card2-content">
                    <img src="Images/hra_image_2.png" alt="hra"></img>
                </div>

                <div id='card-info-content'>
                    <span id="span-text">
                        <h2>User-Centric Health Data Collection:
                            Prioritizing People Wellness</h2>
                        <p>Success in your health and wellness programs begins with gathering the right data. That’s why Wellsource HRAs are built with an intuitive and engaging user experience in mind. </p>
                        <ul>
                            <li>Encourage high completion rates</li>
                            <li>Have an intuitive, straightforward design</li>
                            <li> Are written in simple, easy-to-understand terms</li>
                        </ul>
                    </span>
                    <Button text={"TRY NOW"}></Button>
                </div>
        </div>

    )
}
