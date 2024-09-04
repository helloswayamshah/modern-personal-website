import React from 'react';
import '../styles/ProjectCard.css';
import { IoLogoGithub } from 'react-icons/io5';
import { IoIosLink } from "react-icons/io";
import '../index.css';

const ProjectCard = ({props}) => {

    const Months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const srtTime = new Date(props.startTime);
    const srtYear = srtTime.getFullYear();
    const srtMonth = srtTime.getMonth();

    const eTime = new Date(props.endTime);
    const endYear = eTime.getFullYear();
    const endMonth = eTime.getMonth();
    console.log(endMonth);

    let time = "";
    console.log(props.projectName);
    console.log(endMonth);

    if (srtMonth === endMonth && srtYear === endYear) {
        time = Months[srtMonth] + " " + srtYear;
    } else if (srtYear === endYear) { 
        time = Months[srtMonth] + " " + srtYear + " - " + Months[endMonth] + " " + endYear;
    } else {
        time = Months[srtMonth] + " " + srtYear + " - " + Months[endMonth] + " " + endYear;
    }

    let description = [];
    if (props.desc !== null) {
        description = props.desc.split("\n");
    }
    return (
        <div className='card' id='project-card'>
            <div className='row'>
                <div id='project-picture'>
                    <img src= {props.imageSrc} alt='project image'></img>
                </div>
                <div className='column' id='project-details'>
                    <h5 className='ProjectName'>{props.projectName}</h5>
                    <h7 className='time'>{time}</h7>
                    <div className='tech'>
                        {props.tech.map((techItem, index) => (
                            <span className='badgeTech'>{techItem}</span>
                        ))}
                    </div>

                    <div className='links'>
                        <a id='github-link' href={props.githublink} target='_blank' rel='noreferrer'><IoLogoGithub id='icon'/></a>

                        {props.websitelink !== "" && props.websitelink !== null &&(
                            <a id='website-link' href={props.websitelink} target='_blank' rel='noreferrer'><IoIosLink id='icon'/></a>
                        )}
                    </div>
                </div>
                <div id='project-description'>
                    {description.map((desc, index) => (
                        <li>{desc}</li>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;