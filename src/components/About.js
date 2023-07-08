import React from 'react';
import '../style/App.css'
import myProfile from '../assets/img/Me.jpg';
import FadeInSection from '../FadeInSections'
import Chip from '@material-ui/core/Chip';

function About() {

  return  (
    <div className="container" id="about">
      <FadeInSection>
      <br/>
      <div className="about-section">
        <div className="content">
          <h1>About Me</h1>
          <p>Hi! My name is Srineer Kaleri. I am a graduate with Bachelor's Degree in Computer Science at Indian Institute of Information Technology - Sri City (Expected graduation 2023). I believe that learning is a stream and it ought not to stop. Many things excite me in this expanse of technology, and I like to explore and keep my options open all the time. I am up for challenges that take me by surprise. I'm comfortable working on any domain if I find the project is worth it. You can imagine me focused on the laptop screen and typing.</p>
          <p className="flex-chips">Specialties: <br></br>
            <Chip variant="outlined" color="secondary" label="Web Development" />
            {/* <Chip variant="outlined" color="secondary" label="MERN Stack" /> */}
            <Chip variant="outlined" color="secondary" label="Problem Solving" />
            <Chip variant="outlined" color="secondary" label="Algorithms and Data Structures" />
            <Chip variant="outlined" color="secondary" label="Quick Learner" />
            <Chip variant="outlined" color="secondary" label="Time Management" />
          </p>
          <p className='flex-chips'>If I am not coding, you can find me: 
            <br></br>
            <Chip variant="outlined" label="🎮 Gaming" />
            <Chip variant="outlined" label="🏏 Sports" />
            <Chip variant="outlined" label="🍿 Watching Movies" />
            <Chip variant="outlined" label="🎧 Listening to Music" />
            <Chip variant="outlined" label="🍔 Eating" />
            <Chip variant="outlined" label="🏡 Hanging out with friends and family" />
          </p>
        </div>
        <div className="image-wrapper">
          <img src={myProfile} alt="myProfile" />
        </div>
      </div>
      <br/>
      <br/>
      </FadeInSection>
    </div>
  );
}

export default About;