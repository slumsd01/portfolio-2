import React from "react";
import githubIcon from '../../assets/images/github-icon.png'
import linkedInIcon from '../../assets/images/linkedin-icon.png'


function Footer() {
    return(
        <footer>
            <div>
            <img src={githubIcon} className='footerIcon'/>
            <img src={linkedInIcon} className='footerIcon'/>
            </div>
        </footer>

    )
}

export default Footer