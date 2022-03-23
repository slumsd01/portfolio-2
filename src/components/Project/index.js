import React, { useState } from "react";
import githubIcon from '../../assets/images/github-icon.png'

function Project() {
    const [projects] = useState([
        {
            name: "Password Generator",
            type: "JavaScript Challenge",
            img: require(`../../assets/images/projects/password-generator.PNG`),
            github: "https://github.com/slumsd01/password-generator",
            deployed: "https://slumsd01.github.io/password-generator/"
        },
        {
            name: "Code Quiz",
            type: "Web APIs Challenge",
            img: require(`../../assets/images/projects/code-quiz.PNG`),
            github: "https://github.com/slumsd01/code-quiz",
            deployed: "https://slumsd01.github.io/code-quiz/"
        },
        {
            name: "Work Day Scheduler",
            type: "Third-Party API Challenge",
            img: require(`../../assets/images/projects/work-day-scheduler.PNG`),
            github: "https://github.com/slumsd01/work-day-scheduler",
            deployed: "https://slumsd01.github.io/work-day-scheduler/"
        },
        {
            name: "Weather Dashboard",
            type: "Server-Side API Challenge",
            img: require(`../../assets/images/projects/weather-dashboard.PNG`),
            github: "https://github.com/slumsd01/weather-dashboard",
            deployed: "https://slumsd01.github.io/weather-dashboard/"
        },
        {
            name: "Weeb Keeper",
            type: "Front-End Project",
            img: require(`../../assets/images/projects/weeb-keeper.PNG`),
            github: "https://github.com/slumsd01/weeb-keeper",
            deployed: "https://franskitzo.github.io/weeb-keepers/"
        },
        {
            name: "README Generator",
            type: "Node.js Challenge",
            img: require(`../../assets/images/projects/readme-generator.PNG`),
            github: "https://github.com/slumsd01/readme-generator"
        },
        {
            name: "Team Profile Generator",
            type: "OOP Challenge",
            img: require(`../../assets/images/projects/team-profile-generator.PNG`),
            github: "https://github.com/slumsd01/team-profile-generator"
        },
        {
            name: "Note Taker",
            type: "Express.js Challenge",
            img: require(`../../assets/images/projects/note-taker.PNG`),
            github: "https://github.com/slumsd01/note-taker",
            deployed: "https://evening-reef-07780.herokuapp.com/"
        },
        {
            name: "Tech Blog",
            type: "MVC Challenge",
            img: require(`../../assets/images/projects/tech-blog.PNG`),
            github: "https://github.com/slumsd01/tech-blog",
            deployed: "https://lit-lake-14719.herokuapp.com/"
        },
        {
            name: "Sit + Stay",
            type: "Full-Stack Project",
            img: require(`../../assets/images/projects/sit-stay.PNG`),
            github: "https://github.com/slumsd01/fuzzy-octo-doodle",
            deployed: "https://sit-stay-project-2.herokuapp.com/"
        },
        {
            name: "Budget Tracker",
            type: "PWA Challenge",
            img: require(`../../assets/images/projects/budget-tracker.PNG`),
            github: "https://github.com/slumsd01/budget-tracker",
            deployed: "https://evening-refuge-49012.herokuapp.com/"
        }
    ])

    return (
        <section className="projects-section">
            {projects.reverse().map((projects) => (
                <div className="project-container">
                    <img className="project-screenshot" src={projects.img} />
                    <h3><a href={projects.deployed}>{projects.name}</a></h3>
                    <p className="faded-text">{projects.type}</p>
                    <a href={projects.github}><img className="project-icon" src={githubIcon} /></a>                    
                </div>
            ))}
        </section>
    )
}

export default Project