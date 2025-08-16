import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About'
import ProjectCard from './ProjectCard'
import Project from './Project'
import Home from './Home'
import Skill from './Skills'
import Education from './Education'
import Navbar from './Navbar'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Education/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
