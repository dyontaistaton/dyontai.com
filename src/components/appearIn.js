import React from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

const SAppearIn=styled.div`
  will-change:transform opacity;
  opacity:0;
  transform:translateY(-30px);
`;

const AppearIn = (props) => {
  React.useEffect(()=>{
    gsap.to(SAppearIn.toString(),{opacity:1,y:0,duration:1,ease:'circ'});
  })
  return (
    <SAppearIn>
      {props.children}
    </SAppearIn>
  )
}

export default AppearIn;
