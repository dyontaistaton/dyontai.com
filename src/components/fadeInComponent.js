import React from 'react';
import styled from 'styled-components';

const SFInElement=styled.div `
  .fadeInTarget{
    opacity:0;
    ${props=>props.speed?`transition:ease ${props.speed}`:`transition:ease 3s`};
  }
  .shown{
    opacity:1;
  }
`
const elementRef=React.createRef();

class FadeInElement extends React.Component{
  componentDidMount(){
    elementRef.current.classList.add('shown');
  }
  componentWillUnmount(){
    elementRef.current.classList.remove('shown');
  }
  render(){
    return (
      <SFInElement {...this.props}>
        <this.props.element ref={elementRef} className='fadeInTarget'/>
      </SFInElement>
    )
  } 
}

export default FadeInElement;
