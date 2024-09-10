import "../styles/Profile.css"
import { forwardRef } from "react";
import { IoDownloadOutline } from "react-icons/io5";
import { useMediaQuery} from "react-responsive";

function Profile(props, ref) {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1200px)' });
    const isSmallerScreen = useMediaQuery({ query: '(min-width: 992px)' });
    const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' });
    const isSmallTablet = useMediaQuery({ query: '(min-width: 601px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const isPotrait = useMediaQuery({ query: '(orientation: portrait)' });

    return (
    <div className="Profile-section" ref={ref}>
         {(isDesktopOrLaptop || isSmallerScreen || !isPotrait) ?(
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
        </div>)
        : ((isMobile || isSmallTablet || isTabletScreen) && isPotrait) ? (
        <div className="mobile-profile-card">
            <div className="mobile-imglogo">
                <img className="mobile-myimage" src={"./assets/swayam.png"} alt="Swayam Shah"></img>
            </div>
            <div className="mobile-about-resume">
                <div className="mobile-about">
                    <div className="mobile-name"><h1 className="mobile-nametxt">Swayam</h1></div>
                    <div className="mobile-name"><h1 className="mobile-nametxt">Shah</h1></div>
                    <div className="mobile-information"><p>Hello! I am aspiring Software Engineering student studying Computer Science at University of California, Santa Cruz. I am an aspiring software engineer with a passion for problem-solving and building innovative solutions.</p></div>
                </div>
                <div className="mobile-resume">
                    <a role="button" href={"./assets/Resume.pdf"} target="_blank"><IoDownloadOutline /> Download Resume</a>
                </div>
            </div>
        </div>): (
            <div className="mobile-profile-card">
            <div className="mobile-about-resume">
                <div className="mobile-about">
                    <div className="mobile-name"><h1 className="mobile-nametxt">Swayam</h1></div>
                    <div className="mobile-name"><h1 className="mobile-nametxt">Shah</h1></div>
                    <div className="mobile-information"><p>Hello! I am aspiring Software Engineering student studying Computer Science at University of California, Santa Cruz. I am an aspiring software engineer with a passion for problem-solving and building innovative solutions.</p></div>
                </div>
                <div className="mobile-resume">
                    <a role="button" href={"./assets/Resume.pdf"} target="_blank"><IoDownloadOutline /> Download Resume</a>
                </div>
            </div>
        </div>)}
    </div>)
}

export default forwardRef(Profile);