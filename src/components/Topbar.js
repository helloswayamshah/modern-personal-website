import { Navbar } from "react-bootstrap";
import "../styles/Topbar.css"
import { useState } from "react";




function Topbar( { props } ) {

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

    return (<Navbar  sticky="top">
        <div className="topbar">
        <div className="logo" onClick={() => {props.profile.current.scrollIntoView({ behavior: "smooth"})}}>
            <h1 className="logo" >SS</h1>
        </div>

        <div className="theme-links">
            <div className="links">
                <button onClick={() => {props.profile.current.scrollIntoView({ behavior: "smooth"})}}>Home</button>
                <button onClick={() => {props.education.current.scrollIntoView({ behavior: "smooth"})}}>Education</button>
                <button onClick={() => {props.projects.current.scrollIntoView({ behavior: "smooth"})}}>Projects</button>
                <button onClick={() => {props.work.current.scrollIntoView({ behavior: "smooth"})}}>Work Experience</button>
                <button onClick={() => {props.contact.current.scrollIntoView({ behavior: "smooth"})}}>Contact Me</button>
            </div>
            <div className="theme">
                <button onClick={() => {setDark(true); setDefault(false)}}>Dark</button>
                <button onClick={() => {setDark(false); setDefault(false)}}>Light</button>
            </div>
        </div>
    </div>
    </Navbar>)
}

export default Topbar;