import React from "react";
import githubIcon from '../../assets/images/github-icon.png'
import linkedinIcon from '../../assets/images/linkedin-icon.png'
import emailIcon from '../../assets/images/email-icon.png'

function Contact() {
    return (
        <section className="contact-section">
            <h1 className="section-title">Contact</h1>
            <div className="contact-container">
                <div className="contact-method">
                <a href="https://github.com/slumsd01" target="_blank">
                    <img src={githubIcon} />
                    <p>GitHub</p>
                </a>
            </div>
            <div className="contact-method">
                <a href="https://www.linkedin.com/in/sarah-lumsden-03a58760/" target="_blank">
                    <img src={linkedinIcon} />
                    <p>LinkedIn</p>
                </a>
            </div>
            <div className="contact-method">
                <a href="mailto:sarah.a.lumsden@gmail.com" target="_blank">
                    <img src={emailIcon} />
                    <p>Email</p>
                </a>
            </div>
            </div>
            

        </section>
    )
}

export default Contact