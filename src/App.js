import React from 'react'
import Particles from 'react-particles-js';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Portfolio from './components/portfolio/Portfolio';



function App() {
  return (
      <div className="container">
        <>
          <Particles
            params={{
              particles: {
                color: {
                  value: "#3c9fd8"
                },
                line_linked: {
                  color: {
                    value: "#fff"
                  }
                },
                number: {
                  value: 40
                },
                size: {
                  value: 5
                }
              }
            }}
          />
          <div className='content'>
            <Header />
            <Navigation />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
          </div>
        </>
      </div>
    
  );
}

export default App;

