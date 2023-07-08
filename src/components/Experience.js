import React from 'react';
// import '../style/App.css'
import '../style/Experience.css';
import FadeInSection from '../FadeInSections'

function Experience() {

  return  (
    <div className="experience-container" id="experience">
    <FadeInSection>
      <h1>Experience</h1>
        {/* <div className="line"></div> */}
        <div className="experiences">
          <h2 className="h2e">Tekion Corp</h2>
          <p>I worked here Engineering Intern, where I Developed several RESTful APIs using Django framework and MongoDB as the backend database, ensuring efficient and scalable data storage and retrieval. </p>
          <p>Used: Django, MongoDb, MySql, Pytest</p>
          <h4> Jan'23 - July'23  </h4>
        </div>
        <br/>
        <div className="line"></div>
        <div className="experiences">
          <h2 className="h2e">RMgX Technologies</h2>
          <p>I worked here Web-Development Intern, where I worked on developing many components using Angular and Ngrx. </p>
          <p>Used: Angular Js, NodeJs</p>
          <h4> Feb'22 - Apr'22  </h4>
        </div>
        <br/>
        <div className="line"></div>
        <div className="experiences">
          <h2 className="h2e">Dexter Hut</h2>
          <p>I worked here as a backend-developer intern, where we worked on Stacks blockchain to develop a survey platform. </p>
          <p>Used: React, NodeJs, Stacks Blockchain</p>
          <h4> Sep'21 - Dec'21  </h4>
        </div>
        <br/> 
        <div className="line"></div>
        <div className="experiences">
          <h2 className="h2e">GDSC Core Member</h2>
          <p>I am core member of Web Development team in GDSC IIITS. I have so far taken a session and worked on the GDSC IIITS website.</p>
          <p>Used: React</p>
          <h4> Sep'21 - Jun'22  </h4>
        </div>
        <br/>
        <div className="line"></div>
        <div className="experiences">
          <h2 className="h2e">Member Of IOTA and Gradient Clubs</h2>
          <p>I am a member of both IOTA and Gradient clubs which are development and competetive programming related clubs respectively.</p>
          <h4> Oct'20 - Dec'21  </h4>
        </div>
        <br/>
        <div className="line"></div>
      {/* </div> */}
    </FadeInSection>
    </div>
  );
}

export default Experience;