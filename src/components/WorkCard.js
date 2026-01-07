import React from 'react';
import '../styles/WorkCard.css';
import '../index.css';
import Avatar from '@mui/material/Avatar';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

const WorkCard = ({props}) => {
    return (
        <div className='card' id='work-card'>
            <div className='row'>
                <div className='column' id='work-picture'>
                    <div className='company-logo'>
                        {props.companyImage ?
                        <img src = {props.companyImage} alt='work-image' id='work-image'/> :
                        <Avatar alt='work-image' sx={{
                            width: 120,
                            height: 120
                        }}>
                            <CorporateFareIcon sx={{fontSize: 60}} />
                        </Avatar>}
                        
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