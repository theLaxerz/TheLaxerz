import React from 'react';
import logo from './logo.svg';
import './App.css';

import Sidebar from './Sidebar/sidebar'

const items = [
  { name: 'home', label: 'Home' },
  {
    name: 'upcoming',
    label: 'What is Coming',
    items: [
      { name: 'announcements', label: 'Announcements' },
      { name: 'technology', label: 'Future Tech' },
      { name: 'us', label: 'TheLaxerz Website'}
    ],
  },
  {
    name: 'about',
    label: 'About Me and theLaxerz',
    items: [{ name: 'profile', label: 'My Profile' },
            { name: 'thelaxerz', label: 'theLaxerz'}]
  },
]

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />      
        <div className="AppHeaderText"><b>theLaxerz</b></div>
      </header>
      <div className="sidebar">
        <Sidebar items={items} />
      
      <div className="BodyHeader">
        <div className="AppHeaderTxt">
            <p>The future of Technology is ever-changing, it is our job to stay on top of it.</p>
        </div>
        <div className="AppHeaderTxt">
            <p>theLaxerz is currently <i>Under-Construction</i> but this is a brief introduction to us.</p>
        </div>
        <div className="AppHeaderTxt">
            <p><address>Aaron Lax:<a href="mailto:support@thelaxerz.us">support@thelaxerz.us</a></address></p>
        </div>        
      </div>
      </div>
    </div> 
  );
}

export default App;





