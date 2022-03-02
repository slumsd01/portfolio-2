import React from "react";
import portraitImg from '../../assets/images/portrait.jpg'

function About() {
    return (
        <section className="about-section">
            <h1 className="section-title">About</h1>
            <div className="portrait-img">
                <img src={portraitImg}/>
            </div>
            
            <p>Sarah currently resides in Michigan. She has worked as a licensed veterinary technician for 10 years, and after working in a variety of hospital settings, she is ready to start a new adventure in the world of coding! Sarah is a creative and hard-working person by nature. She enjoys learning new things and putting those new skills to good use! Sarah is looking forward to bringing her strengths in problem-solving and creativity to the forefront of every project.</p>
        </section>
    )
}

export default About