import { forwardRef } from "react"
import "../styles/Work.css"
import WorkCard from "./WorkCard"

function Work(props, ref) {

    return (<div className="section" id='work-section' ref={ref}>
         <h1 className="title">Work Experience</h1>
         <div id="work">
            <WorkCard props={{companyImage: "../assets/WorkXP/niyantras.jpg", companyName: "Niyantras", workName: "Software Engineering Intern", time: "July - September 2023", location: "Vadodara, IN", description: ["Worked on creating an Applicant Tracking System(ATS) Software for preventing Plagiarism and increasing Efficiency of an Online Coding round using Python, Third-Party REST API,and Java.", "This is going to be used for interviewing 100+ candidates a month and would be used by other businesses as an enterprise solution.", "Learned to make functional specifications and documentation documents for a newproject/feature."]}}/>
            <WorkCard props={{companyImage: "../assets/WorkXP/autoslug.jpg", companyName: "Autoslug", workName: "Club Member", time: "September 2022 - June 2023", location: "Santa Cruz, CA", description: ["Contributed to ideating for projects ASL translation, a hand gestures to natural language translator.", "Made use of different APIs such as MediaPipeAPI to recognize handgestures."]}}/>
            <WorkCard props={{companyImage: "../assets/WorkXP/girlUP.png", companyName: "GIRL UP VADODARA", workName: "Volunteer", time: "March - December 2021", location: "Vadodara, IN", description: ["Created posts and graphics to spread awareness about women empowerment in India using designing software like Canva and Figma."]}}/> 
         </div>
    </div>)
}

export default forwardRef(Work);