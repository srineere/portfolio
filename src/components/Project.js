import React from 'react';
import '../style/App.css'
import '../style/project.css';
import wobble from '../assets/img/wobble.png';
import rocket from '../assets/img/rocket.png';
import pong from '../assets/img/pong.png';
import nimble from '../assets/img/nimble.png';
import snake from '../assets/img/snake.png';
import digit from '../assets/img/digit.png';
import FadeInSection from '../FadeInSections'

function Project() {

  return  (
    <div className="projects-container" id="project">
    <FadeInSection>
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://github.com/kaushik-rishi/rocket-share" target="_blank" rel="noreferrer"><img src={rocket} className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/kaushik-rishi/rocket-share" target="_blank" rel="noreferrer"><h2>Rocket Share</h2></a>
          <p>A quick and easy way to share files and documents among your peers.</p>
          <p>Used: Node Js, Express, MongoDb</p>
        </div>
        <div className="project">
          <a href="https://github.com/kaushik-rishi/fsd-2-project" target="_blank" rel="noreferrer"><img src={wobble} className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/kaushik-rishi/fsd-2-project" target="_blank" rel="noreferrer"><h2>Wobble</h2></a>
          <p>A social media application for developers to showcase their projects.</p>
          <p>Used: React, Node Js, Express, MongoDb</p>
        </div>
        <div className="project">
          <a href="https://github.com/srineere/Nimble-Notes" target="_blank" rel="noreferrer"><img src={nimble} className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/srineere/Nimble-Notes" target="_blank" rel="noreferrer"><h2>Nimble Notes</h2></a>
          <p>An application where you can save notes and to-do lists and later edit them to your requirements.</p>
          <p>Used: Node Js, MongoDb, Express, CRUD</p>
        </div>
        <div className="project">
          <a href="https://github.com/srineere/pong" target="_blank" rel="noreferrer"><img src={pong} className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/srineere/pong" target="_blank" rel="noreferrer"><h2>Pong </h2></a>
          <p>The classic pong game where you can play with two players or against the pc.</p>
          <p>Used: Love2d, Lua</p>
        </div>
        
        <div className="project">
          <a href="https://github.com/srineere/Snake_game" target="_blank" rel="noreferrer"><img src={snake} className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/srineere/Snake_game" target="_blank" rel="noreferrer"><h2>Snake Game</h2></a>
          <p>The classic snake game developed with the help of tkinter module in python.</p>
          <p>Used: Python, Tkinter</p>
        </div>
        <div className="project">
          <a href="https://github.com/srineere/Digit-Recognition" target="_blank" rel="noreferrer"><img src={digit} className="zoom" alt="thumbnail" width="100%"/></a>
          <a href="https://github.com/srineere/Digit-Recognition" target="_blank" rel="noreferrer"><h2>Digit Recognition Software</h2></a>
          <p>A python application which uses machine learning model to predict the digit drawn on the screen.</p>
          <p>Used: Python, Pygame, ML, Tensorflow, Keras </p>
        </div>
      </div>
    </FadeInSection>
    </div>
  );
}

export default Project;