import React from 'react'
import Typed from 'react-typed'
import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="header">
        <h5>Hello I'm</h5>
        <h1>Andrei Makarchuk</h1>
        <Typed className='header_typed'
          strings={['Frontend developer', 'and', 'motion-designer']}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header