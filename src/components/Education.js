
import "../styles/Education.css"
import "../index.css"
import { forwardRef, useState } from "react";


function Education(props, ref) {

    const GPA = 3.8;

    return (<div className="section" ref={ref}>
        <h1 className="title">Education</h1>
        <div className="card">
            <div className="row">
            <h5>University of California, Santa Cruz</h5>
            <span className="badge">Bachelor of Science</span>
            </div>
            <div className="row">
                <span className="course"><i>Computer Science</i></span>
                <span className="duration"><b>2022-2026 (expected)</b></span>
            </div>

            <li><b>GPA: </b> {GPA}</li>
            <li>Dean's List 2023-2024</li>
        </div>
    </div>)
}

export default forwardRef(Education);