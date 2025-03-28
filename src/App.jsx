import React from 'react';
import Top_bar from './components/Top_bar';
import Navbar from "./components/navbar/Navbar";
import Header from './components/header/Header';
import About from "./components/about/About";
import Amenities from './components/amenities/Amenities';
import ProjectDetails from './components/project_details/ProjectDetails';
import Highlights from './components/highlights/Highlights';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div id='Logo'>
      <Top_bar/>
      <Navbar/>
      <Header/>
      <About/>
      <Amenities/>
      <ProjectDetails/>
      <Highlights/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App