import React, { Component } from 'react';
import './index.scss';

import BrokenText from '../BrokenText';

class Intro extends Component{
  constructor(props){
    super(props);
    this.img=props.img;
    this.subtitle=props.subtitle;
    this.title=<BrokenText texts={props.title}/>;
    this.content=props.content;
    this.button=props.button;
  }

  makeButton(button){
    if(!button){return;}
    return (
      <div className='intro-inner-button'>
        <a href={button.href} className='intro-inner-button-link'>
          {button.title}
        </a>
      </div>
    )
  }

  render(){
    return (
      <section className='intro content'>
        <div style={{backgroundImage:`url(${this.img})`}} className='intro-background'/>
        <div className='intro-inner'>
          <h6 className='intro-inner-subtitle'>{this.subtitle}</h6>
          <h2 className='intro-inner-title' style={{margin: '0.675rem 0'}}>
            {this.title}
          </h2>
          <p className='intro-inner-content' style={{margin:'0.675rem 0',marginBottom: '1.875rem'}}>
            {this.content}
          </p>
          {this.makeButton(this.button)}
        </div>
      </section>
    )
  }
}

export default Intro