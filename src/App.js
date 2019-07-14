import React from 'react';
import linkedIn from './linkedIn-logo.png';
import profile from './john-headshot.png';
import awsdev from './awsdev.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-profile" alt="logo" />
        <p>
          Hello, I'm John Fisher and I'm a full-stack developer. 
        </p>
      </header>
      <section id="about" className="App-about">
        <h3>About</h3>
        <div className='rows'>
          <div className='row'>
            <div class="card" className="App-card">
              <div class="card-body">
                <h1><span>5+</span></h1>
                <p class="card-text">Years of professional experience</p>
              </div>
            </div>
            <div class="card" className="App-card">
              <div class="card-body">
              <a
                className="App-link"
                href="https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2019-04-06&ci=AWS00767207"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={awsdev} className="App-aws" alt="Validate certification"/>
              </a>
              </div>
        </div>
        <div class="card" className="App-card">
            
          <div class="card-body">
          <a
              className="App-link"
              href="https://www.linkedin.com/in/john-k-fisher/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <img src={linkedIn} className="App-linkedIn" alt="View my LinkedIn profile" />
            </a>
          </div>
        </div>
        
          </div>
          <div className='row'></div>
          <div className='row'></div>
      </div>
      
      </section>
      
      <footer className="App-footer">
      
      </footer>
    </div>
  );
}

export default App;
