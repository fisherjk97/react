import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


library.add(fab, fas, far);

const iconsStyle = {
    padding: '20px',
    textAlign: 'center',
 };

 const bold = {
   fontWeight: 'bold'
};

const center = {
  textAlign: 'center'
};
const undoPadding = {
    padding: 'unset'
  };



class Card extends React.Component {
    constructor(props){
        super(props);
        this.state = 
        {   text: '', 
            inputText: '', 
            mode:'view',
            type:''
        };

      
    }

    
    render() {
            if(this.props.type === 'image'){
                return <div class="card" className="App-card">
                            <div class="card-body">
                                <a
                                className="App-link"
                                href={this.props.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                            <img src={this.props.src} className="App-card-image" alt={this.props.alt}/>
                            </a>
                            <h5 class="card-title">{this.props.title}</h5>
                            <p class="card-text">{this.props.text}</p>
                            </div>
                        </div>
            } else if(this.props.type === "fa"){
                return <div class="card" className="App-card">
                            <div class="card-body" style={undoPadding}>
                             <div style={iconsStyle} >
                                <FontAwesomeIcon icon={[this.props.iconType, this.props.icon]} size={this.props.size}  />
                            </div>
                            <h5 class="card-title">{this.props.title}</h5>
                            <p class="card-text">{this.props.text}</p>
                            </div>
                        </div>
            }
            
            
            else{
                return <div class="card" className="App-card">
                    <div class="card-body">
                        <h1><span className="App-card-header">{this.props.header}</span></h1>
                        <h5 class="card-title">{this.props.title}</h5>
                        <p class="card-text">{this.props.text}</p>
                    </div>
                    </div>;
            }
      
     
    }
  }

  export default Card; 