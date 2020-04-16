import React from 'react';
import { StyledContactPage } from './ContactPageStyle';

import Email from '../Assets/email.png'
import Github from '../Assets/github3.png'
import Twitter from '../Assets/twitter3.png'
import LinkedIn from '../Assets/linkedin3.png'

function Contact() {
    return(
        <StyledContactPage>
            <h2>Contact</h2>
            <p>Questions, thoughts, just want to say hi?</p>
            <p>Connect with me on any of these platforms;</p>
            <ul>
            <li>
                <div className="img-cont">
                <img src={Email} alt="Twitter bird" />
                </div>
                <a
                href="mailto:brendajoshuah@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                {' '}
                Email
                </a>
            </li>
            <li>
                <div className="img-cont">
                <img src={Twitter} alt="Twitter bird" />
                </div>
                <a
                href="https://twitter.com/BrendaJoshua_"
                target="_blank"
                rel="noopener noreferrer"
                >
                {' '}
                Twitter
                </a>
            </li>
            <li>
                <div className="img-cont">
                <img src={Github} alt="Twitter bird" />
                </div>
                <a
                href="https://github.com/Brendajoshua"
                target="_blank"
                rel="noopener noreferrer"
                >
                {' '}
                Github
                </a>
            </li>
            <li>
                <div className="img-cont">
                <img src={LinkedIn} alt="Twitter bird" />
                </div>
                <a
                href="https://www.linkedin.com/in/brendajoshua/"
                target="_blank"
                rel="noopener noreferrer"
                >
                {' '}
                LinkedIn
                </a>
            </li>
            </ul>
        </StyledContactPage>
    );
}

export default Contact; 