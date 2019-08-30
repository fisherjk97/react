import React, {useState} from 'react';
import profile from './john-headshot.png';
import mountains from './mountains.jpg'
import './App.css';
import './Switch.css';
import Card from './Card.js';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Image from 'react-bootstrap/Image'
import { AppRegistry, StyleSheet, Text, View, ImageBackground} from 'react-native';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { link } from 'fs';
import Switch from "./Switch.js";
library.add(fab, fas, far);

function App() {

  var links = {
    linkedIn: "https://www.linkedin.com/in/john-k-fisher/",
    github:  "https://github.com/fisherjk97",
    aws: "https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2019-04-06&ci=AWS00767207",
    twitter: "https://twitter.com/jkfisher97"
  }

  function openLink(url) 
  {
      window.open(url, "_blank")
  }

  function sendEmail() 
  {
      window.location = "mailto:fisherjk97@gmail.com";
  }

  const iconsStyle = {
    padding: '20px'
 };

 const bold = {
   fontWeight: 'bold'
};

const center = {
  textAlign: 'center'
};

var toggleOn = true;
const [value, setValue] = useState(false);

  return (
    <div className={(value? "App":"App-dark")}>
  <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
  <Navbar.Brand>John Fisher</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#footer">Contact</Nav.Link>
      {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      */}
    </Nav>
   
  </Navbar.Collapse>
  <Navbar>
  <div className="Switch">
      <Switch
        isOn={value}
        onColor="#EF476F"
        handleToggle={() => setValue(!value)}
      />
    </div>
    </Navbar>
</Navbar>

    
      <header id="header" className="App-header App-header-background">
        <img src={profile} className="App-profile" alt="logo" />
        <br/>
        <div className="App-header-text bg-red">
        <p>
          Hello, I'm John Fisher and I'm a full-stack developer. 
        </p>
        </div>
      </header>
      
      <section id="about" className="container">
   
        <div className='rows'>
          <h1 style={center}>Who am I?</h1>
            {/*<ul>
              <li>I'm a senior level software engineer with over 5 years of professional experience. Most of my work involves designing and developing web applications and services, but I'm also a subject matter expert for internal IT and business partners.</li>
              <li>I currently live in Colorado, but my origin story begins in the Midwest. I grew up in the Twin Cities (Maple Grove, MN), graduated with a degree in Computer Science from University of Wisconsin - Eau Claire, and lived and worked in the Green Bay, WI area for a couple of years before moving out here.</li>
              <li>It shouldn't be too suprising that gaming introduced me to the world of coding. You'll often find me online playing PlayStation or PC games with my friends and family.</li>
            </ul>
            */}
            <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">
                <Card type="fa" iconType="fas" size="3x" icon="laptop-code"  text="I'm a senior level software engineer with over 5 years of professional experience. Most of my work involves designing and developing web applications and services."/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">
                <Card type="fa" iconType="fas" size="3x"icon="user-graduate" text="I graduated with a Bachelor's Degree in Computer Science back in May 2015 from the from University of Wisconsin - Eau Claire (UWEC)."/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">
                <Card type="fa" iconType="fas" size="3x"icon="map-pin" text="I currently live and work remotely in Colorado, but my origin story begins in the Midwest. I grew up in the Twin Cities, but also spent a couple years working in Green Bay, WI."/>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">
                <Card type="fa" iconType="fas" size="3x" icon="gamepad" text="It shouldn't be too suprising that gaming introduced me to the world of coding. You'll often find me online playing a variety of video games with friends and family."/>
              </div>
            
            </div>
          </div>
        </section>
        <section id="skills"  className="container">
        <div className='rows'>
          <h1 style={center}>Technical Skills</h1>
          <h3>Certifications</h3>
            <ul>
              <li><a className="App-link" href="#" onClick={()=> openLink(links.aws)} title="Validate Certification">AWS Certified Developer - Associate</a></li>
            </ul>
            <h3>Programming Languages</h3>
            <ul>
              <li><span style={bold}>Fluent: </span>C#, SQL</li>
              <li><span style={bold}>Proficient: </span>JavaScript, HTML, CSS, Java</li>
              <li><span style={bold}>Beginner: </span>Python, C/C++</li>
            </ul>
            <h3>Frameworks and Tools</h3>
            <ul>
              <li>ASP.NET, React, AngularJS (1.5), Bootstrap</li>
              <li>Visual Studio, VS Code, Azure DevOps, Git, Microsoft SQL Server, SSIS, SSRS, $Universe, Informatica Data Integration Hub (DIH) </li>
            </ul>
        </div>
      </section>
      <footer id="footer" className="App-footer">
        <div className="rows">
        <h1 style={center}>Contact</h1>
          <div className="row" >
            <div style={iconsStyle} >
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="App-link" onClick={()=> openLink(links.linkedIn)} title="View my LinkedIn profile" />
           </div>
           <div style={iconsStyle} >
              <FontAwesomeIcon icon={['fab', 'github']} size="2x" className="App-link" onClick={()=> openLink(links.github)} title="View my GitHub profile"/>
           </div>
           <div style={iconsStyle} >
              <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" className="App-link" onClick={()=> openLink(links.twitter)} title="View my Twitter profile"/>
           </div>
           <div style={iconsStyle} >
              <FontAwesomeIcon icon={['far', 'envelope']} size="2x" className="App-link" onClick={()=> sendEmail()} title="Contact me directly via email"/>
           </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;