import React from 'react'
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';


function App() {
  return (
    <div className="container">
      <>
        <Header />
        <Navigation />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact /> 
        <Footer />
      </>
    </div>
  );
}

export default App;

