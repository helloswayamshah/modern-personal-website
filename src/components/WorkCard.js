import React from 'react';
import '../styles/WorkCard.css';
import '../index.css';

const WorkCard = ({props}) => {
    return (
        <div className='card' id='work-card'>
            <div className='row'>
                <div className='column' id='work-picture'>
                    <div className='company-logo'>
                        <img src = {props.companyImage} alt='work-image' id='work-image'/>
                    </div>                
                    <span className='company-name'>{props.companyName}</span>
                </div>
                <div className='column' id='work-details'>
                    <h5 className='workName'>{props.workName}</h5>
                    <h7 className='time'>{props.time}</h7>
                    <span className='location'>{props.location}</span>
                </div>
                <div id='work-description'>
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

export default WorkCard;