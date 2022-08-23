import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const ExperinceMotion = () => {
    return (
        <div className="experience_motion">
            <h3>Motion Designer</h3>
            <div className="experience_content">
                <article className='experience_details'>
                    <BsPatchCheckFill className='experience_icon'/>
                    <h4>After Effects</h4>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experience_icon'/>
                    <h4>Cinema 4D</h4>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experience_icon'/>
                    <h4>Photoshop</h4>
                </article>
                <article className='experience_details'>
                    <BsPatchCheckFill className='experience_icon'/>
                    <h4>Figma</h4>
                </article>
            </div>
        </div>
    )
}

export default ExperinceMotion