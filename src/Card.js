import React, { Component } from 'react';

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
            }else{
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