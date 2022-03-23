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
        <div className="align-items-center">
        <nav className="row">
            <a href='#about' className="col-5" onClick={() => showAbout()}>About</a>
            <a href='#portfolio' className="col-5" onClick={() => showPortfolio()}>Portfolio</a>
            <a href='#resume' className="col-5" onClick={() => showResume()}>Resume</a>
            <a href='#contact' className="col-5" onClick={() => showContact()}>Contact</a>
        </nav>

        </div>
    )
}

export default Navigation