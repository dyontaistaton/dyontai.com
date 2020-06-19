import React, { Component } from 'react'

class Icon extends Component{
  constructor(props){
    super(props);
    this.img=props.img;
    this.width=props.width || '100%';
    this.height=props.height || '100%';

  }

  render(){
    return(
      <span>
        <svg>
          
        </svg>
      </span>
    )
  }
}

export default Icon;