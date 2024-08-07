import { useRef } from "react";
import Education from "./components/Education";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Topbar from "./components/Topbar";
import Work from "./components/Work";
import ContactMe from "./components/ContactMe";

function Layout() {
    const profileRef = useRef(null);
    const educationRef = useRef(null);
    const projectsRef = useRef(null);
    const workRef = useRef(null);
    const ContactRef = useRef(null);

    const divref = {profile: profileRef, education: educationRef, projects: profileRef, work: workRef, contact: ContactRef};

    return (
        <>
            <Topbar props = {divref}/>
            <Profile ref={profileRef}/>
            <Education ref={educationRef}/>
            <Projects ref={projectsRef}/>
            <Work ref={workRef}/>
            <ContactMe ref={ContactRef}/>
        </>
        )
}

export default Layout;