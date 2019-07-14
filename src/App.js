import React from 'react';
import linkedIn from './linkedIn-logo.png';
import profile from './john-headshot.png';
import awsdev from './awsdev.jpg';
import github from './github.png';
import githubmark from './github-mark.png';
import './App.css';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-profile" alt="logo" />
        <p>
          Hello, I'm John Fisher and I'm a full-stack developer. 
        </p>
        
      </header>
      <section id="about">
        <div className='rows'>
          <div className='row'>
          <Card header="5+" 
                title="Years of professional experience"
                text="C#, SQL, Java, JavaScript, AngularJS (1.5)"
          ></Card>
          <Card type="image" 
                text="I am an AWS certified developer"
                src={awsdev} 
                link={"https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2019-04-06&ci=AWS00767207"}
                alt={"Validate certification"}>
          </Card>
          <Card type="image" 
                text="Check me out on LinkedIn!"
                src={linkedIn} 
                link={"https://www.linkedin.com/in/john-k-fisher/"}
                alt={"View Profile"}>
          </Card>
          <Card type="image" 
                text="Check out my GitHub portfolio!"
                src={githubmark} 
                link={"https://github.com/fisherjk97"}
                alt={"View GitHub Profile"}>
          </Card>
          
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
