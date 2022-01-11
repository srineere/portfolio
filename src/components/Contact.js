import React from 'react';
import '../style/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle, faGithub, faLinkedin, faHackerrank, faFacebook, faInstagram, faMailchimp, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faBookmark, faEnvelope, faFile, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faTextHeight } from '@fortawesome/free-solid-svg-icons';

function Contact() {
 
  return  (
    <div className="getintouch" id="contact">
      <div className="section">
        {/* <h2>... got an idea?</h2> */}
        <h1>Let's create awesome things together!</h1>
        <div className="lline"></div>
        <p>Feel free to reach out to me on social media.</p>
        <div className="info">
          <ul>
            <li><a href="https://docs.google.com/document/d/1tRgeb4D_pnI5EAgwdm6mDnijoKk89raPoKJiP3PM_PM/edit?usp=sharing" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFileAlt} size="2x"/></a></li>
            <li><a href="https://www.linkedin.com/in/srineer-kaleri-592456197/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a></li>
            <li><a href="https://github.com/srineere" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"/></a></li>
            <li><a href="https://www.hackerrank.com/srineer_k19" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faHackerrank} size="2x"/></a></li>
            <li><a href="https://discordapp.com/users/Srineer#1209" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord} size="2x"/></a></li>
            <li><a href="mailto:srineerkaleri@gmail.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a></li>
          </ul>
        </div>
      </div>

      <div className="contact credit">
          <p >Portfolio designed & handcrafted by <a href="https://github.com/srineere">Srineer Kaleri</a></p>
      </div>

    </div>
  );
}

export default Contact;