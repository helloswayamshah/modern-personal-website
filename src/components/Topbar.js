import { Navbar } from "react-bootstrap";
import "../styles/Topbar.css"
import { useState } from "react";
import { useMediaQuery} from "react-responsive";
import { RxHamburgerMenu } from "react-icons/rx";
import Offcanvas from 'react-bootstrap/Offcanvas';
import jQuery from "jquery";


function Topbar( { props } ) {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1200px)' });
    const isSmallerScreen = useMediaQuery({ query: '(min-width: 992px)' });
    const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' });
    const isSmallTablet = useMediaQuery({ query: '(min-width: 601px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const isPotrait = useMediaQuery({ query: '(orientation: portrait)' });

    const [isDark, setDark] = useState(true);
    const [isDefault, setDefault] = useState(true);

    if (isDark === true && isDefault === false ) {
       document.documentElement.setAttribute("id", "dark");
    }
    else if (isDark === false && isDefault === false ){
        document.documentElement.setAttribute("id", "light");
    }
    else {
        document.documentElement.setAttribute("id", "default")
    }

    $(document).ready(function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll > 50) {
                document.querySelector(".navbar").classList.add("scrolled");
            }

            else {
                document.querySelector(".navbar").classList.remove("scrolled");
            }

        });
    });
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (<Navbar expand= "lg" className="navbar" style={{
        transition: "all 0.5s ease",
    }}>
        <div className="topbar">
        <div className="logo-div" onClick={() => {const elem = document.querySelector(".topbar");
            elem.scrollIntoView({ behavior: "smooth"});}}>
            <h1 className="logo" >SS</h1>
        </div>
        {(isDesktopOrLaptop || isSmallerScreen || !isPotrait) &&
        <div className="link-section">
            <div className="theme-links">
                <div className="links">
                    <button onClick={() => {props.profile.current.scrollIntoView({ behavior: "smooth"})}}>Home</button>
                    <button onClick={() => {props.education.current.scrollIntoView({ behavior: "smooth"})}}>Education</button>
                    <button onClick={() => {props.projects.current.scrollIntoView({ behavior: "smooth"})}}>Projects</button>
                    <button onClick={() => {props.work.current.scrollIntoView({ behavior: "smooth"})}}>Work Experience</button>
                    <button onClick={() => {props.contact.current.scrollIntoView({ behavior: "smooth"})}}>Contact Me</button>
                </div>
                <div className="theme">
                    <button id="dark-btn" onClick={() => {setDark(true); setDefault(false)}}>Dark</button>
                    <button id="light-btn" onClick={() => {setDark(false); setDefault(false)}}>Light</button>
                </div>
            </div>
        </div>}
        
        {(isMobile || isSmallTablet || isTabletScreen) && isPotrait && <div className="hamburger-menu"></div>}

    </div>
    </Navbar>)
}

export default Topbar;