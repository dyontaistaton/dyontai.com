import React from 'react';
import styled from 'styled-components';
import {rgba} from 'polished';
import style from '../styles';

const SDiv=styled.div `
  margin:0.5rem 0 0 0;
  input{
    :hover{
      ::placeholder{
        color:${rgba(style.constants.colors.black,0.8)};
      }
    }
    ::placeholder{
      color:${rgba(style.constants.colors.black,0.7)};
      font-size:0.8rem;
      transition:ease 500ms;
      font-weight:bolder;
      font-family:${style.constants.fonts.regular};
    }
  }
  h6{
    margin-block-end:0.3rem;
  }
`

const NamedInput=React.forwardRef((props,ref)=>{
  return (
    <SDiv>
      <h6>{props.title}</h6>
      <input id={props.id} ref={ref} type={props.type} defaultValue={props.defaultValue} placeholder={props.placeholder}/>
    </SDiv>
  );
});

export default NamedInput;