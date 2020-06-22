import React from 'react';
import styled from 'styled-components';
import style from '../styles';
import {rgba} from 'polished';

const SResponsiveBox=styled.div `
  height:fit-content;
  ${style.mixins.responsiveValue('padding',[3,'rem'],[0.33,1,1])}
  background-color:${rgba(style.constants.colors.black,0.8)};
  border-radius:10px;
`

const ResponsiveBox = (props) => {
  return (
    <SResponsiveBox {...props}>
      {props.children}
    </SResponsiveBox>
  )
}

export default ResponsiveBox
