import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

import { useState } from 'react';


function App() {
  const [aboutSelected, setAboutSelected] = useState(true)
  const [portfolioSelected, setPortfolioSelected] = useState(false)
  const [resumeSelected, setResumeSelected] = useState(false)
  const [contactSelected, setContactSelected] = useState(false)


  return (
    <div>
      <header>
        <div>
          <h1>Sarah Lumsden</h1>
          <Navigation
            aboutSelected={aboutSelected}
            setAboutSelected={setAboutSelected}
            portfolioSelected={portfolioSelected}
            setPortfolioSelected={setPortfolioSelected}
            resumeSelected={resumeSelected}
            setResumeSelected={setResumeSelected}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
          ></Navigation>
        </div>
      </header>

      <main>
        {aboutSelected ? (
            <>
              <About></About>
            </>
          ) : (
            <></>
          )
        }
        
        {portfolioSelected ? (
            <>
              <Portfolio></Portfolio>
            </>
          ) : (
            <></>
          )
        }

        {resumeSelected ? (
            <>
              <Resume></Resume>
            </>
          ) : (
            <></>
          )
        }

        {contactSelected ? (
            <>
              <Contact></Contact>
            </>
          ) : (
            <></>
          )
        }

      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
