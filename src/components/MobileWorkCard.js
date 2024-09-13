import React from 'react';
import '../styles/MobileWorkCard.css';
import '../index.css';

const MobileWorkCard = ({props}) => {
    return (
        <div className='mobile-card' id='mobile-work-card'>
            <div className='mobile-column'>
                <div className='column' id='mobile-work-picture'>
                    <div className='mobile-company-logo'>
                        <img src = {props.companyImage} alt='work-image' id='mobile-work-image'/>
                    </div>                
                    <span className='mobile-company-name'>{props.companyName}</span>
                </div>
                <div className='column' id='mobile-work-details'>
                    <h5 className='mobile-workName'>{props.workName}</h5>
                    <h7 className='mobile-time'>{props.time}</h7>
                    <span className='mobile-location'>{props.location}</span>
                </div>
                <div id='mobile-work-description'>
                    <ul>
                        {props.description.map((desc, index) => (
                            <li>{desc}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileWorkCard;