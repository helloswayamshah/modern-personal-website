
import "../styles/Education.css"
import "../index.css"
import { forwardRef, useState } from "react";
import { useMediaQuery } from "react-responsive";


function Education(props, ref) {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1200px)' });
    const isSmallerScreen = useMediaQuery({ query: '(min-width: 992px)' });
    const isTabletScreen = useMediaQuery({ query: '(min-width: 768px)' });
    const isSmallTablet = useMediaQuery({ query: '(min-width: 601px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    const isPotrait = useMediaQuery({ query: '(orientation: portrait)' });

    const GPA = 3.8;
    const deansList = 'Dean\'s List 2022-2024';

    return (isDesktopOrLaptop || isSmallerScreen || !isPotrait) ? (
            <div className="section" ref={ref}>
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
            </div>
            ) : ((isMobile || isSmallTablet || isTabletScreen) && isPotrait) ? (
                <div className="mobile-section" ref={ref}>
                    <h1 className="mobile-title">Education</h1>
                    <div className="mobile-card">
                        <div className="row">
                            <h5 className="mobile-university">University of California, Santa Cruz</h5>
                            <span className="mobile-badge">Bachelor of Science</span>
                        </div>
                        <div className="row">
                            <span className="mobile-course"><i>Computer Science</i></span>
                            <span className="mobile-duration"><b>2022-2026 (expected)</b></span>
                        </div>
    
                        <li><b>GPA: </b> {GPA}</li>
                        <li>{deansList}</li>
                    </div>
                </div>
        ) : (
            <div className="mobile-section" ref={ref}>
                <h1 className="mobile-title">Education</h1>
                <div className="mobile-card">
                    <div className="row">
                        <h5 className="mobile-university">University of California, Santa Cruz</h5>
                        <span className="mobile-badge">Bachelor of Science</span>
                    </div>
                    <div className="row">
                        <span className="mobile-course"><i>Computer Science</i></span>
                        <span className="mobile-duration"><b>2022-2026 (expected)</b></span>
                    </div>
    
                    <li><b>GPA: </b> {GPA}</li>
                    <li>{deansList}</li>
                </div>
            </div>)
}

export default forwardRef(Education);
