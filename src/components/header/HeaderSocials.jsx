import React from 'react'
import { BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs'


const HeaderSocials = () => {
    return (
        <div className='header_socials' >
            <a href="https://www.linkedin.com/in/andrei-makarchuk" target='_blank'><BsLinkedin /></a>
            <a href="https://github.com/makarchuk92" target='_blank'><BsGithub /></a>
            <a href="https://t.me/Makarchuk_Andrei" target='_blank'><BsTelegram /></a>
        </div>
    )
}

export default HeaderSocials