import React from 'react';
import styled from 'styled-components';
import style from '../styles';
import gsap from 'gsap';

const SFooter=styled.ul `
  position:absolute;
  margin: 0 1.875rem 1.875rem 0;
  li{
    padding: 0 1.875rem;
    opacity:0;
    transform:translateY(-30px);
    svg{
      width:1.5rem;
      height:1.5rem;
      transition:.5s ease;
      :hover{
        ${style.mixins.zoomIn()}
        padding:0 0.2rem;
      }
    }
  }
  bottom:0;
  right:0;
  ${style.mixins.flex({align:'center',justify:'flex-end'})}
  ${style.mixins.media(style.mixins.mediaSmall,`
    left:0;
    margin:0;
    margin-bottom:1.875rem;
    ${style.mixins.flex({justify:'center'})}
  `)}
`

const Footer = (props) => {
  React.useEffect(()=>{
    gsap.to(`${SFooter} li`,{y:0,opacity:1,stagger:0.2,duration:1,delay:0.1})
  })
  return (
    <SFooter>
      {props.social&&props.social.map(item=>{
        return (<li><a href={item.href} target="_blank" ><item.icon/></a></li>)
      })}
    </SFooter>
  )
}

export default Footer
