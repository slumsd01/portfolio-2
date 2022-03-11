import './App.css';

import About from './components/About';
import Project from './components/Project';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <header>
        <div>
          <h1>Sarah Lumsden</h1>
          <Navigation></Navigation>
        </div>
      </header>

      <main>
        <About></About>
        <Project></Project>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
