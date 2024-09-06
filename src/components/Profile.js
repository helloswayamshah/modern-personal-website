import "../styles/Profile.css"
import { forwardRef } from "react";
import { IoDownloadOutline } from "react-icons/io5";

function Profile(props, ref) {

    return (<div className="Profile-section" ref={ref}>
        <div className="profile-card">
            <div className="imglogo">
                <img className="myimage" src={"./assets/swayam.png"} alt="Swayam Shah"></img>
            </div>
            <div className="about-resume">
            <div className="about">
                <div className="name"><h1 className="nametxt">Swayam</h1></div>
                <div className="name"><h1 className="nametxt">Shah</h1></div>
                <div className="information"><p>Hello! I am aspiring Software Engineering student studying Computer Science at University of California, Santa Cruz. I am an aspiring software engineer with a passion for problem-solving and building innovative solutions.</p></div>
            </div>
            <div className="resume">
                    <a role="button" href={"./assets/Resume.pdf"} target="_blank"><IoDownloadOutline /> Download Resume</a>
                </div>
                </div>
        </div>
    </div>)
}

export default forwardRef(Profile);