import React from 'react';
import styled from 'styled-components';
import {rgba} from 'polished';
import style from '../styles';
import BgImg from './bgImg';
import {object} from 'to-style';
import gsap from 'gsap';

const SPageSection=styled.section `
  ${props=>style.mixins.flex({align:props.align||'center',justify:props.justify||'center',direction:props.direction||'column'})}
  ${props=>props.size?`height:${props.size};`:'height:calc(100vh);'}
  ${props=>props.bgColor?`background-color:${props.bgColor};`:!props.bgImg&&`background-color:${rgba(style.constants.colors.gray,0.1)};`}
  box-sizing:border-box;
  width:100%;
  overflow:hidden;
  position: relative;
  transition:ease 1s;
  ${props=>style.mixins.media(style.mixins.mediaSmall,`
    margin:0;
    border-radius:0px;
    ${props.size?`height:${props.size};`:'height:calc(100vh);'}
  `)}
`

const PageSection = (props) => {
  React.useEffect(()=>{
    props.bgImg&&gsap.to(`${SPageSection} #${props.id+'Bg'}`,{boxShadow:`inset 0 0 100px 10px ${style.constants.colors.black}`,...object(style.mixins.zoomIn(false,1.03)),stagger:1});
  })
  return (
    <SPageSection
      {...props}
      style={{
        ...props.style,
      }}
    >
      <BgImg id={props.id+'Bg'} img={props.bgImg}/>
      {props.children}
    </SPageSection>
  )
}

export default PageSection;
