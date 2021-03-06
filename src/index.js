import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Experience from './components/Experience'
import Contact from './components/Contact';
import Scroll from './components/Scroll'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Scroll showBelow={250} />
    <App /><hr/>
    <About /><hr/>
    <Skill /><hr/>
    <Experience /><hr/>
    <Project /><hr/>
    <Contact /><hr/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
