import React from 'react';
import '../styles/MobileProjectCard.css';
import { IoLogoGithub } from 'react-icons/io5';
import { IoIosLink } from "react-icons/io";
import '../index.css';

const MobileProjectCard = ({props}) => {

    const Months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const srtTime = new Date(props.startTime);
    const srtYear = srtTime.getFullYear();
    const srtMonth = srtTime.getMonth();

    const eTime = new Date(props.endTime);
    const endYear = eTime.getFullYear();
    const endMonth = eTime.getMonth();

    let time = "";

    if (srtMonth === endMonth && srtYear === endYear) {
        time = Months[srtMonth] + " " + srtYear;
    } else if (srtYear === endYear) { 
        time = Months[srtMonth] + " " + srtYear + " - " + Months[endMonth] + " " + endYear;
    } else {
        time = Months[srtMonth] + " " + srtYear + " - " + Months[endMonth] + " " + endYear;
    }

    let description = [];
    if (props.desc !== null) {
        description = props.desc.split(".");
    }
    return (
        <div className='mobile-card' id='mobile-project-card'>
            <div className='column'>
                <div id='mobile-project-picture'>
                {(props.imageSrc !== null && props.imageSrc !== "") ? 
                (<img src= {props.imageSrc} alt='project demo'></img>) : <></> }
                </div>
                <div className='column' id='mobile-project-details'>
                    <h5 className='mobile-ProjectName'>{props.projectName}</h5>
                    <h7 className='mobile-time'>{time}</h7>
                    <div className='mobile-tech'>
                        {props.tech.map((techItem, index) => (
                            <span className='mobile-badgeTech'>{techItem}</span>
                        ))}
                    </div>

                    <div className='row mobile-links'>
                        <a id='github-link' href={props.githublink} target='_blank' rel='noreferrer'><IoLogoGithub id='icon'/></a>

                        {props.websitelink !== "" && props.websitelink !== null &&(
                            <a id='website-link' href={props.websitelink} target='_blank' rel='noreferrer'><IoIosLink id='icon'/></a>
                        )}
                    </div>
                </div>
                <div id='mobile-project-description'>
                    <ul>
                        {description.map((desc, index) => (
                            <li>{desc}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MobileProjectCard;