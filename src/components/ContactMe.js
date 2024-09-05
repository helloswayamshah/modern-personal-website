import { forwardRef } from "react"
import "../styles/ContactMe.css"
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io5';
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import "../index.css"
import axios from "axios";

function ContactMe(props, ref) {

    const sendEmail = (name, email, message) => {
        var data = {
            service_id: "Swayam-personal-website",
            template_id: "template_rcwitxm",
            user_id: process.env.REACT_APP_EMAIL_API_KEY,
            template_params: {
                'from_name': name,
                'from_email': email,
                'message': message,
                'to_name': "Swayam Shah"
            }
        };

        axios({method: "post", url: "https://api.emailjs.com/api/v1.0/email/send", data: data, 
            headers: { 'Content-Type': 'application/json' }}).then((response) => { 
                console.log("Email sent successfully!", response); 

        }).catch((error) => { console.log("Error sending email!", error); });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill all the fields!");
        }
        else {
            sendEmail(name, email, message);
        }

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        const container = document.getElementsByClassName("contact-me")[0];
        const element = document.createElement("div");
        element.innerHTML = "Message sent successfully!"
        element.id = "message-sent";
        container.appendChild(element);
        setTimeout(() => {
            container.removeChild(element);
        }, 5000);
    }

    return (<div className="section" ref={ref}>
        <h1 className="title">Contact Me</h1>
        <div className="contact column">
            <div className="contact-me">
                <span className="contact-me-message">Hello there! I believe that every interaction holds the potential to spark creativity, forge new partnerships, and foster a genuine exchange of ideas. 
                    So, whether you're a fellow enthusiast in the same field, an aspiring artist, a tech wizard, or just someone looking to explore new horizons, don't hesitate to reach out! Reach me out through any of the mediums below.</span>
                <form className="form">
                    <label className="form-label" id="name-label">Name</label>
                    <input type="text" placeholder="Name" className="input card" id="name" required></input>
                    <label className="form-label" id="email-label">Email</label>
                    <input type="email" placeholder="Email" className="input card" id="email" required></input>
                    <label className="form-label" id="message-label">Message</label>
                    <textarea placeholder="Message" className="input card" id="message" required></textarea>
                    <button type="submit" className="submit" onClick={handleSubmit}>Send</button>
                </form>
            </div>
            My socials
            <div className="socials row">
                <a href="https://github.com/helloswayamshah" target="_blank"><IoLogoGithub id='icon'/></a>
                <a href="https://www.linkedin.com/in/helloswayamshah/" target="_blank"><IoLogoLinkedin id='icon'/></a>
                <a href="https://www.instagram.com/helloswayamshah/" target="_blank"><IoLogoInstagram id='icon'/></a>
                <a href="https://x.com/helloswayamshah" target="_blank"><FaXTwitter id='icon'/></a>
                <a href="https://discordapp.com/users/603192841770106890" target="_blank"><FaDiscord id='icon'/></a>
            </div>
        </div>
    </div>)
}

export default forwardRef(ContactMe);