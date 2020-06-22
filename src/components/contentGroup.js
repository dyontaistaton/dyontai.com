import React from 'react';
import styled from 'styled-components';
import colors from '../styles/constants/colors';
import fonts from '../styles/constants/fonts';
import style from '../styles';
import Markdown from 'markdown-to-jsx';
import {rgba} from 'polished';
import gsap from 'gsap';

const SSubTitle=styled.h6`
  color:${colors.primary};
`;

const STitle=styled.h3`
  font-family:${fonts.bold};
  text-transform:uppercase;
`;

const SContent=styled.div`
  p{
    ${props => props.backdrop? 'padding:0.5rem;':'padding:0.5rem 0;'}
    ${props => props.backdrop? `
      background-color:${rgba(style.constants.colors.black,(typeof props.backdrop=='number'? props.backdrop:0.5))};
      border-radius:20px;
    `:''}
    strong{

    }
  }
`;

const SContentGroup=styled.div`
  cursor: default;
  ${props => !props.alignment? 'text-align:center;':`text-align:${props.alignment};`}
`;

const ContentGroup=(props) => {
  const id=props.fadeIn&&props.subtitle.toLowerCase().replace(/\s/,'');
  React.useEffect(()=>{
    props.fadeIn&&gsap.from(`#${id}${SContentGroup.toString()}`,{y:-50,opacity:0,duration:2})
  })
  return (
    <SContentGroup id={id} alignment={props.alignment} style={props.style}>
      {!props.subtitle? undefined:(<SSubTitle>{props.subtitle}</SSubTitle>)}
      {!props.title? undefined:(<STitle>{props.title}</STitle>)}
      {!props.content? undefined:
        !Array.isArray(props.content)? (<SContent backdrop={props.backdrop}><Markdown options={{forceBlock: true}}>{props.content}</Markdown></SContent>):
          props.content.map(item => {
            return (<SContent backdrop={props.backdrop}><Markdown options={{forceBlock: true}}>{item}</Markdown></SContent>);
          })
      }
    </SContentGroup>
  );
};

export default ContentGroup;
