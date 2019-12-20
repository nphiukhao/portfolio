import React from 'react'
import githuhLogo from '../Images/githubLogo.png'
import linkedinLogo from '../Images/linkedinLogo.png'
import emailLogo from '../Images/emailLogo-01.png'

export default function Footer() {
    return (
    <footer id="contact" role="document">
        <h2>Contact</h2>
        <div className="contact-links">
            <a href="mailto:nphiukhao@gmail.com"><img src={emailLogo} className="elogo" alt="email logo"/></a>
            <a href="https://github.com/nphiukhao" target="_blank" rel="noopener noreferrer" ><img src={githuhLogo} className="ghlogo" alt="github logo"/></a>
            <a href="https://www.linkedin.com/in/chitchanok-nancy-phiukhao" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} className="linklogo" alt="linkedin logo"/></a>
        </div>
    </footer>
    )
}
