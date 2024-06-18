import './App.css';
import styled from "styled-components";
import Projects from './components/projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import HeroSection from './components/HeroSection/HeroSection';
import { BrowserRouter as Router } from 'react-router-dom';
import Experience from './components/experience/Experience';
import Footer from './components/Footer/Footer';
import Contact from './components/contact/Contact';


const Body =styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
      <Router>
        <Navbar/>
        <Body>
          <HeroSection/>
          <Skills/>
          <Experience/>
          <Projects/>
          <Education/>
          <Contact/>
          <Footer/>
        </Body>
      </Router>
  );
}

export default App;
