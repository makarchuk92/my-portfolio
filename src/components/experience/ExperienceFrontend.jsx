import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const ExperienceFrontend = () => {
  return (
    <div className="experience_frontend">
      <h3>Frontend Developer</h3>
      <div className="experience_content">
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_icon'/>
          <h4>HTML / CSS</h4>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_icon'/>
          <h4>JavaScript</h4>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_icon'/>
          <h4>React / Redux</h4>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_icon'/>
          <h4>TypeScript</h4>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_icon'/>
          <h4>Wordpress</h4>
        </article>
      </div>
    </div>
  )
}

export default ExperienceFrontend