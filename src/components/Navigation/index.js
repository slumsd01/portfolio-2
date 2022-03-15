import React from "react";

function Navigation(props) {
    const {
        aboutSelected, setAboutSelected,
        portfolioSelected, setPortfolioSelected,
        resumeSelected, setResumeSelected,
        contactSelected, setContactSelected
    } = props

    function showAbout() {
        setAboutSelected(true)
        setPortfolioSelected(false)
        setResumeSelected(false)
        setContactSelected(false)
    }

    function showPortfolio() {
        setAboutSelected(false)
        setPortfolioSelected(true)
        setResumeSelected(false)
        setContactSelected(false)
    }

    function showResume() {
        setAboutSelected(false)
        setPortfolioSelected(false)
        setResumeSelected(true)
        setContactSelected(false)
    }

    function showContact() {
        setAboutSelected(false)
        setPortfolioSelected(false)
        setResumeSelected(false)
        setContactSelected(true)
    }

    return (
        <nav>
            <a href='#about' onClick={() => showAbout()}>About</a>
            <a href='#portfolio' onClick={() => showPortfolio()}>Portfolio</a>
            <a href='#resume' onClick={() => showResume()}>Resume</a>
            <a href='#contact' onClick={() => showContact()}>Contact</a>
        </nav>
    )
}

export default Navigation