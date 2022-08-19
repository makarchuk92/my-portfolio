import React from 'react'
import './experience.css'
import ExperienceFrontend from './ExperienceFrontend'
import ExperinceMotion from './ExperinceMotion'


const Experience = () => {
  return (
    <section id='experience'>
        <h2>My Experience</h2>
        <div className="container_experience">
          <ExperienceFrontend />
          <ExperinceMotion />
        </div>
    </section>
  )
}

export default Experience