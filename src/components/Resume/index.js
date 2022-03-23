import React from "react";
import downloadIcon from '../../assets/images/download-icon.png'

function Resume() {
    return (
        <section className="resume-section">
            <h1 className="section-title">Resume</h1>
            <a href="https://docs.google.com/document/d/1i7n8Hyz6GEW-YaY-0jOUJZor02oWm4catztag8wrs6Y/edit?usp=sharing" target="_blank" className="resume-download">
                <img src={downloadIcon} className="download-icon" />
                <p>Download full resume.</p>
            </a>
            <h3>Front-end Proficiences:</h3>
            <ul className="resume-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Responsive design</li>
            </ul>
            <h3>Back-end Proficiences:</h3>
            <ul className="resume-list">
                <li>APIs</li>
                <li>Express.js</li>
                <li>GraphQL</li>
                <li>Node.js</li>
                <li>MySQL & Sequelize</li>
                <li>MongoDB & Mongoose</li>
                <li>REST</li>
            </ul>
        </section>
    )
}

export default Resume