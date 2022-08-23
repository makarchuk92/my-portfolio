import React from 'react'
import './about.css'
import ME from '../../assets/D124E576-621A-4E20-9CE8-F47362394B2D.jpeg'

const About = () => {
  return (
    <section id='about'>
      <div className="about_text">
        <h5>Get to know</h5>
        <h3>About me</h3>
      </div>
      <div className="about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="About image" />  
          </div>  
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <h5>Experience</h5>
              <small>2+ year working</small>
            </article>
            <article className="about_card">
              <h5>Experience</h5>
              <small>2+ year working</small>
            </article>
          </div>


          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, id. Suscipit aut laudantium inventore. Dolor cum quos, quidem labore nisi expedita alias corrupti eius ad, perferendis commodi vero eos voluptates.</p>
        </div>
      </div>
    </section>
  )
}

export default About