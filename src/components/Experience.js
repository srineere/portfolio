import React from 'react';
// import '../style/App.css'
import '../style/Experience.css';
import FadeInSection from '../FadeInSections'

function Experience() {

  return  (
    <div className="experience-container" id="experience">
    <FadeInSection>
      <h1>Experience</h1>
        <div className="experiences">
          {/* <a href="https://yujisatojr.itch.io/battlechase" target="_blank" rel="noreferrer"><img src={mock10} className="thumbnail" alt="thumbnail" width="100%"/></a> */}
          <h2 className="h2e">Infotix</h2>
          <p>I am working as a full-stack intern, where we are developing an entire e-commerce website from scratch </p>
          <p>Used: MERN stack</p>
          <h4> Jan'22 - Present </h4>
        </div>
        <br/>
        <div className="line"></div>
        {/* <div className="experiences">
          <h2 className="h2e">Dexter Hut</h2>
          <p>I worked here as a backend-developer intern, where we worked on Stacks blockchain to develop a survey platform. </p>
          <p>Used: React, NodeJs, Stacks Blockchain</p>
          <h4> Sep'21 - Dec'21  </h4>
        </div>
        <br/> 
        <div className="line"></div>*/}
        <div className="experiences">
          <h2 className="h2e">GDSC Core Member</h2>
          <p>I am core member of Web Development team in GDSC IIITS. I have so far taken a session and worked on the GDSC IIITS website.</p>
          <p>Used: React</p>
          <h4> Nov'21 - Present  </h4>
        </div>
        <br/>
        <div className="line"></div>
        <div className="experiences">
          <h2 className="h2e">Member Of IOTA and Gradient Clubs</h2>
          <p>I am a member of both IOTA and Gradient clubs which are development and competetive programming related clubs respectively.</p>
          <h4> Mar'21 - Present  </h4>
        </div>
        <br/>
        <div className="line"></div>
      {/* </div> */}
    </FadeInSection>
    </div>
  );
}

export default Experience;