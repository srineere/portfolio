import React from 'react';
import '../style/skill.css';
import '@fortawesome/free-regular-svg-icons'
import FadeInSection from '../FadeInSections'
import Chip from '@material-ui/core/Chip';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress color="secondary" variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function Skill () {

  return  (
    <div className="scontainer" id="skills">
      <FadeInSection>
        <h1>Skills</h1>
        <div className="skills-container">

          <div className="skills-grid">
            
            <div className="skill">
            <p className="flex-chips"><h4>Programming Languages:</h4>
              Python  <LinearProgressWithLabel value={90}   />
              C++  <LinearProgressWithLabel value={80}   />
              C <LinearProgressWithLabel value={80}   />
              Java <LinearProgressWithLabel value={70}   />
              JavaScript <LinearProgressWithLabel value={80}   />
              Bash  <LinearProgressWithLabel value={50} />
              Lua <LinearProgressWithLabel value={40} />
              Algorithms and DSA<LinearProgressWithLabel value={75}   />
              </p>
            </div>
            <div className="skill">
              <p className="flex-chips"><h4>Web Dev:</h4>
              JavaScript <LinearProgressWithLabel value={80}   />
              HTML & CSS <LinearProgressWithLabel value={90}   />
              Node Js <LinearProgressWithLabel value={80}   />
              React <LinearProgressWithLabel value={70} />
              Angular <LinearProgressWithLabel value={70}   />
              MongoDB <LinearProgressWithLabel value={75}   />
              MySQL <LinearProgressWithLabel value={60} />
              Express <LinearProgressWithLabel value={85}   />
              </p>
            </div>
            
            <div className="skill">
            <p className="flex-chips"><h4>Tools:</h4>
            Git  <LinearProgressWithLabel value={80}   />
            Linux  <LinearProgressWithLabel value={70}   />
            Postman <LinearProgressWithLabel value={80}   />
            Jupyter Notebook <LinearProgressWithLabel value={65} />
            Netlogo <LinearProgressWithLabel value={50}   />
            Matlab <LinearProgressWithLabel value={45}   />
            R Studio <LinearProgressWithLabel value={40}   />
            Android Studio  <LinearProgressWithLabel value={50} />
              </p>
            </div>

          </div>
        </div>
      </FadeInSection>
    </div>
    // <div className="container" id="skills">
    //   <FadeInSection>
    //     <div className="skills-container">
    //       <h1>Skills</h1>
    //       <div className="skills-grid">

    //         <div className="skill">
    //           <FontAwesomeIcon icon={faReact} size="4x"/>
    //           <h3>Full-Stack Web Development</h3>
    //           <p>Previously, I worked as a frontend/backend web developer and built 20+ RESTful web applications. Power user of Ruby on Rails framework and the JavaScript libraries such as React.js, Vue.js, Node.js, Express.js and Handlebars.js.</p>
    //           <p className="flex-chips">Tech stack: 
    //             <Chip variant="outlined" label="JavaScript" />
    //             <Chip variant="outlined" label="HTML" />
    //             <Chip variant="outlined" label="CSS" />
    //             <Chip variant="outlined" label="SASS" />
    //             <Chip variant="outlined" label="LESS" />
    //             <Chip variant="outlined" label="PHP" />
    //             <Chip variant="outlined" label="PostgreSQL" />
    //             <Chip variant="outlined" label="MySQL" />
    //             <Chip variant="outlined" label="MongoDB" />
    //           </p>
    //         </div>

    //         <div className="skill">
    //           <FontAwesomeIcon icon={faAppStore} size="4x"/>
    //           <h3>Software Development</h3>
    //           <p>I enjoy being part of a team to design, build, and deploy native iOS & Android mobile applications. My experience in mobile app development ranges from creating a real-estate property management app to a exciting 2D shooting games.</p>
    //           <p className="flex-chips">Tech stack: 
    //             <Chip variant="outlined" label="Java" />
    //             <Chip variant="outlined" label="C" />
    //             <Chip variant="outlined" label="C++" />
    //             <Chip variant="outlined" label="C#" />
    //             <Chip variant="outlined" label="Swift" />
    //             <Chip variant="outlined" label="Git" />
    //             <Chip variant="outlined" label="Docker" />
    //             <Chip variant="outlined" label="AWS" />
    //           </p>
    //         </div>

    //         <div className="skill">
    //           <FontAwesomeIcon icon={faPython} size="4x"/>
    //           <h3>Data Analytics</h3>
    //           <p>I understand the world through cleaning, transforming, visualizing, and storytelling data. I have experience in analyzing corporate data for a real estate company and higher education industry for better decision making.</p>
    //           <p className="flex-chips">Tech stack: 
    //             <Chip variant="outlined" label="SQL" />
    //             <Chip variant="outlined" label="Python" />
    //             <Chip variant="outlined" label="NumPy" />
    //             <Chip variant="outlined" label="Pandas" />
    //             <Chip variant="outlined" label="Matplotlib" />
    //             <Chip variant="outlined" label="Seaborn" />
    //             <Chip variant="outlined" label="Sklearn" />
    //             <Chip variant="outlined" label="R" />
    //             <Chip variant="outlined" label="Snowflake" />
    //             <Chip variant="outlined" label="Domo" />
    //             <Chip variant="outlined" label="Tableau" />
    //             <Chip variant="outlined" label="Tensorflow" />
    //           </p>
    //         </div>

    //       </div>
    //     </div>
    //   </FadeInSection>
    // </div>
    

    
    
  );
}

export default Skill;