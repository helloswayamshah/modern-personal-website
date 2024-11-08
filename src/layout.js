import { useRef } from "react";
import Education from "./components/Education";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Topbar from "./components/Topbar";
import Work from "./components/Work";
import ContactMe from "./components/ContactMe";
import "./layout.css"


function Layout() {
    const profileRef = useRef(null);
    const educationRef = useRef(null);
    const projectsRef = useRef(null);
    const workRef = useRef(null);
    const ContactRef = useRef(null);

    const divref = {profile: profileRef, education: educationRef, projects: projectsRef, work: workRef, contact: ContactRef};

    return (
        <div className="main-layout">
            <Topbar props = {divref}/>
            <div className="layout">
                <Profile ref={profileRef}/>
                <Education ref={educationRef}/>
                <Projects ref={projectsRef}/>
                <Work ref={workRef}/>
                <ContactMe ref={ContactRef}/>
                {/* <div className="space"></div> */}
            </div>
        </div>
        )
}

export default Layout;