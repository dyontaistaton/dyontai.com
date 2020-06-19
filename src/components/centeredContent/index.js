import React, { Component } from 'react'
import './index.scss';

class CenteredContent extends Component{
  constructor(props){
    super(props);
    this.title=props.title;
    this.content=props.content;
    this.subtitle=props.subtitle;
  }

  render(){
    return (
      <section className='centeredContent content'>
        <div className='centeredContent-inner'>
          <h6 className='centeredContent-inner-introduction'>
            {this.subtitle}
          </h6>
          <h2 className='centeredContent-inner-title'>
            {this.title}
          </h2>
          <div className='centeredContent-inner-content'>
            <p>
              {this.content}
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default CenteredContent;