import React, { useState } from "react";

function Project() {
    const [projects] = useState([
        {
            name: "Code Refactor",
            type: "Git Challenge"
        },
        {
            name: "Password Generator",
            type: "JavaScript Challenge"
        },
        {
            name: "Code Quiz",
            type: "Web APIs Challenge"
        },
        {
            name: "Work Day Scheduler",
            type: "Third-Party API Challenge"
        },
        {
            name: "Weather Dashboard",
            type: "Server-Side API Challenge"
        },
        {
            name: "Weeb Keeper",
            type: "Front-End Project"
        },
        {
            name: "README Generator",
            type: "Node.js Challenge"
        },
        {
            name: "Team Profile Generator",
            type: "OOP Challenge"
        },
        {
            name: "Note Taker",
            type: "Express.js Challenge"
        },
        {
            name: "Employee Tracker",
            type: "SQL Challenge"
        },
        {
            name: "Tech Blog",
            type: "MVC Challenge"
        },
        {
            name: "Sit + Stay",
            type: "Full-Stack Project"
        },
        {
            name: "Regex Tutorial",
            type: "Computer Science Challenge"
        },
        {
            name: "Social Network API",
            type: "NoSQL Challenge"
        },
        {
            name: "Budget Tracker",
            type: "PWA Challenge"
        },
        {
            name: "Book Search Engine",
            type: "MERN Challenge"
        }
    ])

    return (
        <section className="projects-section">
            <h1 className="section-title">Projects</h1>
            <div>
                {projects.reverse().map((projects) => (
                    <p key={projects.name}>{projects.name} <br/>
                    <span key={projects.type}> {projects.type}</span></p>
                ))}
            </div>
        </section>
    )
}

export default Project