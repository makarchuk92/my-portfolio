import React from 'react'
import CTA from './CTA'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="header">
        <h5>Hello I'm</h5>
        <h1>Andrei Makarchuk</h1>
        <h5>Frontend developer and motion-designer</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header