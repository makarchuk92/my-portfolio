import React, { useState } from 'react'
import './navigation.css'
import { AiOutlineBook, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { RiServiceLine, RiMessageLine } from 'react-icons/ri'

const Navigation = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><AiOutlineBook /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><RiMessageLine /></a>
    </nav>
  )
}

export default Navigation